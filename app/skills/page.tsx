import type { Metadata } from 'next'
import StitchPageFrame from '@/components/shared/StitchPageFrame'

export const metadata: Metadata = {
  title: 'Skills - Gundelli Abhilash',
  description: 'Skills page rendered from Stitch design export.',
}

export default function SkillsPage() {
  return <StitchPageFrame src="/stitch/skills.html" title="Stitch Skills" />
}
