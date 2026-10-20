import { ArrowLeft } from "lucide-react"

export default function BackToFeatured() {
  function handleClick(event) {
    event.preventDefault()
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth", block: "start" })
    if (window.location.hash !== "#featured") {
      window.history.pushState(null, "", "#featured")
    }
  }

  return (
    <a
      href="#featured"
      onClick={handleClick}
      className="mt-5 inline-flex max-w-full items-center gap-2 rounded-sm text-[11px] font-black uppercase leading-snug tracking-[0.16em] text-cyan-300 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      Back to Featured Work
    </a>
  )
}
