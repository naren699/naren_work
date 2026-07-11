import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { easing } from '../motionVariants'
import { eventTypeMeta } from '../../data/technicalExperience'
import { TimelineNode } from './TimelineNode'

/**
 * A single timeline entry. On desktop it alternates sides (`side`); on mobile it
 * is a single column to the right of the line. Reveals with a directional slide,
 * lifts and glows on hover, and enlarges its node via the shared `group`.
 */
export function TimelineEvent({ event, side }) {
  const { title, organization, type, year, description, skills, status } = event
  const meta = eventTypeMeta[type]
  const Icon = meta.icon
  const isAmber = meta.accent === 'amber'
  const accentText = isAmber ? 'text-amber-300' : 'text-[var(--accent-text)]'
  const accentBorder = isAmber ? 'border-amber-300/15 bg-amber-300/[0.07]' : 'border-iris-300/15 bg-iris-300/[0.07]'
  const hoverBorder = isAmber ? 'group-hover:border-amber-300/30' : 'group-hover:border-iris-400/30'
  const chipHover = isAmber ? 'group-hover:border-amber-300/25 group-hover:text-amber-100' : 'group-hover:border-iris-300/25 group-hover:text-iris-100'
  const cornerGlow = isAmber ? 'bg-amber-300/10' : 'bg-iris-400/10'
  const connectorFrom = isAmber ? 'from-amber-300/40' : 'from-iris-400/40'
  const fromLeft = side === 'left'

  const prefersReducedMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const hidden = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, x: isDesktop ? (fromLeft ? -48 : 48) : 0, y: isDesktop ? 0 : 22 }

  return (
    <motion.div
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: easing, delay: 0.05 }}
      className={`group relative flex ${fromLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <TimelineNode accent={meta.accent} className="absolute left-6 top-9 z-10 -translate-x-1/2 md:left-1/2" />
      <span
        aria-hidden="true"
        className={`absolute top-[2.7rem] hidden h-px w-10 to-transparent md:block ${fromLeft ? 'right-1/2 bg-gradient-to-l' : 'left-1/2 bg-gradient-to-r'} ${connectorFrom}`}
      />

      <div className="w-full pl-16 md:w-1/2 md:px-10">
        <article
          className={`relative overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-all duration-300 will-change-transform group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-24px_rgba(168,136,214,0.45)] sm:p-7 ${hoverBorder}`}
        >
          <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${cornerGlow}`} />

          <div className="relative flex flex-wrap items-center justify-between gap-3">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${accentBorder} ${accentText}`}>
              <Icon size={12} aria-hidden="true" />
              {type}
            </span>
            <span className="font-mono text-xs text-[var(--text-faint)]">{year}</span>
          </div>

          <h3 className="relative mt-5 text-lg font-medium tracking-[-0.03em] text-[var(--text)] sm:text-xl">{title}</h3>
          <p className={`relative mt-1 text-sm ${accentText}`}>{organization}</p>
          <p className="relative mt-4 text-sm leading-6 text-[var(--text-muted)]">{description}</p>

          <div className="relative mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`rounded-full border border-[var(--border-faint)] bg-[var(--fill-faint)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-soft)] transition-colors duration-300 ${chipHover}`}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="relative mt-6 flex items-center gap-1.5 border-t border-[var(--border-faint)] pt-4 text-xs font-medium text-emerald-300/90">
            <CheckCircle2 size={14} aria-hidden="true" />
            {status}
          </div>
        </article>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  )
}
