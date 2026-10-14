import { Parallax } from "@/components/animations/parallax"
import { Words } from "@/components/words"
import { edition } from "@/data/theme2"

export function Theme2Hero() {
  return (
    <Parallax hero className="relative overflow-hidden">
      <div aria-hidden data-speed="0.15" className="t2-grid absolute -inset-y-10 inset-x-0" />

      <section
        aria-labelledby="t2-hero-title"
        className="relative mx-auto grid max-w-7xl gap-x-10 gap-y-16 px-5 pb-16 pt-10 lg:grid-cols-12"
      >
        <div className="lg:col-span-7 lg:border-r lg:border-t2-rule lg:pr-10">
          <p data-enter className="font-t2-mono text-[11px] uppercase tracking-[0.2em] text-t2-muted">
            Front page <span className="text-t2-magenta">/</span> Technology <span className="text-t2-magenta">/</span> Web &amp; Mobile
          </p>

          <h1
            id="t2-hero-title"
            className="mt-6 font-t2-serif text-[clamp(3.4rem,13vw,10.5rem)] font-black leading-[0.9] tracking-tight"
          >
            <span className="block">
              <Words text="CODE." />
            </span>
            <span className="block font-medium italic">
              <Words text="CRAFT." />
            </span>
            <span className="relative block">
              <Words text="FUTURE." />
              <span data-rule aria-hidden className="absolute -bottom-1 left-0 h-2 w-3/5 bg-t2-cyan" />
            </span>
          </h1>

          <p data-enter className="mt-12 max-w-xl font-t2-serif text-2xl italic leading-snug sm:text-3xl">
            Building digital experiences for a world that never stands still.
          </p>

          <div data-enter className="mt-8 grid max-w-xl gap-6 border-y border-t2-ink py-5 sm:grid-cols-[auto_1fr]">
            <div className="font-t2-mono text-[11px] uppercase leading-relaxed tracking-[0.16em]">
              <p className="font-bold">By {edition.author}</p>
              <p className="text-t2-muted">Software Developer</p>
              <p className="text-t2-muted">Filed: Web / Mobile</p>
            </div>
            <p className="text-[15px] leading-relaxed sm:border-l sm:border-t2-rule sm:pl-6">
              I&apos;m a software developer focused on web and mobile experiences, thoughtful interfaces, and practical
              technology that solves real problems.
            </p>
          </div>

          <div data-enter className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center gap-3 bg-t2-ink px-6 font-t2-mono text-xs font-bold uppercase tracking-[0.2em] text-t2-paper transition-colors duration-300 hover:bg-t2-cyan hover:text-t2-ink"
            >
              Explore the stories <span aria-hidden>→</span>
            </a>
            <p className="flex items-center gap-3 font-t2-mono text-[10px] uppercase tracking-[0.25em] text-t2-muted">
              Scroll
              <span aria-hidden className="t2-scroll-line block h-10 w-px bg-t2-rule" />
            </p>
          </div>
        </div>

        <TechnicalReport />
      </section>
    </Parallax>
  )
}

// Decorative front-page "cover": a printed technical report plus a terminal panel
function TechnicalReport() {
  return (
    <div aria-hidden className="relative lg:col-span-5">
      <figure data-speed="0.5" className="relative">
        <div className="border border-t2-ink bg-t2-paper-hi p-4">
          <div className="flex justify-between border-b border-t2-ink pb-2 font-t2-mono text-[10px] uppercase tracking-[0.2em]">
            <span>Technical Report</span>
            <span>No. 06</span>
          </div>

          <div className="relative mt-4 aspect-[4/3] overflow-hidden border border-t2-ink bg-t2-paper">
            <div className="t2-halftone absolute inset-0" />
            <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" fill="none">
              <g stroke="#191a19" strokeWidth="1">
                <circle cx="260" cy="150" r="40" />
                <circle cx="260" cy="150" r="80" />
                <circle cx="260" cy="150" r="120" />
                <path d="M0 150H400M260 0V300" />
              </g>
              <rect x="40" y="60" width="120" height="90" fill="#00e5ff" opacity=".85" />
              <path d="M40 210h200M40 226h140M40 242h170" stroke="#191a19" strokeWidth="3" />
              <circle cx="340" cy="40" r="14" stroke="#ff3cac" strokeWidth="2" />
              <path d="M340 18v44M318 40h44" stroke="#ff3cac" strokeWidth="2" />
            </svg>
          </div>

          <p className="mt-4 font-t2-serif text-3xl font-black leading-none">
            The State <span className="font-medium italic">of the</span> Stack
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[0, 1].map((c) => (
              <div key={c} className="space-y-1.5">
                {[100, 92, 96, 70].map((w, i) => (
                  <div key={i} className="h-1 bg-t2-rule" style={{ width: `${w}%` }} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <figcaption className="mt-2 font-t2-mono text-[10px] uppercase tracking-[0.2em] text-t2-muted">
          Fig. 01 — A study in layers
        </figcaption>
      </figure>

      <div data-speed="1" className="absolute -bottom-10 -left-4 hidden w-64 sm:block lg:-left-10">
        <div data-enter className="border border-t2-cyan bg-t2-dark p-4 font-t2-mono text-[11px] leading-relaxed text-t2-paper">
          <p className="text-t2-cyan">$ whoami</p>
          <p>developer / web + mobile</p>
          <p className="mt-2 text-t2-cyan">$ status</p>
          <p>
            <span className="text-t2-acid">●</span> open to select projects
          </p>
        </div>
      </div>

      <div data-speed="1.2" className="absolute -top-6 right-0 hidden sm:block">
        <p data-enter className="font-t2-mono text-[10px] uppercase tracking-[0.2em] text-t2-magenta">
          <span data-pop className="mr-1 inline-block">↙</span> see the archive, p.04
        </p>
      </div>
    </div>
  )
}
