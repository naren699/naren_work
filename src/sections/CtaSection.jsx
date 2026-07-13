import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Motion'
import { useSectionNav } from '../hooks/useSectionNav'

export default function CtaSection() {
  const { goTo } = useSectionNav()

  return (
    <section className="px-5 py-28 sm:px-7 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal><p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-faint)]">// CONTACT</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--text)]">Let&apos;s build together.</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-md text-pretty text-base leading-[1.6] text-[var(--text-muted)]">Open to internships, freelance work, and collaborations on products worth shipping.</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-x-9 gap-y-5">
          <a href="mailto:pnarendhiran6@gmail.com" className="group inline-flex items-center gap-3 border-2 border-[var(--text)] px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)]">
            Start a conversation
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button onClick={() => goTo('contact')} className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--text)]">Contact page →</button>
        </Reveal>
      </div>
    </section>
  )
}
