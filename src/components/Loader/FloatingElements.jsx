import { motion } from 'framer-motion'

const SQUARES = [
  { top: '18%', left: '14%', size: 14, delay: 0 },
  { top: '74%', left: '20%', size: 10, delay: 0.6 },
  { top: '22%', right: '16%', size: 18, delay: 1.1 },
  { top: '68%', right: '12%', size: 12, delay: 0.3 },
]

const DOTS = [
  { top: '30%', left: '32%' },
  { top: '64%', left: '9%' },
  { top: '18%', right: '32%' },
  { top: '80%', right: '24%' },
  { top: '46%', left: '7%' },
  { top: '52%', right: '7%' },
]

export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {SQUARES.map((sq, i) => (
        <motion.span
          key={`sq-${i}`}
          className="absolute border border-iris-400/25"
          style={{ top: sq.top, left: sq.left, right: sq.right, width: sq.size, height: sq.size }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2], rotate: [0, 90, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: sq.delay }}
        />
      ))}
      {DOTS.map((d, i) => (
        <motion.span
          key={`dot-${i}`}
          className="absolute h-1 w-1 rounded-full bg-iris-400/40"
          style={{ top: d.top, left: d.left, right: d.right }}
          animate={{ opacity: [0.15, 0.8, 0.15], scale: [1, 1.6, 1] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}
