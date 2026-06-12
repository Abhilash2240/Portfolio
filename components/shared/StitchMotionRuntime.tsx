'use client'

import { useEffect, useRef } from 'react'

export default function StitchMotionRuntime() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, cx: 0, cy: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      cursor.style.display = 'none'
      return
    }

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      trail.style.left = `${x}px`
      trail.style.top = `${y}px`
      document.body.appendChild(trail)

      const angle = Math.random() * Math.PI * 2
      const dist = 20 + Math.random() * 30

      requestAnimationFrame(() => {
        trail.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0) rotate(45deg)`
        trail.style.opacity = '0'
      })

      window.setTimeout(() => trail.remove(), 600)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      document.querySelectorAll<HTMLElement>('[data-depth]').forEach((el) => {
        const depth = Number(el.dataset.depth ?? '0')
        const moveX = (window.innerWidth / 2 - e.clientX) * depth
        const moveY = (window.innerHeight / 2 - e.clientY) * depth
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
      })

      if (Math.random() > 0.82) createTrail(e.clientX, e.clientY)
    }

    const animateCursor = () => {
      const m = mouseRef.current
      m.cx += (m.x - m.cx) * 0.15
      m.cy += (m.y - m.cy) * 0.15
      cursor.style.left = `${m.cx - 10}px`
      cursor.style.top = `${m.cy - 10}px`
      rafRef.current = requestAnimationFrame(animateCursor)
    }

    const magneticElements = document.querySelectorAll<HTMLElement>('.magnetic')
    const listeners: Array<() => void> = []

    magneticElements.forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
        cursor.classList.add('cursor-large')
      }

      const onLeave = () => {
        el.style.transform = 'translate(0px, 0px)'
        cursor.classList.remove('cursor-large')
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      listeners.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          if (target.classList.contains('section-trigger')) target.classList.add('visible')
          if (target.classList.contains('reveal-step')) target.classList.add('active')
        })
      },
      { threshold: 0.18 }
    )

    document.querySelectorAll('.section-trigger, .reveal-step').forEach((el) => io.observe(el))

    window.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      listeners.forEach((fn) => fn())
      io.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <div id="custom-cursor" ref={cursorRef} aria-hidden="true" />
}
