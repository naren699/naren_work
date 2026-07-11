import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { easing } from '../motionVariants'

function Percentage({ duration }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    setPct(0)
    let raf
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      setPct(Math.round((1 - Math.pow(1 - t, 3)) * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [duration])

  return <span className="text-iris-300/80">{pct}%</span>
}

export default function ProgressBar({ duration }) {
  const seconds = duration / 1000

  return (
    <div className="flex w-64 flex-col gap-2">
      <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-iris-500 via-iris-400 to-amber-300"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: seconds, ease: easing }}
        />
      </div>
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--text-faint)]">
        <span>boot_sequence</span>
        <Percentage duration={duration} />
      </div>
    </div>
  )
}
