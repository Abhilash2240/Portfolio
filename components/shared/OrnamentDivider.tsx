'use client'
import React from 'react'

interface OrnamentDividerProps {
  className?: string
  text?: string
}

export function OrnamentDivider({ className = '', text = '✦' }: OrnamentDividerProps) {
  return (
    <div className={`ornament-divider ${className}`} aria-hidden="true">
      <span>—</span>
      <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-aged-gold)' }}>
        {text}
      </span>
      <span>—</span>
    </div>
  )
}

interface DoubleBorderProps {
  children: React.ReactNode
  className?: string
  side?: 'top' | 'bottom' | 'all' | 'left'
}

export function DoubleBorder({ children, className = '', side = 'all' }: DoubleBorderProps) {
  const borderClass = {
    top:    'double-rule-top',
    bottom: 'double-rule-bottom',
    all:    'double-rule-all',
    left:   '',
  }[side]

  const leftStyle = side === 'left' ? { borderLeft: '3px double var(--color-aged-gold)' } : {}

  return (
    <div className={`${borderClass} ${className}`} style={leftStyle}>
      {children}
    </div>
  )
}
