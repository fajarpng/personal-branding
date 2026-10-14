import { Theme2About } from "@/components/theme2/theme2-about"
import { Theme2Contact } from "@/components/theme2/theme2-contact"
import { Theme2Footer } from "@/components/theme2/theme2-footer"
import { Theme2Hero } from "@/components/theme2/theme2-hero"
import { Theme2Interlude } from "@/components/theme2/theme2-interlude"
import { Theme2Masthead } from "@/components/theme2/theme2-masthead"
import { Theme2Projects } from "@/components/theme2/theme2-projects"
import { Theme2Skills } from "@/components/theme2/theme2-skills"

export default function Theme2Page() {
  return (
    <>
      <Theme2Masthead />
      <main id="main">
        <Theme2Hero />
        <Theme2Projects />
        <Theme2About />
        <Theme2Skills />
        <Theme2Interlude />
        <Theme2Contact />
      </main>
      <Theme2Footer />
    </>
  )
}
