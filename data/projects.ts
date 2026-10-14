// Projects and screenshots come from the CV (images are low-res; replace with fresh captures when available)
export type ProjectId = "interskill" | "interskill-mobile" | "nusafmstream" | "chapp" | "mylibrary" | "mylibrary-mobile"

export type Project = {
  id: ProjectId
  image: string // screenshot in /public/projects
  number: string
  title: string
  category: string
  description: string
  tech: string[]
  url: string
  note: string
  // full class strings so Tailwind can see them
  panel: string
  badge: string
}

export const projects: Project[] = [
  {
    id: "nusafmstream",
    image: "/projects/nusafmstream.png",
    number: "01",
    title: "NusaFmStream - Radio Buddy AI",
    category: "Web Application",
    description:
      "A radio streaming app with Radio Buddy AI, powered by Gemini, for smart station discovery and easy favorites. Seamless playback, fast search and a Neo-Brutalist design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Zustand", "React Query", "Gemini API"],
    url: "https://nusafmstream.vercel.app",
    note: "a little side project",
    panel: "bg-pink",
    badge: "bg-pink",
  },
  {
    id: "interskill",
    image: "/projects/interskill.jpg",
    number: "02",
    title: "Interskill",
    category: "Web Platform",
    description:
      "Indonesia's first online teaching-learning marketplace with live student–teacher interaction and hundreds of classes, from digital skills and languages to finance and cooking.",
    tech: ["Next.js", "Responsive UI", "Dual Language", "SEO"],
    url: "https://www.interskill.id",
    note: "made with care",
    panel: "bg-mint",
    badge: "bg-mint",
  },
  {
    id: "interskill-mobile",
    image: "/projects/interskill-mobile.jpg",
    number: "02`",
    title: "Interskill Mobile",
    category: "Mobile App",
    description:
      "The mobile companion to the Interskill marketplace, bringing live classes and learning to students and teachers on Android.",
    tech: ["React Native"],
    url: "https://play.google.com/store/apps/details?id=id.co.edulive.mob",
    note: "in your pocket",
    panel: "bg-sun",
    badge: "bg-sun",
  },
  {
    id: "chapp",
    image: "/projects/chapp.png",
    number: "04",
    title: "Chapp",
    category: "Mobile App",
    description: "A mobile chat app that lets users talk and see each other's location in realtime.",
    tech: ["React Native", "Firebase"],
    url: "https://bit.ly/get-chapp",
    note: "say hi",
    panel: "bg-violet",
    badge: "bg-violet text-white",
  },
  {
    id: "mylibrary",
    image: "/projects/mylibrary.jpg",
    number: "05",
    title: "MyLibrary",
    category: "Web Application",
    description: "An online library where users can browse, search and borrow books.",
    tech: ["React", "Express", "MySQL"],
    url: "https://mylibrary-fajarpng.netlify.app",
    note: "still experimenting",
    panel: "bg-mint",
    badge: "bg-mint",
  },
  {
    id: "mylibrary-mobile",
    image: "/projects/mylibrary-mobile.png",
    number: "06",
    title: "MyLibrary Mobile",
    category: "Mobile App",
    description: "A library app for viewing and searching books and handling loan transactions.",
    tech: ["React Native", "Express", "MySQL"],
    url: "https://github.com/fajarpng/mylibrary-react-native",
    note: "source on GitHub",
    panel: "bg-sun",
    badge: "bg-sun",
  },
]
