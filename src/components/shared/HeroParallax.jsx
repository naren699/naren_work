import { useEffect, useState } from 'react'
import { useMotionValue, useReducedMotion } from 'framer-motion'
import { ParallaxContext } from '../../hooks/parallaxContext'

export function HeroParallax({ children }) {
  const reducedMotion = useReducedMotion()
  const [fineHover, setFineHover] = useState(false)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFineHover(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const enabled = fineHover && !reducedMotion

  useEffect(() => {
    if (!enabled) {
      mvX.set(0)
      mvY.set(0)
      return undefined
    }

    const handleMove = (event) => {
      mvX.set((event.clientX / window.innerWidth) * 2 - 1)
      mvY.set((event.clientY / window.innerHeight) * 2 - 1)
    }
    const handleLeave = () => {
      mvX.set(0)
      mvY.set(0)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', handleLeave)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('pointerleave', handleLeave)
    }
  }, [enabled, mvX, mvY])

  return <ParallaxContext.Provider value={{ mvX, mvY, enabled }}>{children}</ParallaxContext.Provider>
}
