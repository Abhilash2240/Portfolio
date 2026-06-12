'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useReducedMotion } from 'framer-motion'

type PageTransitionProps = {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div key={pathname}>{children}</div>
  }

  return (
    <div
      key={pathname}
      style={{
        animation: 'pageSlideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
      }}
    >
      <style>{`
        @keyframes pageSlideIn {
          from { opacity: 0; transform: translateY(var(--space-4)); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {children}
    </div>
  )
}
