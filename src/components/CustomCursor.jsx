import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const boxX = useSpring(dotX, { stiffness: 280, damping: 26, mass: 0.5 })
  const boxY = useSpring(dotY, { stiffness: 280, damping: 26, mass: 0.5 })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('custom-cursor-active')

    const move = (event) => {
      setVisible(true)
      dotX.set(event.clientX)
      dotY.set(event.clientY)
      const target = event.target
      setActive(Boolean(target?.closest?.('a, button, [role="button"], input, textarea')))
    }
    const hide = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', hide)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [enabled, dotX, dotY])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s ease' }}>
      <motion.span
        className="fixed left-0 top-0 rounded-full bg-white"
        style={{ x: dotX, y: dotY, width: 6, height: 6, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.span
        animate={{ width: active ? 52 : 34, height: active ? 52 : 34, opacity: active ? 0.9 : 0.55 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-0 border border-white"
        style={{ x: boxX, y: boxY, translateX: '-50%', translateY: '-50%' }}
      />
    </div>
  )
}
