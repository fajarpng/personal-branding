import type { ReactNode } from "react"

const variants = {
  primary: "bg-violet text-white",
  secondary: "bg-cream text-ink",
  sun: "bg-sun text-ink",
}

type Props = {
  href: string
  variant?: keyof typeof variants
  external?: boolean
  className?: string
  children: ReactNode
}

export function Button({ href, variant = "primary", external, className = "", children }: Props) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-display text-base font-extrabold tracking-wide shadow-hard transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

// the ↗ nudges on hover of the parent .group
export function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      ↗
    </span>
  )
}
