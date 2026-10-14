import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
