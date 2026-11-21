import type { Metadata } from 'next'
import { portfolioData } from '@/lib/portfolio-data'
import { VintageButton } from '@/components/shared/VintageButton'
import { OrnamentDivider } from '@/components/shared/OrnamentDivider'
import { Download, Eye, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume — Gundelli Abhilash',
  description: 'Download the resume of Gundelli Abhilash — Computer Science undergraduate in backend engineering and applied AI.',
}

export default function ResumePage() {
  const { personal } = portfolioData

  return (
    <section className="page-wrapper page-section" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: 'var(--space-4)' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-2)' }}>
          ✦ Archive Section 08
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-heading-xl)', color: 'var(--color-ink)', lineHeight: 1.1 }}>
          Curriculum Vitæ
        </h1>
        <div style={{ width: '60px', height: '3px', background: 'var(--color-aged-gold)', marginTop: 'var(--space-4)' }} />
      </header>

      <OrnamentDivider />

      <div style={{ border: '3px double var(--color-aged-gold)', backgroundColor: 'var(--color-surface-low)', padding: 'var(--space-12)', marginTop: 'var(--space-8)', position: 'relative' }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: 'var(--space-2)', left: 'var(--space-2)', color: 'var(--color-aged-gold)' }}>✦</span>
        <span aria-hidden="true" style={{ position: 'absolute', top: 'var(--space-2)', right: 'var(--space-2)', color: 'var(--color-aged-gold)' }}>✦</span>
        <span aria-hidden="true" style={{ position: 'absolute', bottom: 'var(--space-2)', left: 'var(--space-2)', color: 'var(--color-aged-gold)' }}>✦</span>
        <span aria-hidden="true" style={{ position: 'absolute', bottom: 'var(--space-2)', right: 'var(--space-2)', color: 'var(--color-aged-gold)' }}>✦</span>

        <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '3px double var(--color-aged-gold)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '2rem', color: 'var(--color-ink)', marginBottom: '0.25rem' }}>
            {personal.name.toUpperCase()}
          </h2>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-aged-gold)' }}>
            Backend Engineering · Applied AI &amp; ML
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-body-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
            {personal.email} · {personal.phone} · {personal.location}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
          <FileText size={64} style={{ color: 'var(--color-aged-gold)', opacity: 0.4 }} aria-hidden="true" />
        </div>

        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', textAlign: 'center', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-ink)', marginBottom: 'var(--space-8)' }}>
          View or download the curriculum vitæ for a complete record of skills, projects, and academic education.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <VintageButton href={personal.resumeUrl} download="Gundelli_Abhilash_Resume.pdf">
            <Download size={14} aria-hidden="true" /> Download PDF
          </VintageButton>
          <VintageButton href={personal.resumeUrl} variant="gold">
            <Eye size={14} aria-hidden="true" /> Preview
          </VintageButton>
        </div>
      </div>

      <OrnamentDivider />

      <section aria-label="Resume highlights" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', backgroundColor: 'var(--color-aged-gold)', border: '1px solid var(--color-aged-gold)' }}>
          {[
            { label: 'Degree', value: 'B.Tech CSE · SR University' },
            { label: 'Graduation', value: '2027' },
            { label: 'CGPA', value: '9.1' },
            { label: 'Location', value: 'Warangal, Telangana' },
          ].map(({ label, value }) => (
            <div key={label} style={{ backgroundColor: 'var(--color-surface-low)', padding: 'var(--space-4) var(--space-6)' }}>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-1)' }}>{label}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-sm)', color: 'var(--color-ink)' }}>{value}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
