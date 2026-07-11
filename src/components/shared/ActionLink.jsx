import { motion } from 'framer-motion'

export function ActionLink({ children, className = '', href, onClick, download = false, external = false }) {
  const inner = <>{children}</>
  const shared = { whileHover: { y: -3, scale: 1.03 }, whileTap: { scale: 0.98 }, transition: { type: 'spring', stiffness: 380, damping: 22 }, className }
  return href ? <motion.a href={href} onClick={onClick} download={download} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...shared}>{inner}</motion.a> : <motion.button type="button" onClick={onClick} {...shared}>{inner}</motion.button>
}
