import { useEffect, useRef, useState } from "react"

export function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [prompt, setPrompt] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const drag = useRef({
    x: 0,
    y: 0,
    startX: 0,
    startY: 0,
    active: false,
    moved: false,
  })

  useEffect(() => {
    const timer = window.setTimeout(() => setPrompt(true), 8000)
    return () => window.clearTimeout(timer)
  }, [])

  const startDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    drag.current = {
      x: position.x,
      y: position.y,
      startX: event.clientX,
      startY: event.clientY,
      active: true,
      moved: false,
    }
  }

  const moveDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!drag.current.active) return
    const deltaX = event.clientX - drag.current.startX
    const deltaY = event.clientY - drag.current.startY
    if (Math.abs(deltaX) + Math.abs(deltaY) > 6) drag.current.moved = true
    setPosition({
      x: Math.max(
        -(window.innerWidth - 110),
        Math.min(10, drag.current.x + deltaX),
      ),
      y: Math.max(
        -(window.innerHeight - 125),
        Math.min(10, drag.current.y + deltaY),
      ),
    })
  }

  const stopDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    drag.current.active = false
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId)
  }

  const toggleChat = () => {
    if (drag.current.moved) {
      drag.current.moved = false
      return
    }
    setOpen((value) => !value)
    setPrompt(false)
  }

  return (
    <div
      className={`ai-assistant ${open ? "ai-assistant--open" : ""} ${
        prompt && !open ? "ai-assistant--prompt" : ""
      }`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <div className="ai-chat" aria-hidden={!open}>
        <div className="ai-chat__head">
          <span className="ai-chat__avatar">E</span>
          <div>
            <strong>ELY AI</strong>
            <small>Đang trực tuyến</small>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Đóng trò chuyện"
            type="button"
          >
            ×
          </button>
        </div>
        <div className="ai-chat__body">
          <p>Xin chào, mình là ELY AI.</p>
          <p>Bạn đang quan tâm đến website, AI tool hay automation?</p>
          <div className="ai-chat__options">
            <a
              href="https://zalo.me/0338994373"
              target="_blank"
              rel="noreferrer"
            >
              Thiết kế website
            </a>
            <a
              href="https://zalo.me/0338994373"
              target="_blank"
              rel="noreferrer"
            >
              AI Tool & Chatbot
            </a>
            <a
              href="https://zalo.me/0338994373"
              target="_blank"
              rel="noreferrer"
            >
              Nhận báo giá nhanh
            </a>
          </div>
        </div>
        <a
          className="ai-chat__cta"
          href="https://zalo.me/0338994373"
          target="_blank"
          rel="noreferrer"
        >
          Tiếp tục trên Zalo →
        </a>
      </div>
      <button
        className="ai-mascot"
        onClick={toggleChat}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        aria-label="Kéo để di chuyển hoặc nhấn để mở trợ lý AI Elysium"
        type="button"
      >
        <span className="ai-mascot__bubble">Bạn cần tư vấn?</span>
        <span className="ai-mascot__antenna">
          <i />
        </span>
        <span className="ai-mascot__face">
          <i />
          <i />
          <b />
        </span>
        <span className="ai-mascot__label">ELY AI</span>
      </button>
    </div>
  )
}
