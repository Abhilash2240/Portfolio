'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const ROUTE_ORDER = ['/', '/about', '/skills', '/projects', '/experience', '/certifications', '/education', '/contact', '/resume']

export default function ScrollRouteNavigator() {
  const pathname = usePathname()
  const router = useRouter()
  const lockRef = useRef(false)

  useEffect(() => {
    const currentIndex = ROUTE_ORDER.indexOf(pathname)
    if (currentIndex === -1) return

    const releaseLock = () => {
      window.setTimeout(() => {
        lockRef.current = false
      }, 700)
    }

    const shouldIgnore = () => {
      const active = document.activeElement as HTMLElement | null
      if (!active) return false
      const tag = active.tagName
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || active.isContentEditable
    }

    const navigateTo = (index: number) => {
      if (index < 0 || index >= ROUTE_ORDER.length) return
      lockRef.current = true
      router.push(ROUTE_ORDER[index])
      releaseLock()
    }

    const onWheel = (e: WheelEvent) => {
      if (lockRef.current || shouldIgnore()) return
      if (Math.abs(e.deltaY) < 30) return

      const atTop = window.scrollY <= 8
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8

      if (e.deltaY > 0 && atBottom) {
        navigateTo(currentIndex + 1)
      }

      if (e.deltaY < 0 && atTop) {
        navigateTo(currentIndex - 1)
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (lockRef.current || shouldIgnore()) return

      if (e.key === 'PageDown' || e.key === 'ArrowDown') {
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
        if (atBottom) navigateTo(currentIndex + 1)
      }

      if (e.key === 'PageUp' || e.key === 'ArrowUp') {
        const atTop = window.scrollY <= 8
        if (atTop) navigateTo(currentIndex - 1)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [pathname, router])

  return null
}
