"use client"

import { useEffect, useRef } from "react"
import { Color, Polyline, Renderer, Transform, Vec3 } from "ogl"

type RibbonsProps = {
  /** Hex colors; defaults to the theme tokens ink / violet / pink */
  colors?: string[]
  baseSpring?: number
  baseFriction?: number
  baseThickness?: number
  offsetFactor?: number
  maxAge?: number
  pointCount?: number
  speedMultiplier?: number
  enableFade?: boolean
  enableShaderEffect?: boolean
  effectAmplitude?: number
  backgroundColor?: [number, number, number, number]
  className?: string
}

const TOKENS = ["--color-ink", "--color-violet", "--color-pink"]

const vertex = /* glsl */ `
  precision highp float;
  attribute vec3 position;
  attribute vec3 next;
  attribute vec3 prev;
  attribute vec2 uv;
  attribute float side;
  uniform vec2 uResolution;
  uniform float uDPR;
  uniform float uThickness;
  uniform float uTime;
  uniform float uEnableShaderEffect;
  uniform float uEffectAmplitude;
  varying vec2 vUV;
  vec4 getPosition() {
    vec4 current = vec4(position, 1.0);
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 nextScreen = next.xy * aspect;
    vec2 prevScreen = prev.xy * aspect;
    vec2 tangent = normalize(nextScreen - prevScreen);
    vec2 normal = vec2(-tangent.y, tangent.x);
    normal /= aspect;
    normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
    float dist = length(nextScreen - prevScreen);
    normal *= smoothstep(0.0, 0.02, dist);
    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
    float pixelWidth = current.w * pixelWidthRatio;
    normal *= pixelWidth * uThickness;
    current.xy -= normal * side;
    if (uEnableShaderEffect > 0.5) {
      current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
    }
    return current;
  }
  void main() {
    vUV = uv;
    gl_Position = getPosition();
  }
`

const fragment = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uEnableFade;
  varying vec2 vUV;
  void main() {
    float fadeFactor = 1.0;
    if (uEnableFade > 0.5) fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
    gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
  }
`

/** Fills its (relatively positioned) parent; pointer-events none so the content above stays interactive. */
export function Ribbons({
  colors,
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
  className = "",
}: RibbonsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // Arrays are compared by value so inline props don't tear down WebGL on every render
  const colorKey = colors?.join()
  const bgKey = backgroundColor.join()

  useEffect(() => {
    const container = containerRef.current
    // No hover on touch devices, and the effect is pure motion
    if (!container || !matchMedia("(pointer: fine)").matches) return
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const root = getComputedStyle(document.documentElement)
    const palette = colorKey?.split(",") ?? TOKENS.map((t) => root.getPropertyValue(t).trim())
    const bg = bgKey.split(",").map(Number)

    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio || 1, 2), alpha: true })
    const gl = renderer.gl
    gl.clearColor(bg[0], bg[1], bg[2], bg[3])
    Object.assign(gl.canvas.style, { position: "absolute", inset: "0", width: "100%", height: "100%" })
    container.appendChild(gl.canvas)

    const scene = new Transform()
    const center = (palette.length - 1) / 2
    const lines = palette.map((color, index) => {
      const points = Array.from({ length: pointCount }, () => new Vec3())
      const polyline = new Polyline(gl, {
        points,
        vertex,
        fragment,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: baseThickness + (Math.random() - 0.5) * 3 },
          uOpacity: { value: 1 },
          uTime: { value: 0 },
          uEnableShaderEffect: { value: enableShaderEffect ? 1 : 0 },
          uEffectAmplitude: { value: effectAmplitude },
          uEnableFade: { value: enableFade ? 1 : 0 },
        },
      })
      polyline.mesh.setParent(scene)
      return {
        points,
        polyline,
        spring: baseSpring + (Math.random() - 0.5) * 0.05,
        friction: baseFriction + (Math.random() - 0.5) * 0.05,
        velocity: new Vec3(),
        offset: new Vec3((index - center) * offsetFactor + (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.1, 0),
      }
    })

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      lines.forEach((l) => l.polyline.resize())
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(container)

    // Listen on window (the canvas itself ignores pointer events) and map into container space
    const mouse = new Vec3()
    const onMove = (e: PointerEvent) => {
      const r = container.getBoundingClientRect()
      mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * -2 + 1, 0)
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    const tmp = new Vec3()
    let frameId = 0
    let last = performance.now()
    const update = (now: number) => {
      frameId = requestAnimationFrame(update)
      const dt = now - last
      last = now
      for (const line of lines) {
        tmp.copy(mouse).add(line.offset).sub(line.points[0]).multiply(line.spring)
        line.velocity.add(tmp).multiply(line.friction)
        line.points[0].add(line.velocity)
        for (let i = 1; i < line.points.length; i++) {
          const alpha =
            maxAge > 0 && isFinite(maxAge)
              ? Math.min(1, (dt * speedMultiplier) / (maxAge / (line.points.length - 1)))
              : 0.9
          line.points[i].lerp(line.points[i - 1], alpha)
        }
        line.polyline.mesh.program.uniforms.uTime.value = now * 0.001
        line.polyline.updateGeometry()
      }
      renderer.render({ scene })
    }

    // Only animate while the hero is on screen
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frameId)
      if (entry.isIntersecting) {
        last = performance.now()
        frameId = requestAnimationFrame(update)
      }
    })
    io.observe(container)

    return () => {
      cancelAnimationFrame(frameId)
      io.disconnect()
      observer.disconnect()
      window.removeEventListener("pointermove", onMove)
      container.removeChild(gl.canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [colorKey, bgKey, baseSpring, baseFriction, baseThickness, offsetFactor, maxAge, pointCount, speedMultiplier, enableFade, enableShaderEffect, effectAmplitude])

  return <div ref={containerRef} aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} />
}
