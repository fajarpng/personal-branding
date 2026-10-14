import type { Metadata } from "next"
import { Caveat, Outfit, Plus_Jakarta_Sans } from "next/font/google"
import { SmoothScroll } from "@/components/animations/smooth-scroll"
import "./globals.css"

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["600", "800", "900"] })
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] })
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["600"] })

const title = "Tri Fajar Pangestu - Software Developer & Digital Craftsman"
const description =
  "A software developer who turns ideas into useful, thoughtful digital experiences across web and mobile."

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${caveat.variable} antialiased`}>
      <body id="top">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border-2 focus:border-ink focus:bg-sun focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
