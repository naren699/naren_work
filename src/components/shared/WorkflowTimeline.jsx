import { motion } from 'framer-motion'
import { Reveal } from '../Motion'
import { Eyebrow } from './Eyebrow'
import { easing } from '../motionVariants'
import { workflowSteps } from '../../data/aboutData'

export function WorkflowTimeline() {
  return (
    <div className="border-t border-[var(--border-faint)] pt-12">
      <Reveal>
        <Eyebrow>Process</Eyebrow>
        <h3 className="text-balance max-w-xl text-2xl font-semibold tracking-[-0.045em] text-[var(--text)] sm:text-3xl">
          My product development process
        </h3>
      </Reveal>

      <div className="relative mt-10 overflow-x-auto pb-2">
        <div className="relative flex min-w-max flex-col gap-0 lg:min-w-0 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: easing }}
            className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] origin-left bg-gradient-to-r from-iris-400/60 via-iris-400/25 to-transparent lg:block"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: easing }}
            className="absolute left-5 top-5 w-px origin-top bg-gradient-to-b from-iris-400/60 via-iris-400/25 to-transparent lg:hidden"
            style={{ height: 'calc(100% - 2.5rem)' }}
          />

          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: easing, delay: index * 0.06 }}
              className="relative flex items-center gap-3 py-3 lg:flex-1 lg:flex-col lg:items-center lg:gap-3 lg:py-0 lg:text-center"
            >
              <motion.span
                whileHover={{ scale: 1.1, borderColor: 'rgba(168,136,214,0.55)' }}
                className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-iris-400/25 bg-[var(--surface-solid)] text-[var(--accent-text)] shadow-[0_0_0_4px_rgba(10,10,10,1)]"
              >
                <step.icon size={16} />
              </motion.span>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)] lg:mt-1">
                {step.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal delay={0.1} className="mt-8 max-w-2xl">
        <p className="text-sm leading-6 text-[var(--text-muted)]">
          Great software begins with understanding the problem before writing code. I build step by step—research, intuitive design, scalable development, thorough testing, and continuous improvement based on feedback.
        </p>
      </Reveal>
    </div>
  )
}
