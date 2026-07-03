"use client"

import { useEffect, useState } from "react"

interface UseCounterOptions {
  start?: number
  end: number
  duration?: number
  enabled?: boolean
}

export function useCounter(options: UseCounterOptions) {
  const { start = 0, end, duration = 2000, enabled = true } = options
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!enabled) {
      setCount(start)
      return
    }

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration, enabled])

  return count
}
