import React, { useEffect, useRef } from 'react'

// Lightweight snowfall without extra deps
export default function Snow({ count = 80 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const flakes = []

    for (let i = 0; i < count; i++) {
      const span = document.createElement('span')
      span.className = 'pointer-events-none absolute top-0 rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.6)]'
      const size = Math.random() * 3 + 1
      span.style.width = `${size}px`
      span.style.height = `${size}px`
      span.style.left = `${Math.random() * 100}%`
      span.style.opacity = String(0.6 + Math.random() * 0.4)

      const duration = 8 + Math.random() * 10
      const delay = Math.random() * -20
      const drift = (Math.random() - 0.5) * 40

      span.style.animation = `fall ${duration}s linear ${delay}s infinite, sway ${6 + Math.random() * 6}s ease-in-out ${Math.random()}s infinite`
      span.style.setProperty('--drift', `${drift}px`)

      flakes.push(span)
      container.appendChild(span)
    }

    return () => {
      flakes.forEach(f => f.remove())
    }
  }, [count])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10%); }
          100% { transform: translateY(110%); }
        }
        @keyframes sway {
          0% { transform: translateX(0); }
          50% { transform: translateX(var(--drift, 20px)); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
