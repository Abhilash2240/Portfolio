import type { Metadata } from 'next'
import { portfolioData } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Skills — Gundelli Abhilash',
  description: 'Programming, backend, AI/ML, database, cloud, DevOps, and software engineering skills.',
}

export default function SkillsPage() {
  return (
    <main className="page-wrapper page-section" aria-labelledby="skills-heading">
      <header style={{ marginBottom: 'var(--space-8)' }}>
        <p className="eyebrow">Technical inventory</p>
        <h1 id="skills-heading">Engineering skills</h1>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)' }}>
        {portfolioData.skills.map(skill => (
          <section key={skill.category} style={{ border: '3px double var(--color-aged-gold)', background: 'var(--color-surface-low)', padding: 'var(--space-6)' }}>
            <h2 style={{ marginBottom: 'var(--space-3)' }}>{skill.category}</h2>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 'var(--space-2)' }}>
              {skill.items.map(item => <li key={item} style={{ borderBottom: '1px solid var(--color-surface-high)', paddingBottom: 'var(--space-2)' }}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
