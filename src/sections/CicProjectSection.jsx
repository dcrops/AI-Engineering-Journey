import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Wrench, ShieldCheck } from "lucide-react"
import { cicProject, cicLayerDetails } from "../data/cicProject"
import CicArchitectureVisual from "../visuals/CicArchitectureVisual"
import CicLayerVisual from "../visuals/CicLayerVisual"
import { trackJourneyEvent } from "../utils/visitorTracking"

export default function CicProjectSection() {
  const project = cicProject
  const [selectedLayer, setSelectedLayer] = useState(null)

  const selectedDetail = selectedLayer ? cicLayerDetails[selectedLayer] : null

  function handleLayerClick(layer) {
    const isClosing = selectedLayer === layer
    setSelectedLayer(isClosing ? null : layer)

    if (!isClosing) {
      trackJourneyEvent("project_section_viewed", {
        label: `${project.title} - ${layer}`,
      })
    }
  }

  function handleLayerKeyDown(event, layer) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleLayerClick(layer)
    }
  }

  return (
    <section className="relative grid min-h-[250px] gap-8 overflow-visible border-t border-white/10 py-10 lg:grid-cols-[120px_320px_1fr]">
      <div className="relative z-20 text-6xl font-black text-violet-500 md:text-7xl">
        {project.id}
      </div>

      <div className="relative z-20">
        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
          {project.label}
        </div>

        <h2 className="mt-2 max-w-xs text-3xl font-black leading-tight">
          {project.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-zinc-400">{project.subtitle}</p>
      </div>

      <div className="relative z-20">
        <div className="max-w-5xl space-y-5 text-[19px] leading-9 text-zinc-300">
          {project.description.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
          <CicArchitectureVisual />
        </div>

        <div className="mt-8">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
            Engineering Layers
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            Select a layer to inspect the problem, implementation and engineering decision.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {project.layers.map((layer, index) => {
              const isSelected = selectedLayer === layer

              return (
                <div key={layer} className="flex items-center gap-3">
                  <button
                    type="button"
                    data-track
                    data-track-label={`${project.title} - ${layer} clicked`}
                    aria-pressed={isSelected}
                    onClick={() => handleLayerClick(layer)}
                    onKeyDown={(event) => handleLayerKeyDown(event, layer)}
                    className={`rounded-xl border px-5 py-3.5 text-xs font-bold uppercase tracking-[0.22em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                      isSelected
                        ? "border-violet-400/70 bg-violet-500/15 text-white"
                        : "border-white/10 bg-white/[0.03] text-zinc-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/5"
                    }`}
                  >
                    {layer}
                  </button>

                  {index !== project.layers.length - 1 && (
                    <div className="hidden h-px w-5 bg-cyan-400/60 sm:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <EngineeringHighlights highlights={project.engineeringHighlights} />

        <AnimatePresence mode="wait">
          {selectedDetail && (
            <motion.div
              key={selectedLayer}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-20 mt-10 rounded-3xl border border-white/10 bg-black/90 p-6 backdrop-blur-md sm:p-8 xl:-ml-64 xl:w-[calc(100%+20rem)]"
            >
              <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    {selectedDetail.title}
                  </div>

                  <div className="mt-6 grid gap-4">
                    <SummaryCard
                      label="The Problem"
                      text={selectedDetail.body.problem}
                      icon={AlertTriangle}
                      tone="violet"
                    />
                    <SummaryCard
                      label="What I Built"
                      text={selectedDetail.body.built}
                      icon={Wrench}
                      tone="cyan"
                    />
                    <SummaryCard
                      label="Why It Mattered"
                      text={selectedDetail.body.mattered}
                      icon={ShieldCheck}
                      tone="emerald"
                    />
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-2 sm:p-4">
                    <CicLayerVisual type={selectedDetail.visual} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
            Tech Stack
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EngineeringHighlights({ highlights }) {
  const accents = [
    "border-cyan-400/20 bg-cyan-500/10",
    "border-violet-400/20 bg-violet-500/10",
    "border-emerald-400/20 bg-emerald-500/10",
    "border-amber-400/20 bg-amber-500/10",
  ]

  const valueColours = [
    "text-cyan-300",
    "text-violet-300",
    "text-emerald-300",
    "text-amber-300",
  ]

  return (
    <div className="mt-8">
      <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
        Engineering Highlights
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(([value, label], index) => (
          <div
            key={`${value}-${label}`}
            className={`rounded-xl border px-4 py-4 text-center ${accents[index % accents.length]}`}
          >
            <div
              className={`text-2xl font-black leading-none sm:text-3xl ${valueColours[index % valueColours.length]} ${
                /^\d/.test(value) ? "tabular-nums" : ""
              }`}
            >
              {value}
            </div>
            <div className="mt-2 text-[10px] font-black uppercase leading-snug tracking-[0.12em] text-zinc-400">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SummaryCard({ label, text, icon: Icon, tone = "cyan" }) {
  const toneClasses = {
    violet: "border-violet-400/30 bg-violet-500/10 text-violet-300",
    cyan: "border-cyan-400/30 bg-cyan-500/10 text-cyan-300",
    emerald: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group grid grid-cols-[60px_1fr] gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04] sm:p-6"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full border ${toneClasses[tone]}`}
      >
        {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
      </div>

      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {label}
        </div>
        <p className="mt-3 text-[15px] leading-7 text-zinc-300 sm:mt-4 sm:leading-8">
          {text}
        </p>
      </div>
    </motion.div>
  )
}
