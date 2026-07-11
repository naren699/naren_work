import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../icons'
import { Stagger } from '../Motion'
import { cardHover, chipVariants, easing } from '../motionVariants'
import { getProjectTheme } from '../../data/projectThemes'
import { ActionLink } from './ActionLink'
import { TechPill } from './TechPill'
import { ProjectPreview } from './ProjectPreview'

export function ProjectCard({ project, index }) {
  const theme = getProjectTheme(project.accent)
  const hasGithub = Boolean(project.links?.github)
  const hasLiveDemo = Boolean(project.links?.live)

  return (
    <motion.article
      whileHover={cardHover}
      style={{ '--accent': theme.hex, '--accent-rgb': theme.rgb }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5 shadow-2xl shadow-black/15 transition-colors duration-500 hover:border-[rgba(var(--accent-rgb),0.32)] hover:shadow-[0_35px_80px_-30px_rgba(var(--accent-rgb),0.35)] sm:p-7 lg:p-8"
    >
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: easing }} className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.7)] to-transparent" />
      <motion.div animate={{ x: [0, 20, 0], y: [0, 10, 0] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute -right-24 top-0 h-60 w-60 scale-100 rounded-full bg-[rgba(var(--accent-rgb),0.08)] blur-3xl transition-transform duration-500 group-hover:scale-125" />
      <div className={`relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.8fr)] ${index % 2 ? 'lg:grid-cols-[minmax(330px,0.8fr)_minmax(0,1fr)]' : ''}`}>
        <div className={index % 2 ? 'lg:order-2' : ''}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">{project.number}</span>
            <span className="h-px w-8 bg-[rgba(var(--accent-rgb),0.4)]" />
            <span className="text-xs text-[var(--text-faint)]">{project.eyebrow}</span>
          </div>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-[var(--text-soft)]">{project.pitch}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-[var(--border-faint)] py-4 sm:grid-cols-4">
            <div><dt className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-faint)]">Category</dt><dd className="mt-1 text-xs leading-5 text-[var(--text-soft)]">{project.type}</dd></div>
            <div><dt className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-faint)]">Timeline</dt><dd className="mt-1 text-xs leading-5 text-[var(--text-soft)]">{project.date}</dd></div>
            <div><dt className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-faint)]">Role</dt><dd className="mt-1 text-xs leading-5 text-[var(--text-soft)]">{project.role}</dd></div>
            <div><dt className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-faint)]">Status</dt><dd className="mt-1 flex items-center gap-1.5 text-xs leading-5 text-[var(--text-soft)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{project.status}</dd></div>
          </dl>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Overview</p><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{project.overview}</p></div>
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Why it matters</p><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{project.problem}</p></div>
          </div>

          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Build highlights</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex gap-2 text-sm leading-5 text-[var(--text-soft)]"><Check size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />{feature}</li>)}</ul>
          </div>

          {project.stats?.length ? (
            <Stagger className="mt-6 flex flex-wrap gap-2" stagger={0.045}>
              {project.stats.map((stat) => (
                <motion.span key={stat.label} variants={chipVariants} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-faint)] bg-[var(--fill-faint)] px-3 py-1.5 text-[11px] text-[var(--text-muted)]">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  {stat.label} <span className="font-medium text-[var(--text-soft)]">{stat.value}</span>
                </motion.span>
              ))}
            </Stagger>
          ) : null}

          <Stagger className="mt-4 flex flex-wrap gap-2" stagger={0.045}>{project.stack.map((item) => <TechPill key={item.label} icon={item.icon}>{item.label}</TechPill>)}</Stagger>
          <p className="mt-5 border-l border-[rgba(var(--accent-rgb),0.35)] pl-3 text-sm leading-6 text-[var(--text-muted)]">{project.buildNotes}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ActionLink href={project.links?.github || '#'} onClick={hasGithub ? undefined : (event) => event.preventDefault()} external={hasGithub} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold text-[var(--text)] transition-colors hover:border-[rgba(var(--accent-rgb),0.4)] hover:bg-[rgba(var(--accent-rgb),0.06)] hover:text-[var(--accent)]">
              <GithubIcon size={15} /> GitHub {!hasGithub && <span className="text-[var(--text-faint)]">soon</span>}
            </ActionLink>
            <ActionLink href={project.links?.live || '#'} onClick={hasLiveDemo ? undefined : (event) => event.preventDefault()} external={hasLiveDemo} className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-xs font-semibold text-neutral-950 transition-[filter] duration-300 hover:brightness-110">
              Live demo <motion.span whileHover={{ rotate: 12, x: 2 }}><ExternalLink size={14} /></motion.span>{!hasLiveDemo && <span className="opacity-55">soon</span>}
            </ActionLink>
          </div>
        </div>
        <div className={index % 2 ? 'lg:order-1' : ''}><ProjectPreview project={project} /></div>
      </div>
    </motion.article>
  )
}
