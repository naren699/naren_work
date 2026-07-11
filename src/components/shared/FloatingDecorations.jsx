import { motion } from 'framer-motion'
import { useMouseParallax } from '../../hooks/useMouseParallax'

export function FloatingDecorations() {
  const squareA = useMouseParallax(10)
  const squareB = useMouseParallax(9)
  const dotA = useMouseParallax(13)
  const dotB = useMouseParallax(11)

  return (
    <div className="pointer-events-none absolute -inset-6 -z-10" aria-hidden="true">
      <motion.div style={{ x: squareA.x, y: squareA.y }} className="absolute -left-5 top-10">
        <motion.span
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
          className="block h-10 w-10 rounded-xl border border-iris-300/25"
        />
      </motion.div>
      <motion.div style={{ x: squareB.x, y: squareB.y }} className="absolute -right-4 bottom-24">
        <motion.span
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 11, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
          className="block h-6 w-6 rounded-lg border border-amber-300/20"
        />
      </motion.div>

      <motion.div style={{ x: dotA.x, y: dotA.y }} className="absolute -right-2 top-24">
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3.4, ease: 'easeInOut', repeat: Infinity }}
          className="block h-1.5 w-1.5 rounded-full bg-iris-300 shadow-[0_0_10px_2px_rgba(165,243,252,0.5)]"
        />
      </motion.div>
      <motion.div style={{ x: dotB.x, y: dotB.y }} className="absolute -left-3 bottom-32">
        <motion.span
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 0.8 }}
          className="block h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_8px_2px_rgba(221,214,254,0.4)]"
        />
      </motion.div>

      <span className="absolute -left-2 -top-2 h-6 w-6 border-l border-t border-[var(--border-strong)]" />
      <span className="absolute -right-2 -bottom-2 h-6 w-6 border-b border-r border-[var(--border-strong)]" />
    </div>
  )
}
