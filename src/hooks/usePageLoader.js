import { useEffect, useState } from 'react'

export const STATUS_STEPS = [
  'Initializing Runtime...',
  'Loading Components...',
  'Compiling Interface...',
  'Connecting Modules...',
  'Rendering Experience...',
  'Portfolio Ready',
]

const FIRST_LOAD_DURATION = 2600
const EXIT_BUFFER = 320

/**
 * Cinematic boot loader shown once on first load. Subsequent route changes are
 * handled by the smooth <PageTransition /> instead of a full-screen splash, so
 * navigation feels continuous rather than interstitial.
 */
export function usePageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), FIRST_LOAD_DURATION + EXIT_BUFFER)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return { loading, duration: FIRST_LOAD_DURATION, loadId: 'boot' }
}
