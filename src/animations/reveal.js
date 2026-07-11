import { easing } from '../components/motionVariants'

/** Scroll-reveal timing (Part 2 spec: 0.7–0.9s). */
export const REVEAL_DURATION = 0.8

/**
 * Section scroll-reveal variants. Fades up from 30px with a subtle scale and
 * blur-to-sharp finish. Supports a direction for lateral reveals. Only
 * transform / opacity / filter are animated.
 */
export function revealVariants({ direction = 'up', delay = 0, reducedMotion = false } = {}) {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.35, ease: easing, delay } },
    }
  }

  const offset = direction === 'left' ? { x: -30 } : direction === 'right' ? { x: 30 } : { y: 30 }

  return {
    hidden: { opacity: 0, scale: 0.98, filter: 'blur(6px)', ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: REVEAL_DURATION, ease: easing, delay },
    },
  }
}
