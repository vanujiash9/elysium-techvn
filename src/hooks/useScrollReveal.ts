import { useEffect } from "react"

const REVEAL_SELECTOR = [
  "[data-reveal]",
  ".section-head",
  ".service-mini",
  ".home-product",
  ".process__grid article",
  ".pricing article",
  ".faq details",
  ".services-detail article",
  ".products-grid article",
  ".contact-info",
  ".contact-form",
  ".product-summary",
  ".product-gallery",
].join(",")

export function useScrollReveal(route: string): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    )

    if (prefersReducedMotion) {
      document.documentElement.classList.remove("motion-ready")
      elements.forEach((element) => {
        element.classList.remove("reveal-item")
        element.classList.add("is-visible")
        element.style.removeProperty("--reveal-delay")
      })
      return
    }

    document.documentElement.classList.add("motion-ready")
    elements.forEach((element, index) => {
      element.classList.add("reveal-item")
      element.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [route])
}
