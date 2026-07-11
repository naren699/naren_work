import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ChevronRight, Download, MapPin } from 'lucide-react'
import { Magnetic, Stagger } from '../components/Motion'
import { easing } from '../components/motionVariants'
import { ActionLink } from '../components/shared/ActionLink'
import { ProfileCard } from '../components/shared/ProfileCard'
import { Dashboard } from '../components/shared/Dashboard'
import { HeroParallax } from '../components/shared/HeroParallax'
import { CursorGlow } from '../components/shared/CursorGlow'
import { StatCard } from '../components/shared/StatCard'
import { useMouseParallax } from '../hooks/useMouseParallax'
import { socialLinks } from '../data/portfolioData'
import { heroStats } from '../data/stats'
import { useSectionNav } from '../hooks/useSectionNav'

const heroContainer = { hidden: {}, visible: { transition: { delayChildren: 0.16, staggerChildren: 0.1 } } }
const heroItem = { hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.72, ease: easing } } }

function HeroContent({ goTo }) {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()

  const bgParallax = useMouseParallax(3)
  const bgScrollLag = useTransform(scrollY, [0, 700], [0, 210], { clamp: true })
  const bgY = useTransform([bgParallax.y, bgScrollLag], ([mouse, scroll]) => mouse + scroll)

  const textParallax = useMouseParallax(2.5)
  const textScrollLag = useTransform(scrollY, [0, 700], [0, 70], { clamp: true })
  const textY = useTransform([textParallax.y, textScrollLag], ([mouse, scroll]) => mouse + scroll)

  return (
    <section id="home" ref={heroRef} className="relative isolate flex min-h-[min(860px,100svh)] items-start"><motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ x: bgParallax.x, y: bgY }}><div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" /><div className="site-grid absolute inset-0 opacity-25" /></motion.div><CursorGlow containerRef={heroRef} /><div className="mx-auto w-full max-w-7xl px-5 pt-6 pb-20 sm:px-7 sm:pt-8 sm:pb-28 lg:px-8"><div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <motion.div variants={heroContainer} initial="hidden" animate="visible" style={{ x: textParallax.x, y: textY }}><motion.div variants={heroItem} className="inline-flex items-center gap-2 rounded-full border border-iris-400/15 bg-iris-400/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent-text)]"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-iris-300" /></span>STATUS: AVAILABLE_FOR_WORK</motion.div><motion.p variants={heroItem} className="mt-7 text-sm font-medium tracking-wide text-[var(--text-muted)]">Hello, I&apos;m</motion.p><motion.h1 variants={heroItem} className="mt-2 max-w-3xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-[var(--text)] sm:text-6xl md:text-7xl lg:text-[5.35rem]">Narendhiran <span className="text-gradient">P.</span></motion.h1><motion.p variants={heroItem} className="mt-7 max-w-xl text-pretty text-xl font-medium leading-8 text-[var(--text-soft)] sm:text-2xl">Full Stack Developer <span className="text-iris-400">&</span> AI-focused builder.</motion.p><motion.p variants={heroItem} className="mt-5 max-w-xl text-pretty text-base leading-7 text-[var(--text-muted)] sm:text-lg">I build modern web applications with clean UI, practical functionality, and AI-powered workflows—while studying Artificial Intelligence & Data Science in Chennai.</motion.p><motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3"><Magnetic><ActionLink onClick={() => goTo('projects')} className="group inline-flex items-center gap-2 rounded-full bg-iris-300 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-iris-950 shadow-lg shadow-iris-400/0 transition-colors hover:bg-white hover:shadow-iris-400/25">[ View_projects ] <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" /></ActionLink></Magnetic><ActionLink href="/Narendhiran-P-Resume.pdf" download="Narendhiran-P-Resume.pdf" className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text)] transition-colors hover:border-iris-300/70 hover:bg-iris-400/[0.05] hover:shadow-[0_16px_36px_-14px_rgba(168,136,214,0.45)]">[ Download_resume ] <Download size={15} className="text-iris-400 transition-transform duration-300 group-hover:-translate-y-0.5" /></ActionLink><ActionLink onClick={() => goTo('contact')} className="group inline-flex items-center gap-2 rounded-full px-3 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]">Contact_me <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></ActionLink></motion.div><motion.div variants={heroItem} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[var(--text-muted)]"><span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-iris-400" /> Chennai, India</span><span className="h-3 w-px bg-[var(--divider)]" /><a className="transition hover:text-[var(--text)]" href="mailto:pnarendhiran6@gmail.com">pnarendhiran6@gmail.com</a><span className="h-3 w-px bg-[var(--divider)]" />{socialLinks.map(({ label, href, icon: Icon }) => <motion.a whileHover={{ y: -2, scale: 1.1 }} whileTap={{ scale: 0.94 }} key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} placeholder link`} className="transition hover:text-[var(--accent-text)]"><Icon size={16} /></motion.a>)}</motion.div></motion.div>
      <div className="mx-auto w-full max-w-[480px] lg:mx-0"><ProfileCard /></div>
    </div><Dashboard /><Stagger className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--fill)] sm:grid-cols-4" delay={0.92}>{heroStats.map((stat) => <StatCard key={stat.label} {...stat} />)}</Stagger></div></section>
  )
}

export default function HomeHero() {
  const { goTo } = useSectionNav()

  return (
    <HeroParallax>
      <HeroContent goTo={goTo} />
    </HeroParallax>
  )
}
