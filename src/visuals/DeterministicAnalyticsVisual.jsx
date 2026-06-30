import {
  TrendingUp,
  BarChart3,
  AlertTriangle,
  ShieldAlert,
  CheckCircle2,
  FileText,
  Calculator,
  Info,
} from "lucide-react"

const engines = [
  [
    "Trend Analysis",
    "March overtime increased +38%",
    TrendingUp,
    "text-cyan-300 border-cyan-400/20 bg-cyan-500/10",
  ],
  [
    "Variance Analysis",
    "Operations contributed 64% of increase",
    BarChart3,
    "text-violet-300 border-violet-400/20 bg-violet-500/10",
  ],
  [
    "Anomaly Detection",
    "March exceeds baseline by 2.4σ",
    AlertTriangle,
    "text-amber-300 border-amber-400/20 bg-amber-500/10",
  ],
  [
    "Risk Assessment",
    "Risk level: High",
    ShieldAlert,
    "text-red-300 border-red-400/20 bg-red-500/10",
  ],
]

const combinedOutput = [
  ["4 findings generated", CheckCircle2, "text-emerald-300"],
  ["Evidence attached", FileText, "text-cyan-300"],
  ["No LLM-generated calculations", Calculator, "text-violet-300"],
]

export default function DeterministicAnalyticsVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Deterministic Analytics</SectionTitle>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {engines.map(([title, result, Icon, styles], index) => (
          <div key={title} className="relative">
            <div className={`h-full rounded-2xl border p-5 ${styles}`}>
              <Icon className="h-7 w-7" />
              <div className="mt-4 text-[10px] font-black uppercase tracking-[0.14em]">
                {title}
              </div>
              <p className="mt-3 text-sm font-semibold leading-6 text-zinc-200">{result}</p>
            </div>

            {index < engines.length - 1 && (
              <div className="absolute left-full top-1/2 z-10 hidden h-px w-4 bg-cyan-400/60 xl:block" />
            )}
          </div>
        ))}
      </div>

      <div className="my-5 flex justify-center">
        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <Panel title="Combined Output">
        <div className="grid gap-4 sm:grid-cols-3">
          {combinedOutput.map(([label, Icon, colour]) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <Icon className={`h-7 w-7 shrink-0 ${colour}`} />
              <div className={`text-sm font-black ${colour}`}>{label}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-emerald-300" />
          <p className="text-sm text-zinc-300">
            All findings are produced by structured analytical engines — AI assists with explanation, not calculation.
          </p>
        </div>
      </div>
    </div>
  )
}

function Panel({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
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
