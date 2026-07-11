import { motion } from 'framer-motion'
import { Stagger } from '../Motion'
import { chipVariants } from '../motionVariants'

function GrowthCard({ title, description, icon: Icon, accent }) {
  const isAmber = accent === 'amber'
  const accentText = isAmber ? 'text-amber-300' : 'text-[var(--accent-text)]'
  const accentBorder = isAmber ? 'border-amber-300/15 bg-amber-300/[0.07]' : 'border-iris-300/15 bg-iris-300/[0.07]'
  const hoverBorder = isAmber ? 'hover:border-amber-300/25' : 'hover:border-iris-400/25'
  const cornerGlow = isAmber ? 'bg-amber-300/10' : 'bg-iris-400/10'

  return (
    <motion.article
      variants={chipVariants}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className={`group relative overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-colors duration-300 ${hoverBorder}`}
    >
      <div className={`pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${cornerGlow}`} />

      <span className={`relative grid h-11 w-11 place-items-center rounded-xl border ${accentBorder} ${accentText}`}>
        <Icon size={20} aria-hidden="true" />
      </span>

      <h3 className="relative mt-5 text-lg font-medium tracking-[-0.03em] text-[var(--text)]">{title}</h3>
      <p className="relative mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
    </motion.article>
  )
}

export function GrowthCards({ items }) {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
      {items.map((item) => (
        <GrowthCard key={item.title} {...item} />
      ))}
    </Stagger>
  )
}
