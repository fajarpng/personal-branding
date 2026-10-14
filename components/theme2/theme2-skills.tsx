import { Reveal } from "@/components/animations/reveal"
import { Words } from "@/components/words"
import { skillGroups } from "@/data/skills"

export function Theme2Skills() {
  return (
    <section id="stack" aria-labelledby="t2-stack-title" className="mx-auto max-w-7xl px-5 py-24">
      <Reveal>
        <h2 id="t2-stack-title" className="font-t2-serif text-[clamp(2.8rem,9vw,7rem)] font-black leading-[0.9] tracking-tight">
          <Words text="THE TECHNICAL" /> <span className="font-medium italic"><Words text="INDEX" /></span>
        </h2>
        <div data-rule className="mt-8 h-px bg-t2-ink" />

        <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group, g) => (
            <div key={group.title} className="md:border-l md:border-t2-rule md:pl-6 md:first:border-l-0 md:first:pl-0">
              <h3 data-reveal className="font-t2-mono text-[11px] font-bold uppercase tracking-[0.2em]">
                <span className="text-t2-magenta">§ {String.fromCharCode(65 + g)}</span> — {group.title}
              </h3>
              <ol className="mt-4">
                {group.skills.map((skill, i) => (
                  <li key={skill} data-reveal className="border-t border-t2-rule last:border-b">
                    <span className="group flex min-h-11 items-baseline justify-between gap-4 py-2 hover:bg-t2-cyan/20">
                      <span className="font-t2-serif text-xl font-bold">{skill}</span>
                      <span className="font-t2-mono text-[10px] text-t2-muted">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
