import { AboutHero } from '../components/shared/AboutHero'
import { StorySection } from '../components/shared/StorySection'
import { WorkflowTimeline } from '../components/shared/WorkflowTimeline'
import { LearningCards } from '../components/shared/LearningCards'
import { InterestCards } from '../components/shared/InterestCards'
import { EngineeringPhilosophy } from '../components/shared/EngineeringPhilosophy'
import { storySections, learningMethods, interests } from '../data/aboutData'

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <AboutHero />

        <div className="mt-16 space-y-12">
          {storySections.map((story, index) => (
            <StorySection key={story.title} {...story} index={index} />
          ))}

          <WorkflowTimeline />
          <LearningCards />
          <InterestCards {...learningMethods} />
          <InterestCards {...interests} />

          <EngineeringPhilosophy />
        </div>
      </div>
    </section>
  )
}
