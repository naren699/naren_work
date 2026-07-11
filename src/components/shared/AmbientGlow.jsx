import { motion } from 'framer-motion'

export function AmbientGlow({ hovered }) {
  return (
    <>
      <motion.div
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        style={{ opacity: hovered ? 1 : undefined }}
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-iris-400/[0.14] blur-[70px] transition-opacity duration-500"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 1.5 }}
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-iris-400/[0.12] via-transparent to-amber-300/[0.06] blur-2xl"
      />
    </>
  )
}
