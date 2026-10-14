import { Mail } from "lucide-react"
import { Parallax } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"
import { Arrow, Button } from "@/components/button"
import { Squiggle, Star, Triangle } from "@/components/doodles"
import { Words } from "@/components/words"
import { site } from "@/data/site"

const link =
  "inline-flex min-h-11 items-center gap-2 font-display text-lg font-bold underline decoration-wavy decoration-cream/50 decoration-2 underline-offset-8 hover:text-sun hover:decoration-sun"

export function ContactSection() {
  return (
    <Parallax className="relative overflow-hidden bg-ink text-cream">
      <section id="contact" aria-labelledby="contact-title" className="relative py-28 sm:py-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div data-speed="0.6" data-rotate="60" className="absolute left-[6%] top-[12%]">
            <Star className="size-16 text-pink sm:size-24" />
          </div>
          <div data-speed="1" className="absolute right-[8%] top-[18%] hidden sm:block">
            <div className="size-28 rounded-full border-4 border-cream bg-violet" />
          </div>
          <div data-speed="0.8" data-rotate="-40" className="absolute bottom-[10%] left-[10%]">
            <Triangle className="size-16 text-mint" />
          </div>
          <div data-speed="0.4" className="absolute bottom-[14%] right-[6%] hidden sm:block">
            <Squiggle className="h-10 w-40 text-sun" />
          </div>
        </div>

        <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
          <h2 id="contact-title" className="font-display text-[clamp(3rem,10vw,7.5rem)] font-black leading-[0.95] tracking-tight">
            <Words text="HAVE A GOOD" /> <span className="text-sun"><Words text="IDEA?" /></span>
          </h2>
          <p data-reveal className="mt-6 text-xl">Let&apos;s turn it into something people love to use.</p>
          <div data-reveal className="mt-10">
            <Button href={`mailto:${site.email}`} variant="sun" className="!px-10 !py-4 text-xl">
              Hire Me <Arrow />
            </Button>
          </div>
          <ul data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className={link}>
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </Reveal>
      </section>
    </Parallax>
  )
}
