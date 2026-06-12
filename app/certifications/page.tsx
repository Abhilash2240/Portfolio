import type { Metadata } from 'next'
import StitchPageFrame from '@/components/shared/StitchPageFrame'

export const metadata: Metadata = {
  title: 'Certifications - Gundelli Abhilash',
  description: 'Certifications page rendered from Stitch design export.',
}

export default function CertificationsPage() {
  return <StitchPageFrame src="/stitch/certifications.html" title="Stitch Certifications" />
}
