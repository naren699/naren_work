import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '../components/Motion'

/* Apple-standard ease-out-cubic — no bounce, no overshoot. */
const EASE = [0.25, 0.46, 0.45, 0.94]

const years = [
  {
    year: '2024',
    phase: 'BEGINNING',
    rgb: '139, 92, 246',
    gradient: 'linear-gradient(180deg, #8B5CF6, #6D28D9)',
    milestones: [
      {
        emoji: '🎓',
        title: 'Started B.Tech in AI & Data Science',
        descriptor: 'Saveetha Engineering College, Chennai',
        preview: 2,
        bullets: [
          'Laid the groundwork in programming fundamentals with C and Python.',
          'Built a framework for problem-solving through core logic and math coursework.',
          'Established a daily learning system balancing academics with self-study.',
          'Explored the foundations of data science and how intelligent systems are built.',
          'Maintained an 8.05 CGPA while shipping independent practice projects.',
        ],
      },
    ],
  },
  {
    year: '2025',
    phase: 'ACCELERATION',
    rgb: '14, 165, 233',
    gradient: 'linear-gradient(180deg, #0EA5E9, #0284C7)',
    milestones: [
      {
        emoji: '💻',
        title: 'Transitioned into Full Stack Development',
        descriptor: 'From fundamentals to shipped products',
        preview: 3,
        bullets: [
          'Mastered HTML, CSS, and modern JavaScript as a production toolset.',
          'Engineered component-driven interfaces with React and state management patterns.',
          'Shipped a live weather application during a Full Stack internship at Straive.',
          'Integrated Firebase Auth and Firestore for secure, real-time data workflows.',
          'Deployed ExpenseFlow — a full-stack finance platform with live analytics.',
          'Adopted Git, GitHub, and Vercel pipelines as a default shipping rhythm.',
        ],
      },
    ],
  },
  {
    year: '2026',
    phase: 'SYNTHESIS',
    rgb: '16, 185, 129',
    gradient: 'linear-gradient(180deg, #10B981, #059669)',
    milestones: [
      {
        emoji: '🤖',
        title: 'AI-Powered Development & Professional Growth',
        descriptor: 'Where engineering meets intelligence',
        preview: 3,
        bullets: [
          'Architected AI-assisted products, including a Gemini-powered notes summarizer.',
          'Optimized my engineering core with Java, data structures, and algorithms.',
          'Scaled into low-level and high-level system design for durable architecture.',
          'Earned professional certifications across cloud and modern web stacks.',
          'Competed in hackathons, turning ideas into working prototypes under pressure.',
          'Continuously expanding into AI agents and intelligent automation workflows.',
        ],
      },
    ],
  },
]

function useDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const update = () => setDesktop(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return desktop
}

/* ━━ 2024 ━━ heading with subtle scroll parallax (desktop only). */
function YearHeading({ year, rgb, parallax }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <motion.div ref={ref} style={parallax ? { y } : undefined} className="flex items-center gap-5">
      <span aria-hidden className="h-px w-10 sm:w-16" style={{ background: `linear-gradient(90deg, transparent, rgba(${rgb}, 0.6))` }} />
      <h2
        id={`year-${year}`}
        className="text-[32px] font-semibold tracking-[-1px] sm:text-5xl"
        style={{ color: `rgb(${rgb})`, textShadow: `0 0 32px rgba(${rgb}, 0.35)` }}
      >
        {year}
      </h2>
      <span aria-hidden className="h-px flex-1 max-w-64" style={{ background: `linear-gradient(90deg, rgba(${rgb}, 0.6), transparent)` }} />
    </motion.div>
  )
}

