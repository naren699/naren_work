import { motion } from 'framer-motion'
import { Reveal, Stagger } from '../Motion'
import { cardHover, chipVariants } from '../motionVariants'
import { Eyebrow } from './Eyebrow'
import { focusAreas } from '../../data/aboutData'

export function LearningCards() {
  return (
    <div className="border-t border-[var(--border-faint)] pt-12">
      <Reveal className="max-w-2xl">
        <Eyebrow>Currently exploring</Eyebrow>
        <h3 className="text-balance text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl">
          Continuously expanding what I can build.
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
          Combining AI, scalable architecture, and polished user experience design.
        </p>
      </Reveal>

      <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {focusAreas.map((area) => (
          <motion.div
            key={area.label}
            variants={chipVariants}
            whileHover={cardHover}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--fill-faint)] p-5 transition-colors duration-300 hover:border-iris-400/25 hover:bg-[var(--fill-faint)]"
          >
            <motion.div
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-iris-400/20 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
            />
            <motion.span
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="relative grid h-10 w-10 place-items-center rounded-xl border border-iris-400/20 bg-iris-400/[0.08] text-[var(--accent-text)]"
            >
              <area.icon size={17} />
            </motion.span>
            <p className="relative mt-4 text-sm font-medium leading-6 tracking-[-0.01em] text-[var(--text)]">{area.label}</p>
          </motion.div>
        ))}
      </Stagger>
    </div>
  )
}
