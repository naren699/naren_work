import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../components/Motion'
import { Eyebrow } from '../components/shared/Eyebrow'
import { SectionHeading } from '../components/shared/SectionHeading'
import { ExperienceStats } from '../components/shared/ExperienceStats'
import { TechnicalTimeline } from '../components/shared/TechnicalTimeline'
import { GrowthCards } from '../components/shared/GrowthCards'
import { QuoteSection } from '../components/shared/QuoteSection'
import { experienceStats, growthAreas, technicalEvents } from '../data/technicalExperience'

const particles = [
  { left: '12%', top: '18%', duration: 7, delay: 0 },
  { left: '82%', top: '24%', duration: 9, delay: 1.2 },
  { left: '68%', top: '58%', duration: 8, delay: 0.6 },
  { left: '22%', top: '72%', duration: 10, delay: 1.8 },
  { left: '90%', top: '80%', duration: 7.5, delay: 0.9 },
  { left: '46%', top: '40%', duration: 9.5, delay: 2.1 },
]

/** Subtle floating particles, soft radial lighting, and a HUD label behind the timeline. */
function TimelineBackdrop() {
  const reducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-iris-400/[0.06] blur-3xl" />
      <div className="absolute right-[8%] top-[62%] h-56 w-56 rounded-full bg-amber-300/[0.04] blur-3xl" />
      <div className="absolute left-6 top-24 hidden font-mono text-[10px] uppercase tracking-[0.35em] text-[var(--text-faint)] opacity-20 lg:block">
        // engineering.timeline
      </div>
      {!reducedMotion &&
        particles.map((particle, i) => (
          <motion.span
            key={i}
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
            className="absolute h-1 w-1 rounded-full bg-iris-300/50"
          />
        ))}
    </div>
  )
}

export default function TechnicalExperienceSection() {
  return (
    <section
      id="technical-experience"
      className="relative scroll-mt-20 overflow-hidden border-y border-[var(--border-faint)] bg-[var(--surface-sunken)] py-24 sm:py-32"
    >
      <TimelineBackdrop />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond the Classroom"
            title="Technical Experience"
            copy="A timeline of hackathons, AI competitions, datathons, and technical events that strengthened my problem-solving, engineering, teamwork, and product development skills."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ExperienceStats stats={experienceStats} />
        </Reveal>

        <div className="mt-20">
          <TechnicalTimeline events={technicalEvents} />
        </div>

        <div className="mt-28">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Skills Forged</Eyebrow>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.055em] text-[var(--text)] sm:text-4xl">
                Technical Growth
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[var(--text-muted)] sm:text-lg">
                The capabilities these events sharpened — the throughline behind every product I build.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <GrowthCards items={growthAreas} />
          </div>
        </div>

        <div className="mt-28">
          <QuoteSection />
        </div>
      </div>
    </section>
  )
}
