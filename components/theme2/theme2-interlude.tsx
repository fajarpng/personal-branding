import { Parallax } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"

const line = "block overflow-hidden pb-[0.1em]"

export function Theme2Interlude() {
  return (
    <Parallax className="relative overflow-hidden bg-t2-dark text-t2-paper">
      <section aria-label="Statement" className="relative">
        <div aria-hidden className="t2-dark-grid absolute inset-0" />
        <div aria-hidden className="t2-scan absolute inset-x-0 top-0 h-px bg-t2-cyan shadow-[0_0_12px_1px_var(--color-t2-cyan)]" />

        <div aria-hidden data-speed="0.8" data-rotate="8" className="absolute -right-6 top-10 select-none font-t2-serif text-[clamp(10rem,28vw,24rem)] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgb(243_239_229_/_0.18)]">
          06
        </div>
        <div aria-hidden data-speed="1.2" className="absolute bottom-16 left-[8%] hidden h-24 w-3 bg-t2-magenta sm:block" />

        <div className="relative mx-auto max-w-7xl px-5 py-28 sm:py-40">
          <p className="flex flex-wrap justify-between gap-2 font-t2-mono text-[10px] uppercase tracking-[0.2em] text-t2-paper/60 sm:text-xs">
            <span><span className="text-t2-cyan">&gt;</span> signal: stable</span>
            <span>{"edition 06 // 00:00 utc"}</span>
          </p>

          <Reveal className="mt-14">
            <h2 className="font-t2-serif text-[clamp(2.8rem,10vw,8.5rem)] font-black leading-[0.95] tracking-tight">
              <span className={line}><span data-word className="inline-block">THE FUTURE IS</span></span>
              <span className={line}>
                <span data-word className="inline-block italic font-medium text-t2-cyan">
                  <span className="t2-glitch" data-text="BUILT,">BUILT,</span>
                </span>
              </span>
              <span className={line}><span data-word className="inline-block">NOT PREDICTED.</span></span>
            </h2>
            <div data-rule className="mt-10 h-px w-full bg-t2-paper/40" />
            <p data-reveal className="mt-4 max-w-md font-t2-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-t2-paper/60">
              <span className="text-t2-magenta">{"//"}</span> build 2026.06 — shipped with care, tested in public, revised often.
            </p>
          </Reveal>
        </div>
      </section>
    </Parallax>
  )
}
