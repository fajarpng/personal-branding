import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./theme2.css"

const serif = Playfair_Display({ variable: "--font-t2-playfair", subsets: ["latin"], style: ["normal", "italic"] })
const sans = Inter({ variable: "--font-t2-inter", subsets: ["latin"] })
const mono = JetBrains_Mono({ variable: "--font-t2-jetbrains", subsets: ["latin"] })

const title = "The Digital Edition — Independent Developer Journal"
const description =
  "A software developer focused on web and mobile experiences, thoughtful interfaces, and practical technology."

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
}

export default function Theme2Layout({ children }: { children: React.ReactNode }) {
  return <div className={`t2 ${serif.variable} ${sans.variable} ${mono.variable}`}>{children}</div>
}
