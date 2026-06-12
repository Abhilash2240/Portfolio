'use client'
import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

type RetractableCardProps = {
  id:       number
  title:    string
  year:     string
  tags:     readonly string[]
  points:   readonly string[]
  github:   string
  isOpen:   boolean
  onToggle: () => void
  index:    number
}

export default function RetractableCard({
  id, title, year, tags, points, github, isOpen, onToggle, index,
}: RetractableCardProps) {
  const reduceMotion = useReducedMotion()

  return (
    <article
      className="isometric-card reveal-step"
      style={{
        borderLeft:      isOpen ? '3px double var(--color-stamp-red)' : '3px double var(--color-aged-gold)',
        borderTop:       '3px double var(--color-aged-gold)',
        borderRight:     '3px double var(--color-aged-gold)',
        borderBottom:    isOpen ? '3px double var(--color-stamp-red)' : '3px double var(--color-aged-gold)',
        transition:      'border-color 500ms var(--ease-standard)',
        backgroundColor: isOpen ? 'var(--color-surface-low)' : 'transparent',
        minHeight:       isOpen ? 'auto' : '64px',
      }}
    >
      {/* Card header — always visible */}
      <button
        id={`project-toggle-${id}`}
        aria-expanded={isOpen}
        aria-controls={`project-content-${id}`}
        onClick={onToggle}
        className="magnetic"
        style={{
          width:          '100%',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          minHeight:      '64px',
          padding:        'var(--space-3) var(--space-6)',
          background:     'none',
          border:         'none',
          cursor:         'pointer',
          gap:            'var(--space-4)',
          textAlign:      'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flex: 1, flexWrap: 'wrap' }}>
          {/* Index number */}
          <span style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      'var(--text-body-xs)',
            color:         'var(--color-aged-gold)',
            letterSpacing: '0.05em',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize:   'var(--text-body-lg)',
            color:      'var(--color-ink)',
          }}>
            {title}
          </span>

          {/* Year stamp */}
          <span
            className="stamp-chip"
            style={{ color: 'var(--color-stamp-red)' }}
          >
            {year}
          </span>

          {/* Tags (hidden on mobile) */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }} className="tags-desktop">
            {tags.map(tag => (
              <span
                key={tag}
                className="stamp-chip"
                style={{ color: 'var(--color-prussian-blue)', fontSize: 'var(--text-body-xs)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <ChevronDown
          size={20}
          aria-hidden="true"
          style={{
            color:      'var(--color-aged-gold)',
            transition: reduceMotion ? 'none' : 'transform 400ms var(--ease-standard)',
            transform:  isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        />
      </button>

      {/* Expandable content */}
      <div
        id={`project-content-${id}`}
        role="region"
        aria-labelledby={`project-toggle-${id}`}
        style={{
          maxHeight:  isOpen ? '720px' : '0',
          overflow:   'hidden',
          transition: reduceMotion ? 'none' : 'max-height 500ms var(--ease-standard)',
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -10 }}
              animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
              style={{ padding: '0 var(--space-6) var(--space-6)' }}
            >
              {/* Divider */}
              <div style={{
                borderTop:    '1px solid var(--color-aged-gold)',
                opacity:      0.3,
                marginBottom: 'var(--space-4)',
              }} />

              {/* OPEN stamp */}
              <motion.div
                initial={reduceMotion ? false : { scale: 1.2, rotate: -8, opacity: 0 }}
                animate={{ scale: 1, rotate: -8, opacity: 0.85 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.15, ease: [0.0, 0.9, 0.57, 1.0], delay: 0.1 }}
                style={{
                  display:     'inline-flex',
                  marginBottom: 'var(--space-4)',
                }}
              >
                <span style={{
                  fontFamily:    'var(--font-display)',
                  fontWeight:    900,
                  fontSize:      'var(--text-heading-md)',
                  color:         'var(--color-stamp-red)',
                  border:        '4px solid var(--color-stamp-red)',
                  padding:       'var(--space-1) var(--space-3)',
                  letterSpacing: '0.04em',
                  opacity:       0.8,
                  transform:     'rotate(-8deg)',
                }}>
                  OPEN
                </span>
              </motion.div>

              {/* Bullet points */}
              <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                {points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.3, delay: 0.15 + i * 0.07 }}
                    style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}
                  >
                    <span style={{ color: 'var(--color-aged-gold)', flexShrink: 0, marginTop: '2px' }}>✦</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-ink)' }}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* GitHub link */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
                className="ink-wash-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', borderColor: 'var(--color-ink)', color: 'var(--color-ink)', textDecoration: 'none', fontSize: 'var(--text-body-xs)', padding: 'var(--space-2) var(--space-4)' }}
              >
                <GithubIcon size={14} aria-hidden="true" />
                View on GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}
