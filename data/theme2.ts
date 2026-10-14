// Theme 2 content: placeholder stories, not verified public case studies
export const edition = {
  title: "THE DIGITAL EDITION",
  tagline: "INDEPENDENT DEVELOPER JOURNAL",
  volume: "VOL. 01",
  issue: "ISSUE 06",
  year: 2026,
  author: "Tri Fajar Pangestu",
}

export const theme2Nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export type StoryId = "cloudfit" | "radio-buddy" | "invite-studio" | "ai-food-journal"

export type Story = {
  id: StoryId
  image: string // screenshot in /public/projects
  accent: string // neon offset block behind the screenshot
  number: string
  category: string
  title: string
  description: string
  tech: string[]
  url: string
}

export const stories: Story[] = [
  {
    id: "cloudfit",
    image: "/projects/cloudfit.svg",
    accent: "bg-t2-cyan",
    number: "01",
    category: "MOBILE / WELLNESS",
    title: "CloudFit",
    description:
      "A wellness application combining health insights, nutrition tracking, and AI-powered coaching.",
    tech: ["React Native", "TypeScript", "REST APIs"],
    url: "https://example.com/cloudfit",
  },
  {
    id: "radio-buddy",
    image: "/projects/radio-buddy.svg",
    accent: "bg-t2-magenta",
    number: "02",
    category: "WEB / INTERACTIVE",
    title: "Radio Buddy",
    description:
      "A playful radio discovery experience with accessible controls and a distinctive interface.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    url: "https://example.com/radio-buddy",
  },
  {
    id: "invite-studio",
    image: "/projects/invite-studio.svg",
    accent: "bg-t2-acid",
    number: "03",
    category: "WEB / CREATIVE TOOLS",
    title: "Invite Studio",
    description: "A customizable digital invitation platform for creating event pages.",
    tech: ["Next.js", "Prisma", "MySQL"],
    url: "https://example.com/invite-studio",
  },
  {
    id: "ai-food-journal",
    image: "/projects/ai-food-journal.svg",
    accent: "bg-t2-cyan",
    number: "04",
    category: "AI / NUTRITION",
    title: "AI Food Journal",
    description:
      "An AI-assisted nutrition experience featuring barcode scanning, meal-photo analysis, and conversational interactions.",
    tech: ["React Native", "API Integration", "AI"],
    url: "https://example.com/ai-food-journal",
  },
]
