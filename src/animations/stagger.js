import { chipVariants } from '../components/motionVariants'

/**
 * Stagger container: sequences its children as they enter the viewport.
 * Default 80ms between children (Part 3 spec: 60–100ms). Set to 0 for
 * reduced motion so children simply fade in together.
 */
export function staggerContainer({ stagger = 0.08, delayChildren = 0, reducedMotion = false } = {}) {
  return {
    hidden: {},
    visible: { transition: { delayChildren, staggerChildren: reducedMotion ? 0 : stagger } },
  }
}

/**
 * Per-child stagger item. Re-exports the shared `chipVariants` already used by
 * cards across the app so there is a single source of truth for child reveals.
 */
export const staggerItem = chipVariants
