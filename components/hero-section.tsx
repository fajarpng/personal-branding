import { Parallax } from "@/components/animations/parallax"
import { Ribbons } from "@/components/animations/ribbons"
import { Arrow, Button } from "@/components/button"
import { Note, ScribbleArrow, Squiggle, Star, Triangle, Underline } from "@/components/doodles"
import { Words } from "@/components/words"

export function HeroSection() {
  return (
    <Parallax hero className="relative overflow-hidden pt-16">
      <Ribbons
        className="z-0"
        baseThickness={16}
        speedMultiplier={0.5}
        maxAge={600}
        enableFade
        enableShaderEffect
        effectAmplitude={1}
      />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10">
          <p
            data-enter
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-mint px-4 py-1.5 font-mono text-xs font-bold tracking-widest"
          >
            <span aria-hidden className="size-2 rounded-full bg-ink" />
            AVAILABLE FOR SELECT PROJECTS
          </p>

          <h1 className="font-display text-[clamp(3rem,9vw,6.5rem)] font-black leading-[0.95] tracking-tight">
            <span className="block">
              <Words text="I BUILD" />
            </span>
            <span className="relative block text-violet">
              <Words text="DIGITAL" />
              <Underline className="absolute -bottom-1 left-0 h-4 w-[85%] text-pink md:h-6" />
            </span>
            <span className="mt-1 inline-block -rotate-2 rounded-xl border-4 border-ink bg-sun px-3 text-ink shadow-hard">
              <Words text="THINGS." />
            </span>
          </h1>

          <p data-enter className="mt-8 max-w-lg text-lg leading-relaxed">
            I&apos;m a software developer who turns ideas into useful, thoughtful digital experiences across web and
            mobile.
          </p>

          <div data-enter className="relative mt-8 flex flex-wrap items-center gap-4">
            <Button href="#work">
              Explore My Work <Arrow />
            </Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Talk
            </Button>
            <span className="absolute -bottom-14 left-48 hidden items-end gap-1 text-violet sm:flex">
              <ScribbleArrow className="h-12 w-14 -scale-x-100 rotate-[200deg]" />
              <Note className="text-3xl">hover me</Note>
            </span>
          </div>
        </div>

        <HeroArt />
      </div>
    </Parallax>
  )
}

// Decorative composition: depth comes from data-speed (scroll) and data-pointer (cursor)
function HeroArt() {
  return (
    <div aria-hidden className="relative mx-auto h-[380px] w-full max-w-xl sm:h-[480px] lg:h-[560px]">
      <div data-speed="0.15" className="absolute inset-4 hidden bg-dots opacity-20 md:block" />

      <div data-speed="0.25" className="absolute right-2 top-0 sm:right-10">
        <div data-pop className="size-44 rounded-full border-4 border-ink bg-sun shadow-hard-lg sm:size-60" />
      </div>

      <div data-speed="0.35" data-rotate="25" className="absolute bottom-6 right-0 hidden sm:block">
        <div data-pop data-pointer="30" className="size-32 rounded-tl-[3rem] rounded-br-[3rem] border-4 border-ink bg-violet shadow-hard-lg" />
      </div>

      <div data-speed="0.5" className="absolute left-0 top-16 w-[85%] sm:left-4 sm:top-20">
        <div data-enter data-pointer="-14" className="-rotate-3 rounded-2xl border-4 border-ink bg-white shadow-hard-lg">
          <div className="flex items-center gap-1.5 border-b-4 border-ink bg-muted px-3 py-2">
            <span className="size-3 rounded-full border-2 border-ink bg-pink" />
            <span className="size-3 rounded-full border-2 border-ink bg-sun" />
            <span className="size-3 rounded-full border-2 border-ink bg-mint" />
            <span className="ml-2 flex-1 truncate rounded-full border-2 border-ink bg-white px-3 font-mono text-[10px]">
              dev01.site/hello
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 p-4">
            <div className="col-span-2 space-y-2">
              <div className="h-5 w-3/4 rounded bg-ink" />
              <div className="h-3 w-full rounded bg-muted" />
              <div className="h-3 w-5/6 rounded bg-muted" />
              <div className="mt-3 h-8 w-24 rounded-full border-2 border-ink bg-violet" />
            </div>
            <div className="aspect-square rounded-full border-2 border-ink bg-pink" />
            <div className="h-16 rounded-lg border-2 border-ink bg-mint" />
            <div className="h-16 rounded-lg border-2 border-ink bg-sun" />
            <div className="h-16 rounded-lg border-2 border-ink bg-violet" />
          </div>
        </div>
      </div>

      <div data-speed="0.8" className="absolute -bottom-2 left-0 sm:bottom-4 sm:left-0">
        <div data-enter data-pointer="-30" className="rotate-2 rounded-2xl border-4 border-ink bg-ink p-4 font-mono text-xs leading-relaxed text-cream shadow-hard-lg sm:text-sm">
          <p>
            <span className="text-pink">const</span> dev = {"{"}
          </p>
          <p className="pl-4">
            focus: <span className="text-mint">&quot;web + mobile&quot;</span>,
          </p>
          <p className="pl-4">
            available: <span className="text-sun">true</span>,
          </p>
          <p>{"}"}</p>
        </div>
      </div>

      <div data-speed="1.1" data-rotate="40" className="absolute -top-2 left-[40%]">
        <div data-pop><Star className="size-14 text-pink sm:size-20" /></div>
      </div>
      <div data-speed="1.3" data-rotate="-30" className="absolute bottom-24 right-[30%] hidden sm:block">
        <Star className="size-10 text-pink" />
      </div>
      <div data-speed="1" className="absolute right-0 top-[48%] hidden sm:block">
        <div data-pointer="22">
          <Squiggle className="h-10 w-36 text-mint" />
        </div>
      </div>
      <div data-speed="0.9" data-rotate="-20" className="absolute bottom-0 left-[48%] hidden md:block">
        <Triangle className="h-16 w-16 text-mint" />
      </div>
    </div>
  )
}
