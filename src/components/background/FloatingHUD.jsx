import { motion, useReducedMotion } from 'framer-motion'
import { hudFloat } from '../../animations/ambient'

const ELEMENTS = [
  { type: 'square', size: 14, top: '18%', left: '8%', float: { y: 10, rotate: 6, duration: 8, delay: 0 } },
  { type: 'line-h', size: 40, top: '30%', right: '12%', float: { y: 8, rotate: 0, duration: 10, delay: 1.2 } },
  { type: 'square', size: 10, top: '62%', left: '5%', float: { y: 12, rotate: -8, duration: 9, delay: 2.4 } },
  { type: 'line-v', size: 32, top: '48%', right: '6%', float: { y: 9, rotate: 0, duration: 11, delay: 0.6 } },
  { type: 'square', size: 12, bottom: '16%', right: '20%', float: { y: 8, rotate: 5, duration: 7.5, delay: 1.8 } },
  { type: 'line-h', size: 28, bottom: '24%', left: '16%', float: { y: 10, rotate: 0, duration: 9.5, delay: 3 } },
]

export default function FloatingHUD() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 hidden overflow-hidden sm:block">
      {ELEMENTS.map((el, i) => {
        const { animate, transition } = hudFloat(el.float)
        const isLine = el.type !== 'square'
        return (
          <motion.div
            key={i}
            className="absolute border-[var(--text-faint)] opacity-20"
            style={{
              top: el.top,
              left: el.left,
              right: el.right,
              bottom: el.bottom,
              width: el.type === 'line-v' ? 1 : el.size,
              height: el.type === 'line-h' ? 1 : el.size,
              borderWidth: isLine ? 0 : 1,
              backgroundColor: isLine ? 'var(--text-faint)' : 'transparent',
              willChange: 'transform',
            }}
            animate={reducedMotion ? undefined : animate}
            transition={reducedMotion ? undefined : transition}
          />
        )
      })}
    </div>
  )
}
