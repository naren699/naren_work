import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { easing } from '../motionVariants'
import { STATUS_STEPS } from '../../hooks/usePageLoader'

export default function StatusText({ duration }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
    const stepDuration = duration / STATUS_STEPS.length
    const timers = STATUS_STEPS.map((_, i) => setTimeout(() => setIndex(i), stepDuration * i))
    return () => timers.forEach(clearTimeout)
  }, [duration])

  return (
    <div className="relative flex h-5 w-72 items-center justify-center overflow-hidden font-mono text-[13px] text-[var(--text-muted)]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: easing }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {STATUS_STEPS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
