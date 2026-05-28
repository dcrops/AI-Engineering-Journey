import {
    FileText,
    Database,
    Calendar,
    Users,
    Cloud,
    Download,
    Code2,
    ScanSearch,
    SlidersHorizontal,
    GitBranch,
    Layers,
    CheckCircle2,
    ShieldCheck,
    Clock3,
  } from "lucide-react"
  
  const sources = [
    ["Payroll Exports", "CSV / XLSX", FileText],
    ["Leave Balances", "CSV", Database],
    ["Termination Data", "CSV", Calendar],
    ["Time & Attendance", "CSV", Users],
    ["Other Sources", "API / Files", Cloud],
  ]
  
  const steps = [
    ["Load", "securely load files", Download],
    ["Parse", "extract records & columns", Code2],
    ["Detect Schema", "infer structure & datatypes", ScanSearch],
    ["Normalise", "standardise formats & values", SlidersHorizontal],
    ["Map Fields", "field mapping & reconciliation", GitBranch],
    ["Stage Data", "load to governed staging layer", Layers],
  ]
  
  const outputRows = [
    ["Target Layer", "Payroll Staging Layer", Database],
    ["Records Loaded", "182,441", FileText],
    ["Data Standardised", "100%", ShieldCheck],
    ["Sources Ingested", "5 / 5", CheckCircle2],
  ]
  
  const metrics = [
    ["12", "Files Ingested", FileText, "text-violet-300"],
    ["182,441", "Records Loaded", Database, "text-cyan-300"],
    ["100%", "Data Standardised", ShieldCheck, "text-emerald-300"],
    ["2m 14s", "Ingestion Duration", Clock3, "text-yellow-300"],
    ["0", "Load Failures", Database, "text-violet-300"],
  ]
  
  export default function IngestionVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Ingestion Sources</SectionTitle>
  
        <div className="mt-6 grid grid-cols-5 gap-4">
          {sources.map(([title, subtitle, Icon]) => (
            <VisualCard key={title}>
              <Icon className="mx-auto h-7 w-7 text-cyan-300" />
              <div className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                {title}
              </div>
              <div className="mt-2 text-xs text-zinc-500">{subtitle}</div>
            </VisualCard>
          ))}
        </div>
  
        <Connector />
  
        <SectionTitle>Ingestion Pipeline</SectionTitle>
  
        <div className="mt-5 grid grid-cols-6 gap-4">
          {steps.map(([title, subtitle, Icon], index) => (
            <div key={title} className="relative">
              <VisualCard>
                <Icon
                  className={`mx-auto h-6 w-6 ${
                    index === 0 || index === 1
                      ? "text-violet-300"
                      : index === 4
                        ? "text-yellow-300"
                        : "text-cyan-300"
                  }`}
                />
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  {title}
                </div>
                <div className="mt-2 text-xs leading-5 text-zinc-500">
                  {subtitle}
                </div>
              </VisualCard>
  
              {index !== steps.length - 1 && (
                <div className="absolute left-full top-1/2 z-10 hidden h-px w-4 bg-cyan-400/70 xl:block" />
              )}
            </div>
          ))}
        </div>
  
        <div className="mx-auto mt-5 h-8 w-px bg-cyan-400/60 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
  
        <div className="mt-2 rounded-2xl border border-white/10 bg-black/50 p-5">
          <SectionTitle>Ingestion Output</SectionTitle>
  
          <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.03]">
              <div className="absolute h-56 w-56 rounded-full border border-cyan-400/10" />
              <div className="absolute h-40 w-40 rounded-full border border-cyan-400/20" />
              <div className="absolute h-24 w-24 rounded-full border border-cyan-400/30" />
  
              <Database className="relative h-20 w-20 text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
            </div>
  
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-8 w-8 text-emerald-300" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">
                    Ready for Validation
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Data successfully ingested and staged for validation and
                    diagnostics.
                  </p>
                </div>
              </div>
  
              <div className="mt-5 divide-y divide-white/10">
                {outputRows.map(([label, value, Icon]) => (
                  <div key={label} className="flex items-center gap-3 py-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <div className="flex-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-zinc-200">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <SectionTitle className="mt-6">Ingestion Metrics</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {metrics.map(([value, label, Icon, color]) => (
            <div
              key={label}
              className="border-r border-white/10 p-4 last:border-r-0"
            >
              <Icon className={`h-6 w-6 ${color}`} />
              <div className={`mt-3 text-2xl font-black ${color}`}>{value}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                {label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">this run</div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-5">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
              Ingestion Status
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Pipeline executed successfully.
            </p>
          </div>
  
          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200">
            ● Success
          </div>
        </div>
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
  
  function VisualCard({ children }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-500/[0.04]">
        {children}
      </div>
    )
  }
  
  function Connector() {
    return (
      <div className="relative my-6">
        <div className="mx-auto h-8 w-px bg-cyan-400/60 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
        <div className="mx-auto h-px w-[70%] bg-cyan-400/30" />
      </div>
    )
  }