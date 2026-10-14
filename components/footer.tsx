import { site } from "@/data/site"

export async function Footer() {
  "use cache"
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-ink bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row">
        <p className="font-mono text-lg font-bold">{site.name}</p>
        <p className="text-center">
          © {year} . fajarpng
        </p>
        <a href="#top" className="inline-flex min-h-11 items-center font-bold underline decoration-wavy decoration-pink decoration-2 underline-offset-8 hover:text-violet">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
