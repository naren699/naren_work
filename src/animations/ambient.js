export const GLOW_COLORS = {
  purple: 'rgba(139, 107, 197, 0.16)',
  indigo: 'rgba(99, 102, 241, 0.13)',
  blue: 'rgba(96, 165, 250, 0.11)',
}

export function glowDrift({ x = 24, y = -18, duration = 24, delay = 0 } = {}) {
  return {
    animate: {
      x: [0, x, 0],
      y: [0, y, 0],
      scale: [0.95, 1.05, 0.95],
      opacity: [0.55, 0.85, 0.55],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }
}

export function hudFloat({ y = 10, rotate = 4, duration = 9, delay = 0 } = {}) {
  return {
    animate: {
      y: [0, -y, 0],
      rotate: [0, rotate, 0],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }
}
