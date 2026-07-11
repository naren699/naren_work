import { motion, useReducedMotion, useTransform } from 'framer-motion'
import { useCursorGlow } from '../../hooks/useCursorGlow'

const GLOW_SIZE = 544

export function CursorGlow({ containerRef }) {
  const reducedMotion = useReducedMotion()
  const { x, y, visible } = useCursorGlow(containerRef)
  const translateX = useTransform(x, (value) => value - GLOW_SIZE / 2)
  const translateY = useTransform(y, (value) => value - GLOW_SIZE / 2)

  if (reducedMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full"
      style={{
        x: translateX,
        y: translateY,
        opacity: visible ? 1 : 0,
        background: 'radial-gradient(circle, rgba(168,136,214,0.12), rgba(168,136,214,0.03) 45%, transparent 72%)',
        filter: 'blur(64px)',
        transition: 'opacity 0.5s ease',
      }}
    />
  )
}
