import {
  TrendingUp,
  BarChart3,
  AlertTriangle,
  ShieldAlert,
  BrainCircuit,
  ArrowDown,
  Info,
} from "lucide-react"

const inputFindings = [
  ["Trend", "Overtime increased +38%", TrendingUp, "text-cyan-300 border-cyan-400/20 bg-cyan-500/10"],
  ["Variance", "Operations drove 64% of increase", BarChart3, "text-violet-300 border-violet-400/20 bg-violet-500/10"],
  ["Anomaly", "March exceeded baseline by 2.4σ", AlertTriangle, "text-amber-300 border-amber-400/20 bg-amber-500/10"],
  ["Risk", "Potential workforce capacity issue", ShieldAlert, "text-red-300 border-red-400/20 bg-red-500/10"],
]

export default function ExecutiveReasoningVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Executive Reasoning</SectionTitle>

      <Panel title="Input Findings" className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {inputFindings.map(([type, finding, Icon, styles]) => (
            <div key={type} className={`rounded-xl border p-4 ${styles}`}>
              <Icon className="h-6 w-6" />
              <div className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] opacity-70">
                {type}
              </div>
              <p className="mt-2.5 text-sm font-semibold leading-6 text-zinc-200">{finding}</p>
            </div>
          ))}
        </div>
      </Panel>

      <div className="my-6 flex justify-center">
        <div className="flex flex-col items-center gap-1">
          <ArrowDown className="h-5 w-5 text-cyan-400/60" />
          <ArrowDown className="h-5 w-5 text-cyan-400/60" />
        </div>
      </div>

      <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-6">
        <div className="flex items-start gap-4">
          <BrainCircuit className="h-9 w-9 shrink-0 text-violet-300" />
          <div>
            <SectionTitle>Business Interpretation</SectionTitle>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              The overtime increase appears concentrated in Operations and is materially above recent
              patterns, suggesting a capacity or rostering issue rather than normal seasonal variation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Multiple analytical findings are synthesised into operational meaning — not raw data output.
          </p>
        </div>
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
