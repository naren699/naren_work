import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../data/portfolioData'
import { useLenis } from '../components/SmoothScrollProvider'

export function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const lenisRef = useLenis()
  const [activeId, setActiveId] = useState('home')

  const scrollToId = useCallback((id) => {
    const target = document.getElementById(id)
    if (!target) return
    const lenis = lenisRef?.current
    if (lenis) lenis.scrollTo(target, { offset: 0 })
    else target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [lenisRef])

  useEffect(() => {
    if (location.pathname !== '/') {
      const match = navItems.find((item) => item.path === location.pathname && !item.hash)
      setActiveId(match ? match.id : '')
      return undefined
    }

    const ids = navItems.filter((item) => item.path === '/').map((item) => item.hash || item.id)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveId(visible.target.id)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] })
    ids.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const id = location.state.scrollTo
      requestAnimationFrame(() => scrollToId(id))
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  const goTo = useCallback((id) => {
    const item = navItems.find((entry) => entry.id === id)
    if (!item) return
    const targetId = item.hash || item.id

    if (item.path === '/') {
      if (location.pathname === '/') scrollToId(targetId)
      else navigate('/', { state: { scrollTo: targetId } })
    } else {
      navigate(item.path)
    }
  }, [location.pathname, navigate])

  return { activeId, goTo }
}
