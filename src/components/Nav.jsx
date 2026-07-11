import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react'
import { navItems } from '../data/portfolioData'
import { easing } from './motionVariants'
import { ActionLink } from './shared/ActionLink'
import { ThemeToggle } from './shared/ThemeToggle'
import { useSectionNav } from '../hooks/useSectionNav'

const mobileMenu = { closed: { opacity: 0, height: 0, transition: { duration: 0.2, ease: easing } }, open: { opacity: 1, height: 'auto', transition: { duration: 0.32, ease: easing, when: 'beforeChildren', staggerChildren: 0.045 } } }
const mobileItem = { closed: { opacity: 0, x: -10 }, open: { opacity: 1, x: 0, transition: { duration: 0.25, ease: easing } } }

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { activeId, goTo } = useSectionNav()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigate = (id) => { setIsMenuOpen(false); goTo(id) }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${isScrolled ? 'border-[var(--border-faint)] bg-[var(--nav-bg)]' : 'border-transparent bg-transparent'}`}>
      <motion.div animate={{ height: isScrolled ? 64 : 72 }} transition={{ duration: 0.3, ease: easing }} className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8"><button onClick={() => navigate('home')} className="group flex items-center gap-2 text-sm font-semibold tracking-[-0.03em] text-[var(--text)]" aria-label="Back to top"><motion.span whileHover={{ rotate: -7, scale: 1.06 }} whileTap={{ scale: 0.93 }} className="grid h-7 w-7 place-items-center rounded-lg bg-iris-400 text-xs font-black text-iris-950">NP</motion.span><span>Narendhiran<span className="text-iris-400">.</span></span></button>
        <div className="hidden items-center gap-1 lg:flex">{navItems.map(({ id, label }) => <button key={id} onClick={() => navigate(id)} className={`relative rounded-full px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${activeId === id ? 'text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text-soft)]'}`}>{label}{activeId === id && <motion.span layoutId="nav-indicator" transition={{ type: 'spring', stiffness: 360, damping: 30 }} className="absolute inset-x-3 bottom-1 h-px bg-iris-400" />}</button>)}</div>
        <div className="flex items-center gap-2"><ThemeToggle /><ActionLink href="mailto:pnarendhiran6@gmail.com" className="hidden items-center gap-2 rounded-full border border-[var(--border-strong)] px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text)] transition-colors hover:border-iris-400/60 hover:bg-iris-400/[0.06] sm:inline-flex">[ Let&apos;s_talk ] <motion.span whileHover={{ x: 2, y: -2 }}><ArrowUpRight size={14} className="text-iris-400" /></motion.span></ActionLink><motion.button whileTap={{ scale: 0.92 }} onClick={() => setIsMenuOpen((current) => !current)} className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--text-soft)] transition hover:border-iris-400/60 lg:hidden" aria-label="Toggle navigation" aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={17} /> : <Menu size={18} />}</motion.button></div>
      </motion.div>
      <AnimatePresence>{isMenuOpen && <motion.div variants={mobileMenu} initial="closed" animate="open" exit="closed" className="overflow-hidden border-t border-[var(--border-faint)] bg-[var(--surface-raised)] px-5 backdrop-blur-xl lg:hidden"><motion.div className="mx-auto grid max-w-7xl gap-1 py-4">{navItems.map(({ id, label }, index) => <motion.button variants={mobileItem} key={id} onClick={() => navigate(id)} className={`flex items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition ${activeId === id ? 'bg-iris-400/[0.08] text-[var(--accent-text)]' : 'text-[var(--text-soft)] hover:bg-[var(--fill-faint)]'}`}><span><span className="mr-3 text-xs text-[var(--text-faint)]">0{index + 1}</span>{label}</span><ChevronRight size={16} /></motion.button>)}</motion.div></motion.div>}</AnimatePresence>
    </nav>
  )
}
