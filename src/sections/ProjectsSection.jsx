import { Reveal } from '../components/Motion'
import { SectionHeading } from '../components/shared/SectionHeading'
import { ProjectCard } from '../components/shared/ProjectCard'
import { projects } from '../data/portfolioData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8"><Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionHeading eyebrow="Selected work" title="Projects with a clearer story than a feature list." copy="Each build starts with a simple question: how can this become more useful, understandable, and pleasant to use?" /><span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-xs text-[var(--text-muted)]"><span className="h-1.5 w-1.5 rounded-full bg-iris-400" /> {projects.length} featured case studies</span></Reveal><div className="mt-14 space-y-6">{projects.map((project, index) => <Reveal key={project.title} direction={index ? 'left' : 'right'}><ProjectCard project={project} index={index} /></Reveal>)}</div></div></section>
  )
}
