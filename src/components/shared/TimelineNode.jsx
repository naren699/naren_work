import { motion } from 'framer-motion'
import { easing } from '../motionVariants'

/**
 * Glowing pulse node that sits on the timeline line.
 * `className` positions the node (left/top offsets) within the parent row.
 * Enlarges on hover of the enclosing `group` and brightens as it scrolls into view.
 */
export function TimelineNode({ accent = 'iris', className = '' }) {
  const isAmber = accent === 'amber'
  const core = isAmber ? 'bg-amber-300' : 'bg-iris-400'
  const ring = isAmber ? 'bg-amber-300/30' : 'bg-iris-400/30'
  const glow = isAmber ? 'bg-amber-300/25' : 'bg-iris-400/25'

  return (
    <span className={`pointer-events-none ${className}`} aria-hidden="true">
      <motion.span
        initial={{ opacity: 0.12, scale: 0.75 }}
        whileInView={{ opacity: 0.6, scale: 1.25 }}
        viewport={{ amount: 0.9 }}
        transition={{ duration: 0.6, ease: easing }}
        className={`absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl ${glow}`}
      />
      <span className={`absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full ${ring}`} />
      <span className={`relative block h-3.5 w-3.5 rounded-full border-2 border-[#050505] transition-transform duration-300 group-hover:scale-125 ${core}`} />
    </span>
  )
}
