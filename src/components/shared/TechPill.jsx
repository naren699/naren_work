import { motion } from 'framer-motion'
import { chipVariants } from '../motionVariants'

export function TechPill({ children, icon }) {
  return (
    <motion.span
      variants={chipVariants}
      whileHover={{ y: -2, scale: 1.035 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
      className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(var(--accent-rgb,168,136,214),0.18)] bg-[rgba(var(--accent-rgb,168,136,214),0.07)] px-3 py-1.5 text-xs font-medium text-[var(--accent,#a888d6)] transition-colors duration-300 group-hover:border-[rgba(var(--accent-rgb,168,136,214),0.3)] group-hover:bg-[rgba(var(--accent-rgb,168,136,214),0.11)]"
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </motion.span>
  )
}
