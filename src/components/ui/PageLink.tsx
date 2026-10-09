import type { ReactNode } from "react"
import { navigateTo } from "../../hooks/useNavigation"

interface PageLinkProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function PageLink({
  to,
  children,
  className = "",
  onClick,
}: PageLinkProps) {
  const navigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigateTo(to)
    onClick?.()
  }

  return (
    <a className={className} href={to} onClick={navigate}>
      {children}
    </a>
  )
}
