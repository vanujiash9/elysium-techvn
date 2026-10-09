import type { NavigationItem } from "../../models/site"

export const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Liên hệ", href: "/lien-he" },
] satisfies readonly NavigationItem[]
