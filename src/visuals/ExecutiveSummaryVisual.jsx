import {
  AlertCircle,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  ListChecks,
  FileText,
  Calculator,
} from "lucide-react"

const briefMeta = [
  ["Status", "High Attention", AlertCircle, "text-amber-300"],
  ["Confidence", "0.87", ShieldCheck, "text-emerald-300"],
]

const recommendedActions = [
  "Review Operations rostering.",
  "Compare demand volumes.",
  "Check leave coverage.",
  "Monitor next payroll cycle.",
]

const footerMeta = [
  ["Evidence Used", "5 items", FileText, "text-cyan-300"],
  ["Generated From", "deterministic analytics", Calculator, "text-violet-300"],
]

export default function ExecutiveSummaryVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Executive Summary</SectionTitle>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {briefMeta.map(([label, value, Icon, colour]) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <Icon className={`h-9 w-9 ${colour}`} />
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
                {label}
              </div>
              <div className={`mt-1 text-xl font-black ${colour}`}>{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <Panel title="Key Insight">
          <div className="flex items-start gap-4 rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-5">
            <Lightbulb className="h-7 w-7 shrink-0 text-cyan-300" />
            <p className="text-sm leading-7 text-zinc-200">
              Overtime increased sharply in March, primarily driven by Operations.
            </p>
          </div>
        </Panel>

        <Panel title="Business Impact">
          <div className="flex items-start gap-4 rounded-xl border border-amber-400/20 bg-amber-500/10 p-5">
            <TrendingUp className="h-7 w-7 shrink-0 text-amber-300" />
            <p className="text-sm leading-7 text-zinc-200">
              Potential labour cost exposure and workload imbalance.
            </p>
          </div>
        </Panel>
      </div>

      <Panel title="Recommended Actions" className="mt-5">
        <div className="space-y-2">
          {recommendedActions.map((action, index) => (
            <div
              key={action}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <ListChecks className="h-5 w-5 shrink-0 text-emerald-300" />
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-xs font-black text-violet-300">
                {index + 1}
              </span>
              <span className="text-sm text-zinc-300">{action}</span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
        {footerMeta.map(([label, value, Icon, colour]) => (
          <div key={label} className="flex items-center gap-3 text-xs text-zinc-500">
            <Icon className={`h-4 w-4 ${colour}`} />
            <span className="font-black uppercase tracking-[0.12em]">{label}:</span>
            <span className="text-zinc-300">{value}</span>
          </div>
        ))}
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
