export function TickerItem({ icon: Icon, label }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-soft)] transition-all duration-300 group-hover:scale-[1.03] group-hover:text-[var(--text)] group-hover:[text-shadow:0_0_14px_rgba(168,136,214,0.45)] sm:text-[11px] sm:tracking-[0.16em]">
      <Icon size={13} className="text-iris-400 transition-colors duration-300 group-hover:text-[var(--accent-text)]" aria-hidden="true" />
      {label}
    </span>
  )
}
