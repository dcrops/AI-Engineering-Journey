import { Info, Building2 } from "lucide-react"

const groups = [
  ["Operations", 64, "text-cyan-300 bg-cyan-400"],
  ["Support", 18, "text-violet-300 bg-violet-400"],
  ["Finance", 10, "text-emerald-300 bg-emerald-400"],
  ["HR", 8, "text-amber-300 bg-amber-400"],
]

export default function VarianceAnalysisVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Variance Analysis</SectionTitle>

      <Panel title="Department Contribution" className="mt-6">
        <div className="space-y-4">
          {groups.map(([name, pct, styles]) => {
            const [textColour, barColour] = styles.split(" ")

            return (
              <div key={name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-zinc-200">{name}</span>
                  <span className={`font-black tabular-nums ${textColour}`}>{pct}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className={`h-full rounded-full ${barColour}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </Panel>

      <div className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
        <div className="flex items-start gap-4">
          <Building2 className="h-8 w-8 shrink-0 text-violet-300" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-violet-300">
              Finding
            </div>
            <p className="mt-2 text-sm font-semibold leading-6 text-zinc-200">
              Operations contributed the majority of the variance.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Variance decomposition calculated from grouped dimensional aggregates.
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Supports · Executive Summary
        </span>
      </div>
    </div>
  )
}

function Panel({ title, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-black/50 p-5 ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-5">{children}</div>
    </div>
  )
}

function SectionTitle({ children, className = "" }) {
  return (
    <div
      className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}
    >
      {children}
    </div>
  )
}
