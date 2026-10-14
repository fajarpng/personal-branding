import { Reveal } from "@/components/animations/reveal"
import { Words } from "@/components/words"
import { edition } from "@/data/theme2"

export function Theme2About() {
  return (
    <section id="about" aria-labelledby="t2-about-title" className="border-t border-t2-ink bg-t2-paper-hi">
      <Reveal className="mx-auto max-w-7xl px-5 py-24">
        <h2 id="t2-about-title" className="font-t2-serif text-[clamp(2.8rem,9vw,7rem)] font-black leading-[0.9] tracking-tight">
          <Words text="BEHIND" /> <span className="font-medium italic"><Words text="THE CODE" /></span>
        </h2>
        <div data-rule className="mt-8 h-px bg-t2-ink" />
        <p data-reveal className="mt-3 font-t2-mono text-[11px] uppercase tracking-[0.2em] text-t2-muted">
          By {edition.author} · Software Developer · 6+ years in print
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-[17px] leading-[1.75] lg:col-span-8 lg:columns-2 lg:gap-10 lg:space-y-0 lg:[&>p]:mb-5">
            <p data-reveal className="t2-dropcap">
              I&apos;m a software developer with more than six years of experience building web and mobile products. My
              work sits where interface meets infrastructure: taking a rough idea and turning it into something people
              can actually use.
            </p>
            <p data-reveal>
              On the frontend I work in React, Next.js and React Native, with a close eye on the details that make an
              interface feel considered: spacing, motion, and the states that only appear when something goes wrong.
              On the other side of the screen I connect those interfaces to APIs and keep the data honest.
            </p>
            <p data-reveal>
              Most of what I ship is production software, with real users, real constraints and a long maintenance
              tail. I like code that is easy to read six months later, and interfaces that feel simple even when the
              problem is not.
            </p>
          </div>

          <figure data-reveal aria-hidden className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden border border-t2-ink bg-t2-paper">
              <svg viewBox="0 0 240 300" className="absolute inset-0 size-full">
                <defs>
                  <pattern id="t2-dots" width="7" height="7" patternUnits="userSpaceOnUse">
                    <circle cx="3.5" cy="3.5" r="1.7" fill="#191a19" />
                  </pattern>
                </defs>
                <g fill="none" stroke="#ff3cac" strokeWidth="1.5" transform="translate(5 -3)">
                  <circle cx="120" cy="115" r="52" />
                </g>
                <circle cx="120" cy="115" r="52" fill="url(#t2-dots)" />
                <path d="M30 300c0-70 40-100 90-100s90 30 90 100Z" fill="url(#t2-dots)" />
                <rect x="170" y="30" width="46" height="46" fill="#00e5ff" opacity=".85" />
              </svg>
            </div>
            <figcaption className="mt-2 font-t2-mono text-[10px] uppercase tracking-[0.2em] text-t2-muted">
              Fig. 02 — The author, abstractly
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  )
}
