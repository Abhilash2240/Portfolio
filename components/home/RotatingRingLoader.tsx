'use client'
import dynamic from 'next/dynamic'

const RotatingPhotoRing = dynamic(() => import('@/components/home/RotatingPhotoRing'), {
  ssr: false,
  loading: () => (
    <div style={{
      width:           '340px',
      height:          '340px',
      border:          '3px double var(--color-aged-gold)',
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      fontFamily:      'var(--font-label)',
      fontSize:        '0.65rem',
      letterSpacing:   '0.15em',
      textTransform:   'uppercase',
      color:           'var(--color-aged-gold)',
      opacity:         0.5,
    }}>
      Loading…
    </div>
  ),
})

type RotatingRingLoaderProps = {
  photoSrc?: string
  size?: number
  ringText?: string
  isReversed?: boolean
}

export default function RotatingRingLoader({
  photoSrc,
  size = 340,
  ringText,
  isReversed,
}: RotatingRingLoaderProps) {
  return (
    <RotatingPhotoRing
      photoSrc={photoSrc}
      size={size}
      ringText={ringText}
      isReversed={isReversed}
    />
  )
}
