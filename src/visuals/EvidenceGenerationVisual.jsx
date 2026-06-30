import {
  FileSearch,
  Link2,
  Database,
  BarChart3,
  Layers,
  Calculator,
  ShieldCheck,
} from "lucide-react"

const evidenceItems = [
  "Feb overtime: 1,240 hrs",
  "Mar overtime: 1,711 hrs",
  "Change: +38%",
  "Department: Operations",
  "Supporting rows: 248 records",
]

const traceability = [
  ["Dataset", "workforce_operations.csv", Database, "text-cyan-300"],
  ["Metric", "overtime_hours", BarChart3, "text-emerald-300"],
  ["Dimension", "department", Layers, "text-violet-300"],
  ["Calculation", "month-over-month change", Calculator, "text-amber-300"],
]

export default function EvidenceGenerationVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Evidence Generation</SectionTitle>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
        <div className="flex items-start gap-4">
          <FileSearch className="h-8 w-8 shrink-0 text-amber-300" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">
              Finding
            </div>
            <p className="mt-2 text-lg font-semibold text-zinc-200">
              &ldquo;Overtime increased materially in March.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel title="Evidence Items">
          <div className="space-y-2.5">
            {evidenceItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xs font-black text-cyan-300">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Traceability">
          <div className="space-y-3.5">
            {traceability.map(([label, value, Icon, colour]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-6 border-b border-white/10 pb-3.5 last:border-b-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Icon className={`h-5 w-5 shrink-0 ${colour}`} />
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-zinc-500">
                    {label}
                  </span>
                </div>
                <span className="shrink-0 whitespace-nowrap font-mono text-xs text-zinc-200">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
                  Evidence Pack Status
                </div>
                <div className="mt-1 text-sm text-zinc-300">Fully traceable to source data</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-300/70">
                  ✓ Complete
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <Link2 className="h-4 w-4 text-cyan-400/60" />
        <span>Every finding linked to supporting metrics, rows and calculations</span>
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
