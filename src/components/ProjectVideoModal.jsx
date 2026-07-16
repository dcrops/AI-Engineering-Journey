import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function ProjectVideoModal({ isOpen, onClose, src, title }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) return

    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }, [isOpen])

  function handleClose() {
    videoRef.current?.pause()
    onClose()
  }

  if (typeof document === "undefined") return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-3 backdrop-blur-lg sm:p-4"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative flex max-h-[90vh] w-[95vw] max-w-7xl flex-col rounded-3xl border border-cyan-400/20 bg-black/90 p-3 shadow-[0_0_60px_rgba(34,211,238,0.12)] sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close video"
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-300 transition-colors hover:border-cyan-400/50 hover:text-white sm:right-3 sm:top-3"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="shrink-0 pr-12 text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              {title}
            </div>

            <div className="mt-2 flex min-h-0 flex-1 items-center justify-center">
              <div className="aspect-video max-h-[calc(90vh-5rem)] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  ref={videoRef}
                  className="h-full w-full object-contain"
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
