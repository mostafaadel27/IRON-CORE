import { useEffect, useState } from 'react'

/**
 * Hook to detect if the user has requested reduced motion at the OS/browser level.
 * Useful for disabling complex 3D transforms, parallax, or high-intensity animations.
 */
export function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(false)

  useEffect(() => {
    // Check initial state
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduce(mediaQuery.matches)

    // Listen for changes
    const listener = (event: MediaQueryListEvent) => {
      setShouldReduce(event.matches)
    }

    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  return shouldReduce
}
