import { Reveal } from "@/components/animations/reveal"
import { Theme2Story } from "@/components/theme2/theme2-story"
import { Words } from "@/components/words"
import { stories } from "@/data/theme2"

export function Theme2Projects() {
  return (
    <section id="work" aria-labelledby="t2-work-title" className="mx-auto max-w-7xl px-5 py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            id="t2-work-title"
            className="font-t2-serif text-[clamp(2.8rem,9vw,7rem)] font-black leading-[0.9] tracking-tight"
          >
            <Words text="THE" /> <span className="italic font-medium"><Words text="ARCHIVE" /></span>
          </h2>
          <p data-reveal className="max-w-xs font-t2-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-t2-muted">
            Featured stories · {String(stories.length).padStart(2, "0")} entries · placeholder content
          </p>
        </div>
      </Reveal>

      <div className="mt-10">
        {stories.map((s, i) => (
          <Theme2Story key={s.id} story={s} large={i % 2 === 0} flip={i === 2} />
        ))}
      </div>
    </section>
  )
}
