/**
 * Design tokens mirrored as CSS custom property names.
 * The resolved values live in app/globals.css at :root.
 */

export const tokens = {
  colors: {
    white: 'var(--color-white)',
    parchment: 'var(--color-parchment)',
    inkBlack: 'var(--color-ink)',
    agedGold: 'var(--color-aged-gold)',
    vintageGreen: 'var(--color-vintage-green)',
    prussianBlue: 'var(--color-prussian-blue)',
    stampRed: 'var(--color-stamp-red)',
    surfaceLow: 'var(--color-surface-low)',
    surface: 'var(--color-surface)',
    surfaceHigh: 'var(--color-surface-high)',
    surfaceHighest: 'var(--color-surface-highest)',
    surfaceDim: 'var(--color-surface-dim)',
    error: 'var(--color-error)',
    errorContainer: 'var(--color-error-container)',
    outline: 'var(--color-outline)',
    outlineVariant: 'var(--color-outline-variant)',
    textMuted: 'var(--color-text-muted)',
    formLabel: 'var(--color-form-label)',
    focusRing: 'var(--color-focus-ring)',
    background: 'var(--color-background)',
    surfaceBright: 'var(--color-surface-bright)',
    onBackground: 'var(--color-on-background)',
    onSurface: 'var(--color-on-surface)',
    onSurfaceVariant: 'var(--color-on-surface-variant)',
    secondaryContainer: 'var(--color-secondary-container)',
    tertiaryContainer: 'var(--color-tertiary-container)',
  },

  fonts: {
    display: 'var(--font-display)',
    serif: 'var(--font-serif)',
    body: 'var(--font-body)',
    mono: 'var(--font-mono)',
    label: 'var(--font-label)',
  },

  fontWeights: {
    display: 900,
    bold: 700,
    medium: 500,
    regular: 400,
  },

  typography: {
    display: {
      lg: { size: 'var(--text-display-lg)', lineHeight: 'var(--leading-display-lg)', letterSpacing: 'var(--tracking-display-lg)' },
      md: { size: 'var(--text-display-md)', lineHeight: 'var(--leading-display-md)', letterSpacing: 'var(--tracking-display-md)' },
    },
    heading: {
      xl: { size: 'var(--text-heading-xl)', lineHeight: 'var(--leading-heading-xl)', letterSpacing: 'var(--tracking-heading-xl)' },
      lg: { size: 'var(--text-heading-lg)', lineHeight: 'var(--leading-heading-lg)', letterSpacing: 'var(--tracking-heading-lg)' },
      md: { size: 'var(--text-heading-md)', lineHeight: 'var(--leading-heading-md)', letterSpacing: 'var(--tracking-heading-md)' },
    },
    body: {
      lg: { size: 'var(--text-body-lg)', lineHeight: 'var(--leading-body-lg)', letterSpacing: 'var(--tracking-body)' },
      md: { size: 'var(--text-body-md)', lineHeight: 'var(--leading-body-md)', letterSpacing: 'var(--tracking-body)' },
      sm: { size: 'var(--text-body-sm)', lineHeight: 'var(--leading-body-sm)', letterSpacing: 'var(--tracking-body)' },
      xs: { size: 'var(--text-body-xs)', lineHeight: 'var(--leading-body-xs)', letterSpacing: 'var(--tracking-caption)' },
    },
    mono: {
      sm: { size: 'var(--text-body-xs)', lineHeight: 'var(--leading-mono-sm)', letterSpacing: 'var(--tracking-mono-sm)' },
      xs: { size: 'var(--text-body-xs)', lineHeight: 'var(--leading-mono-xs)', letterSpacing: 'var(--tracking-mono-xs)' },
    },
  },

  motion: {
    spring: 'var(--ease-spring)',
    standard: 'var(--ease-standard)',
    stampSlam: 'var(--ease-stamp)',
    inkWash: 'var(--ease-ink)',
  },

  duration: {
    instant: 'var(--dur-instant)',
    xfast: 'var(--dur-xfast)',
    fast: 'var(--dur-fast)',
    normal: 'var(--dur-normal)',
    slow: 'var(--dur-slow)',
    slower: 'var(--dur-slower)',
    xl: 'var(--dur-xl)',
    xxl: 'var(--dur-xxl)',
    entry: 'var(--dur-entry)',
    loop: 'var(--dur-loop)',
    ambient: 'var(--dur-ambient)',
    xslow: 'var(--dur-xslow)',
    ring: 'var(--dur-ring)',
    ringOuter: 'var(--dur-ring-outer)',
  },

  spacing: {
    space1: 'var(--space-1)',
    space2: 'var(--space-2)',
    space3: 'var(--space-3)',
    space4: 'var(--space-4)',
    space6: 'var(--space-6)',
    space8: 'var(--space-8)',
    space12: 'var(--space-12)',
    space16: 'var(--space-16)',
    xs: 'var(--space-1)',
    sm: 'var(--space-2)',
    md: 'var(--space-4)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)',
    xxl: 'var(--space-12)',
    xxxl: 'var(--space-16)',
  },

  border: {
    doubleRule: 'var(--border-double-rule)',
    thin: 'var(--border-thin)',
    radius: 'var(--radius-none)',
  },

  radius: {
    none: 'var(--radius-none)',
    xs: 'var(--radius-xs)',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    full: 'var(--radius-full)',
  },

  shadows: {
    neoSm: 'var(--shadow-neo-sm)',
    neoMd: 'var(--shadow-neo-md)',
    neoLg: 'var(--shadow-neo-lg)',
    glowBlue: 'var(--shadow-glow-blue)',
    glowOrange: 'var(--shadow-glow-orange)',
    ambient: 'var(--shadow-ambient)',
  },

  transitions: {
    default: 'var(--transition-default)',
    quick: 'var(--transition-quick)',
    stamp: 'var(--transition-stamp)',
    unfold: 'var(--transition-unfold)',
    long: 'var(--transition-long)',
  },

  breakpoints: {
    desktop: 'var(--breakpoint-desktop)',
    tablet: 'var(--breakpoint-tablet)',
    mobile: 'var(--breakpoint-mobile)',
    laptop: 'var(--breakpoint-laptop)',
    wide: 'var(--breakpoint-wide)',
  },

  accessibility: {
    touchTargetMin: 'var(--touch-target-min)',
  },
} as const

export type ColorToken = keyof typeof tokens.colors
export type FontToken = keyof typeof tokens.fonts
