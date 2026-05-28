import {
    AlertTriangle,
    CheckCircle2,
    ClipboardCheck,
    Database,
    FileCheck2,
    GitCompare,
    KeyRound,
    Layers,
    ShieldCheck,
    TableProperties,
    TriangleAlert,
  } from "lucide-react"
  
  const checks = [
    ["Required Fields", "PASS", CheckCircle2, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
    ["Date Formats", "PASS", CheckCircle2, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
    ["Employee IDs", "PASS", CheckCircle2, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
    ["Null Critical Fields", "WARNING", TriangleAlert, "border-yellow-400/25 bg-yellow-500/10 text-yellow-300"],
    ["Duplicate Payroll Rows", "REVIEW", AlertTriangle, "border-violet-400/25 bg-violet-500/10 text-violet-300"],
    ["Cross-Dataset Consistency", "PASS", CheckCircle2, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
  ]
  
  const stages = [
    ["Field Checks", "required values", KeyRound],
    ["Schema Checks", "columns & types", TableProperties],
    ["Reconciliation", "record matching", GitCompare],
    ["Integrity Review", "quality gate", ShieldCheck],
  ]
  
  const outcomes = [
    ["12", "Datasets Reviewed", Database, "text-cyan-300"],
    ["4", "Reconciliation Checks", GitCompare, "text-violet-300"],
    ["2", "Advisory Warnings", TriangleAlert, "text-yellow-300"],
    ["0", "Blocking Issues", ShieldCheck, "text-emerald-300"],
  ]
  
  export default function ValidationIntegrityVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Validation & Integrity</SectionTitle>
  
        <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.04] p-5">
          <div className="flex items-center gap-4">
            <Database className="h-9 w-9 text-cyan-300" />
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                Staged Payroll Dataset
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Ingested records are checked before diagnostic logic is allowed to execute.
              </p>
            </div>
          </div>
        </div>
  
        <Connector />
  
        <SectionTitle>Integrity Pipeline</SectionTitle>
  
        <div className="mt-5 grid grid-cols-4 gap-4">
          {stages.map(([title, subtitle, Icon], index) => (
            <div key={title} className="relative">
              <VisualCard>
                <Icon
                  className={`mx-auto h-7 w-7 ${
                    index === 0
                      ? "text-cyan-300"
                      : index === 1
                        ? "text-violet-300"
                        : index === 2
                          ? "text-yellow-300"
                          : "text-emerald-300"
                  }`}
                />
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  {title}
                </div>
                <div className="mt-2 text-xs leading-5 text-zinc-500">
                  {subtitle}
                </div>
              </VisualCard>
  
              {index !== stages.length - 1 && (
                <div className="absolute left-full top-1/2 z-10 hidden h-px w-4 bg-cyan-400/70 xl:block" />
              )}
            </div>
          ))}
        </div>
  
        <div className="mt-6 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Validation Rules</SectionTitle>
  
            <div className="mt-5 grid gap-3">
              {checks.map(([label, status, Icon, styles]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${styles.split(" ").at(-1)}`} />
                    <div>
                      <div className="text-sm font-semibold text-zinc-200">
                        {label}
                      </div>
                      <div className="mt-1 text-xs text-zinc-500">
                        integrity control
                      </div>
                    </div>
                  </div>
  
                  <div
                    className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${styles}`}
                  >
                    {status}
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <div className="flex items-start gap-3">
              <ClipboardCheck className="mt-1 h-8 w-8 text-emerald-300" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">
                  Conditional Pass
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Validation threshold achieved with minor non-blocking issues flagged for review.
                </p>
              </div>
            </div>
  
            <div className="mt-5 space-y-3">
              {[
                "Dataset approved for diagnostics",
                "Warnings retained for audit trail",
                "Integrity issues separated from risk findings",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
                >
                  <FileCheck2 className="h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <SectionTitle className="mt-6">Validation Outcomes</SectionTitle>
  
        <div className="mt-4 grid grid-cols-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {outcomes.map(([value, label, Icon, colour]) => (
            <div
              key={label}
              className="border-r border-white/10 p-4 last:border-r-0"
            >
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-2xl font-black ${colour}`}>
                {value}
              </div>
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
              Integrity Status
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Dataset is trusted enough for downstream diagnostics.
            </p>
          </div>
  
          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200">
            ● Ready
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
        <div className="mx-auto h-px w-[55%] bg-cyan-400/30" />
      </div>
    )
  }