import type { Metadata } from 'next'
import StitchPageFrame from '@/components/shared/StitchPageFrame'

export const metadata: Metadata = {
  title: 'Experience - Gundelli Abhilash',
  description: 'Experience page rendered from Stitch design export.',
}

export default function ExperiencePage() {
  return <StitchPageFrame src="/stitch/experience.html" title="Stitch Experience" />
}
