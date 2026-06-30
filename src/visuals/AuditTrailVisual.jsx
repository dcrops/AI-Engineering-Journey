import {
  Fingerprint,
  FileSpreadsheet,
  MessageSquare,
  CheckCircle2,
  Wrench,
  BrainCircuit,
  ShieldCheck,
  Calculator,
  Info,
} from "lucide-react"

const requestMetadata = [
  ["Request ID", "OI-2026-0042", Fingerprint, "text-cyan-300"],
  ["Dataset", "workforce_operations.csv", FileSpreadsheet, "text-emerald-300"],
  ["Question", "Why did overtime spike in March?", MessageSquare, "text-violet-300"],
]

const pipelineSteps = [
  "Dataset profiled",
  "Router selected trend + anomaly",
  "Trend analysis executed",
  "Anomaly detection executed",
  "Evidence generated",
  "Executive reasoning completed",
  "Summary produced",
]

const toolsUsed = [
  "TrendAnalysisTool",
  "AnomalyDetectionTool",
  "RiskAssessmentTool",
]

const reviewMetadata = [
  ["LLM usage", "Narrative only", BrainCircuit, "text-violet-300"],
  ["Calculations", "Deterministic", Calculator, "text-emerald-300"],
]

export default function AuditTrailVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Audit Trail</SectionTitle>

      <Panel title="Request Metadata" className="mt-6">
        <div className="space-y-3">
          {requestMetadata.map(([label, value, Icon, colour]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${colour}`} />
                <span className="text-xs font-black uppercase tracking-[0.12em] text-zinc-500">
                  {label}
                </span>
              </div>
              <span className="text-sm text-zinc-200">{value}</span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel title="Pipeline Steps">
          <div className="space-y-2">
            {pipelineSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xs font-black text-cyan-300">
                  {index + 1}
                </span>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                <span className="text-sm text-zinc-300">{step}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Review Metadata">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
              <Wrench className="h-4 w-4 text-cyan-300" />
              Tools Used
            </div>
            <ul className="mt-3 space-y-2">
              {toolsUsed.map((tool) => (
                <li
                  key={tool}
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-cyan-300"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 pt-4">
            {reviewMetadata.map(([label, value, Icon, colour]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${colour}`} />
                  <span className="text-xs text-zinc-400">{label}</span>
                </div>
                <span className={`text-sm font-black ${colour}`}>{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
              <div className="text-sm text-zinc-300">Fully reviewable lineage</div>
            </div>
          </div>
        </Panel>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Every analytical step, tool invocation and evidence reference is recorded for governance review.
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
