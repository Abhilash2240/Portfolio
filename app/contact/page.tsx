import type { Metadata } from 'next'
import TelegraphForm from '@/components/contact/TelegraphForm'

export const metadata: Metadata = {
  title: 'Contact - Gundelli Abhilash',
  description: 'Get in touch with Gundelli Abhilash using the contact form.',
}

export default function ContactPage() {
  return (
    <section className="page-wrapper page-section" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <p
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: 'var(--text-body-xs)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--color-aged-gold)',
            marginBottom: 'var(--space-3)',
          }}
        >
          ✦ Archive Section 07
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'var(--text-heading-xl)',
            lineHeight: 1.1,
            color: 'var(--color-ink)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Contact
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-muted)', maxWidth: '52ch' }}>
          Send your message directly and I&apos;ll respond as soon as possible.
        </p>
      </header>
      <TelegraphForm />
    </section>
  )
}
