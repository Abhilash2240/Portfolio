'use client'
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration: number = 2000): number {
  const [count, setCount] = useState(0)
  const ref = useRef<number>(0)

  useEffect(() => {
    let start: number | null = null
    const startVal = 0

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      ref.current = Math.floor(eased * (target - startVal) + startVal)
      setCount(ref.current)
      if (progress < 1) requestAnimationFrame(step)
    }

    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return count
}
