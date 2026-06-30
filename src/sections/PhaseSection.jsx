import { useState } from "react"
import { layerDetails } from "../data/layerDetails"
import VisualRegistry from "../visuals/VisualRegistry"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Wrench, ShieldCheck } from "lucide-react"
import { trackJourneyEvent } from "../utils/visitorTracking"

export default function PhaseSection({ phase }) {
  const [selectedLayer, setSelectedLayer] = useState(null)
  const [showAdvancedLayers, setShowAdvancedLayers] = useState(false)

  const selectedKey = selectedLayer ? `${phase.id}:${selectedLayer}` : null
  const selectedDetail = selectedKey ? layerDetails[selectedKey] : null

  function handleLayerClick(layer) {
    const isClosingCurrentLayer = selectedLayer === layer

    setSelectedLayer(isClosingCurrentLayer ? null : layer)

    if (!isClosingCurrentLayer) {
      trackJourneyEvent("project_section_viewed", {
        label: `${phase.title} - ${layer}`,
      })
    }
  }

  function handleAdvancedToggle() {
    const willShowAdvancedLayers = !showAdvancedLayers

    setShowAdvancedLayers(willShowAdvancedLayers)
    setSelectedLayer(null)

    trackJourneyEvent("cta_click", {
      label: `${phase.title} - Advanced AI Engineering Capabilities toggled`,
      value: willShowAdvancedLayers ? "opened" : "closed",
    })
  }

  return (
    <section className="relative grid min-h-[250px] gap-8 overflow-visible border-t border-white/10 py-10 lg:grid-cols-[120px_320px_1fr]">
      <div className="relative z-20 text-6xl font-black text-violet-500 md:text-7xl">
        {phase.id}
      </div>

      <div className="relative z-20">
        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
          {phase.label}
        </div>

        <h2 className="mt-2 max-w-xs text-3xl font-black leading-tight">
          {phase.title}
        </h2>
      </div>

      <div className="relative z-20">
        <div className="max-w-5xl space-y-6 text-[19px] leading-9 text-zinc-300">
          {phase.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {phase.layers && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {phase.layers.map((layer, index) => (
              <div key={layer} className="flex items-center gap-3">
                <button
                  type="button"
                  data-track
                  data-track-label={`${phase.title} - ${layer} clicked`}
                  onClick={() => handleLayerClick(layer)}
                  className={`rounded-xl border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.28em] transition-all duration-200 ${
                    selectedLayer === layer
                      ? "border-violet-400/70 bg-violet-500/15 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/5"
                  }`}
                >
                  {layer}
                </button>

                {index !== phase.layers.length - 1 && (
                  <div className="h-px w-6 bg-cyan-400/60" />
                )}
              </div>
            ))}
          </div>
        )}

        {phase.engineeringHighlights && (
          <EngineeringHighlights highlights={phase.engineeringHighlights} />
        )}

        {phase.advancedLayers && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              data-track
              data-track-label={`${phase.title} - Advanced AI Engineering Capabilities clicked`}
              onClick={handleAdvancedToggle}
              className={`group rounded-2xl border px-10 py-5 transition-all duration-300 ${
                showAdvancedLayers
                  ? "border-cyan-400/70 bg-cyan-500/15 text-white shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                  : "border-cyan-400/30 bg-cyan-500/10 text-cyan-200 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              }`}
            >
              <div className="text-sm font-black uppercase tracking-[0.35em]">
                Advanced AI Engineering Capabilities
              </div>

              <div className="mt-2 text-xs tracking-wide text-zinc-400 group-hover:text-zinc-300">
                {phase.id === "05"
                  ? "Evidence • Explainability • Governance • Reliability • Testing"
                  : "Evaluation • Observability • Deployment • Safety • Telemetry"}
              </div>
            </button>
          </div>
        )}

        <AnimatePresence>
          {showAdvancedLayers && phase.advancedLayers && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-8"
            >
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {phase.advancedLayers.map((layer, index) => (
                  <div key={layer} className="flex items-center gap-3">
                    <button
                      type="button"
                      data-track
                      data-track-label={`${phase.title} - ${layer} clicked`}
                      onClick={() => handleLayerClick(layer)}
                      className={`rounded-xl border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.28em] transition-all duration-200 ${
                        selectedLayer === layer
                          ? "border-violet-400/70 bg-violet-500/15 text-white"
                          : "border-white/10 bg-white/[0.03] text-zinc-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/5"
                      }`}
                    >
                      {layer}
                    </button>

                    {index !== phase.advancedLayers.length - 1 && (
                      <div className="hidden h-px w-6 bg-cyan-400/60 sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {selectedDetail && (
            <motion.div
              key={selectedKey}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`relative z-20 mt-10 rounded-3xl border border-white/10 bg-black/90 p-8 backdrop-blur-md transition-all duration-500 ${
                selectedDetail.layout === "wide"
                  ? "xl:-ml-64 xl:w-[calc(100%+20rem)]"
                  : ""
              }`}
            >
              <div
                className={`grid gap-8 ${
                  selectedDetail.layout === "wide"
                    ? "xl:grid-cols-[0.8fr_1.6fr]"
                    : "xl:grid-cols-[1fr_1fr]"
                }`}
              >
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
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <VisualRegistry type={selectedDetail.visual} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            key={label}
            className={`rounded-xl border px-4 py-4 text-center ${accents[index % accents.length]}`}
          >
            <div
              className={`text-3xl font-black tabular-nums leading-none ${valueColours[index % valueColours.length]}`}
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
      className="group grid grid-cols-[60px_1fr] gap-5 rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04]"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full border ${toneClasses[tone]}`}
      >
        {Icon && <Icon className="h-7 w-7" />}
      </div>

      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {label}
        </div>

        <p className="mt-4 text-[15px] leading-8 text-zinc-300">
          {text}
        </p>
      </div>
    </motion.div>
  )
}