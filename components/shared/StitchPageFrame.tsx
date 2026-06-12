'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type StitchPageFrameProps = {
  src: string
  title: string
}

const ROUTE_ORDER = [
  '/',
  '/about',
  '/skills',
  '/projects',
  '/experience',
  '/certifications',
  '/education',
  '/contact',
  '/resume',
]

const NAV_ROUTE_MAP: Record<string, string> = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  PROJECTS: '/projects',
  EXPERIENCE: '/experience',
  CERTIFICATIONS: '/certifications',
  EDUCATION: '/education',
  CONTACT: '/contact',
  RESUME: '/resume',
}

function StitchPageSkeleton() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'var(--color-background-secondary)',
        padding: 'var(--space-12)',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1280px', display: 'grid', gap: 'var(--space-6)' }}>
        <div style={{ display: 'grid', gap: 'var(--space-4)', maxWidth: '720px' }}>
          <div style={{ width: '160px', height: '20px', borderRadius: '9999px', background: 'linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45), rgba(255,255,255,0.85))', backgroundSize: '200% 100%' }} className="stitch-skeleton-block" />
          <div style={{ width: '100%', height: '48px', borderRadius: '16px', background: 'linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45), rgba(255,255,255,0.85))', backgroundSize: '200% 100%' }} className="stitch-skeleton-block" />
          <div style={{ width: '100%', height: '24px', borderRadius: '9999px', background: 'linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.45), rgba(255,255,255,0.85))', backgroundSize: '200% 100%' }} className="stitch-skeleton-block" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-4)' }}>
          <div style={{ height: '180px', borderRadius: '24px', background: 'var(--color-surface-high)' }} className="stitch-skeleton-block" />
          <div style={{ height: '180px', borderRadius: '24px', background: 'var(--color-surface-high)' }} className="stitch-skeleton-block" />
          <div style={{ height: '180px', borderRadius: '24px', background: 'var(--color-surface-high)' }} className="stitch-skeleton-block" />
        </div>
      </div>
    </div>
  )
}

export default function StitchPageFrame({ src, title }: StitchPageFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [iframeHeight, setIframeHeight] = useState(800)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const lastNavAt = useRef(0)
  const pathname = usePathname()
  const router = useRouter()

  // Navigate to a route with debounce
  const navigateTo = useCallback(
    (path: string) => {
      if (!path || path === pathname) return
      const now = Date.now()
      if (now - lastNavAt.current < 800) return
      lastNavAt.current = now
      router.push(path)
    },
    [pathname, router]
  )

  const onIframeLoad = useCallback(() => {
    setIsLoaded(true)
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      const doc = iframe.contentDocument
      const win = iframe.contentWindow as (Window & { __navPatched?: boolean }) | null
      if (!doc || !win) return

      // ── 0. Immediately remove nav/footer elements ─────────────────────────
      // Do this before any guard to ensure clean render on first paint
      doc.querySelectorAll('nav, footer').forEach(el => el.remove())

      // ── 1. Resize iframe to full document height ──────────────────────────
      const sizeIframe = () => {
        try {
          const h = Math.max(
            doc.body.scrollHeight,
            doc.body.offsetHeight,
          )
          // Cap at 15000px to prevent infinite expansion from CSS transforms
          const clampedH = Math.min(h, 15000)
          if (clampedH > 100) setIframeHeight(clampedH)
        } catch {
          // ignore
        }
      }

      sizeIframe()
      // Retry after animations / fonts load
      ;[200, 500, 1200, 2500].forEach(ms =>
        win.setTimeout(sizeIframe, ms)
      )

      // Also resize when the inner content changes
      try {
        const ro = new (win as unknown as { ResizeObserver: typeof ResizeObserver }).ResizeObserver(sizeIframe)
        ro.observe(doc.body)
      } catch {
        // ignore
      }

      // ── 2. Patch inner styles: remove scroll-snap, hide inner nav/footer ──
      if (!doc.getElementById('__stitch-patch')) {
        const style = doc.createElement('style')
        style.id = '__stitch-patch'
        style.textContent = `
          html {
            overflow: visible !important;
          }
          body {
            overflow: visible !important;
            overflow-x: hidden !important;
            min-height: auto !important;
          }
          html, body, main, section {
            scroll-snap-type: none !important;
            scroll-snap-align: none !important;
          }
          /* Hide ALL navs inside iframe - we have our own outer Navbar */
          nav {
            display: none !important;
          }
          /* Hide footer duplicates inside iframe */
          footer {
            display: none !important;
          }
          /* Remove large top padding that was to offset the now-hidden nav */
          main[class*="pt-24"],
          main[class*="pt-28"],
          main[class*="pt-32"],
          main[class*="pt-36"],
          .pt-24, .pt-28, .pt-32, .pt-36 {
            padding-top: 1rem !important;
          }
          /* Fix overflow on perspective containers so content shows */
          main[class*="overflow-hidden"],
          main.overflow-hidden {
            overflow: visible !important;
          }
          /* Fix perspective-stage height so hero fills viewport */
          main.perspective-stage {
            min-height: calc(100vh - 64px) !important;
          }
          .scene-container,
          #atmospheric-scene {
            display: none !important;
          }
        `
        doc.head.appendChild(style)

        // Also physically remove nav/footer elements to ensure they're gone
        doc.querySelectorAll('nav, footer').forEach(el => {
          (el as HTMLElement).style.setProperty('display', 'none', 'important')
        })
      }

      // ── 3. Patch nav clicks to use Next.js router ─────────────────────────
      if (!win.__navPatched) {
        win.__navPatched = true
        doc.addEventListener('click', e => {
          const anchor = (e.target as HTMLElement).closest('a')
          if (!anchor) return
          const label = (anchor.textContent ?? '').trim().toUpperCase()
          const path = NAV_ROUTE_MAP[label]
          if (path) {
            e.preventDefault()
            navigateTo(path)
          }
        })
      }
    } catch {
      // iframe access blocked (cross-origin future case)
    }
  }, [navigateTo])

  useEffect(() => {
    setMounted(true)
  }, [])

  // ── 4. Outer-window scroll triggers page transitions ──────────────────────
  useEffect(() => {
    const currentIndex = ROUTE_ORDER.indexOf(pathname)
    if (currentIndex === -1) return

    let locked = false
    const releaseLock = () => {
      window.setTimeout(() => { locked = false }, 900)
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) return
      if (Math.abs(e.deltaY) < 20) return

      const scrollTop = window.scrollY
      const atTop = scrollTop <= 4
      const atBottom =
        window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 4

      if (e.deltaY > 0 && atBottom && currentIndex < ROUTE_ORDER.length - 1) {
        locked = true
        navigateTo(ROUTE_ORDER[currentIndex + 1])
        releaseLock()
      } else if (e.deltaY < 0 && atTop && currentIndex > 0) {
        locked = true
        navigateTo(ROUTE_ORDER[currentIndex - 1])
        releaseLock()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [pathname, navigateTo])

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <h1
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {title.replace(/^Stitch\s+/i, '')}
      </h1>
      {!isLoaded && <StitchPageSkeleton />}
      {mounted && (
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          onLoad={onIframeLoad}
          scrolling="no"
          style={{
            width: '100%',
            minHeight: '100vh',
            height: `${iframeHeight}px`,
            border: 'none',
            display: 'block',
            overflow: 'hidden',
          }}
        />
      )}
    </div>
  )
}
