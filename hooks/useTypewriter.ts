'use client'
import { useEffect, useMemo, useState } from 'react'

export function useTypewriter(
  phrases: string[],
  speed: number = 80,
  pause: number = 2000
): string {
  const normalizedPhrases = useMemo(
    () => phrases.map((phrase) => phrase.trim()).filter(Boolean),
    [phrases]
  )

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (normalizedPhrases.length === 0) {
      return
    }

    const current = normalizedPhrases[phraseIndex]
    const typeSpeed = Math.max(16, speed)
    const deleteSpeed = Math.max(16, Math.floor(typeSpeed / 2))
    const holdDelay = Math.max(0, pause)

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), typeSpeed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), holdDelay)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex(c => c - 1), deleteSpeed)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false)
        setPhraseIndex(i => (i + 1) % normalizedPhrases.length)
      }, 0)
      return () => clearTimeout(t)
    }
  }, [charIndex, deleting, normalizedPhrases, pause, phraseIndex, speed])

  if (normalizedPhrases.length === 0) {
    return ''
  }

  return normalizedPhrases[phraseIndex].slice(0, charIndex)
}
