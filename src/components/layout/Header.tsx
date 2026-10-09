import { useState } from "react"
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock"
import { isActiveRoute } from "../../routing/routes"
import { Arrow } from "../ui/Arrow"
import { PageLink } from "../ui/PageLink"
import { Brand } from "./Brand"
import { NAV_ITEMS } from "./navItems"

interface HeaderProps {
  route: string
}

export function Header({ route }: HeaderProps) {
  const [open, setOpen] = useState(false)
  useBodyScrollLock(open)

  return (
    <>
      <header className="header">
        <div className="shell header__inner">
          <Brand />
          <nav className="desktop-nav">
            {NAV_ITEMS.map(({ label, href }) => (
              <PageLink
                className={isActiveRoute(route, href) ? "active" : ""}
                to={href}
                key={href}
              >
                {label}
              </PageLink>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="quick-contact"
              href="https://zalo.me/0338994373"
              target="_blank"
              rel="noreferrer"
            >
              <i /> Liên hệ nhanh <Arrow diagonal />
            </a>
          </div>
          <button
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label="Mở menu"
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-menu__head">
          <Brand />
          <button
            onClick={() => setOpen(false)}
            aria-label="Đóng menu"
            className="menu-close"
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
        <nav>
          {NAV_ITEMS.map(({ label, href }, index) => (
            <PageLink to={href} onClick={() => setOpen(false)} key={href}>
              <small>0{index + 1}</small>
              {label}
              <Arrow diagonal />
            </PageLink>
          ))}
        </nav>
        <a className="mobile-call" href="tel:0338994373">
          Gọi 0338 994 373
        </a>
      </div>
    </>
  )
}
