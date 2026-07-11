import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function MouseGlow() {
  const reducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const springX = useSpring(x, { stiffness: 60, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 60, damping: 22, mass: 0.6 })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled || reducedMotion) return
    const move = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled, reducedMotion, x, y])

  if (!enabled || reducedMotion) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 -z-0 rounded-full"
      style={{
        width: 800,
        height: 800,
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(139, 107, 197, 0.08), transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
