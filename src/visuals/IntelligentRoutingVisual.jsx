import {
  MessageSquare,
  GitBranch,
  TrendingUp,
  AlertTriangle,
  Layers,
  ArrowRight,
  Info,
  CheckCircle2,
} from "lucide-react"

const datasetSignals = [
  ["date field available", "text-emerald-300", "bg-emerald-300"],
  ["metric detected", "text-cyan-300", "bg-cyan-300"],
  ["department dimension available", "text-violet-300", "bg-violet-300"],
]

const workflowSelection = [
  ["Primary", "Trend Analysis", "text-cyan-300 border-cyan-400/20 bg-cyan-500/10"],
  ["Secondary", "Anomaly Detection", "text-amber-300 border-amber-400/20 bg-amber-500/10"],
  ["Context", "Department variance", "text-violet-300 border-violet-400/20 bg-violet-500/10"],
]

export default function IntelligentRoutingVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Intelligent Routing</SectionTitle>

      <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
        <div className="flex items-start gap-4">
          <MessageSquare className="h-8 w-8 shrink-0 text-violet-300" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-300">
              User Question
            </div>
            <p className="mt-2 text-lg font-semibold text-zinc-200">
              &ldquo;Why did overtime spike in March?&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="my-6 flex justify-center">
        <ArrowRight className="h-6 w-6 rotate-90 text-cyan-400/60 xl:rotate-0" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.15fr_1fr]">
        <Panel title="Question Router">
          <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4">
            <div className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-cyan-300" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
                  Intent Detected
                </div>
                <div className="mt-1 text-sm font-black text-cyan-300">trend + anomaly</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
              Dataset Signals
            </div>
            <ul className="mt-3 space-y-2.5">
              {datasetSignals.map(([signal, colour, dotColour]) => (
                <li
                  key={signal}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs text-zinc-300"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${dotColour}`} />
                    <span className={colour}>{signal}</span>
                  </div>
                  <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-300/80">
                    ✓ Detected
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>

        <div className="hidden items-center justify-center xl:flex">
          <div className="flex flex-col items-center gap-1">
            <ArrowRight className="h-5 w-5 text-cyan-400/60" />
            <ArrowRight className="h-5 w-5 text-cyan-400/60" />
          </div>
        </div>

        <Panel title="Selected Workflow">
          <div className="space-y-3">
            {workflowSelection.map(([role, value, styles]) => (
              <div
                key={role}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 ${styles}`}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">
                  {role}
                </span>
                <span className="text-sm font-black">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
            <TrendingUp className="h-5 w-5 text-cyan-300" />
            <AlertTriangle className="h-5 w-5 text-amber-300" />
            <Layers className="h-5 w-5 text-violet-300" />
            <span className="text-xs text-zinc-400">3 analytical paths activated</span>
            <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-emerald-300/70" />
          </div>
        </Panel>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Routing decisions are driven by dataset profile signals and question intent — not generic chat responses.
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
