import { Reveal } from '../components/Motion'
import { philosophy } from '../data/aboutData'

export default function PhilosophySection() {
  return (
    <section className="px-5 py-24 sm:px-7 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal><p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-faint)]">// PHILOSOPHY</p></Reveal>
        <Reveal delay={0.12}>
          <p className="mt-9 text-pretty text-2xl font-medium leading-[1.4] tracking-[-0.02em] text-[var(--text)] sm:text-3xl">
            “{philosophy.quote}”
          </p>
        </Reveal>
        <Reveal delay={0.22}><p className="mt-7 text-sm leading-[1.6] text-[var(--text-muted)]">{philosophy.description}</p></Reveal>
      </div>
    </section>
  )
}
