import type { Metadata } from 'next'
import Link from 'next/link'
import HomeHero from '@/components/sections/HomeHero'
import ProjectsClient from '@/components/projects/ProjectsClient'
import { portfolioData } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Gundelli Abhilash — Backend Engineering & Applied AI',
  description: 'Portfolio of Gundelli Abhilash, a Computer Science undergraduate focused on backend engineering, applied AI, and machine learning.',
}

export default function HomePage() {
  const { personal, skills, education } = portfolioData

  return (
    <>
      <section id="home"><HomeHero /></section>

      <section id="about" className="page-wrapper page-section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p className="eyebrow">About</p>
          <h1>Computer Science undergraduate focused on backend engineering and applied AI.</h1>
          <p style={{ maxWidth: '72ch', lineHeight: 1.85, marginTop: 'var(--space-6)' }}>{personal.summary}</p>
        </div>
      </section>

      <section id="skills" className="page-wrapper page-section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p className="eyebrow">Skills</p>
          <h2>Practical engineering tools</h2>
          <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 'var(--space-6)' }}>
            {skills.map(skill => (
              <section key={skill.category} style={{ border: '1px solid var(--color-surface-high)', borderRadius: '1.5rem', padding: '1.5rem', background: 'white' }}>
                <h3>{skill.category}</h3>
                <p style={{ lineHeight: 1.7, marginTop: 'var(--space-3)' }}>{skill.items.join(' · ')}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="page-wrapper page-section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p className="eyebrow">Projects</p>
          <h2>Selected engineering systems</h2>
          <ProjectsClient />
        </div>
      </section>

      <section id="education" className="page-wrapper page-section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p className="eyebrow">Education</p>
          <h2>Academic foundation</h2>
          {education.map(school => (
            <article key={school.institution} style={{ marginTop: 'var(--space-6)', padding: '1.5rem', border: '1px solid var(--color-surface-high)', borderRadius: '1.5rem', background: 'var(--color-surface-low)' }}>
              <h3>{school.degree}</h3>
              <p>{school.institution} · {school.location}</p>
              <p>{school.period} · CGPA: {school.cgpa}</p>
              <p style={{ marginTop: 'var(--space-4)', lineHeight: 1.8 }}><strong>Coursework:</strong> {school.coursework.join(', ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="page-wrapper page-section">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s discuss engineering projects</h2>
          <p style={{ maxWidth: '70ch', lineHeight: 1.8, marginTop: 'var(--space-4)' }}>Reach out about backend development, applied AI, or full-stack software systems.</p>
          <Link href="/contact" className="ink-wash-btn" style={{ display: 'inline-flex', marginTop: 'var(--space-6)', textDecoration: 'none' }}>Contact me</Link>
        </div>
      </section>
    </>
  )
}
