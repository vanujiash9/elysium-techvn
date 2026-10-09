import { SOCIALS } from "./socials"

export function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Liên hệ nhanh">
      {SOCIALS.map(({ label, href, icon }) => (
        <a
          href={href}
          target={label === "Gmail" ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          title={label}
          key={label}
        >
          <img src={icon} alt="" />
        </a>
      ))}
    </aside>
  )
}
