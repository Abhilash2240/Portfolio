import type { Metadata } from 'next'
import Link from 'next/link'
import HomeHero from '@/components/sections/HomeHero'
import ProjectsClient from '@/components/projects/ProjectsClient'
import CertsClient from '@/components/certifications/CertsClient'
import StitchPageFrame from '@/components/shared/StitchPageFrame'
import { portfolioData } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Gundelli Abhilash - Home',
  description: 'Home page rendered in React with native sections and smooth anchor scrolling.',
}

const useFallback = false

export default function HomePage() {
  const { personal, skills, experience, education } = portfolioData

  return useFallback ? (
    <StitchPageFrame src="/stitch/home.html" title="Stitch Home" />
  ) : (
    <>
      <section id="home">
        <HomeHero />
      </section>

      <section id="about" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
            About
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05, color: 'var(--color-ink)', marginBottom: 'var(--space-6)' }}>
            Computer Science undergraduate and AI/ML developer.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-on-surface-variant)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '72ch' }}>
            {personal.bio}
          </p>
        </div>
      </section>

      <section id="skills" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
                Skills
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, color: 'var(--color-ink)' }}>
                Practical tools for engineering data systems and AI products.
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {skills.map(skill => (
              <div key={skill.category} style={{ border: '1px solid var(--color-surface-high)', borderRadius: '1.5rem', padding: '1.5rem', background: 'white' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-ink)' }}>{skill.category}</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {skill.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
                Projects
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, color: 'var(--color-ink)' }}>
                Built systems for finance and AI-driven orchestration.
              </h2>
            </div>
          </div>
          <ProjectsClient />
        </div>
      </section>

      <section id="experience" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
            Experience
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, color: 'var(--color-ink)', marginBottom: 'var(--space-6)' }}>
            Hands-on AI/ML program experience.
          </h2>
          {experience.map((item, index) => (
            <div key={`${item.role}-${index}`} style={{ borderLeft: '4px solid var(--color-aged-gold)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>{item.role}</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                {item.company} · {item.period}
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: 'var(--color-ink)', lineHeight: 1.8 }}>
                {(item.points ?? item.bullets).map((point, pointIndex) => (
                  <li key={pointIndex} style={{ marginBottom: '0.75rem' }}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
                Certifications
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, color: 'var(--color-ink)' }}>
                Verified credentials in AI, cloud, and software engineering.
              </h2>
            </div>
          </div>
          <CertsClient />
        </div>
      </section>

      <section id="education" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
            Education
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, color: 'var(--color-ink)' }}>
            Academic foundation in CS and systems engineering.
          </h2>
          {education.map((school, index) => (
            <div key={`${school.institution}-${index}`} style={{ marginTop: '1.5rem', padding: '1.5rem', border: '1px solid var(--color-surface-high)', borderRadius: '1.5rem', backgroundColor: 'var(--color-surface-low)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '0.75rem' }}>{school.degree}</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
                {school.institution} · {school.location}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)', marginBottom: '1rem' }}>
                {school.period}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
                <strong>Coursework:</strong> {school.coursework?.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="page-wrapper page-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--text-body-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-aged-gold)', marginBottom: 'var(--space-4)' }}>
              Contact
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.05, color: 'var(--color-ink)' }}>
              Let&apos;s build the next data-driven system together.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-on-surface-variant)', lineHeight: 1.8, maxWidth: '70ch' }}>
              Reach out to discuss AI/ML development, backend architectures, or cloud automation projects.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 1.5rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--color-aged-gold)',
              color: 'white',
              fontWeight: 700,
              textTransform: 'uppercase',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              width: 'fit-content',
            }}
          >
            Contact me
          </Link>
        </div>
      </section>
    </>
  )
}
