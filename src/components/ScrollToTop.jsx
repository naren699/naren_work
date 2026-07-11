import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from './SmoothScrollProvider'

export default function ScrollToTop() {
  const location = useLocation()
  const lenisRef = useLenis()

  useEffect(() => {
    if (location.state?.scrollTo) return
    const lenis = lenisRef?.current
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.state, lenisRef])

  return null
}
