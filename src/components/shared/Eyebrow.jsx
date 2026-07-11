import { motion } from 'framer-motion'
import { easing } from '../motionVariants'

export function Eyebrow({ children, className = '' }) {
  return <p className={`mb-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)] ${className}`}><motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.58, ease: easing }} className="h-px w-7 origin-left bg-iris-300/75" />// {children}</p>
}
