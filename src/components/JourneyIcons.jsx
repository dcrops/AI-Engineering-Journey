function IconShell({ children }) {
    return (
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    )
  }
  
  export function WalkIcon() {
    return (
      <IconShell>
        <circle cx="32" cy="11" r="6" />
        <path d="M30 18 L27 31 L19 43" />
        <path d="M30 22 L41 30" />
        <path d="M27 31 L38 44" />
        <path d="M25 25 L17 31" />
      </IconShell>
    )
  }
  
  export function BikeIcon() {
    return (
      <IconShell>
        <circle cx="18" cy="45" r="9" />
        <circle cx="46" cy="45" r="9" />
        <path d="M18 45 L30 28 L38 45 L25 45 L34 34" />
        <path d="M34 34 L43 28" />
        <path d="M30 28 L27 22" />
        <circle cx="30" cy="15" r="5" />
        <path d="M29 21 L24 31" />
      </IconShell>
    )
  }
  
  export function CarIcon() {
    return (
      <IconShell>
        <path d="M13 39 L18 27 C19 24 22 22 26 22 H39 C43 22 46 24 48 28 L53 39" />
        <path d="M12 39 H54 V47 H49" />
        <path d="M20 47 H44" />
        <circle cx="19" cy="47" r="5" />
        <circle cx="49" cy="47" r="5" />
        <path d="M25 22 L22 34 H43 L39 22" />
      </IconShell>
    )
  }
  
  export function PlaneIcon() {
    return (
      <IconShell>
        <path d="M8 35 L56 14 L42 56 L31 39 L17 49 L24 32 Z" />
        <path d="M31 39 L56 14" />
      </IconShell>
    )
  }