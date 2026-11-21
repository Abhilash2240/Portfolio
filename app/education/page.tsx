import type { Metadata } from 'next'
import { portfolioData } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Education — Gundelli Abhilash',
  description: 'B.Tech Computer Science education at SR University, Warangal.',
}

export default function EducationPage() {
  const education = portfolioData.education[0]
  return (
    <main className="page-wrapper page-section" aria-labelledby="education-heading">
      <header>
        <p className="eyebrow">Education</p>
        <h1 id="education-heading">Academic record</h1>
      </header>
      <article style={{ maxWidth: '760px', marginTop: 'var(--space-8)', border: '3px double var(--color-aged-gold)', padding: 'var(--space-8)', background: 'var(--color-surface-low)' }}>
        <h2>{education.degree}</h2>
        <p>{education.institution} · {education.location}</p>
        <p>{education.period} · CGPA: {education.cgpa}</p>
        <h3 style={{ marginTop: 'var(--space-6)' }}>Coursework</h3>
        <p>{education.coursework.join(' · ')}</p>
      </article>
    </main>
  )
}
