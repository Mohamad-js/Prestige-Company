'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SmoothScrolling({children}) {
  const pathname = usePathname()

  // Optional: scroll to top on route change
  useEffect(() => {
    // Small delay helps when coming from a long scroll + fast navigation
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      // or use lenis.scrollTo(0, { immediate: true })
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // lower = smoother / slower (0.06–0.12 common)
        duration: 1.5,      // try 1.2–2.0
        smoothWheel: true,
        smoothTouch: false, // usually false on mobile
        // normalizeWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}