'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
  delay?: number
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count  = inView ? value : 0
  const displayed = useCountUp(count, 1800)

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  )
}

export default function StatCounter({ value, suffix, label, delay = 0 }: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1.2, 0.36, 1] }}
      style={{
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        gap:             'var(--space-1)',
        padding:         'var(--space-6) var(--space-8)',
        borderTop:       '3px double var(--color-aged-gold)',
        minWidth:        '140px',
      }}
    >
      <span style={{
        fontFamily:    'var(--font-display)',
        fontWeight:    900,
        fontSize:      '2.5rem',
        color:         'var(--color-ink)',
        lineHeight:    1,
      }}>
        <AnimatedNumber value={value} suffix={suffix} />
      </span>
      <span style={{
        fontFamily:    'var(--font-label)',
        fontSize:      'var(--text-body-xs)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color:         'var(--color-text-muted)',
      }}>
        {label}
      </span>
    </motion.div>
  )
}
