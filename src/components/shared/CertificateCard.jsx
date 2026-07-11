import { motion } from 'framer-motion'
import { Award, BadgeCheck, Building2, CalendarDays, ExternalLink } from 'lucide-react'
import { chipVariants, easing } from '../motionVariants'

export function CertificateCard({ certificate, index }) {
  const { title, provider, issuedYear, credentialType, category, description, skills, credentialUrl, accent, icon: Icon } = certificate
  const isAmber = accent === 'amber'
  const accentText = isAmber ? 'text-amber-300' : 'text-[var(--accent-text)]'
  const accentBorder = isAmber ? 'border-amber-300/15 bg-amber-300/[0.07]' : 'border-iris-300/15 bg-iris-300/[0.07]'
  const gradientBorder = isAmber
    ? 'from-amber-300/70 via-amber-200/15 to-iris-400/50'
    : 'from-iris-400/70 via-iris-300/15 to-amber-300/50'

  const meta = [
    { icon: Building2, label: 'Provider', value: provider },
    { icon: CalendarDays, label: 'Issued', value: issuedYear },
    { icon: Award, label: 'Credential', value: credentialType },
  ]

  return (
    <motion.div
      variants={chipVariants}
      animate={{ y: [0, -6, 0] }}
      transition={{ y: { duration: 5.5 + (index % 3), repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 } }}
      className="group relative rounded-[1.6rem] p-px"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-white/[0.09] transition-opacity duration-500 group-hover:opacity-0" />
      <div className={`pointer-events-none absolute inset-0 rounded-[1.6rem] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${gradientBorder}`} />

      <article className={`relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition-all duration-300 group-hover:shadow-[0_24px_60px_-24px_rgba(168,136,214,0.4)] sm:p-7 ${isAmber ? 'group-hover:border-amber-300/20' : 'group-hover:border-iris-300/20'}`}>
        <motion.div
          initial={{ x: '-110%' }}
          whileHover={{ x: '110%' }}
          transition={{ duration: 0.7, ease: easing }}
          className={`pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent to-transparent ${isAmber ? 'via-amber-300/[0.05]' : 'via-iris-300/[0.05]'}`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <motion.div whileHover={{ rotate: 6, scale: 1.08 }} className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${accentBorder} ${accentText}`}>
            <Icon size={19} aria-hidden="true" />
          </motion.div>
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${accentBorder} ${accentText}`}>
            {category}
          </span>
        </div>

        <h3 className="relative mt-6 text-lg font-medium leading-6 tracking-[-0.03em] text-[var(--text)]">{title}</h3>
        <p className="relative mt-3 text-sm leading-6 text-[var(--text-muted)]">{description}</p>

        <div className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-[var(--border-faint)] pt-6">
          {meta.map(({ icon: MetaIcon, label, value }) => (
            <div key={label} className="flex items-start gap-2">
              <MetaIcon size={14} className={`mt-0.5 shrink-0 ${accentText}`} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-faint)]">{label}</p>
                <p className="mt-0.5 truncate text-xs font-medium text-[var(--text-soft)]">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-faint)]">Skills Learned</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium text-[var(--text-soft)] transition-colors duration-300 ${isAmber ? 'border-[var(--border-faint)] bg-[var(--fill-faint)] group-hover:border-amber-300/25 group-hover:text-amber-100' : 'border-[var(--border-faint)] bg-[var(--fill-faint)] group-hover:border-iris-300/25 group-hover:text-iris-100'}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-[var(--border-faint)] pt-5">
          <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-faint)]">
            <BadgeCheck size={14} className={accentText} aria-hidden="true" />
            Verified by {provider}
          </div>

          <motion.a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View credential for ${title} (opens in a new tab)`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            className={`group/btn inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] ${isAmber ? 'border-amber-300/25 text-amber-200 hover:border-amber-300/60 hover:bg-amber-300/[0.06] focus-visible:ring-amber-300/60' : 'border-iris-300/25 text-iris-200 hover:border-iris-300/60 hover:bg-iris-300/[0.06] focus-visible:ring-iris-300/60'}`}
          >
            View Credential
            <ExternalLink size={13} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </motion.a>
        </div>
      </article>
    </motion.div>
  )
}
