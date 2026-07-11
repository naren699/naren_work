import { motion } from 'framer-motion'
import { Reveal, Stagger } from '../Motion'
import { chipVariants } from '../motionVariants'
import { Eyebrow } from './Eyebrow'

export function InterestCards({ eyebrow, title, description, items }) {
  return (
    <div className="border-t border-[var(--border-faint)] pt-12">
      <Reveal className="max-w-xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="text-balance text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
      </Reveal>

      <Stagger className="mt-7 flex flex-wrap gap-2.5" stagger={0.055}>
        {items.map((item) => (
          <motion.div
            key={item.label}
            variants={chipVariants}
            whileHover={{ y: -2, scale: 1.025 }}
            className="flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--fill-faint)] py-2 pl-2.5 pr-4 transition-colors duration-300 hover:border-iris-400/25 hover:bg-[var(--fill-faint)]"
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-iris-400/20 bg-iris-400/[0.08] text-[var(--accent-text)]">
              <item.icon size={13} />
            </span>
            <span className="text-xs text-[var(--text-soft)]">{item.label}</span>
          </motion.div>
        ))}
      </Stagger>
    </div>
  )
}
