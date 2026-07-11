import { motion, useReducedMotion, useTransform } from 'framer-motion'

/**
 * The vertical timeline line: a dim base track, a scroll-driven gradient fill,
 * and a soft glowing head that tracks scroll progress.
 * `progress` is a MotionValue in [0, 1] supplied by the parent timeline.
 */
export function TimelineProgress({ progress }) {
  const reducedMotion = useReducedMotion()
  const headTop = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <div
      className="absolute left-6 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[var(--fill)]" />
      <motion.div
        style={{ scaleY: reducedMotion ? 1 : progress }}
        className="absolute inset-0 origin-top bg-gradient-to-b from-iris-400 via-iris-300/70 to-amber-300/60"
      />
      {!reducedMotion && (
        <motion.div
          style={{ top: headTop }}
          className="absolute left-1/2 h-16 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/70 to-transparent blur-[1px]"
        />
      )}
    </div>
  )
}
