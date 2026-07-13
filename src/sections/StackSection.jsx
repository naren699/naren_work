import { motion } from 'framer-motion'
import { Reveal, Stagger } from '../components/Motion'
import { chipVariants } from '../components/motionVariants'
import { skillGroups } from '../data/portfolioData'
import { useSectionNav } from '../hooks/useSectionNav'

export default function StackSection() {
  const { goTo } = useSectionNav()

  return (
    <section className="px-5 py-24 sm:px-7 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-faint)]">// STACK</p>
            <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--text)]">A system, not a list</h2>
          </div>
          <button onClick={() => goTo('skills')} className="link-underline hidden shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--text)] sm:block">Full capability map →</button>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-[var(--border-faint)] bg-[var(--border-faint)] sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, detail, skills }) => (
            <motion.div key={title} whileHover={{ backgroundColor: 'var(--fill-faint)' }} className="bg-[var(--bg)] p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Icon size={16} className="text-[var(--accent-text)]" />
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--text)]">{title}</p>
              </div>
              <p className="mt-4 max-w-md text-sm leading-[1.6] text-[var(--text-muted)]">{detail}</p>
              <Stagger className="mt-7 flex flex-wrap gap-2" stagger={0.04}>
                {skills.map((skill) => (
                  <motion.span key={skill} variants={chipVariants} className="border border-[var(--border)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-soft)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]">{skill}</motion.span>
                ))}
              </Stagger>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 sm:hidden">
          <button onClick={() => goTo('skills')} className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">Full capability map →</button>
        </Reveal>
      </div>
    </section>
  )
}
