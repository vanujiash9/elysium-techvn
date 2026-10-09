export type ProductCategory = "Website" | "AI Tool" | "AI Chatbot" | "Automation" | "Dashboard / CRM"

export interface Service {
  code: string
  kicker: string
  title: string
  short: string
  desc: string
  time: string
  price: string
  bullets: readonly string[]
}

export interface Product {
  slug: string
  title: string
  category: ProductCategory
  desc: string
  tags: readonly string[]
  image: string
  galleryImages?: readonly string[]
  externalUrl?: string
  livePreviewUrl?: string
  detailIntro?: string
  detailFeatures?: readonly string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface NavigationItem {
  label: string
  href: string
}
