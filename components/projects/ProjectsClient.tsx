'use client'
import { portfolioData } from '@/lib/portfolio-data'
import { useRetractable } from '@/hooks/useRetractable'
import RetractableCard from '@/components/projects/RetractableCard'
import { OrnamentDivider } from '@/components/shared/OrnamentDivider'

export default function ProjectsClient() {
  const { toggle, isOpen } = useRetractable()
  const { projects } = portfolioData

  return (
    <>
      <OrnamentDivider />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginTop: 'var(--space-8)' }}>
        {projects.map((project, index) => (
          <RetractableCard
            key={project.id}
            {...project}
            index={index}
            isOpen={isOpen(String(project.id))}
            onToggle={() => toggle(String(project.id))}
          />
        ))}
      </div>
    </>
  )
}
