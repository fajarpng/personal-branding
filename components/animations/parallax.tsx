"use client"

import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, MOTION_OK } from "@/lib/animations"

type Props = {
  children: ReactNode
  className?: string
  // hero mode: layers drift up from the top, plus load-in and pointer movement
  hero?: boolean
}

// Layers: [data-speed="0.5"] drifts with scroll, optional [data-rotate="20"] spins with it.
// Hero extras: [data-word] / [data-enter] load-in, [data-pointer="20"] follows the cursor.
export function Parallax({ children, className, hero }: Props) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const el = root.current
        gsap.utils.toArray<HTMLElement>("[data-speed]", el).forEach((layer) => {
          const speed = Number(layer.dataset.speed)
          const rotate = Number(layer.dataset.rotate ?? 0)
          gsap.fromTo(
            layer,
            { y: hero ? 0 : speed * 60, rotate: 0 },
            {
              y: speed * (hero ? -140 : -60),
              rotate,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: hero ? "top top" : "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          )
        })

        if (!hero || !el) return
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } })
        intro
          .from("[data-word]", { yPercent: 110, duration: 0.9, stagger: 0.1 })
          .from("[data-enter]", { opacity: 0, y: 24, duration: 0.7, stagger: 0.1 }, "-=0.5")
          .from("[data-pop]", { scale: 0, rotate: -30, duration: 0.7, stagger: 0.08, ease: "back.out(1.6)" }, 0.2)

        // no-op when a hero has no rules (Theme 1), so GSAP doesn't warn about missing targets
        if (el.querySelector("[data-rule]"))
          intro.from("[data-rule]", { scaleX: 0, transformOrigin: "left center", duration: 1.1, ease: "power3.inOut" }, 0.6)

        const movers = gsap.utils.toArray<HTMLElement>("[data-pointer]", el).map((m) => ({
          x: gsap.quickTo(m, "x", { duration: 0.8, ease: "power3" }),
          y: gsap.quickTo(m, "y", { duration: 0.8, ease: "power3" }),
          k: Number(m.dataset.pointer),
        }))
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5
          const ny = e.clientY / window.innerHeight - 0.5
          movers.forEach((m) => {
            m.x(nx * m.k)
            m.y(ny * m.k)
          })
        }
        el.addEventListener("pointermove", onMove)
        return () => el.removeEventListener("pointermove", onMove)
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  )
}
