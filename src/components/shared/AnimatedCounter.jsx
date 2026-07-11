import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

export function AnimatedCounter({ value, decimals = 0, duration = 2, className = '', onComplete }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const prefersReducedMotion = useReducedMotion()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals))

  useEffect(() => {
    if (!isInView) return undefined

    if (prefersReducedMotion) {
      count.set(value)
      onComplete?.()
      return undefined
    }

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onComplete,
    })
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value, duration, prefersReducedMotion])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}
