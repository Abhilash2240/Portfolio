import type { Metadata } from 'next'
import StitchPageFrame from '@/components/shared/StitchPageFrame'

export const metadata: Metadata = {
  title: 'Education - Gundelli Abhilash',
  description: 'Education page rendered from Stitch design export.',
}

export default function EducationPage() {
  return <StitchPageFrame src="/stitch/education.html" title="Stitch Education" />
}
