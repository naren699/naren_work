import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Stagger } from '../Motion'
import { chipVariants } from '../motionVariants'
import { AnimatedCounter } from './AnimatedCounter'

function ExperienceStat({ label, value, suffix = '', icon: Icon }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      variants={chipVariants}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-6 backdrop-blur-xl transition-colors duration-300 hover:border-iris-300/25"
    >
      <motion.div
        animate={inView ? { opacity: [0, 0.5, 0.15], scale: [0.8, 1.15, 1] } : { opacity: 0 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-iris-400/20 blur-2xl"
      />

      <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-iris-400/20 bg-iris-400/[0.08] text-[var(--accent-text)] transition-colors duration-300 group-hover:border-iris-400/40">
        <Icon size={16} aria-hidden="true" />
      </span>

      <p className="relative mt-4 flex items-baseline text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
        <AnimatedCounter value={value} />
        {suffix && <span className="text-[var(--accent-text)]">{suffix}</span>}
      </p>

      <p className="relative mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-faint)]">{label}</p>
    </motion.div>
  )
}

export function ExperienceStats({ stats }) {
  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" stagger={0.08}>
      {stats.map((stat) => (
        <ExperienceStat key={stat.label} {...stat} />
      ))}
    </Stagger>
  )
}
