'use client'
import { portfolioData } from '@/lib/portfolio-data'
import { useRetractable } from '@/hooks/useRetractable'
import CertSealCard from '@/components/certifications/CertSealCard'

export default function CertsClient() {
  const { toggle, isOpen } = useRetractable()
  const { certifications } = portfolioData

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
      {certifications.map((cert, i) => (
        <CertSealCard
          key={cert.name}
          {...cert}
          index={i}
          isOpen={isOpen(String(i))}
          onToggle={() => toggle(String(i))}
        />
      ))}
    </div>
  )
}
