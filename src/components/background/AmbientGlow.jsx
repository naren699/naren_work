import { motion, useReducedMotion } from 'framer-motion'
import { GLOW_COLORS, glowDrift } from '../../animations/ambient'

const BLOBS = [
  { color: GLOW_COLORS.purple, size: '38rem', top: '-14%', left: '14%', drift: { x: 26, y: -20, duration: 24, delay: 0 } },
  { color: GLOW_COLORS.indigo, size: '32rem', top: '38%', right: '-10%', drift: { x: -22, y: 24, duration: 28, delay: 3 } },
  { color: GLOW_COLORS.blue, size: '30rem', bottom: '-12%', left: '30%', drift: { x: 20, y: -16, duration: 26, delay: 6 } },
]

export default function AmbientGlow() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      {BLOBS.map((blob, i) => {
        const { animate, transition } = glowDrift(blob.drift)
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: blob.size,
              height: blob.size,
              top: blob.top,
              left: blob.left,
              right: blob.right,
              bottom: blob.bottom,
              background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
              filter: 'blur(110px)',
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0.55 }}
            animate={reducedMotion ? { opacity: 0.55 } : animate}
            transition={reducedMotion ? { duration: 0 } : transition}
          />
        )
      })}
    </div>
  )
}
