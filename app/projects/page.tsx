import type { Metadata } from 'next'
import ProjectsClient from '@/components/projects/ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects — Gundelli Abhilash',
  description: 'Engineering projects in backend systems, applied AI, generative AI, agent automation, and full-stack development.',
}

export default function ProjectsPage() {
  return (
    <main className="page-wrapper page-section" aria-labelledby="projects-heading">
      <header className="page-heading" style={{ marginBottom: 'var(--space-6)' }}>
        <p className="eyebrow">Engineering archive</p>
        <h1 id="projects-heading">Selected projects</h1>
        <p className="page-intro">
          Full-stack and AI systems built around concrete workflows, reliable data handling, and clear architecture.
        </p>
      </header>
      <ProjectsClient />
    </main>
  )
}
