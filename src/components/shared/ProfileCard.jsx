import { useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { easing } from '../motionVariants'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { AmbientGlow } from './AmbientGlow'
import { FloatingDecorations } from './FloatingDecorations'
import { ProfileBadge } from './ProfileBadge'
import { FloatingProfilePanel } from './FloatingProfilePanel'

const TILT_SPRING = { stiffness: 220, damping: 22, mass: 0.4 }
const SCALE_SPRING = { stiffness: 260, damping: 24 }
const IMAGE_SPRING = { stiffness: 160, damping: 20, mass: 0.5 }

export function ProfileCard() {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef(null)
  const reducedMotion = useReducedMotion()

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [5, -5]), TILT_SPRING)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-5, 5]), TILT_SPRING)
  const cardScale = useSpring(hovered ? 1.02 : 1, SCALE_SPRING)
  const imageDepthX = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), IMAGE_SPRING)
  const imageDepthY = useSpring(useTransform(py, [-0.5, 0.5], [-7, 7]), IMAGE_SPRING)

  const pageParallax = useMouseParallax(7)
  const { scrollY } = useScroll()
  const scrollLag = useTransform(scrollY, [0, 700], reducedMotion ? [0, 0] : [0, 140], { clamp: true })
  const ambientY = useTransform([pageParallax.y, scrollLag], ([mouse, scroll]) => mouse + scroll)

  const handlePointerMove = (event) => {
    if (reducedMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePointerLeave = () => {
    setHovered(false)
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div style={{ x: pageParallax.x, y: ambientY }} className="relative mx-auto w-full max-w-[420px]">
      <motion.div
        initial={{ opacity: 0, x: 32, scale: 0.97, filter: 'blur(10px)' }}
        animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 0.5, ease: easing }}
        className="relative"
        style={{ perspective: 1200 }}
      >
        <AmbientGlow hovered={hovered} />
        <FloatingDecorations />

        <motion.div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={handlePointerLeave}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.45, ease: easing }}
          style={{ rotateX, rotateY, scale: cardScale }}
          className="relative aspect-[16/20] w-full overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface-solid)] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.65)] sm:rounded-[2.25rem]"
        >
          <motion.img
            src="/images/narendhiran.jpg"
            alt="Narendhiran P."
            initial={{ scale: 1.05 }}
            animate={{ scale: hovered ? 1.02 : 1 }}
            transition={{ duration: 0.9, ease: easing }}
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={{ x: imageDepthX, y: imageDepthY, filter: 'saturate(1.08) contrast(1.03) brightness(1.02)' }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/[0.05] via-transparent to-iris-950/[0.12] mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.55)]" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/92 via-black/35 to-transparent" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-6 sm:p-7">
            <div>
              <p className="font-mono text-xl font-bold tracking-[-0.02em] text-[var(--text)] sm:text-2xl">Narendhiran P.</p>
              <p className="mt-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-soft)]">AI &amp; Full Stack Developer</p>
            </div>
            <ProfileBadge>Focus: UI × AI</ProfileBadge>
          </div>

          <FloatingProfilePanel hovered={hovered} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
