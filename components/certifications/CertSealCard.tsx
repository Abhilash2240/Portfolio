'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'

const accentColors: Record<string, string> = {
  prussianBlue: 'var(--color-prussian-blue)',
  agedGold:     'var(--color-aged-gold)',
  vintageGreen: 'var(--color-vintage-green)',
}

type CertSealCardProps = {
  name:     string
  initials: string
  issuer:   string
  desc:     string
  link:     string
  color:    'prussianBlue' | 'agedGold' | 'vintageGreen'
  isOpen:   boolean
  onToggle: () => void
  index:    number
}

function WaxSeal({ initials, color, spin }: { initials: string; color: string; spin: boolean }) {
  return (
    <div style={{ position: 'relative', width: '72px', height: '72px', flexShrink: 0 }}>
      <svg
        viewBox="0 0 72 72"
        width="72"
        height="72"
        aria-hidden="true"
        style={{
          animation:      spin ? 'sealSpin 0.6s ease-in-out 1' : 'none',
          transformOrigin: 'center',
        }}
      >
        {/* Outer circle */}
        <circle cx="36" cy="36" r="34" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
        {/* Main seal body */}
        <circle cx="36" cy="36" r="30" fill={color} opacity="0.12" />
        <circle cx="36" cy="36" r="30" fill="none" stroke={color} strokeWidth="2" />
        {/* Inner ornamental ring */}
        <circle cx="36" cy="36" r="22" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" />
        {/* Sunburst lines */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const x1 = 36 + 24 * Math.cos(angle)
          const y1 = 36 + 24 * Math.sin(angle)
          const x2 = 36 + 29 * Math.cos(angle)
          const y2 = 36 + 29 * Math.sin(angle)
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.5" />
          )
        })}
      </svg>
      {/* Initials in center */}
      <span style={{
        position:      'absolute',
        inset:         0,
        display:       'flex',
        alignItems:    'center',
        justifyContent: 'center',
        fontFamily:    'var(--font-display)',
        fontWeight:    900,
        fontSize:      '0.95rem',
        color:         color,
        letterSpacing: '0.05em',
      }}>
        {initials}
      </span>
    </div>
  )
}

export default function CertSealCard({
  name, initials, issuer, desc, link, color, isOpen, onToggle, index,
}: CertSealCardProps) {
  const [sealSpun, setSealSpun] = useState(false)
  const accentColor = accentColors[color] ?? 'var(--color-aged-gold)'
  const reduceMotion = useReducedMotion()

  const handleToggle = () => {
    if (!isOpen) setSealSpun(s => !s) // trigger one spin animation
    onToggle()
  }

  return (
    <article
      className="isometric-card reveal-step"
      style={{
        border:          `3px double ${accentColor}`,
        backgroundColor: isOpen ? 'var(--color-surface-low)' : 'transparent',
        transition:      'background-color 500ms var(--ease-standard)',
        minHeight:       isOpen ? 'auto' : '72px',
      }}
    >
      {/* Header — always visible */}
      <button
        id={`cert-toggle-${index}`}
        aria-expanded={isOpen}
        aria-controls={`cert-content-${index}`}
        onClick={handleToggle}
        className="magnetic"
        style={{
          width:          '100%',
          display:        'flex',
          alignItems:     'center',
          gap:            'var(--space-6)',
          minHeight:      '72px',
          padding:        'var(--space-3) var(--space-6)',
          background:     'none',
          border:         'none',
          cursor:         'pointer',
          textAlign:      'left',
        }}
      >
        <WaxSeal initials={initials} color={accentColor} spin={sealSpun && isOpen} />

        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily:    'var(--font-label)',
            fontSize:      'var(--text-body-xs)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color:         accentColor,
            marginBottom:  'var(--space-1)',
          }}>
            {issuer}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize:   'var(--text-body-lg)',
            color:      'var(--color-ink)',
            lineHeight: 1.3,
          }}>
            {name}
          </h2>
        </div>

        {/* VERIFIED stamp (visible when closed) */}
        {isOpen && (
          <motion.span
            key="stamp"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.2, rotate: -14 }}
            animate={{ opacity: 0.75 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.15, ease: [0.0, 0.9, 0.57, 1.0], delay: 0.1 }}
            style={{
              fontFamily:    'var(--font-display)',
              fontWeight:    900,
              fontSize:      'var(--text-body-xs)',
              color:         'var(--color-vintage-green)',
              border:        '2px solid var(--color-vintage-green)',
              padding:       'var(--space-1) var(--space-2)',
              letterSpacing: '0.04em',
              transform:     'rotate(-10deg)',
              display:       'inline-block',
              opacity:       0.75,
              flexShrink:    0,
            }}
          >
            VERIFIED ✦
          </motion.span>
        )}

        <ChevronDown
          size={18}
          aria-hidden="true"
          style={{
            color:      accentColor,
            transition: reduceMotion ? 'none' : 'transform 400ms var(--ease-standard)',
            transform:  isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        />
      </button>

      {/* Expandable content */}
      <div
        id={`cert-content-${index}`}
        role="region"
        aria-labelledby={`cert-toggle-${index}`}
        style={{
          maxHeight:  isOpen ? '480px' : '0',
          overflow:   'hidden',
          transition: reduceMotion ? 'none' : 'max-height 500ms var(--ease-standard)',
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
              style={{ padding: '0 var(--space-6) var(--space-6)' }}
            >
              <div style={{ borderTop: `1px solid ${accentColor}`, opacity: 0.3, marginBottom: 'var(--space-4)' }} />

              <p style={{
                fontFamily:   'var(--font-body)',
                fontSize:     'var(--text-body-sm)',
                lineHeight:   1.7,
                color:        'var(--color-ink)',
                marginBottom: 'var(--space-4)',
              }}>
                {desc}
              </p>

              {link !== '#' && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${name} certificate`}
                  className="ink-wash-btn"
                  style={{
                    display:         'inline-flex',
                    alignItems:      'center',
                    gap:             'var(--space-2)',
                    textDecoration:  'none',
                    fontSize:        'var(--text-body-xs)',
                    padding:         'var(--space-2) var(--space-4)',
                    borderColor:     accentColor,
                    color:           accentColor,
                  }}
                >
                  <ExternalLink size={12} aria-hidden="true" />
                  View Certificate
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}
