import { useRef } from 'react'
import { useScroll, useSpring } from 'framer-motion'
import { TimelineProgress } from './TimelineProgress'
import { YearMarker } from './YearMarker'
import { TimelineEvent } from './TimelineEvent'

/** Groups events by year, preserving their given order. */
function groupByYear(events) {
  const groups = []
  events.forEach((event) => {
    const existing = groups.find((group) => group.year === event.year)
    if (existing) existing.items.push(event)
    else groups.push({ year: event.year, items: [event] })
  })
  return groups
}

/**
 * Premium vertical engineering timeline: centered alternating layout on desktop,
 * single column on mobile, with a scroll-driven glowing progress line.
 */
export function TechnicalTimeline({ events }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.55'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.4 })

  const groups = groupByYear(events)
  // Each group's starting offset = total items in all preceding groups, so we can
  // alternate sides globally without mutating a counter during render.
  const groupOffsets = groups.map((_, i) =>
    groups.slice(0, i).reduce((total, group) => total + group.items.length, 0),
  )

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl">
      <TimelineProgress progress={progress} />

      <div className="flex flex-col gap-12 sm:gap-16">
        {groups.map((group, groupIndex) => (
          <div key={group.year} className="flex flex-col gap-12 sm:gap-16">
            <YearMarker year={group.year} />
            {group.items.map((event, itemIndex) => {
              const globalIndex = groupOffsets[groupIndex] + itemIndex
              return <TimelineEvent key={event.id} event={event} side={globalIndex % 2 === 0 ? 'left' : 'right'} />
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
