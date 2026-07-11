import { achievements } from '../../data/achievements'
import { TickerItem } from './TickerItem'

const loop = [...achievements, ...achievements]

export function AchievementTicker() {
  return (
    <section aria-label="Achievements" className="ticker-viewport relative z-10 mt-20 w-full overflow-hidden border-y border-[var(--border-faint)] bg-black/20 backdrop-blur-md">
      <div className="ticker-track flex w-max items-center py-3.5 sm:py-4">
        {loop.map((item, index) => (
          <div key={`${item.label}-${index}`} className="group inline-flex shrink-0 items-center">
            <TickerItem {...item} />
            <span
              aria-hidden="true"
              className="mx-4 h-1 w-1 shrink-0 rounded-full bg-iris-400/50 shadow-[0_0_6px_1px_rgba(168,136,214,0.3)] transition-all duration-300 group-hover:bg-iris-300 group-hover:shadow-[0_0_10px_2px_rgba(168,136,214,0.55)] sm:mx-6"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
