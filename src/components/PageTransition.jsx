import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'
import { pageTransitionVariants, reducedPageTransitionVariants } from '../animations/pageTransition'

/**
 * Cinematic route transitions. Renders the current routed page via `useOutlet`
 * and keys it by pathname so AnimatePresence can play the outgoing page's exit
 * before mounting the next one (`mode="wait"` — prevents overlap / layout shift).
 * Nav, Footer and ambient chrome live outside this wrapper and stay mounted.
 */
export default function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion ? reducedPageTransitionVariants : pageTransitionVariants

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ willChange: 'transform, opacity, filter' }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}
