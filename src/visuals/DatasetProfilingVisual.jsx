import {
  FileSpreadsheet,
  Calendar,
  BarChart3,
  Layers,
  CheckCircle2,
  Info,
} from "lucide-react"

const datasetStats = [
  ["Rows", "12,842"],
  ["Columns", "18"],
  ["Missing Values", "2.1%"],
]

const dateFields = ["month", "payroll_period"]
const metrics = ["hours_worked", "leave_balance", "termination_count"]
const dimensions = ["department", "location", "employment_type"]

const suggestedPaths = [
  ["Trend Analysis", "text-cyan-300 border-cyan-400/20 bg-cyan-500/10"],
  ["Variance Analysis", "text-violet-300 border-violet-400/20 bg-violet-500/10"],
  ["Risk Assessment", "text-amber-300 border-amber-400/20 bg-amber-500/10"],
]

export default function DatasetProfilingVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Dataset Profiling</SectionTitle>

      <div className="mt-6 grid gap-5 xl:grid-cols-[0.78fr_1.22fr]">
        <Panel title="Uploaded Dataset">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-black/30">
                  <FileSpreadsheet className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300/80">
                    Source File
                  </div>
                  <div className="mt-1 text-lg font-black text-white">operations.csv</div>
                  <div className="mt-1.5 text-xs leading-5 text-zinc-500">
                    Operational workforce dataset
                  </div>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-emerald-300">
                ✓ Ready
              </span>
            </div>

            <div className="my-5 border-t border-white/10" />

            <div className="grid grid-cols-3 gap-3">
              {datasetStats.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-3.5 text-center"
                >
                  <div className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
                    {label}
                  </div>
                  <div className="mt-2 text-xl font-black tabular-nums text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-blue-300" />
              <p className="text-sm text-zinc-300">
                Automated inspection completed before analytical routing.
              </p>
            </div>
          </div>
        </Panel>

        <Panel title="Detected Structure">
          <div className="divide-y divide-white/10">
            <StructureBlock
              title="Date Fields"
              icon={Calendar}
              colour="text-violet-300"
              items={dateFields}
            />
            <StructureBlock
              title="Metrics"
              icon={BarChart3}
              colour="text-emerald-300"
              items={metrics}
            />
            <StructureBlock
              title="Dimensions"
              icon={Layers}
              colour="text-cyan-300"
              items={dimensions}
            />
          </div>
        </Panel>
      </div>

      <Panel title="Analytical Readiness" className="mt-5">
        <div className="grid items-center gap-5 xl:grid-cols-[0.35fr_1fr]">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-300" />
            <div className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
              Quality Score
            </div>
            <div className="mt-2 text-4xl font-black tabular-nums text-emerald-300">0.91</div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[91%] bg-emerald-400" />
            </div>
          </div>

          <div className="flex h-full flex-col justify-center">
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
              Suggested Paths
            </div>
            <div className="mt-4 grid items-stretch gap-3 sm:grid-cols-3">
              {suggestedPaths.map(([path, styles]) => (
                <div
                  key={path}
                  className={`flex items-center justify-center rounded-xl border px-4 py-3.5 text-center text-sm font-black leading-snug ${styles}`}
                >
                  {path}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </div>
  )
}

function StructureBlock({ title, icon: Icon, colour, items }) {
  return (
    <div className="w-full py-5 first:pt-0 last:pb-0">
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 shrink-0 ${colour}`} />
        <div className={`text-[10px] font-black uppercase tracking-[0.14em] ${colour}`}>
          {title}
        </div>
      </div>
      <ul className="mt-3 space-y-2 pl-8">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-left">
            <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${colour}`} />
            <span className="font-mono text-xs text-zinc-300 whitespace-nowrap">{item}</span>
          </li>
        ))}
      </ul>
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
