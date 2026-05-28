import { useState } from "react"
import { layerDetails } from "../data/layerDetails"
import VisualRegistry from "../visuals/VisualRegistry"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Wrench, ShieldCheck } from "lucide-react"

export default function PhaseSection({ phase }) {
  const [selectedLayer, setSelectedLayer] = useState(null)
  const [selectedAction, setSelectedAction] = useState(null)

  const selectedKey = selectedLayer ? `${phase.id}:${selectedLayer}` : null
  const selectedDetail = selectedKey ? layerDetails[selectedKey] : null
  const [showAdvancedLayers, setShowAdvancedLayers] = useState(false)

  return (
    <section className="relative grid min-h-[250px] gap-8 overflow-visible border-t border-white/10 py-10 lg:grid-cols-[120px_320px_1fr]">
      {/* NUMBER */}
      <div className="relative z-20 text-6xl font-black text-violet-500 md:text-7xl">
        {phase.id}
      </div>
  
      {/* TITLE COLUMN */}
      <div className="relative z-20">
        <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">
          {phase.label}
        </div>
  
        <h2 className="mt-2 max-w-xs text-3xl font-black leading-tight">
          {phase.title}
        </h2>
      </div>
  
      {/* CONTENT COLUMN */}
      <div className="relative z-20">
        <div className="max-w-4xl space-y-5 text-lg leading-8 text-zinc-400">
          {phase.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {phase.layers && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {phase.layers.map((layer, index) => (
              <div key={layer} className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const next = selectedLayer === layer ? null : layer
                    setSelectedLayer(next)
                    setSelectedAction(null)
                  }}
                  className={`rounded-xl border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-200 ${
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

        {phase.advancedLayers && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => {
                setShowAdvancedLayers((prev) => !prev)
                setSelectedLayer(null)
                setSelectedAction(null)
              }}
              className={`rounded-xl border px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-200 ${
                showAdvancedLayers
                  ? "border-cyan-400/70 bg-cyan-500/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/5"
              }`}
            >
              Advanced Platform Capabilities
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
                      onClick={() => {
                        const next = selectedLayer === layer ? null : layer
                        setSelectedLayer(next)
                        setSelectedAction(null)
                      }}
                      className={`rounded-xl border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-200 ${
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
                <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">
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

                <div className="mt-6 flex flex-wrap gap-3">
                  {selectedDetail.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <VisualRegistry type={selectedDetail.visual} />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {selectedDetail.actions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() =>
                        setSelectedAction(
                          selectedAction === action.label ? null : action.label
                        )
                      }
                      className={`rounded-xl border px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] transition-all duration-200 ${
                        selectedAction === action.label
                          ? "border-violet-300 bg-violet-500/20 text-white"
                          : "border-white/10 bg-white/[0.03] text-zinc-300 hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-violet-500/10"
                      }`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {selectedAction && (
                    <motion.div
                      key={selectedAction}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <ActionDetail
                        action={selectedDetail.actions.find(
                          (item) => item.label === selectedAction
                        )}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
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
      className="group grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.04]"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full border ${toneClasses[tone]}`}
      >
        {Icon && <Icon className="h-6 w-6" />}
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">
          {label}
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
          {text}
        </p>
      </div>
    </motion.div>
  )
}

function ActionDetail({ action }) {
  if (!action) return null

  return (
    <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
      <div className="text-[10px] uppercase tracking-[0.25em] text-violet-200">
        {action.label}
      </div>

      <h4 className="mt-3 text-xl font-black text-white">
        {action.title}
      </h4>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {action.description}
      </p>

      <div className="mt-4 space-y-2">
        {action.items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

