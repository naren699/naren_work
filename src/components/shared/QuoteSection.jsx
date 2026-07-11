import { Quote } from 'lucide-react'
import { Reveal } from '../Motion'

/** Premium closing callout with a large quote and supporting reflection. */
export function QuoteSection() {
  return (
    <Reveal>
      <figure className="relative overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl sm:p-12">
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-iris-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-amber-300/[0.07] blur-3xl" />

        <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-iris-300/15 bg-iris-300/[0.07] text-[var(--accent-text)]">
          <Quote size={20} aria-hidden="true" />
        </span>

        <blockquote className="relative mt-6 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.03em] text-[var(--text)] sm:text-3xl">
          Every competition taught something beyond coding.
        </blockquote>

        <figcaption className="relative mt-5 max-w-2xl text-pretty text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          Each event challenged me to think under pressure, collaborate with teams, explore emerging technologies, and
          transform ideas into practical solutions. These experiences continue to shape how I approach engineering and
          product development.
        </figcaption>
      </figure>
    </Reveal>
  )
}
