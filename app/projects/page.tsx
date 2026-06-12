import type { Metadata } from 'next'
import StitchPageFrame from '@/components/shared/StitchPageFrame'

export const metadata: Metadata = {
  title: 'Projects - Gundelli Abhilash',
  description: 'Projects page rendered from Stitch design export.',
}

export default function ProjectsPage() {
  return <StitchPageFrame src="/stitch/projects.html" title="Stitch Projects" />
}
