"use client"

import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, MOTION_OK, ScrollTrigger } from "@/lib/animations"

// Desktop: pins the section and maps vertical scroll to horizontal travel, then releases.
// Below lg (or reduced motion): plain list / native horizontal scroll, no pinning.
export function HorizontalScroll({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(`(min-width: 1024px) and ${MOTION_OK}`, () => {
        const section = root.current!
        const strip = track.current!
        const distance = () => strip.scrollWidth - section.clientWidth
        section.dataset.pinned = ""
        gsap.to(strip, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        // Re-measure when the strip's size changes (cards added, images/fonts loaded), else travel stops short
        const ro = new ResizeObserver(() => ScrollTrigger.refresh())
        ro.observe(strip)
        return () => {
          ro.disconnect()
          delete section.dataset.pinned
        }
      })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <div
      ref={root}
      className="lg:h-screen lg:overflow-x-auto lg:pt-16 lg:data-[pinned]:overflow-hidden"
    >
      <div
        ref={track}
        className="flex flex-col gap-12 px-5 pb-10 lg:h-full lg:w-max lg:flex-row lg:items-center lg:gap-14 lg:px-[8vw] lg:pb-0"
      >
        {children}
      </div>
    </div>
  )
}
