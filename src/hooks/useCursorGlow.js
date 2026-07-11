import { useEffect, useState } from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const GLOW_SPRING = { stiffness: 40, damping: 20, mass: 0.8 }

export function useCursorGlow(containerRef) {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, GLOW_SPRING)
  const y = useSpring(rawY, GLOW_SPRING)

  useEffect(() => {
    const el = containerRef.current
    if (!el || reducedMotion) return undefined

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect()
      rawX.set(event.clientX - rect.left)
      rawY.set(event.clientY - rect.top)
    }
    const handleEnter = () => setVisible(true)
    const handleLeave = () => setVisible(false)

    el.addEventListener('pointermove', handleMove, { passive: true })
    el.addEventListener('pointerenter', handleEnter)
    el.addEventListener('pointerleave', handleLeave)
    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerenter', handleEnter)
      el.removeEventListener('pointerleave', handleLeave)
    }
  }, [containerRef, reducedMotion, rawX, rawY])

  return { x, y, visible: visible && !reducedMotion }
}
