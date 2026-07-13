import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/Motion'
import { easing } from '../components/motionVariants'
import { projects } from '../data/portfolioData'
import { getProjectTheme } from '../data/projectThemes'
import { useSectionNav } from '../hooks/useSectionNav'

function WorkRow({ project, index, goTo }) {
  const theme = getProjectTheme(project.accent)

  return (
    <motion.button
      onClick={() => goTo('projects')}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easing }}
      className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-6 border-t border-[var(--border-faint)] py-9 text-left transition-colors hover:bg-[var(--fill-faint)] sm:gap-x-10 sm:py-11 lg:items-center"
    >
      <span className="pt-1 font-mono text-xs tracking-[0.14em] text-[var(--text-faint)] lg:pt-0">{project.number}</span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="link-underline text-xl font-semibold tracking-[-0.03em] text-[var(--text)] transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl lg:text-3xl">{project.title}</span>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-faint)]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: theme.hex }} />
            {project.type}
          </span>
        </span>
        <span className="mt-3 block max-w-2xl text-pretty text-sm leading-[1.6] text-[var(--text-muted)]">{project.pitch}</span>
        <span className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-faint)]">
          {project.stack.slice(0, 4).map(({ label }) => <span key={label}>{label}</span>)}
        </span>
      </span>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-500 group-hover:border-[var(--text)] group-hover:text-[var(--text)] sm:h-12 sm:w-12">
        <ArrowUpRight size={17} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.button>
  )
}

export default function SelectedWorkSection() {
  const { goTo } = useSectionNav()

  return (
    <section className="px-5 py-24 sm:px-7 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-faint)]">// SELECTED_WORK</p>
            <h2 className="mt-6 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--text)]">Case studies</h2>
          </div>
          <p className="hidden shrink-0 font-mono text-xs tracking-[0.14em] text-[var(--text-faint)] sm:block">{String(projects.length).padStart(2, '0')} projects</p>
        </Reveal>

        <div className="mt-14 border-b border-[var(--border-faint)]">
          {projects.map((project, index) => <WorkRow key={project.number} project={project} index={index} goTo={goTo} />)}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <button onClick={() => goTo('projects')} className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--text)]">All projects →</button>
        </Reveal>
      </div>
    </section>
  )
}
