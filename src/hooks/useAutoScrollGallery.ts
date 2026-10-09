import { useEffect } from "react"

export function useAutoScrollGallery(
  galleryRef: React.RefObject<HTMLDivElement | null>,
  isPaused: boolean,
): void {
  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      const gallery = galleryRef.current
      if (!gallery) return

      const next = gallery.scrollLeft + gallery.clientWidth
      const end = gallery.scrollWidth - gallery.clientWidth - 10
      gallery.scrollTo({ left: next > end ? 0 : next, behavior: "smooth" })
    }, 5000)

    return () => window.clearInterval(timer)
  }, [galleryRef, isPaused])
}
