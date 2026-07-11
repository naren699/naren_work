import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'

const PARTICLE_COUNT = 26

function makeParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 2.5,
    duration: 14 + Math.random() * 12,
    delay: Math.random() * -20,
    driftX: (Math.random() - 0.5) * 40,
    driftY: -30 - Math.random() * 40,
    opacity: 0.2 + Math.random() * 0.3,
  }))
}

export default function ParticleLayer() {
  const reducedMotion = useReducedMotion()
  const particles = useMemo(() => makeParticles(), [])

  if (reducedMotion) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="bg-particle absolute rounded-full bg-[var(--text)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            filter: 'blur(1px)',
            '--particle-opacity': p.opacity,
            '--px': `${p.driftX}px`,
            '--py': `${p.driftY}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
