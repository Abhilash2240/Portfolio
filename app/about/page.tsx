import type { Metadata } from 'next'
import { portfolioData } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'About — Gundelli Abhilash',
  description: 'Computer Science undergraduate focused on backend engineering, applied AI, and machine learning.',
}

export default function AboutPage() {
  const { personal } = portfolioData
  return (
    <main className="page-wrapper page-section" aria-labelledby="about-heading">
      <header style={{ maxWidth: '780px', marginBottom: 'var(--space-8)' }}>
        <p className="eyebrow">About</p>
        <h1 id="about-heading">Gundelli Abhilash</h1>
        <p className="page-intro">{personal.title}</p>
      </header>
      <article style={{ maxWidth: '78ch', borderLeft: '4px solid var(--color-aged-gold)', paddingLeft: 'var(--space-6)' }}>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.85 }}>{personal.summary}</p>
        <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
          <div><dt>Education</dt><dd>B.Tech Computer Science, SR University</dd></div>
          <div><dt>Location</dt><dd>Warangal, Telangana</dd></div>
          <div><dt>Graduation</dt><dd>2027</dd></div>
          <div><dt>CGPA</dt><dd>9.1</dd></div>
        </dl>
      </article>
    </main>
  )
}
