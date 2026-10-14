import { Reveal } from "@/components/animations/reveal"
import { Underline } from "@/components/doodles"
import { Words } from "@/components/words"
import { skillGroups } from "@/data/skills"

const colors = ["bg-violet text-white", "bg-pink", "bg-sun", "bg-mint"]
const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"]

export function SkillsSection() {
  let n = 0
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative overflow-hidden bg-muted py-24">
      <Reveal className="mx-auto max-w-7xl px-5">
        <h2 id="skills-title" className="relative inline-block font-display text-5xl font-black tracking-tight sm:text-7xl">
          <Words text="MY DIGITAL TOOLBOX" />
        </h2>
        <Underline className="mt-2 h-8 w-40 text-violet" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border-4 border-ink bg-cream p-6 shadow-hard">
              <h3 className="mb-5 font-mono text-sm font-bold tracking-widest">{`// ${group.title.toUpperCase()}`}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const i = n++
                  return (
                    // GSAP animates the li; hover styling lives on the inner span so CSS transitions don't fight it
                    <li key={skill} data-reveal>
                      <span
                        className={`block rounded-xl border-2 border-ink px-4 py-2 font-display text-lg font-extrabold shadow-hard-sm transition hover:-translate-y-1 hover:rotate-0 ${colors[i % 4]} ${tilts[i % 4]}`}
                      >
                        {skill}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
