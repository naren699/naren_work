import { motion } from 'framer-motion'
import { Reveal, Stagger } from '../Motion'
import { cardHover, chipVariants, easing } from '../motionVariants'
import { Eyebrow } from './Eyebrow'
import { aboutIdentity } from '../../data/aboutData'

export function AboutHero() {
  return (
    <div className="relative">
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-iris-400/[0.14] blur-[90px]"
      />

      <Reveal>
        <Eyebrow>{aboutIdentity.eyebrow}</Eyebrow>
        <h2 className="text-balance max-w-3xl text-3xl font-semibold tracking-[-0.055em] text-[var(--text)] sm:text-4xl lg:text-5xl">
          {aboutIdentity.title}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal delay={0.08} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--fill-faint)] p-6 backdrop-blur-sm sm:p-8">
          {aboutIdentity.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg ${index ? 'mt-4' : ''}`}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Stagger className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" stagger={0.09}>
          {aboutIdentity.traits.map((trait, index) => (
            <motion.div
              key={trait.label}
              variants={chipVariants}
              whileHover={cardHover}
              className="rounded-2xl border border-[var(--border)] bg-[var(--fill-faint)] p-4 transition-colors duration-300 hover:border-iris-400/25 hover:bg-[var(--fill-faint)]"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: easing, delay: 0.1 * index }}
                  className="h-px w-5 origin-left bg-iris-300/75"
                />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-text)]">{trait.label}</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{trait.detail}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </div>
  )
}
