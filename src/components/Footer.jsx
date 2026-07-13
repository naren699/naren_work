import { Reveal } from './Motion'

const footerLinks = [
  { label: 'Email', href: 'mailto:pnarendhiran6@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/naren699', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/narendhiran-p06/', external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-faint)] px-5 py-10 sm:px-7 lg:px-8">
      <Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-faint)] sm:flex-row sm:items-center">
        <p>Narendhiran P — © 2026</p>
        <div className="flex flex-wrap items-center gap-6">
          {footerLinks.map(({ label, href, external }) => (
            <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="link-underline hover:text-[var(--text)]">{label}</a>
          ))}
        </div>
      </Reveal>
    </footer>
  )
}
