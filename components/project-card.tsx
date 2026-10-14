import { Note, ScribbleArrow } from "@/components/doodles"
import { ProjectPreview } from "@/components/project-preview"
import type { Project } from "@/data/projects"

export function ProjectCard({ project, total, flip }: { project: Project; total: number; flip?: boolean }) {
  const { number, title, category, description, tech, url, note, panel, badge } = project

  return (
    <article
      className="group relative w-full rounded-3xl rounded-tr-[3rem] border-4 border-ink bg-cream p-4 shadow-hard transition duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-hard-lg sm:p-5 lg:h-[min(66vh,540px)] lg:w-[min(74vw,940px)] lg:shrink-0"
    >
      <div className={`grid h-full gap-5 lg:grid-cols-[1.15fr_1fr] ${flip ? "lg:[&>:first-child]:order-2" : ""}`}>
        <ProjectPreview title={title} image={project.image} url={url} panel={panel} />

        <div className="flex flex-col justify-center gap-4 lg:p-2">
          <p className="font-mono text-sm font-bold">
            {number} <span className="text-ink/40">/ {String(total).padStart(2, "0")}</span>
          </p>
          <div>
            <span className={`inline-block rounded-full border-2 border-ink px-3 py-0.5 font-mono text-xs font-bold ${badge}`}>
              {category}
            </span>
            <h3 className="mt-2 font-display text-4xl font-black leading-none sm:text-5xl">{title}</h3>
          </div>
          <p className="leading-relaxed">{description}</p>
          <ul aria-label="Technologies" className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="rounded-md border-2 border-ink bg-muted px-2 py-0.5 font-mono text-xs font-semibold">
                {t}
              </li>
            ))}
          </ul>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex min-h-11 w-fit items-center gap-1 font-display text-lg font-extrabold underline decoration-wavy decoration-ink decoration-2 underline-offset-8 hover:text-violet hover:decoration-violet"
          >
            View Project <span className="sr-only">: {title}</span>
            <span aria-hidden className="inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
          </a>
        </div>
      </div>

      <span aria-hidden className="absolute -top-16 right-10 hidden flex-col items-center text-violet sm:flex">
        <Note className="-rotate-3 whitespace-nowrap text-4xl">{note}</Note>
        <ScribbleArrow className="-mt-1 ml-16 h-14 w-16" />
      </span>
    </article>
  )
}
