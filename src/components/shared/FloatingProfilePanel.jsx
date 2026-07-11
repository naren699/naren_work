import { motion, useSpring, useTransform } from 'framer-motion'
import { MoreHorizontal } from 'lucide-react'
import { easing } from '../motionVariants'
import { useMouseParallax } from '../../hooks/useMouseParallax'

const HOVER_SPRING = { stiffness: 260, damping: 24 }

export function FloatingProfilePanel({ hovered }) {
  const parallax = useMouseParallax(5)
  const hoverY = useSpring(hovered ? -3 : 0, HOVER_SPRING)
  const ambientY = useTransform([parallax.y, hoverY], ([mouse, hover]) => mouse + hover)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.05, duration: 0.6, ease: easing }}
      className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5"
    >
      <motion.div
        style={{
          x: parallax.x,
          y: ambientY,
          backdropFilter: hovered ? 'blur(28px)' : 'blur(20px)',
          boxShadow: hovered ? '0 24px 48px -12px rgba(0,0,0,0.65), 0 0 0 1px rgba(165,243,252,0.08)' : undefined,
        }}
        className="flex items-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--fill)] px-3.5 py-3 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] transition-shadow duration-300"
      >
        <img src="/images/narendhiran.jpg" alt="" className="h-9 w-9 shrink-0 rounded-full border border-white/20 object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-mono text-xs font-semibold text-[var(--text)]">@narendhiran6</p>
          <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online
          </p>
        </div>
        <button
          type="button"
          aria-label="More profile options"
          className="shrink-0 rounded-full p-1.5 text-[var(--text-muted)] transition-colors hover:bg-[var(--fill)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-300/60"
        >
          <MoreHorizontal size={16} />
        </button>
      </motion.div>
    </motion.div>
  )
}
