type P = { className?: string }

const common = { "aria-hidden": true, focusable: false } as const

export function Star({ className }: P) {
  return (
    <svg {...common} viewBox="0 0 100 100" className={className}>
      <path
        d="M50 4 61 38 96 38 67 59 78 94 50 73 22 94 33 59 4 38 39 38Z"
        fill="currentColor"
        stroke="#1e293b"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Triangle({ className }: P) {
  return (
    <svg {...common} viewBox="0 0 100 90" className={className}>
      <path d="M50 6 94 84H6Z" fill="currentColor" stroke="#1e293b" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  )
}

export function Squiggle({ className }: P) {
  return (
    <svg {...common} viewBox="0 0 160 40" fill="none" className={className}>
      <path
        d="M4 20c10-18 20-18 30 0s20 18 30 0 20-18 30 0 20 18 30 0 20-18 26-6"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  )
}

// pathLength=1 lets <Reveal> draw it with a plain strokeDashoffset tween
export function Underline({ className }: P) {
  return (
    <svg {...common} viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" className={className}>
      <path
        data-draw
        pathLength={1}
        strokeDasharray={1}
        d="M4 14C24 2 44 24 64 12S104 2 124 14 164 24 184 12 224 2 244 14s36 8 52-4"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      >
        {/* Idle wiggle: morph between the wave and its mirror. shortcut: SMIL ignores prefers-reduced-motion */}
        <animate
          attributeName="d"
          dur="2.4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          values="M4 14C24 2 44 24 64 12S104 2 124 14 164 24 184 12 224 2 244 14s36 8 52-4;M4 12C24 24 44 2 64 14S104 24 124 12 164 2 184 14 224 24 244 12s36-8 52 4;M4 14C24 2 44 24 64 12S104 2 124 14 164 24 184 12 224 2 244 14s36 8 52-4"
        />
      </path>
    </svg>
  )
}

export function ScribbleArrow({ className }: P) {
  return (
    <svg {...common} viewBox="0 0 90 70" fill="none" className={className}>
      <path
        d="M6 8C30 2 70 12 62 56M62 56 48 42M62 56 76 44"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Note({ children, className }: { children: string; className?: string }) {
  return <span className={`font-hand leading-none ${className ?? ""}`}>{children}</span>
}
