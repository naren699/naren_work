import { motion } from 'framer-motion'
import { easing } from '../motionVariants'

export function ProfileBadge({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.6, ease: easing }}
      whileHover={{ boxShadow: '0 0 24px 0 rgba(165,243,252,0.25)' }}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--fill)] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text)] backdrop-blur-xl transition-shadow duration-300"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-300 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris-300" />
      </span>
      {children}
    </motion.span>
  )
}
