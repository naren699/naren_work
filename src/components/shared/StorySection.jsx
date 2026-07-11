import { motion } from 'framer-motion'
import { Reveal, Stagger } from '../Motion'
import { chipVariants, easing } from '../motionVariants'

export function StorySection({ eyebrow, title, icon: Icon, lead, body, highlight, points, index = 0 }) {
  const reversed = index % 2 === 1

  return (
    <div className="relative grid items-start gap-8 border-t border-[var(--border-faint)] pt-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
      <Reveal direction={reversed ? 'left' : 'right'} className={reversed ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-2">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easing }}
            className="h-px w-7 origin-left bg-iris-300/75"
          />
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-text)]">{eyebrow}</p>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-iris-400/20 bg-iris-400/[0.08]"
          >
            <Icon size={19} className="text-[var(--accent-text)]" />
          </motion.span>
          <h3 className="text-balance text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl">{title}</h3>
        </div>
      </Reveal>

      <Reveal delay={0.08} direction={reversed ? 'right' : 'left'} className={reversed ? 'lg:order-1' : ''}>
        <p className="text-pretty text-base leading-7 text-[var(--text-soft)] sm:text-lg">{lead}</p>
        <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{body}</p>

        {highlight ? (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-iris-400/25 bg-iris-400/[0.08] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-iris-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--accent-text)]">{highlight.label}</span>
            <span className="text-xs text-[var(--text-soft)]">{highlight.value}</span>
          </div>
        ) : null}

        <Stagger className="mt-5 flex flex-wrap gap-2" stagger={0.05}>
          {points.map((point) => (
            <motion.span
              key={point}
              variants={chipVariants}
              whileHover={{ y: -2, scale: 1.035 }}
              className="rounded-full border border-[var(--border)] bg-[var(--fill-faint)] px-3.5 py-1.5 text-xs text-[var(--text-soft)] transition-colors duration-300 hover:border-iris-400/25 hover:text-iris-200"
            >
              {point}
            </motion.span>
          ))}
        </Stagger>
      </Reveal>
    </div>
  )
}
