import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import CustomCursor from './CustomCursor'
import Nav from './Nav'
import Footer from './Footer'
import PageTransition from './PageTransition'
import ScrollToTop from './ScrollToTop'
import AnimatedBackground from './background/AnimatedBackground'

export default function Layout() {
  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 })

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <ScrollToTop />
      <main className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)] selection:bg-iris-400 selection:text-iris-950">
        <motion.div className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-iris-300 via-iris-400 to-amber-300" style={{ scaleX: progressScale }} />
        <AnimatedBackground />

        <Nav />
        <PageTransition />
        <Footer />
      </main>
    </MotionConfig>
  )
}
