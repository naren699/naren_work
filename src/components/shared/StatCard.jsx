import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { chipVariants, easing } from '../motionVariants'
import { AnimatedCounter } from './AnimatedCounter'

export function StatCard({ label, value, decimals = 0, icon: Icon, duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      variants={chipVariants}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="group relative overflow-hidden border border-transparent bg-[var(--surface-strong)] px-5 py-5 transition-colors duration-300 hover:border-iris-400/20 hover:bg-[rgba(14,28,48,0.95)]"
    >
      <motion.div
        animate={isInView ? { opacity: [0, 0.55, 0], scale: [0.85, 1.15, 0.85] } : { opacity: 0 }}
        transition={{ duration, ease: 'easeInOut' }}
        className="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-iris-400/20 blur-2xl"
      />

      <span className="grid h-7 w-7 place-items-center rounded-lg border border-iris-400/20 bg-iris-400/[0.08] text-[var(--accent-text)] transition-colors duration-300 group-hover:border-iris-400/40">
        <Icon size={13} />
      </span>

      <motion.p
        animate={isInView ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration, ease: 'easeInOut' }}
        className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]"
      >
        <AnimatedCounter value={value} decimals={decimals} duration={duration} />
      </motion.p>

      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-faint)]">{label}</p>

      <motion.span
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, ease: easing, delay: 0.15 }}
        className="mt-3 block h-px w-full origin-left bg-gradient-to-r from-iris-400/60 via-iris-400/20 to-transparent"
      />
    </motion.div>
  )
}
