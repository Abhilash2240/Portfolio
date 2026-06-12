import { Variants } from 'framer-motion'

// ── Global page entry / exit ──────────────────────────────────────────────────
export const pageVariants: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1.2, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
}

// ── Drop in from above ────────────────────────────────────────────────────────
export const dropIn: Variants = {
  hidden:  { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1.2, 0.36, 1] },
  },
}

// ── Stagger container ─────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// ── Stamp slam down (very fast, mechanical) ───────────────────────────────────
export const stampDown: Variants = {
  hidden:  { scaleY: 0, opacity: 0, originY: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.08, ease: [0.0, 0.9, 0.57, 1.0] },
  },
}

// ── Ink reveal (clip-path horizontal wipe) ────────────────────────────────────
export const inkReveal: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)', opacity: 1 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

// ── Spring pop (scale from 0) ─────────────────────────────────────────────────
export const springPop: Variants = {
  hidden:  { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 400, damping: 15 },
  },
}

// ── Seal flip (rotateY from 90) ───────────────────────────────────────────────
export const sealFlip: Variants = {
  hidden:  { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
}

// ── Fade up (generic section enter) ──────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1.2, 0.36, 1] },
  },
}

// ── Child item (used inside staggerContainer) ─────────────────────────────────
export const childItem: Variants = {
  hidden:  { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

// ── Page-specific entry variants ──────────────────────────────────────────────

/** About — radial ink bleed */
export const inkBleed: Variants = {
  initial: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
  animate: {
    clipPath: 'circle(150% at 50% 50%)',
    opacity: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

/** Skills — stamp sequence (staggered Y slam) */
export const stampSequence: Variants = {
  initial: { y: -80, opacity: 0, scaleY: 1.2 },
  animate: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.12, ease: [0.0, 0.9, 0.57, 1.0] },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

/** Projects — newspaper unfold (scaleY from top) */
export const newspaperUnfold: Variants = {
  initial: { scaleY: 0, transformOrigin: 'top', opacity: 0 },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1.2, 0.36, 1] },
  },
  exit: { scaleY: 0, transformOrigin: 'top', opacity: 0, transition: { duration: 0.3 } },
}

/** Education — diploma unroll (scaleX center-out) */
export const diplomaUnroll: Variants = {
  initial: { scaleX: 0, transformOrigin: 'center', opacity: 0 },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1.2, 0.36, 1] },
  },
  exit: { scaleX: 0, opacity: 0, transition: { duration: 0.3 } },
}

/** Contact — morse flash (rapid opacity flicker) */
export const morseFlash: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 0, 1, 0, 1],
    transition: { duration: 0.4, times: [0, 0.2, 0.35, 0.5, 0.65, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

/** Resume — paper feed (translateY from bottom) */
export const paperFeed: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1.2, 0.36, 1] },
  },
  exit: { y: -40, opacity: 0, transition: { duration: 0.3 } },
}
