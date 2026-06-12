import Image from 'next/image'
import Link from 'next/link'
import HeroText from '@/components/home/HeroText'
import { portfolioData } from '@/lib/portfolio-data'

export default function HomeHero() {
  const { personal } = portfolioData

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '4rem 2rem',
        display: 'grid',
        placeItems: 'center',
        background: 'radial-gradient(circle at top left, rgba(255,255,255,0.95), rgba(231,232,232,0.7) 35%, transparent 70%)',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1320px',
          display: 'grid',
          gap: '3rem',
          alignItems: 'center',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)',
        }}
      >
        <section style={{ display: 'grid', gap: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-prussian-blue)',
              color: 'white',
              fontFamily: 'var(--font-label)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              boxShadow: '4px 4px 0 rgba(0,0,0,0.12)',
              width: 'fit-content',
            }}
          >
            Product Designer & Archival Architect
          </div>

          <HeroText />

          <p
            style={{
              maxWidth: '44rem',
              color: 'var(--color-on-surface-variant)',
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            {personal.summary}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link
              href="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '160px',
                padding: '1rem 1.5rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-aged-gold)',
                color: 'white',
                fontWeight: 700,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                boxShadow: '4px 4px 0 rgba(0,0,0,0.1)',
              }}
            >
              Explore work
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '160px',
                padding: '1rem 1.5rem',
                borderRadius: '9999px',
                border: '2px solid black',
                backgroundColor: 'white',
                color: 'var(--color-ink)',
                fontWeight: 700,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Say hello
            </Link>
          </div>
        </section>

        <aside
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '2rem',
            border: '2px solid black',
            backgroundColor: 'var(--color-surface)',
            padding: '2rem',
            minHeight: '520px',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'radial-gradient(circle at top left, rgba(8,70,237,0.2), transparent 30%), radial-gradient(circle at bottom right, rgba(210,153,255,0.15), transparent 35%)' }} />
          <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '420px' }}>
            <Image
              src="/assets/passport_size_photo.jpg"
              alt={`Portrait of ${personal.name}`}
              width={560}
              height={560}
              style={{ width: '100%', height: 'auto', borderRadius: '1.5rem', objectFit: 'cover' }}
            />
          </div>
        </aside>
      </div>
    </main>
  )
}
