import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { revealVariants } from '../animations/reveal'
import { staggerContainer } from '../animations/stagger'

export function Reveal({ children, className = '', delay = 0, direction = 'up', amount = 0.18 }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={revealVariants({ direction, delay, reducedMotion })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '', delay = 0, stagger = 0.08, amount = 0.18 }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer({ stagger, delayChildren: delay, reducedMotion })}
    >
      {children}
    </motion.div>
  )
}

export function Magnetic({ children, className = '', strength = 0.16 }) {
  const reducedMotion = useReducedMotion()
  const [canHover, setCanHover] = useState(false)
  const x = useSpring(useMotionValue(0), { stiffness: 280, damping: 20, mass: 0.25 })
  const y = useSpring(useMotionValue(0), { stiffness: 280, damping: 20, mass: 0.25 })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const move = (event) => {
    if (!canHover || reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * strength)
    y.set((event.clientY - rect.top - rect.height / 2) * strength)
  }

  return (
    <motion.div className={className} style={{ x, y }} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}
