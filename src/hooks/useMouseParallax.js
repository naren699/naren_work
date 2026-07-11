import { useContext } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ParallaxContext } from './parallaxContext'

const DEFAULT_SPRING = { stiffness: 120, damping: 18, mass: 0.5 }

export function useMouseParallax(intensity = 8, springConfig = DEFAULT_SPRING) {
  const ctx = useContext(ParallaxContext)
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const mvX = ctx?.mvX ?? fallbackX
  const mvY = ctx?.mvY ?? fallbackY
  const enabled = ctx?.enabled ?? false

  const rangeX = useTransform(mvX, (value) => (enabled ? value * intensity : 0))
  const rangeY = useTransform(mvY, (value) => (enabled ? value * intensity : 0))
  const x = useSpring(rangeX, springConfig)
  const y = useSpring(rangeY, springConfig)

  return { x, y }
}