function MilestoneCard({ milestone, rgb, index }) {
  const [expanded, setExpanded] = useState(false)
  const reduced = useReducedMotion()
  const { emoji, title, descriptor, bullets, preview } = milestone
  const hidden = bullets.slice(preview)
  const panelId = `milestone-${title.replaceAll(' ', '-').toLowerCase()}`

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      className="jt-milestone relative"
    >
      {/* Timeline node, centered on the spine */}
      <motion.span
        aria-hidden
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 + 0.1 }}
        className="absolute top-[26px] -left-8 z-10 -translate-x-1/2 sm:-left-[60px]"
      >
        <span className="jt-node block h-3 w-3 rounded-full md:h-4 md:w-4" />
      </motion.span>

      {/* Connector: draws from node to card on reveal */}
      <svg
        aria-hidden
        className="absolute top-[26px] -left-8 h-4 w-8 -translate-y-1/2 sm:-left-[60px] sm:w-[60px]"
        style={{ filter: 'blur(0.5px)' }}
      >
        <motion.line
          x1="0" y1="8" x2="100%" y2="8"
          stroke={`rgba(${rgb}, 0.4)`}
          strokeWidth="1.5"
          initial={{ pathLength: reduced ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 + 0.15 }}
        />
      </svg>

      <div className="jt-card max-w-[520px] overflow-hidden rounded-xl">
        {/* Accent header bar */}
        <div aria-hidden className="h-[3px]" style={{ background: `linear-gradient(90deg, rgb(${rgb}), rgba(${rgb}, 0.2))` }} />

        <div className="p-6">
          <div className="flex items-baseline gap-3">
            <span aria-hidden className="text-base leading-none">{emoji}</span>
            <h3 className="text-lg font-medium tracking-[-0.5px] text-[var(--text)]">{title}</h3>
          </div>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--text-faint)]">{descriptor}</p>

          <ul className="mt-5 space-y-3">
            {bullets.slice(0, preview).map((bullet) => (
              <li key={bullet} className="flex gap-3 font-mono text-sm leading-[1.8] text-[var(--text-soft)]">
                <span aria-hidden className="font-semibold" style={{ color: `rgb(${rgb})` }}>•</span>
                {bullet}
              </li>
            ))}
          </ul>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.4, ease: EASE }}
                className="space-y-3 overflow-hidden"
              >
                {hidden.map((bullet, i) => (
                  <li key={bullet} className={`flex gap-3 font-mono text-sm leading-[1.8] text-[var(--text-soft)] ${i === 0 ? 'mt-3' : ''}`}>
                    <span aria-hidden className="font-semibold" style={{ color: `rgb(${rgb})` }}>•</span>
                    {bullet}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {hidden.length > 0 && (
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setExpanded((v) => !v)}
                className="jt-expand min-h-[44px] cursor-pointer font-mono text-[11px] uppercase tracking-[0.3px] opacity-70 transition-opacity hover:opacity-100 md:min-h-0"
                style={{ color: `rgb(${rgb})` }}
              >
                {expanded ? 'Hide details' : `Show details (${hidden.length} more)`}
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function YearSection({ data, parallax }) {
  const reduced = useReducedMotion()
  const { year, phase, rgb, gradient, milestones } = data

  return (
    <section
      aria-labelledby={`year-${year}`}
      className="relative min-h-[280px] pl-16 sm:pl-[120px]"
      style={{ '--yr': rgb }}
    >
      {/* Spine: glow layer + crisp line, drawn top-down on reveal */}
      <div aria-hidden className="absolute inset-y-0 left-8 sm:left-[60px]">
        <motion.div
          initial={{ scaleY: reduced ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '0px 0px -160px 0px' }}
          transition={{ duration: 1, ease: EASE }}
          className="h-full origin-top"
        >
          <span className="absolute inset-y-0 -left-[1.5px] w-[3px]" style={{ background: gradient, opacity: 0.15, filter: 'blur(4px)' }} />
          <span className="absolute inset-y-0 -left-px w-px" style={{ background: gradient, opacity: 0.3 }} />
        </motion.div>
      </div>

      <YearHeading year={year} rgb={rgb} parallax={parallax && !reduced} />

      <Reveal delay={0.1} className="mt-6">
        <span className="jt-badge inline-flex h-7 items-center rounded-md px-3 font-mono text-[11px] font-medium uppercase tracking-[0.3px]">
          {year} · {phase}
        </span>
      </Reveal>

      <div className="mt-12 space-y-7">
        {milestones.map((milestone, index) => (
          <MilestoneCard key={milestone.title} milestone={milestone} rgb={rgb} index={index} />
        ))}
      </div>
    </section>
  )
}

export default function JourneySection() {
  const desktop = useDesktop()

  return (
    <div role="region" aria-label="Journey timeline" className="relative mx-auto max-w-4xl px-5 py-24 sm:px-7 sm:py-32 lg:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-text)]">// Journey</p>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-1px] text-[var(--text)] sm:text-5xl">
          A visual autobiography.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
          Three years, three chapters — foundation, acceleration, synthesis. Not a résumé; the shape of how an engineer gets built.
        </p>
      </Reveal>

      <div className="mt-20 space-y-16">
        {years.map((data) => (
          <YearSection key={data.year} data={data} parallax={desktop} />
        ))}
      </div>
    </div>
  )
}
