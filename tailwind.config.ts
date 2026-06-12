import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: 'var(--color-parchment)',
        ink: 'var(--color-ink)',
        agedGold: 'var(--color-aged-gold)',
        vintageGreen: 'var(--color-vintage-green)',
        prussianBlue: 'var(--color-prussian-blue)',
        stampRed: 'var(--color-stamp-red)',
        surfaceLow: 'var(--color-surface-low)',
        surface: 'var(--color-surface)',
        surfaceHigh: 'var(--color-surface-high)',
        surfaceHighest: 'var(--color-surface-highest)',
        surfaceDim: 'var(--color-surface-dim)',
        outline: 'var(--color-outline)',
        outlineVariant: 'var(--color-outline-variant)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        serif: ['var(--font-serif)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        label: ['var(--font-label)'],
      },
      boxShadow: {
        neoSm: 'var(--shadow-neo-sm)',
        neoMd: 'var(--shadow-neo-md)',
        neoLg: 'var(--shadow-neo-lg)',
        glowBlue: 'var(--shadow-glow-blue)',
        glowOrange: 'var(--shadow-glow-orange)',
        ambient: 'var(--shadow-ambient)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        full: 'var(--radius-full)',
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1440px',
      },
      transitionDuration: {
        xfast: '100ms',
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
        slower: '700ms',
        xl: '1000ms',
        xxl: '1500ms',
      },
    },
  },
}

export default config
