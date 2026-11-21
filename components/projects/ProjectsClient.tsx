'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { useRetractable } from '@/hooks/useRetractable'
import RetractableCard from '@/components/projects/RetractableCard'
import { OrnamentDivider } from '@/components/shared/OrnamentDivider'

export default function ProjectsClient() {
  const { toggle, isOpen } = useRetractable()
  const featuredProjects = portfolioData.projects.filter(project => project.year === 'Featured')
  const secondaryProjects = portfolioData.projects.filter(project => project.year !== 'Featured')

  const renderProject = (project: typeof portfolioData.projects[number], index: number) => (
    <RetractableCard
      key={project.id}
      {...project}
      index={index}
      isOpen={isOpen(String(project.id))}
      onToggle={() => toggle(String(project.id))}
    />
  )

  return (
    <>
      <OrnamentDivider />
      <section aria-labelledby="featured-projects-heading">
        <h2 id="featured-projects-heading" style={{ margin: 'var(--space-8) 0 var(--space-4)' }}>
          Featured systems
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {featuredProjects.map(renderProject)}
        </div>
      </section>

      {secondaryProjects.length > 0 && (
        <section aria-labelledby="secondary-projects-heading">
          <h2 id="secondary-projects-heading" style={{ margin: 'var(--space-10) 0 var(--space-4)' }}>
            Other projects
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {secondaryProjects.map((project, index) => renderProject(project, featuredProjects.length + index))}
          </div>
        </section>
      )}
    </>
  )
}
