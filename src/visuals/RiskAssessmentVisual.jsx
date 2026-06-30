import { ShieldAlert, TrendingUp, BarChart3, AlertTriangle, FileCheck, Info } from "lucide-react"

const inputs = [
  ["Trend severity", "High", TrendingUp, "text-cyan-300 border-cyan-400/20 bg-cyan-500/10"],
  ["Variance concentration", "High", BarChart3, "text-violet-300 border-violet-400/20 bg-violet-500/10"],
  ["Anomaly score", "Elevated", AlertTriangle, "text-amber-300 border-amber-400/20 bg-amber-500/10"],
  ["Evidence coverage", "Strong", FileCheck, "text-emerald-300 border-emerald-400/20 bg-emerald-500/10"],
]

export default function RiskAssessmentVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Risk Assessment</SectionTitle>

      <Panel title="Risk Inputs" className="mt-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {inputs.map(([label, value, Icon, styles]) => (
            <div key={label} className={`flex items-center justify-between rounded-xl border p-4 ${styles}`}>
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="text-xs text-zinc-300">{label}</span>
              </div>
              <span className="text-sm font-black">{value}</span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 rounded-2xl border border-red-400/25 bg-red-500/10 p-6">
        <div className="flex items-start gap-4">
          <ShieldAlert className="h-10 w-10 shrink-0 text-red-300" />
          <div className="flex-1">
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-red-300">
              Output
            </div>
            <div className="mt-2 text-2xl font-black text-white">Risk Level: High</div>
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                Recommended Review
              </div>
              <p className="mt-2 text-sm font-semibold text-zinc-200">
                Workforce capacity and rostering
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Risk scoring synthesises deterministic analytical inputs into a reviewable assessment.
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
