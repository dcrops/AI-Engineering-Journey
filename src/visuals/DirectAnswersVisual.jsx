import { MessageSquare, CheckCircle2, TrendingUp, BarChart3, AlertTriangle, FileText } from "lucide-react"

const supportTools = [
  ["Trend Analysis", TrendingUp, "text-cyan-300 border-cyan-400/20 bg-cyan-500/10"],
  ["Variance Analysis", BarChart3, "text-violet-300 border-violet-400/20 bg-violet-500/10"],
  ["Anomaly Detection", AlertTriangle, "text-amber-300 border-amber-400/20 bg-amber-500/10"],
]

export default function DirectAnswersVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Direct Answers</SectionTitle>

      <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
        <div className="flex items-start gap-4">
          <MessageSquare className="h-8 w-8 shrink-0 text-violet-300" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-300">
              Question
            </div>
            <p className="mt-2 text-lg font-semibold text-zinc-200">
              Why did overtime spike in March?
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
          Answer
        </div>
        <p className="mt-3 text-sm leading-7 text-zinc-200">
          Overtime increased primarily because Operations contributed 64% of the total increase and
          March exceeded the recent baseline by 2.4σ.
        </p>
      </div>

      <Panel title="Support" className="mt-5">
        <div className="flex flex-wrap gap-2">
          {supportTools.map(([label, Icon, styles]) => (
            <span
              key={label}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] ${styles}`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-300">
            <FileText className="h-3.5 w-3.5" />
            Evidence Items: 5
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300">
          <CheckCircle2 className="h-4 w-4" />
          <span className="font-black uppercase tracking-[0.1em]">Deterministic answer</span>
        </div>
      </Panel>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Uses · Evidence Transparency
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
