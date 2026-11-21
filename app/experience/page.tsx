import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience — Gundelli Abhilash',
  description: 'Engineering experience and project work by Gundelli Abhilash.',
}

export default function ExperiencePage() {
  return (
    <main className="page-wrapper page-section" aria-labelledby="experience-heading">
      <header>
        <p class="eyebrow">Experience</p>
        <h1 id="experience-heading">Project experience</h1>
      </header>
      <p style={{ maxWidth: '70ch', lineHeight: 1.8, marginTop: 'var(--space-6)' }}>
        My current engineering experience is demonstrated through the featured repositories: applied AI and resume matching, paper trading and market-data services, mobile expense tracking, and browser automation research workflows.
      </p>
    </main>
  )
}
