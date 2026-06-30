import { AlertTriangle, Gauge, Info } from "lucide-react"

const metrics = [
  ["Expected Range", "900–1,300 hrs"],
  ["Observed", "1,711 hrs"],
  ["Z-score", "2.4σ"],
  ["Status", "Anomaly detected"],
]

export default function AnomalyDetectionVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Anomaly Detection</SectionTitle>

      <Panel title="Baseline Comparison" className="mt-6">
        <div className="relative rounded-xl border border-white/10 bg-black/40 p-6">
          <div className="absolute left-6 right-6 top-1/2 h-16 -translate-y-1/2 rounded-lg border border-emerald-400/25 bg-emerald-500/10" />
          <div className="relative flex h-32 items-end justify-center">
            <div className="absolute bottom-0 left-[18%] h-[55%] w-3 rounded-t bg-zinc-600" />
            <div className="absolute bottom-0 left-[38%] h-[68%] w-3 rounded-t bg-zinc-600" />
            <div className="absolute bottom-0 left-[58%] h-full w-4 rounded-t border border-amber-400/40 bg-amber-400/60" />
            <div className="absolute bottom-0 left-[78%] h-[98%] w-3 rounded-t bg-zinc-600" />
          </div>
          <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-[0.1em] text-zinc-500">
            <span>900 hrs</span>
            <span className="text-emerald-300">Expected band</span>
            <span>1,300 hrs</span>
          </div>
        </div>
      </Panel>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {metrics.map(([label, value]) => (
          <div
            key={label}
            className={`rounded-xl border px-4 py-3 ${
              label === "Status"
                ? "border-amber-400/20 bg-amber-500/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
              {label}
            </div>
            <div
              className={`mt-1 text-sm font-black ${
                label === "Status" ? "text-amber-300" : "text-white"
              }`}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
        <div className="flex items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-amber-300" />
          <Gauge className="h-8 w-8 text-amber-300/60" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-amber-300">
              Threshold Exceeded
            </div>
            <p className="mt-1 text-sm text-zinc-300">
              March observation falls outside the deterministic expected range.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Anomalies detected using statistical thresholds — not LLM inference.
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Feeds Into · Risk Assessment
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
