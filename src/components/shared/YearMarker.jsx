import { motion } from 'framer-motion'
import { easing } from '../motionVariants'

/** Year label centered on the timeline line (left-aligned on mobile). */
export function YearMarker({ year }) {
  return (
    <div className="relative flex items-center pl-16 md:justify-center md:pl-0">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease: easing }}
        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-iris-300/25 bg-[var(--surface-strong)] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-iris-200 shadow-[0_0_24px_-8px_rgba(168,136,214,0.5)] backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-iris-300" />
        {year}
      </motion.span>
    </div>
  )
}
