import { motion } from 'framer-motion'
import { easing } from '../motionVariants'

export function ProjectPreview({ project }) {
  const isWeather = project.previewStyle === 'weather-dashboard'
  const isFinance = project.previewStyle === 'finance-dashboard'
  const Icon = project.icon

  return (
    <motion.div
      data-theme="dark"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="project-preview relative isolate min-h-[278px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(var(--accent-rgb),0.16),transparent_65%)] bg-[var(--surface-solid)] p-4 shadow-2xl shadow-black/30 transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-20px_rgba(var(--accent-rgb),0.3)] sm:min-h-[320px] sm:p-5"
    >
      <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-[rgba(var(--accent-rgb),0.35)]" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[rgba(var(--accent-rgb),0.35)]" />

      <motion.div animate={{ x: [0, 12, 0], y: [0, 8, 0] }} transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }} className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.22),transparent_70%)] blur-3xl" />

      <div className="relative rounded-xl border border-[var(--border-faint)] bg-neutral-950/70 p-4 backdrop-blur">
        <div className="flex items-center justify-between border-b border-[var(--border-faint)] pb-3">
          <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-[var(--divider)]" /><span className="h-2 w-2 rounded-full bg-[var(--divider)]" /></div>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-faint)]">Project preview</span>
        </div>

        {isWeather ? (
          <div className="pt-5">
            <div className="flex items-center justify-between">
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[rgba(var(--accent-rgb),0.85)]">Chennai, India</p><p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text)]">28°</p></div>
              <motion.div whileHover={{ rotate: 6, scale: 1.06 }} className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.07)]">
                <Icon size={21} className="text-[var(--accent)]" />
              </motion.div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Humidity', 'Wind', 'Condition'].map((item, index) => (
                <motion.div key={item} whileHover={{ y: -2 }} className="rounded-lg border border-[var(--border-faint)] bg-[var(--fill-faint)] p-2.5">
                  <p className="text-[9px] text-[var(--text-faint)]">{item}</p>
                  <p className="mt-1 text-xs font-medium text-[var(--text-soft)]">{index === 0 ? '74%' : index === 1 ? '12 km/h' : 'Cloudy'}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 flex h-12 items-end gap-1.5 border-b border-[var(--border-faint)] pb-1">
              {[22, 38, 30, 55, 42, 68, 60, 72, 49].map((height, index) => (
                <motion.span key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.52, delay: index * 0.035, ease: easing }} className="w-full rounded-t bg-[var(--accent)]" style={{ opacity: index % 2 === 0 ? 0.7 : 0.35 }} />
              ))}
            </div>
          </div>
        ) : isFinance ? (
          <div className="pt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[rgba(var(--accent-rgb),0.85)]">This month</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--text)]">₹42,180</p>
              </div>
              <motion.div whileHover={{ rotate: 6, scale: 1.06 }} className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.07)]">
                <Icon size={21} className="text-[var(--accent)]" />
              </motion.div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Income', 'Expenses', 'Saved'].map((item, index) => (
                <motion.div key={item} whileHover={{ y: -2 }} className="rounded-lg border border-[var(--border-faint)] bg-[var(--fill-faint)] p-2.5">
                  <p className="text-[9px] text-[var(--text-faint)]">{item}</p>
                  <p className="mt-1 text-xs font-medium text-[var(--text-soft)]">{index === 0 ? '₹68,000' : index === 1 ? '₹42,180' : '38%'}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 space-y-2.5 rounded-xl border border-[var(--border-faint)] bg-[var(--fill-faint)] p-3.5">
              {[{ label: 'Food & Dining', pct: 72 }, { label: 'Transport', pct: 48 }, { label: 'Shopping', pct: 30 }].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-[9px] text-[var(--text-faint)]"><span>{row.label}</span><span>{row.pct}%</span></div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-[var(--divider)]"><motion.div initial={{ width: 0 }} whileInView={{ width: `${row.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.6, ease: easing }} className="h-full rounded-full bg-[var(--accent)]" /></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="pt-5">
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ rotate: 8, scale: 1.08 }} className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.07)]">
                <Icon size={18} className="text-[var(--accent)]" />
              </motion.div>
              <div><p className="text-xs font-semibold text-[var(--text)]">Study notes</p><p className="mt-0.5 text-[10px] text-[var(--text-faint)]">AI summary ready</p></div>
              <span className="ml-auto rounded-full bg-[rgba(var(--accent-rgb),0.1)] px-2 py-1 text-[9px] font-medium text-[var(--accent)]">Gemini</span>
            </div>
            <div className="mt-5 rounded-xl border border-[var(--border-faint)] bg-[var(--fill-faint)] p-3.5">
              <div className="h-2 w-24 rounded-full bg-white/65" />
              <div className="mt-3 space-y-2"><div className="h-1.5 w-full rounded-full bg-[var(--divider)]" /><div className="h-1.5 w-[83%] rounded-full bg-[var(--divider)]" /><div className="h-1.5 w-[65%] rounded-full bg-[var(--divider)]" /></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.07)] p-3"><p className="text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)]">Input</p><p className="mt-1.5 text-xs text-[var(--text)]">Long-form material</p></div>
              <div className="rounded-xl border border-[rgba(var(--accent-rgb),0.2)] bg-[rgba(var(--accent-rgb),0.07)] p-3"><p className="text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)]">Output</p><p className="mt-1.5 text-xs text-[var(--text)]">Focused notes</p></div>
            </div>
          </div>
        )}
      </div>

      <motion.div animate={{ x: [0, -10, 0], y: [0, -8, 0] }} transition={{ duration: 11, ease: 'easeInOut', repeat: Infinity }} className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.22),transparent_70%)] blur-2xl" />
    </motion.div>
  )
}
