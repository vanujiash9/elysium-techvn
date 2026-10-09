import { products } from "../data/products"

export const ROUTES = {
  home: "/",
  services: "/dich-vu",
  products: "/san-pham",
  contact: "/lien-he",
} as const

const STATIC_ROUTES = new Set<string>(Object.values(ROUTES))

export function getCurrentRoute(): string {
  return normalizeRoute(window.location.pathname)
}

export function normalizeRoute(path: string): string {
  if (STATIC_ROUTES.has(path) || path.startsWith(`${ROUTES.products}/`)) {
    return path
  }

  return ROUTES.home
}

export function getProductSlug(route: string): string | null {
  if (!route.startsWith(`${ROUTES.products}/`)) return null
  return route.split("/").pop() ?? null
}

export function getProductByRoute(route: string) {
  const slug = getProductSlug(route)
  if (!slug) return null
  return products.find((item) => item.slug === slug) ?? products[0]
}

export function isActiveRoute(route: string, href: string): boolean {
  return (
    route === href ||
    (href === ROUTES.products && route.startsWith(`${ROUTES.products}/`))
  )
}
