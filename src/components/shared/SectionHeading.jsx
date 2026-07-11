import { Eyebrow } from './Eyebrow'

export function SectionHeading({ eyebrow, title, copy }) {
  return <div className="max-w-2xl"><Eyebrow>{eyebrow}</Eyebrow><h2 className="text-balance text-3xl font-semibold tracking-[-0.055em] text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>{copy && <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[var(--text-muted)] sm:text-lg">{copy}</p>}</div>
}
