import HomeHero from '../sections/HomeHero'
import AboutSection from '../sections/AboutSection'
import { AchievementTicker } from '../components/shared/AchievementTicker'

export default function HomePage() {
  return (
    <>
      <AchievementTicker />
      <HomeHero />
      <AboutSection />
    </>
  )
}
