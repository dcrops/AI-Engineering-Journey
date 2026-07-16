import { useState } from "react"
import { Play } from "lucide-react"
import { getProjectDemonstrations } from "../data/projectDemonstrations"
import { trackJourneyEvent } from "../utils/visitorTracking"
import ProjectVideoModal from "../components/ProjectVideoModal"

export default function ProjectDemonstrationsSection() {
  const [activeVideo, setActiveVideo] = useState(null)
  const demonstrations = getProjectDemonstrations()

  function handleWatch(item) {
    setActiveVideo(item.demoVideo)
    trackJourneyEvent("cta_click", {
      label: `Project Demonstrations - ${item.buttonLabel}`,
    })
  }

  function handleClose() {
    setActiveVideo(null)
  }

  return (
    <section className="border-t border-white/10 py-16">
      <div className="text-center">
        <div className="text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
          Project Demonstrations
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-[17px] leading-8 text-zinc-400">
          If you&apos;re short on time, start here.
          <br />
          Each walkthrough is under 4 minutes and demonstrates a complete
          engineering project.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-4">
        {demonstrations.map((item) => (
          <div
            key={item.badge}
            className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.02] sm:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-2xl font-black tabular-nums text-violet-400">
                  {item.badge}
                </div>

                <div>
                  <div className="text-lg font-black leading-snug text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{item.tagline}</div>
                </div>
              </div>

              {item.comingSoon ? (
                <div className="shrink-0 self-start rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 sm:self-center">
                  Coming Soon
                </div>
              ) : (
                <button
                  type="button"
                  data-track
                  data-track-label={`Project Demonstrations - ${item.buttonLabel} clicked`}
                  onClick={() => handleWatch(item)}
                  className="group inline-flex shrink-0 items-center gap-3 self-start rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-8 py-4 text-sm font-black uppercase tracking-[0.28em] text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] sm:self-center"
                >
                  <Play className="h-4 w-4 fill-current" />
                  {item.buttonLabel}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <ProjectVideoModal
          isOpen={Boolean(activeVideo)}
          onClose={handleClose}
          src={activeVideo.src}
          title={activeVideo.title}
        />
      )}
    </section>
  )
}
