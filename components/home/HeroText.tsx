'use client'
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTypewriter } from '@/hooks/useTypewriter'
import { dropIn, inkReveal } from '@/lib/animations'

const ROLES = [
  'AI/ML Engineer',
  'Backend Developer',
  'Cloud Technologist',
  'Data Pipeline Architect',
]

export default function HeroText() {
  const reduceMotion = useReducedMotion()
  const role = useTypewriter(ROLES, 80, 2200)

  return (
    <div style={{ maxWidth: '600px' }}>
      {/* Overline */}
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0.01 } : { duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily:    'var(--font-label)',
          fontSize:      'var(--text-body-xs)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color:         'var(--color-aged-gold)',
          marginBottom:  'var(--space-4)',
        }}
      >
        ✦ Kinetic Archive Ver. 1.0
      </motion.p>

      {/* Name */}
      <motion.h1
        variants={reduceMotion ? undefined : dropIn}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? { opacity: 1 } : 'visible'}
        style={{
          fontFamily:    'var(--font-display)',
          fontWeight:    900,
          fontSize:      'clamp(2.5rem, 5vw, 4.5rem)',
          lineHeight:    1.05,
          color:         'var(--color-ink)',
          letterSpacing: '-0.02em',
          marginBottom:  'var(--space-4)',
        }}
      >
        Gundelli
        <br />
        <span style={{ color: 'var(--color-aged-gold)' }}>Abhilash</span>
      </motion.h1>

      {/* Typewriter Role */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reduceMotion ? { duration: 0.01 } : { duration: 0.5, delay: 0.6 }}
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '1rem',
          color:         'var(--color-vintage-green)',
          marginBottom:  'var(--space-6)',
          minHeight:     '1.5rem',
          display:       'flex',
          alignItems:    'center',
          gap:           '2px',
        }}
      >
        <span>{'>'}</span>
        <span>&nbsp;</span>
        <span>{role}</span>
        <span
          style={{
            display:         'inline-block',
            width:           '2px',
            height:          '1.1em',
            background:      'var(--color-vintage-green)',
            marginLeft:      '2px',
            animation:       reduceMotion ? 'none' : 'blink 1s step-end infinite',
            verticalAlign:   'middle',
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? { opacity: 1 } : 'visible'}
        variants={reduceMotion ? undefined : inkReveal}
        style={{
          fontFamily:    'var(--font-serif)',
          fontStyle:     'italic',
          fontSize:      '1.25rem',
          color:         'var(--color-ink)',
          lineHeight:    1.6,
          marginBottom:  'var(--space-12)',
          paddingLeft:   'var(--space-4)',
          borderLeft:    '3px double var(--color-aged-gold)',
        }}
      >
        Engineering Intelligence.
        <br />
        Architecting Scale.
      </motion.p>
    </div>
  )
}
