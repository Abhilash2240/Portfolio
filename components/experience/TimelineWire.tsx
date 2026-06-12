'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type ExperienceItem = {
  year: string
  role: string
  org: string
  points: readonly string[]
}

type TimelineWireProps = {
  items: readonly ExperienceItem[]
}

export default function TimelineWire({ items }: TimelineWireProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const wireRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    if (!rootRef.current || !wireRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(wireRef.current, { scaleY: 1 })
      nodeRefs.current.forEach((node) => {
        if (node) gsap.set(node, { scale: 1, opacity: 1 })
      })
      return
    }

    gsap.set(wireRef.current, { transformOrigin: 'top center', scaleY: 0 })
    nodeRefs.current.forEach((node) => {
      if (node) gsap.set(node, { scale: 0.5, opacity: 0 })
    })

    const trigger = ScrollTrigger.create({
      trigger: rootRef.current,
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(wireRef.current, { scaleY: self.progress, duration: 0.1, overwrite: true })

        nodeRefs.current.forEach((node, index) => {
          if (!node) return
          const threshold = (index + 1) / (items.length + 1)
          const active = self.progress >= threshold
          gsap.to(node, {
            scale: active ? 1 : 0.5,
            opacity: active ? 1 : 0,
            duration: 0.18,
            ease: 'power2.out',
            overwrite: true,
          })
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [items])

  return (
    <section ref={rootRef} aria-label="Experience timeline" style={{ position: 'relative', marginTop: 'var(--space-8)' }}>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'var(--space-6)',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'transparent',
          borderLeft: '1px dashed var(--color-aged-gold)',
          opacity: 0.5,
        }}
      />
      <div
        ref={wireRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'var(--space-6)',
          top: 0,
          width: '2px',
          height: '100%',
          backgroundColor: 'var(--color-aged-gold)',
          transformOrigin: 'top center',
        }}
      />

      <div style={{ paddingLeft: 'var(--space-16)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
        {items.map((exp, i) => (
          <article key={`${exp.year}-${exp.role}`} style={{ position: 'relative' }}>
            <div
              ref={(el) => { nodeRefs.current[i] = el }}
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 'calc(var(--space-6) * -1 - var(--space-2))',
                top: 'var(--space-1)',
                width: '20px',
                height: '20px',
                border: '3px double var(--color-aged-gold)',
                backgroundColor: 'var(--color-parchment)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
              }}
            >
              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-aged-gold)' }} />
            </div>

            <div
              style={{
                border: '3px double var(--color-aged-gold)',
                backgroundColor: 'var(--color-surface-low)',
                padding: 'var(--space-6)',
              }}
            >
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <span className="stamp-chip" style={{ color: 'var(--color-stamp-red)' }}>
                  {exp.year}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'var(--text-body-lg)',
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-1)',
                }}
              >
                {exp.role}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--color-vintage-green)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {exp.org}
              </p>

              <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {exp.points.map((point, j) => (
                  <li key={j} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-aged-gold)', flexShrink: 0, marginTop: '2px' }}>✦</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        color: 'var(--color-ink)',
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
