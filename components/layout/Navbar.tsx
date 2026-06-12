'use client'
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollY } from '@/hooks/useScrollProgress'
import { portfolioData } from '@/lib/portfolio-data'

const desktopNavLinks = [
  { label: 'Home',           href: '/#home'          },
  { label: 'About',          href: '/#about'         },
  { label: 'Skills',         href: '/#skills'        },
  { label: 'Projects',       href: '/#projects'      },
  { label: 'Experience',     href: '/#experience'    },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Education',      href: '/#education'     },
  { label: 'Contact',        href: '/#contact'       },
  { label: 'Resume',         href: '/resume'         },
]

const mobilePrimaryLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Work', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const mobileOverflowLinks = [
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Education', href: '/#education' },
  { label: 'Resume', href: '/resume' },
]

export default function Navbar() {
  const pathname = usePathname()
  const scrollY  = useScrollY()
  const [open, setOpen]  = useState(false)
  const [overflowOpen, setOverflowOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const navListRef = useRef<HTMLUListElement | null>(null)
  const blurred = scrollY > 20

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('home')
      return
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    if (!sections.length) return

    const tick = { pending: false }
    const updateActiveSection = () => {
      if (tick.pending) return
      tick.pending = true
      window.requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight * 0.45
        let closestSection = sections[0]
        let closestDistance = Number.POSITIVE_INFINITY

        sections.forEach(section => {
          const rect = section.getBoundingClientRect()
          const sectionCenter = rect.top + rect.height * 0.45
          const distance = Math.abs(sectionCenter - viewportCenter)
          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = section
          }
        })

        setActiveSection(prev => prev === closestSection.id ? prev : closestSection.id)
        tick.pending = false
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [pathname])

  const updateDesktopSlider = useCallback(() => {
    const navList = navListRef.current
    if (!navList || pathname !== '/') {
      setSliderStyle({ left: 0, width: 0, opacity: 0 })
      return
    }

    const activeLink = navList.querySelector<HTMLAnchorElement>(`a[data-nav-target="${activeSection}"]`)
    if (!activeLink) {
      setSliderStyle({ left: 0, width: 0, opacity: 0 })
      return
    }

    const navRect = navList.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()
    setSliderStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    })
  }, [pathname, activeSection])

  useLayoutEffect(() => {
    updateDesktopSlider()
  }, [activeSection, pathname, updateDesktopSlider])

  useEffect(() => {
    window.addEventListener('resize', updateDesktopSlider)
    return () => window.removeEventListener('resize', updateDesktopSlider)
  }, [updateDesktopSlider])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        setOverflowOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const closeMobileDrawer = () => {
    setOpen(false)
    setOverflowOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position:        'fixed',
          top:             0,
          left:            0,
          right:           0,
          zIndex:          100,
          backgroundColor: blurred ? 'rgba(253,248,238,0.92)' : 'transparent',
          backdropFilter:  blurred ? 'blur(8px)'               : 'none',
          borderBottom:    blurred ? '1px solid rgba(201,168,76,0.3)' : 'none',
          transition:      'background-color 300ms, border-bottom 300ms',
        }}
      >
        <div style={{
          maxWidth:  '1280px',
          margin:    '0 auto',
          padding:   '0 var(--space-4)',
          height:    'var(--space-16)',
          display:   'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Monogram */}
          <Link
            href="/"
            aria-label="Gundelli Abhilash — Home"
            style={{
              fontFamily:  'var(--font-display)',
              fontWeight:  900,
              fontSize:    'var(--text-heading-md)',
              color:       'var(--color-ink)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            {portfolioData.personal.initials}
          </Link>

          {/* Desktop nav */}
          <ul
            ref={navListRef}
            role="list"
            style={{
              position:  'relative',
              display:   'flex',
              gap:       'var(--space-8)',
              listStyle: 'none',
            }}
            className="hidden-mobile"
          >
            <span
              aria-hidden="true"
              style={{
                position:     'absolute',
                left:         sliderStyle.left,
                bottom:       0,
                width:        sliderStyle.width,
                height:       '3px',
                background:   'var(--color-aged-gold)',
                borderRadius: '9999px',
                transition:   'left 240ms ease, width 240ms ease, opacity 240ms ease',
                opacity:      sliderStyle.opacity,
                pointerEvents:'none',
              }}
            />
            {desktopNavLinks.map(({ label, href }) => {
              const targetId = href === '/' ? 'home' : href.replace('/#', '')
              const active = pathname === '/' && activeSection === targetId
              return (
                <li key={href}>
                  <Link
                    href={href}
                    data-nav-target={targetId}
                    className="magnetic"
                    style={{
                      fontFamily:     'var(--font-label)',
                      fontSize:       'var(--text-body-xs)',
                      letterSpacing:  '0.04em',
                      textTransform:  'uppercase',
                      color:          active ? 'var(--color-aged-gold)' : 'var(--color-ink)',
                      textDecoration: 'none',
                      borderBottom:   active ? '2px solid var(--color-aged-gold)' : '2px solid transparent',
                      paddingBottom:  'var(--space-1)',
                      transition:     'color 200ms, border-bottom-color 200ms',
                    }}
                    aria-current={active ? 'true' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Hamburger */}
          <button
            id="mobile-menu-toggle"
            ref={menuButtonRef}
            type="button"
            aria-label={open ? 'Close navigation drawer' : 'Open navigation drawer'}
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen(o => !o)}
            className="show-mobile magnetic"
            style={{
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              padding:    '0',
              minWidth:   'var(--touch-target-min)',
              minHeight:  'var(--touch-target-min)',
              display:    'none',
            }}
          >
            <span style={{
              display:       'block',
              width:         '24px',
              height:        '2px',
              background:    'var(--color-ink)',
              marginBottom:  '5px',
              transition:    'transform 200ms, opacity 200ms',
              transform:     open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display:    'block',
              width:      '24px',
              height:     '2px',
              background: 'var(--color-ink)',
              marginBottom: '5px',
              opacity:    open ? 0 : 1,
              transition: 'opacity 200ms',
            }} />
            <span style={{
              display:    'block',
              width:      '24px',
              height:     '2px',
              background: 'var(--color-ink)',
              transition: 'transform 200ms',
              transform:  open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="nav-drawer"
          role="navigation"
          aria-label="Mobile navigation drawer"
          style={{
            maxHeight:       open ? '600px' : '0',
            overflow:        'hidden',
            transition:      'max-height 400ms var(--ease-standard)',
            backgroundColor: 'var(--color-parchment)',
            borderTop:       open ? '3px double var(--color-aged-gold)' : 'none',
          }}
        >
          <ul role="list" style={{ listStyle: 'none', padding: 'var(--space-4)' }}>
            {mobilePrimaryLinks.map(({ label, href }) => {
              const targetId = href === '/' ? 'home' : href.replace('/#', '')
              const active = pathname === '/' && activeSection === targetId
              return (
                <li key={href} style={{ borderBottom: '1px solid var(--color-surface-high)' }}>
                  <Link
                    href={href}
                    onClick={() => closeMobileDrawer()}
                    style={{
                      display:        'flex',
                      alignItems:     'center',
                      minHeight:      'var(--touch-target-min)',
                      fontFamily:     'var(--font-label)',
                      fontSize:       'var(--text-body-xs)',
                      letterSpacing:  '0.04em',
                      textTransform:  'uppercase',
                      color:          active ? 'var(--color-aged-gold)' : 'var(--color-ink)',
                      textDecoration: 'none',
                    }}
                    aria-current={active ? 'true' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOverflowOpen(o => !o)}
            aria-expanded={overflowOpen}
            aria-controls="mobile-overflow-menu"
            style={{
              width: '100%',
              minHeight: 'var(--touch-target-min)',
              padding: '0 var(--space-4)',
              background: 'transparent',
              border: 'none',
              borderTop: '1px solid var(--color-surface-high)',
              fontFamily: 'var(--font-label)',
              fontSize: 'var(--text-body-xs)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              textAlign: 'left',
            }}
          >
            More
          </button>

          <div id="mobile-overflow-menu" style={{ maxHeight: overflowOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 300ms var(--ease-standard)' }}>
            <ul role="list" style={{ listStyle: 'none', padding: '0 var(--space-4) var(--space-4)' }}>
              {mobileOverflowLinks.map(({ label, href }) => {
                const targetId = href === '/' ? 'home' : href.replace('/#', '')
                const active = pathname === '/' && activeSection === targetId
                return (
                  <li key={href} style={{ borderBottom: '1px solid var(--color-surface-high)' }}>
                    <Link
                      href={href}
                      onClick={() => closeMobileDrawer()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: 'var(--touch-target-min)',
                        fontFamily: 'var(--font-label)',
                        fontSize: 'var(--text-body-xs)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: active ? 'var(--color-aged-gold)' : 'var(--color-ink)',
                        textDecoration: 'none',
                      }}
                      aria-current={active ? 'true' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile   { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
