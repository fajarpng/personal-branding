import Image from "next/image"
import { Reveal } from "@/components/animations/reveal"
import { Theme2Frame } from "@/components/theme2/theme2-frame"
import type { Story } from "@/data/theme2"

// large = wide feature, otherwise a smaller editorial entry; flip mirrors the columns
export function Theme2Story({ story, large, flip }: { story: Story; large: boolean; flip: boolean }) {
  const { number, category, title, description, tech, url, image, accent } = story

  return (
    <Reveal className="py-12">
      <div data-rule className="mb-10 h-px bg-t2-ink" />
      <article className="grid items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <figure className={`${large ? "lg:col-span-8" : "lg:col-span-7"} ${flip ? "lg:order-last" : ""}`}>
          <div className="relative">
            <span aria-hidden className={`absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 ${accent}`} />
            <Theme2Frame className={large ? "aspect-[16/10]" : "aspect-[16/10] lg:aspect-[3/2]"}>
              <Image
                src={image}
                alt={`${title} screenshot`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                unoptimized={image.endsWith(".svg")}
                className="object-cover object-top"
              />
            </Theme2Frame>
          </div>
          <figcaption className="mt-2 font-t2-mono text-[10px] uppercase tracking-[0.2em] text-t2-muted">
            Fig. {number} — {title}
          </figcaption>
        </figure>

        <div className={`${large ? "lg:col-span-4" : "lg:col-span-5"} lg:pb-8`}>
          <p data-reveal className="font-t2-mono text-xs uppercase tracking-[0.2em]">
            <span className="text-t2-magenta">{number}</span> — {category}
          </p>
          <h3
            data-reveal
            className={`mt-3 font-t2-serif font-black leading-[0.95] tracking-tight ${large ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"}`}
          >
            {title}
          </h3>
          <p data-reveal className="mt-4 max-w-md leading-relaxed">
            {description}
          </p>
          <ul
            data-reveal
            aria-label="Technologies"
            className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t border-t2-rule pt-3 font-t2-mono text-[11px] uppercase tracking-wider text-t2-muted"
          >
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a
            data-reveal
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 border-b-2 border-t2-cyan font-t2-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-t2-cyan"
          >
            Read the story <span aria-hidden>→</span>
            <span className="sr-only">: {title}</span>
          </a>
        </div>
      </article>
    </Reveal>
  )
}
