import { MapPin } from 'lucide-react'
import { Reveal } from './Motion'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-faint)] px-5 py-7 sm:px-7 lg:px-8"><Reveal className="mx-auto flex max-w-7xl flex-col justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-faint)] sm:flex-row sm:items-center"><p>© 2026_Narendhiran_P // All_rights_reserved</p><div className="flex flex-wrap items-center gap-x-4 gap-y-2"><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-iris-400" /> System_op: Normal</span><span className="hidden h-3 w-px bg-[var(--divider)] sm:inline-block" /><span className="flex items-center gap-1.5"><MapPin size={13} className="text-iris-400" /> Server: Chennai, IND</span><span className="hidden h-3 w-px bg-[var(--divider)] sm:inline-block" /><span>Uptime: 99.9%</span></div></Reveal></footer>
  )
}
