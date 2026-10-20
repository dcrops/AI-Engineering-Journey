import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 700)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-3 right-1 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/85 text-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm hover:border-cyan-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[11px] sm:font-black sm:uppercase sm:tracking-[0.16em]"
    >
      <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="max-sm:sr-only">Back to top</span>
    </button>
  )
}
