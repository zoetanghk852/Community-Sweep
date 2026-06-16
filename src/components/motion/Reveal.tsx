'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  amount?: number
  as?: 'div' | 'li'
}

/** Scroll-triggered fade-up. Honors prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.3,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = as === 'li' ? motion.li : motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

type FadeUpOnMountProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  x?: number
}

/** Above-the-fold entrance on page load. Honors prefers-reduced-motion. */
export function FadeUpOnMount({
  children,
  className,
  delay = 0,
  y = 20,
  x = 0,
}: FadeUpOnMountProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      animate={reduce ? undefined : { opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
