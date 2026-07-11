import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const options = [
  { key: 'dark', label: 'Dark', Icon: Moon },
  { key: 'light', label: 'Light', Icon: Sun },
]

/**
 * Premium segmented theme switcher (Linear / Raycast style). A single sliding
 * pill highlights the active segment; icons rotate and text fades on change.
 * Fully keyboard accessible via a radiogroup of buttons.
 */
export function ThemeToggle({ className = '' }) {
  const { theme, isDark, setTheme } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={`relative inline-flex h-9 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-0.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.4)] backdrop-blur-md ${className}`}
    >
      {/* Sliding indicator */}
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={{ x: isDark ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full border ${
          isDark
            ? 'border-iris-400/40 bg-iris-400/[0.16] shadow-[0_0_18px_-2px_rgba(168,136,214,0.55)]'
            : 'border-amber-300/50 bg-amber-300/20 shadow-[0_2px_10px_-2px_rgba(120,90,20,0.35)]'
        }`}
      />

      {options.map(({ key, label, Icon }) => {
        const active = theme === key
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} theme`}
            onClick={() => setTheme(key)}
            className={`relative z-10 inline-flex h-8 items-center gap-1 rounded-full px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.05em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-400/60 ${
              active ? 'text-[var(--text)]' : 'text-[var(--text-faint)] hover:text-[var(--text-muted)]'
            }`}
          >
            <motion.span
              animate={{ rotate: active ? 0 : -35, scale: active ? 1 : 0.85 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              className={active ? (key === 'dark' ? 'text-iris-200' : 'text-amber-300') : ''}
            >
              <Icon size={12} aria-hidden="true" />
            </motion.span>
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
