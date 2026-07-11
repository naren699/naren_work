import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useLocation } from 'react-router-dom'

const LenisContext = createContext(null)

export function useLenis() {
  return useContext(LenisContext)
}

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      easing: easeOutExpo,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      smoothWheel: true,
      syncTouch: true,
    })
    lenisRef.current = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    lenisRef.current?.resize()
  }, [location.pathname])

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
}
