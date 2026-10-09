import { PageLink } from "../ui/PageLink"

export function Brand() {
  return (
    <PageLink className="brand" to="/">
      <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity=".35"
        />
        <path
          d="M15 13h19l-3.5 5H21v4h9l-3 4h-6v5h10.5l3.5 5H15V13Z"
          fill="currentColor"
        />
        <path
          d="M7 29c8-7 22-11 34-8-9 1-20 5-29 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="40" cy="21" r="2.5" fill="currentColor" />
      </svg>
      <span className="brand-word">
        Elysium<i>.</i>
      </span>
    </PageLink>
  )
}
