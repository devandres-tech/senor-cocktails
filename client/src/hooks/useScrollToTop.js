import { useEffect } from 'react'

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
export const useScrollToTop = (itemsPerPage) => {
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0)
    }
  }, [itemsPerPage])

  return null
}
