'use client'
import { useState, useCallback, useRef, useEffect } from 'react'

export function useRetractable() {
  const [openId, setOpenId] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggle = useCallback((id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    setOpenId(prev => {
      if (prev === id) return null
      if (prev === null) return id

      timeoutRef.current = setTimeout(() => {
        setOpenId(id)
      }, 250)
      return null
    })
  }, [])

  const isOpen = useCallback((id: string) => openId === id, [openId])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return { openId, toggle, isOpen }
}
