import { Parallax } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"
import { Words } from "@/components/words"
import { site } from "@/data/site"

const rows = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "github.com/fajarpng", href: site.github },
  { label: "LinkedIn", value: "linkedin.com/in/tri-fajar-pangestu", href: site.linkedin },
]

export function Theme2Contact() {
  return (
    <Parallax className="relative overflow-hidden">
      <section id="contact" aria-labelledby="t2-contact-title" className="mx-auto max-w-7xl px-5 pb-16 pt-28">
        <Reveal>
          <p data-reveal className="font-t2-mono text-[11px] uppercase tracking-[0.2em] text-t2-muted">
            <span className="text-t2-magenta">●</span> The last edition
          </p>
          <div data-speed="0.25">
            <h2 id="t2-contact-title" className="mt-6 font-t2-serif text-[clamp(3rem,11vw,9rem)] font-black leading-[0.92] tracking-tight">
              <span className="block"><Words text="HAVE A" /> <span className="italic font-medium"><Words text="STORY" /></span></span>
              <span className="block"><Words text="TO BUILD?" /></span>
            </h2>
          </div>
          <p data-reveal className="mt-8 max-w-lg font-t2-serif text-2xl italic leading-snug">
            Let&apos;s make something useful, thoughtful, and worth sharing.
          </p>

          <a
            data-reveal
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex min-h-14 items-center gap-3 bg-t2-ink px-8 font-t2-mono text-sm font-bold uppercase tracking-[0.2em] text-t2-paper transition-colors duration-300 hover:bg-t2-cyan hover:text-t2-ink"
          >
            Start a conversation <span aria-hidden>→</span>
          </a>

          <ul className="mt-16 border-t border-t2-ink">
            {rows.map((r) => (
              <li key={r.label} data-reveal className="border-b border-t2-rule">
                <a
                  href={r.href}
                  {...(r.label !== "Email" && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 py-3 hover:bg-t2-cyan/20"
                >
                  <span className="font-t2-mono text-[11px] uppercase tracking-[0.2em] text-t2-muted">{r.label}</span>
                  <span className="font-t2-serif text-xl font-bold sm:text-2xl">{r.value} <span aria-hidden>↗</span></span>
                </a>
              </li>
            ))}
          </ul>

          <div data-rule className="mt-16 h-1 border-y border-t2-ink" />
          <p className="mt-6 flex items-center justify-center gap-3 font-t2-mono text-xs uppercase tracking-[0.4em] text-t2-muted">
            <span aria-hidden className="size-2 bg-t2-cyan" /> — 30 — <span aria-hidden className="size-2 bg-t2-magenta" />
          </p>
        </Reveal>
      </section>
    </Parallax>
  )
}
