"use client"

import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, MOTION_OK } from "@/lib/animations"

// Scroll-triggered reveals inside one container:
//   [data-word]   masked word slide-up (see <Words>)
//   [data-draw]   SVG underline drawing itself (path needs pathLength="1")
//   [data-rule]   horizontal rule growing from the left
//   [data-reveal] fade/translate/scale, staggered per batch
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const start = "top 85%"
        const words = gsap.utils.toArray<HTMLElement>("[data-word]", root.current)
        if (words.length)
          gsap.from(words, {
            yPercent: 110,
            duration: 0.8,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: words[0], start },
          })
        gsap.utils.toArray<SVGPathElement>("[data-draw]", root.current).forEach((path) =>
          gsap.from(path, {
            strokeDashoffset: 1,
            duration: 0.9,
            delay: 0.4,
            ease: "power2.inOut",
            scrollTrigger: { trigger: path, start: "top 90%" },
          }),
        )
        gsap.utils.toArray<HTMLElement>("[data-rule]", root.current).forEach((rule) =>
          gsap.from(rule, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: { trigger: rule, start: "top 92%" },
          }),
        )
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", root.current)
        if (items.length)
          gsap.from(items, {
            opacity: 0,
            y: 36,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: items[0], start },
          })
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
