import type { Metadata } from 'next'
import StitchPageFrame from '@/components/shared/StitchPageFrame'

export const metadata: Metadata = {
  title: 'About - Gundelli Abhilash',
  description: 'About page rendered from Stitch design export.',
}

export default function AboutPage() {
  return <StitchPageFrame src="/stitch/about.html" title="Stitch About" />
}
