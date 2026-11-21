import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Certifications — Gundelli Abhilash',
  description: 'Certification information for Gundelli Abhilash.',
}

export default function CertificationsPage() {
  return (
    <main className="page-wrapper page-section" aria-labelledby="certifications-heading">
      <header>
        <p className="eyebrow">Credentials</p>
        <h1 id="certifications-heading">Certifications</h1>
      </header>
      <p style={{ maxWidth: '70ch', lineHeight: 1.8, marginTop: 'var(--space-6)' }}>
        No certifications are listed here until their credential details and verification links are available.
      </p>
    </main>
  )
}
