"use client"

import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, MOTION_OK } from "@/lib/animations"

// Clipped frame: the screenshot drifts and scales slightly while the frame and captions stay put.
export function Theme2Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  const frame = useRef<HTMLDivElement>(null)
  const art = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          art.current,
          { yPercent: -3, scale: 1.06 },
          {
            yPercent: 3,
            scale: 1.1,
            ease: "none",
            scrollTrigger: { trigger: frame.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: frame },
  )

  return (
    <div ref={frame} className={`relative overflow-hidden border border-t2-ink bg-t2-paper-hi ${className}`}>
      <div
        ref={art}
        className="absolute inset-0"
      >
        {children}
      </div>
    </div>
  )
}
