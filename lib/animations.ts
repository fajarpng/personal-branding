import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

// Every scroll animation is skipped under this query so content stays static
export const MOTION_OK = "(prefers-reduced-motion: no-preference)"
