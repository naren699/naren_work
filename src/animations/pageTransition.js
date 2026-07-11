import { easing } from '../components/motionVariants'

/**
 * Premium route transition (Apple / Linear / Vercel feel).
 * Exit: current page fades + scales down slightly + blurs out.
 * Enter: next page rises in (translateY), un-blurs, scales up to 1.
 * Animates only opacity, transform and filter — all GPU-composited.
 * Kept within a 350–500ms budget per phase for 60 FPS.
 */
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98, filter: 'blur(6px)' },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: easing },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(6px)',
    transition: { duration: 0.35, ease: easing },
  },
}

/** Reduced-motion: a plain, quick cross-fade with no movement or blur. */
export const reducedPageTransitionVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.2, ease: 'linear' } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: 'linear' } },
}
