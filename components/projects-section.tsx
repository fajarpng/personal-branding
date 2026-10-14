import { HorizontalScroll } from "@/components/animations/horizontal-scroll"
import { Reveal } from "@/components/animations/reveal"
import { Underline } from "@/components/doodles"
import { ProjectCard } from "@/components/project-card"
import { Words } from "@/components/words"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-muted py-20">
      <Reveal className="mx-auto mb-12 max-w-7xl px-5">
        <h2 id="work-title" className="relative inline-block font-display text-5xl font-black tracking-tight sm:text-7xl">
          <Words text="SELECTED WORK" />
          <Underline className="absolute -bottom-2 left-0 h-4 w-full text-violet" />
        </h2>
        <p className="mt-6 max-w-md text-lg">A few things I&apos;ve built, broken, fixed, and shipped.</p>
      </Reveal>

      <HorizontalScroll>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} total={projects.length} flip={i % 2 === 1} />
        ))}
      </HorizontalScroll>
    </section>
  )
}
