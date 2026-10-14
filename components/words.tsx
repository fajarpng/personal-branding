// Splits text into clipped words so <Reveal> / <Parallax hero> can slide them up
export function Words({ text }: { text: string }) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span data-word className="inline-block">
        {word}
      </span>{" "}
    </span>
  ))
}
