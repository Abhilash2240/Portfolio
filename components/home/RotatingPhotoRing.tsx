'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface RotatingPhotoRingProps {
  photoSrc?: string
  size?: number
  ringText?: string
  isReversed?: boolean
}

const RING_TEXT = '✦ GUNDELLI ABHILASH ✦ AI/ML ENGINEER ✦ BACKEND DEVELOPER ✦ CLOUD TECHNOLOGIST ✦ '

export default function RotatingPhotoRing({
  photoSrc = '/assets/photo.png',
  size = 320,
  ringText = RING_TEXT,
  isReversed = false,
}: RotatingPhotoRingProps) {
  const [hovered, setHovered] = useState(false)

  const cx = size / 2
  const cy = size / 2
  const outerR  = size * 0.4
  const innerR  = size * 0.35
  const photoR  = size * 0.28
  const photoD  = photoR * 2

  return (
    <div
      style={{ position: 'relative', width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
      >
        <defs>
          {/* Outer text path */}
          <path
            id="outerCircle"
            d={`M ${cx}, ${cy}
               m -${outerR},0
               a ${outerR},${outerR} 0 1,1 ${outerR * 2},0
               a ${outerR},${outerR} 0 1,1 -${outerR * 2},0`}
          />
          {/* Inner dashed ring path */}
          <path
            id="innerCircle"
            d={`M ${cx}, ${cy}
               m -${innerR},0
               a ${innerR},${innerR} 0 1,1 ${innerR * 2},0
               a ${innerR},${innerR} 0 1,1 -${innerR * 2},0`}
          />
        </defs>

        {/* Outer rotating text ring */}
        <g
          className={hovered || isReversed ? 'ring-spin-reverse' : 'ring-spin'}
          style={{
            transformOrigin: `${cx}px ${cy}px`,
          }}
        >
          <text
            fill="var(--color-aged-gold)"
            fontSize={size * 0.033}
            fontFamily="var(--font-label)"
            letterSpacing={size * 0.008}
          >
            <textPath href="#outerCircle" startOffset="0%">
              {ringText}
            </textPath>
          </text>
        </g>

        {/* Inner counter-rotating dashed ring */}
        <g
          className="ring-counter"
          style={{
            transformOrigin: `${cx}px ${cy}px`,
          }}
        >
          <circle
            cx={cx}
            cy={cy}
            r={innerR}
            fill="none"
            stroke="var(--color-aged-gold)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            opacity="0.5"
          />
        </g>

        {/* Photo clip circle border */}
        <circle
          cx={cx}
          cy={cy}
          r={photoR + 4}
          fill="none"
          stroke="var(--color-aged-gold)"
          strokeWidth="4"
          opacity="0.9"
        />
        <circle
          cx={cx}
          cy={cy}
          r={photoR + 8}
          fill="none"
          stroke="var(--color-aged-gold)"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>

      {/* Profile photo */}
      <div
        style={{
          position:     'absolute',
          top:          '50%',
          left:         '50%',
          transform:    'translate(-50%, -50%)',
          width:        photoD,
          height:       photoD,
          borderRadius: '50%',
          overflow:     'hidden',
          zIndex:       1,
          boxShadow:    `0 8px 32px rgba(26,18,8,0.15)`,
        }}
      >
        <Image
          src={photoSrc}
          alt="Gundelli Abhilash — AI/ML & Backend Engineer"
          width={photoD}
          height={photoD}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          priority
        />
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .ring-spin {
            animation: spinRing 18s linear infinite;
          }

          .ring-spin-reverse {
            animation: spinRingReverse 18s linear infinite;
          }

          .ring-counter {
            animation: counterRing 30s linear infinite;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ring-spin,
          .ring-spin-reverse,
          .ring-counter {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
