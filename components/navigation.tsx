"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Arrow, Button } from "@/components/button"
import { navLinks, site } from "@/data/site"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-cream/95">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-lg font-bold tracking-tight" onClick={close}>
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-semibold underline-offset-8 hover:underline hover:decoration-wavy hover:decoration-pink hover:decoration-2">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href="#contact" variant="sun" className="hidden !min-h-11 !py-1.5 md:inline-flex">
            Hire Me <Arrow />
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="grid size-11 place-items-center rounded-lg border-2 border-ink bg-sun shadow-hard-sm md:hidden"
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="flex flex-col gap-2 border-t-2 border-ink bg-cream p-5 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close} className="block rounded-lg px-3 py-3 font-display text-2xl font-extrabold hover:bg-muted">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href="#contact" variant="sun" className="w-full" >
              Hire Me <Arrow />
            </Button>
          </li>
        </ul>
      )}
    </header>
  )
}
