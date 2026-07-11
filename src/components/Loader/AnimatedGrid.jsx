import { motion } from 'framer-motion'

export default function AnimatedGrid() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.09) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '42px 42px'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_78%)]" />
    </>
  )
}
