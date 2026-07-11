import { motion } from 'framer-motion'
import { Reveal } from '../Motion'
import { philosophy } from '../../data/aboutData'

export function EngineeringPhilosophy() {
  const Icon = philosophy.icon

  return (
    <Reveal className="relative mt-4 overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--fill-faint)] px-6 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-16">
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.06, 0.95] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris-400/[0.16] blur-[90px]"
      />

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-iris-400/25 bg-iris-400/[0.08] text-[var(--accent-text)]"
      >
        <Icon size={20} />
      </motion.span>

      <p className="mx-auto mt-6 max-w-2xl text-balance text-xl font-medium leading-8 tracking-[-0.02em] text-[var(--text)] sm:text-2xl">
        &ldquo;{philosophy.quote}&rdquo;
      </p>
      <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-6 text-[var(--text-muted)]">{philosophy.description}</p>
    </Reveal>
  )
}
