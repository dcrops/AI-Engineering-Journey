import { TrendingUp, BarChart3, Info } from "lucide-react"

const periods = [
  ["Jan", "1,020", 60],
  ["Feb", "1,240", 73],
  ["Mar", "1,711", 100],
  ["Apr", "1,690", 99],
]

export default function TrendAnalysisVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Trend Analysis</SectionTitle>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <MetricCard label="Metric" value="overtime_hours" />
        <MetricCard label="Period" value="Jan → Apr" />
      </div>

      <Panel title="Monthly Values" className="mt-5">
        <div className="flex items-end justify-between gap-3 border-b border-white/10 pb-4">
          {periods.map(([month, value, height]) => (
            <div key={month} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full items-end justify-center">
                <div
                  className={`w-full max-w-[48px] rounded-t-lg border border-cyan-400/30 bg-cyan-500/20 ${
                    month === "Mar" ? "bg-cyan-400/40" : ""
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                {month}
              </div>
              <div className="text-sm font-black tabular-nums text-white">{value}</div>
              <div className="text-[10px] text-zinc-500">hrs</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 via-cyan-400/60 to-cyan-400/20" />
          <TrendingUp className="h-4 w-4 text-cyan-300" />
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 via-cyan-400/60 to-cyan-400/20" />
        </div>
      </Panel>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
          <div className="text-[10px] font-black uppercase tracking-[0.14em] text-amber-300">
            Change
          </div>
          <div className="mt-2 text-2xl font-black text-white">+38% in March</div>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
          <div className="flex items-start gap-3">
            <BarChart3 className="h-6 w-6 shrink-0 text-emerald-300" />
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
                Finding
              </div>
              <p className="mt-2 text-sm font-semibold text-zinc-200">
                Material upward trend detected
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Trend calculated deterministically from structured monthly aggregates.
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Feeds Into · Executive Reasoning
        </span>
      </div>
    </div>
  )
}

function MetricCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
        {label}
      </div>
      <div className="mt-1 font-mono text-sm font-black text-cyan-300">{value}</div>
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
