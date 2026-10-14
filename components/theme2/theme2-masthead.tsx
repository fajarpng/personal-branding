import { edition, theme2Nav } from "@/data/theme2"

export function Theme2Masthead() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 font-t2-mono text-[10px] uppercase tracking-[0.18em] text-t2-muted sm:text-xs">
          <p>
            {edition.volume} · {edition.issue} · {edition.year}
          </p>
          <p className="flex items-center gap-2 text-t2-ink">
            <span aria-hidden className="size-2 bg-t2-cyan" />
            AVAILABLE FOR SELECT PROJECTS
          </p>
        </div>

        <div className="mt-3 border-y-4 border-double border-t2-ink py-3 text-center">
          <p className="font-t2-serif text-[clamp(2.1rem,8.5vw,6.5rem)] font-black uppercase leading-none tracking-tight">
            {edition.title}
          </p>
        </div>
        <p className="border-b border-t2-ink py-2 text-center font-t2-mono text-[10px] uppercase tracking-[0.3em] sm:text-xs">
          {edition.tagline}
        </p>
      </header>

      <nav aria-label="Main" className="sticky top-0 z-50 mt-0 border-b border-t2-ink bg-t2-paper/95">
        <ul className="mx-auto flex max-w-7xl items-center justify-between px-5 font-t2-mono text-[11px] uppercase tracking-[0.18em] sm:justify-center sm:gap-16 sm:text-xs">
          {theme2Nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center border-b-2 border-transparent hover:border-t2-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
