'use client'
import React from 'react'
import Link from 'next/link'

interface VintageButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'gold' | 'ghost'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
  download?: boolean | string
}

export function VintageButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  download,
}: VintageButtonProps) {
  const base = 'ink-wash-btn magnetic'

  const variantStyle: React.CSSProperties = {
    primary: {
      borderColor: 'var(--color-ink)',
      color: 'var(--color-ink)',
    },
    gold: {
      borderColor: 'var(--color-aged-gold)',
      color: 'var(--color-aged-gold)',
    },
    ghost: {
      borderColor: 'var(--color-outline)',
      color: 'var(--color-outline)',
    },
  }[variant] ?? {}

  const goldOverride = variant === 'gold'
    ? { '--ink-wash-fill': 'var(--color-ink)' } as React.CSSProperties
    : {}

  const isDownloadLink = Boolean(download) || href?.toLowerCase().endsWith('.pdf')

  if (href && isDownloadLink) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        style={{ ...variantStyle, ...goldOverride, textDecoration: 'none' }}
        aria-label={ariaLabel}
        download={download}
      >
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${className}`}
        style={{ ...variantStyle, ...goldOverride, textDecoration: 'none' }}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className}`}
      style={{ ...variantStyle, ...goldOverride, opacity: disabled ? 0.5 : 1 }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
