import { motion } from 'framer-motion'
import { CpuIcon } from '../icons'
import { easing } from '../motionVariants'
import AnimatedGrid from './AnimatedGrid'
import FloatingElements from './FloatingElements'
import ProgressBar from './ProgressBar'
import StatusText from './StatusText'

const RADIUS = 46
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const CORNERS = [
  'top-6 left-6 border-l border-t',
  'top-6 right-6 border-r border-t',
  'bottom-6 left-6 border-l border-b',
  'bottom-6 right-6 border-r border-b',
]

export default function Loader({ duration }) {
  const seconds = duration / 1000

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: easing }}
      className="pointer-events-none fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[var(--surface-sunken-solid)]"
    >
      <AnimatedGrid />
      <FloatingElements />

      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-iris-400/70 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.6, ease: 'linear', repeat: Infinity }}
      />

      {CORNERS.map((pos, i) => (
        <motion.div
          key={pos}
          className={`pointer-events-none absolute h-6 w-6 ${pos} border-iris-400/40`}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-7 px-6">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full border border-iris-400/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
          />
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="rgba(139,92,246,0.14)" strokeWidth="2" />
            <motion.circle
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: seconds, ease: easing }}
            />
          </svg>
          <motion.div
            animate={{ boxShadow: ['0 0 0px rgba(139,92,246,0.25)', '0 0 26px rgba(139,92,246,0.55)', '0 0 0px rgba(139,92,246,0.25)'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-iris-400/40 bg-iris-500/10 text-[var(--accent-text)]"
          >
            <CpuIcon size={24} />
          </motion.div>
        </div>

        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-iris-300/80">
          <span className="text-iris-400">{'>_'}</span> INITIALIZING_RUNTIME
        </span>

        <StatusText duration={duration} />

        <ProgressBar duration={duration} />

        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-[var(--text-faint)]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> MEM: OK
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> NET: OK
          </span>
        </div>
      </div>
    </motion.div>
  )
}
