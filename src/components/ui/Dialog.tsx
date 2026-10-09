import { useEffect, useRef } from "react"
import type { ReactNode } from "react"
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock"

interface DialogProps {
  isOpen: boolean
  titleId: string
  descriptionId?: string
  className?: string
  labelledBy?: string
  onClose: () => void
  children: ReactNode
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",")

export function Dialog({
  isOpen,
  titleId,
  descriptionId,
  className = "",
  labelledBy,
  onClose,
  children,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  useBodyScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return

    previousFocusRef.current = (document.activeElement as HTMLElement | null)
    const panel = panelRef.current
    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
    window.setTimeout(() => (firstFocusable ?? panel)?.focus(), 0)

    return () => previousFocusRef.current?.focus()
  }, [isOpen])

  if (!isOpen) return null

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key !== "Tab") return

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
    )
    if (focusable.length === 0) {
      event.preventDefault()
      panelRef.current?.focus()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div
      className={className}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy ?? titleId}
      aria-describedby={descriptionId}
      onKeyDown={handleKeyDown}
    >
      <button
        className="demo-modal__backdrop"
        onClick={onClose}
        aria-label="Đóng demo"
        type="button"
      />
      <div className="demo-modal__panel" ref={panelRef} tabIndex={-1}>
        {children}
      </div>
    </div>
  )
}
