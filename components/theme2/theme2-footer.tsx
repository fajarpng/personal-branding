import { edition } from "@/data/theme2"

export async function Theme2Footer() {
  "use cache"
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-double border-t2-ink">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 font-t2-mono text-[11px] uppercase tracking-[0.16em] sm:grid-cols-3">
        <p className="font-bold">{edition.title}</p>
        <p className="text-t2-muted sm:text-center">
          © {year} · {edition.volume} · {edition.issue} · Set in Playfair, Inter &amp; JetBrains Mono
        </p>
        <a href="#top" className="inline-flex min-h-11 items-center sm:justify-end hover:text-t2-magenta">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
