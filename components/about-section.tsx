import { Code, FlaskConical, Plug, Smartphone } from "lucide-react"
import { Reveal } from "@/components/animations/reveal"
import { Note, Star, Underline } from "@/components/doodles"
import { Words } from "@/components/words"

const facts = [
  { icon: Code, text: "6+ years of development experience", style: "bg-sun -rotate-2 rounded-2xl rounded-tr-[2.5rem]" },
  { icon: Smartphone, text: "Web & mobile development", style: "bg-mint rotate-1 rounded-[2rem] rounded-bl-md" },
  { icon: Plug, text: "UI implementation and API integration", style: "bg-pink rotate-2 rounded-2xl rounded-br-[2.5rem]" },
  { icon: FlaskConical, text: "Always experimenting with new ideas", style: "bg-violet text-white -rotate-1 rounded-[2rem] rounded-tl-md" },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-24">
      <Reveal className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 id="about-title" className="font-display text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            <Words text="THE PERSON BEHIND" />{" "}
            <span className="relative inline-block">
              <Words text="THE PIXELS." />
              <Underline className="absolute -bottom-2 left-0 h-4 w-full text-pink" />
            </span>
          </h2>
          <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed">
            I&apos;m a software developer focused on building practical, polished digital products. I enjoy solving
            frontend challenges, connecting interfaces to APIs, and turning complicated ideas into experiences that
            feel simple.
          </p>
          <div data-reveal className="mt-8 w-fit max-w-full rounded-xl border-4 border-ink bg-ink p-4 font-mono text-sm text-cream shadow-hard">
            <p className="text-mint">$ whoami</p>
            <p>developer · tinkerer · detail-obsessed</p>
          </div>
        </div>

        <ul className="relative grid gap-5 sm:grid-cols-2">
          {facts.map(({ icon: Icon, text, style }) => (
            <li key={text} data-reveal className={`flex min-h-36 flex-col justify-between gap-6 border-4 border-ink p-5 shadow-hard ${style}`}>
              <Icon aria-hidden className="size-8" />
              <p className="font-display text-xl font-extrabold leading-tight">{text}</p>
            </li>
          ))}
          <Star className="absolute -right-3 -top-8 hidden size-14 rotate-12 text-sun sm:block" />
          <Note className="absolute -bottom-9 right-4 hidden text-3xl text-violet sm:block">still learning every day</Note>
        </ul>
      </Reveal>
    </section>
  )
}
