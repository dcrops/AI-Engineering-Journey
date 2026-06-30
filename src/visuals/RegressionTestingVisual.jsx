import { ClipboardCheck, CheckCircle2, XCircle, Info } from "lucide-react"

const stats = [
  ["Checks Executed", "42", CheckCircle2, "text-cyan-300"],
  ["Passed", "42", CheckCircle2, "text-emerald-300"],
  ["Failures", "0", XCircle, "text-emerald-300"],
]

const modules = [
  "profiling",
  "routing",
  "analytics",
  "evidence",
  "summary",
]

export default function RegressionTestingVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Regression Testing</SectionTitle>

      <Panel title="Test Run" className="mt-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(([label, value, Icon, colour]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
            >
              <Icon className={`mx-auto h-6 w-6 ${colour}`} />
              <div className="mt-3 text-3xl font-black tabular-nums text-white">{value}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-zinc-500">Pass Rate</span>
            <span className="font-black text-emerald-300">100%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full bg-emerald-400" />
          </div>
        </div>
      </Panel>

      <Panel title="Coverage" className="mt-5">
        <div className="flex flex-wrap gap-2">
          {modules.map((module) => (
            <span
              key={module}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-300"
            >
              <ClipboardCheck className="h-3.5 w-3.5" />
              {module}
            </span>
          ))}
        </div>
      </Panel>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            All regression checks passed across core platform modules.
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Protects · Platform Quality
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
