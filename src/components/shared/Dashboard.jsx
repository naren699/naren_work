import { motion } from 'framer-motion'
import { Code2, GraduationCap, Sparkles } from 'lucide-react'
import { Stagger } from '../Motion'
import { cardHover, chipVariants, easing } from '../motionVariants'
import { TechPill } from './TechPill'

export function Dashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, ease: easing }} className="relative mt-6 w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <div className="hero-panel relative overflow-hidden rounded-[1.75rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6 lg:p-7">
          <div className="flex items-center justify-between border-b border-[var(--border-faint)] pb-5"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-xl border border-iris-400/20 bg-iris-300/[0.08]"><Code2 size={19} className="text-[var(--accent-text)]" /></div><div><p className="text-xs font-semibold text-[var(--text)]">Developer dashboard</p><p className="mt-0.5 text-[11px] text-[var(--text-faint)]">A quick look at my focus</p></div></div><span className="rounded-full border border-iris-300/15 bg-iris-300/[0.06] px-2.5 py-1 text-[10px] font-medium text-[var(--accent-text)]">2026</span></div>
          <Stagger className="grid gap-4 pt-5 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]" stagger={0.09}>
            <motion.div variants={chipVariants} whileHover={cardHover} className="rounded-2xl border border-[var(--border-faint)] bg-[var(--fill-faint)] p-4"><div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-iris-400">Currently building</p><p className="mt-2 text-lg font-medium tracking-[-0.03em] text-[var(--text)]">AI-powered learning tools</p></div><motion.div animate={{ rotate: [0, 7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><Sparkles size={18} className="mt-0.5 shrink-0 text-[var(--accent-text)]" /></motion.div></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[var(--fill)]"><motion.div initial={{ width: 0 }} whileInView={{ width: '72%' }} viewport={{ once: true }} transition={{ duration: 1.25, ease: easing }} className="dashboard-progress h-full rounded-full bg-gradient-to-r from-iris-300 to-iris-400" /></div></motion.div>
            <motion.div variants={chipVariants} whileHover={cardHover} className="rounded-2xl border border-[var(--border-faint)] bg-[var(--fill-faint)] p-4"><p className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-faint)]">Core stack</p><Stagger className="mt-3 flex flex-wrap gap-1.5" stagger={0.05}><TechPill>React</TechPill><TechPill>Firebase</TechPill><TechPill>JavaScript</TechPill></Stagger></motion.div>
            <motion.div variants={chipVariants} whileHover={cardHover} className="rounded-2xl border border-[var(--border-faint)] bg-[var(--fill-faint)] p-4"><p className="text-[10px] uppercase tracking-[0.14em] text-[var(--text-faint)]">Primary lens</p><p className="mt-3 text-sm font-medium leading-6 text-[var(--text-soft)]">User-facing web products with useful AI workflows.</p></motion.div>
            <motion.div variants={chipVariants} whileHover={cardHover} className="flex items-center gap-3 rounded-2xl border border-iris-400/10 bg-iris-400/[0.045] p-4"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-iris-300 text-iris-950"><GraduationCap size={17} /></div><p className="text-xs leading-5 text-[var(--text-soft)]"><span className="font-semibold text-[var(--text)]">B.Tech AI & DS</span> · Saveetha Engineering College</p></motion.div>
          </Stagger>
        </div>
      </div>
    </motion.div>
  )
}
