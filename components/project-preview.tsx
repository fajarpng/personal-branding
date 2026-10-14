import Image from "next/image"

// Browser-window frame around a real screenshot (public/projects)
export function ProjectPreview({ title, image, url, panel }: { title: string; image: string; url: string; panel: string }) {
  return (
    <div className="flex h-full min-h-72 flex-col overflow-hidden rounded-xl border-4 border-ink bg-white">
      <div className="flex items-center gap-1.5 border-b-4 border-ink bg-white px-3 py-2">
        <span aria-hidden className="size-2.5 rounded-full border-2 border-ink" />
        <span aria-hidden className="size-2.5 rounded-full border-2 border-ink" />
        <span aria-hidden className="size-2.5 rounded-full border-2 border-ink" />
        <span aria-hidden className="ml-2 truncate font-mono text-[10px]">{url.replace("https://", "")}</span>
      </div>
      <div className={`relative flex-1 ${panel}`}>
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          unoptimized={image.endsWith(".svg")}
          className="object-cover object-top"
        />
      </div>
    </div>
  )
}
