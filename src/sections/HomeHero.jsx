import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { easing } from '../components/motionVariants'
import { CursorGlow } from '../components/shared/CursorGlow'
import { socialLinks } from '../data/portfolioData'
import { useSectionNav } from '../hooks/useSectionNav'

const heroContainer = { hidden: {}, visible: { transition: { delayChildren: 0.2, staggerChildren: 0.11 } } }
const heroItem = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }

function FaceCard({ className = '', delay = 0.6, parallaxY }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay, ease: easing }}
      style={parallaxY ? { y: parallaxY } : undefined}
      className={className}
    >
      <div className="face-card relative h-[290px] w-[240px] p-2.5 sm:h-[330px] sm:w-[280px] lg:h-[420px] lg:w-[360px]">
        <span aria-hidden="true" className="face-card-corner" />
        <div className="face-card-photo-wrap relative h-full w-full overflow-hidden rounded-lg">
          <img
            src="/images/narendhiran.jpg"
            alt="Narendhiran P, Full Stack Developer"
            className="face-card-photo h-full w-full rounded-md object-cover object-[50%_14%]"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function HomeHero() {
  const { goTo } = useSectionNav()
  const heroRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const cardY = useTransform(scrollY, [0, 900], reducedMotion ? [0, 0] : [0, 64], { clamp: true })
  const textY = useTransform(scrollY, [0, 900], reducedMotion ? [0, 0] : [0, 40], { clamp: true })

  return (
    <section id="home" ref={heroRef} className="relative isolate min-h-[100svh] overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-orb hero-orb-one" />
        <div className="site-grid absolute inset-0 opacity-20" />
      </div>
      <CursorGlow containerRef={heroRef} />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-7 lg:px-8">
        <div className="flex items-center justify-between gap-16">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" style={{ y: textY }} className="max-w-2xl">
            <motion.p variants={heroItem} className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-faint)] opacity-60">// NARENDHIRAN_P</motion.p>
            <motion.p variants={heroItem} className="mt-4 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
              <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-400 opacity-60" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris-300" /></span>
              Available for work — Chennai, IN
            </motion.p>

            {/* Name is the anchor — largest text, everything else supports it. */}
            <motion.h1 variants={heroItem} className="hero-name mt-8 text-[clamp(2.75rem,6vw,4rem)] font-semibold leading-[1.02] tracking-[-1.2px] text-[var(--text)]">
              Narendhiran <span className="text-[#8B5CF6]">P</span>
              <span aria-hidden="true" className="hero-underline" />
            </motion.h1>

            <motion.p variants={heroItem} className="mt-6 text-xl font-medium tracking-[-0.02em] text-[var(--text-soft)]">
              Full Stack Developer <span className="text-iris-300">&</span> AI&#8209;focused builder.
            </motion.p>
            <motion.p variants={heroItem} className="mt-5 max-w-xl text-pretty text-base leading-[1.6] text-[var(--text-muted)]">
              I ship complete products — interfaces designed with intent, backed by AI workflows that remove real friction.
            </motion.p>

            <motion.div variants={heroItem} className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-5">
              <button onClick={() => goTo('projects')} className="group inline-flex items-center gap-3 border-2 border-[var(--text)] px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)]">
                View selected work
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a href="/Narendhiran-P-Resume.pdf" download="Narendhiran-P-Resume.pdf" className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] hover:text-[var(--text)]">Download résumé</a>
            </motion.div>
            <motion.div variants={heroItem} className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs tracking-[0.06em] text-[var(--text-faint)]">
              <a className="link-underline hover:text-[var(--text)]" href="mailto:pnarendhiran6@gmail.com">pnarendhiran6@gmail.com</a>
              <span className="h-3 w-px bg-[var(--divider)]" />
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="link-underline uppercase tracking-[0.14em] hover:text-[var(--text)]">{label}</a>
              ))}
            </motion.div>
          </motion.div>

          {/* Face card — framed, lit, glowing. Desktop sits right of the name. */}
          <FaceCard className="hidden shrink-0 lg:block" parallaxY={cardY} />
        </div>

        {/* Mobile: name above, face card below, centered. */}
        <FaceCard className="mx-auto mt-14 lg:hidden" delay={0.5} />
      </div>
    </section>
  )
}
