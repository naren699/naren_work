export const easing = [0.16, 1, 0.3, 1]

export const cardHover = {
  y: -5,
  transition: { type: 'spring', stiffness: 320, damping: 24 },
}

export const chipVariants = {
  hidden: { opacity: 0, y: 7, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: easing } },
}
