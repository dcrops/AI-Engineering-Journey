import { Database, FileSpreadsheet, CheckCircle2, Target, ShieldCheck } from "lucide-react"

const datasets = [
  ["workforce_operations.csv", "Primary workforce overtime scenarios"],
  ["payroll_variance_sample.csv", "Department variance test cases"],
  ["leave_risk_dataset.csv", "Leave balance risk patterns"],
]

const metadata = [
  "Known expected patterns",
  "Deterministic test inputs",
  "Regression-safe scenarios",
]

export default function GoldenDatasetsVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Golden Datasets</SectionTitle>

      <Panel title="Dataset Registry" className="mt-6">
        <div className="space-y-3">
          {datasets.map(([name, description]) => (
            <div
              key={name}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <FileSpreadsheet className="mt-0.5 h-6 w-6 shrink-0 text-cyan-300" />
              <div className="min-w-0 flex-1">
                <div className="font-mono text-sm font-black text-white">{name}</div>
                <div className="mt-1 text-xs text-zinc-500">{description}</div>
              </div>
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300/70" />
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Metadata" className="mt-5">
        <div className="space-y-2.5">
          {metadata.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-lg border border-violet-400/15 bg-violet-500/5 px-4 py-2.5"
            >
              <Target className="h-4 w-4 shrink-0 text-violet-300" />
              <span className="text-sm text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3">
        <Database className="h-5 w-5 text-emerald-300" />
        <ShieldCheck className="h-5 w-5 text-emerald-300/70" />
        <span className="text-sm text-zinc-300">3 curated datasets registered for repeatable testing</span>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Used by · Regression Testing
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
