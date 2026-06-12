'use client'

import type { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/shared/PageTransition'
import StitchMotionRuntime from '@/components/shared/StitchMotionRuntime'
import StitchBackground from '@/components/shared/StitchBackground'

export default function RouteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <StitchBackground />
      <StitchMotionRuntime />
      <Navbar />
      <main
        id="main-content"
        role="main"
        style={{ paddingTop: '64px' }}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </>
  )
}
