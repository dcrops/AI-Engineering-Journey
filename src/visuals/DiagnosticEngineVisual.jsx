import {
    Database,
    GitBranch,
    ClipboardList,
    FileWarning,
    SearchCheck,
    ShieldAlert,
    Workflow,
    AlertTriangle,
    Timer,
    Layers,
    Activity,
  } from "lucide-react"
  
  const modules = [
    ["Leave", "entitlement leakage", ClipboardList, "text-cyan-300"],
    ["Termination", "lifecycle anomalies", FileWarning, "text-yellow-300"],
    ["Record Keeping", "missing evidence", SearchCheck, "text-violet-300"],
    ["Cross-Module", "integrity mismatches", GitBranch, "text-emerald-300"],
    ["Payroll Integrity", "anomaly signals", Activity, "text-cyan-300"],
  ]
  
  const findings = [
    ["High Risk", "Leave balance mismatch", "23 employees impacted", "border-red-400/30 bg-red-500/10 text-red-300"],
    ["Medium", "Missing termination evidence", "7 records affected", "border-yellow-400/30 bg-yellow-500/10 text-yellow-300"],
    ["Low", "Cross-dataset inconsistency", "2 unmatched identifiers", "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"],
  ]
  
  const metrics = [
    ["148", "Rules Executed", Workflow, "text-violet-300"],
    ["5", "Datasets Compared", Layers, "text-cyan-300"],
    ["32", "Findings Generated", AlertTriangle, "text-yellow-300"],
    ["3", "Critical Findings", ShieldAlert, "text-red-300"],
    ["4m 18s", "Execution Time", Timer, "text-emerald-300"],
  ]
  
  export default function DiagnosticEngineVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Diagnostic Engine</SectionTitle>
  
        <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.04] p-5">
          <div className="flex items-center gap-4">
            <Database className="h-9 w-9 text-cyan-300" />
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                Validated Payroll Dataset
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                182,441 records ready for diagnostic execution.
              </p>
            </div>
          </div>
        </div>
  
        <div className="mx-auto my-5 h-8 w-px bg-cyan-400/60 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
  
        <SectionTitle>Rule Domains</SectionTitle>
  
        <div className="mt-5 grid grid-cols-5 gap-4">
          {modules.map(([title, subtitle, Icon, colour]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-500/[0.04]"
            >
              <Icon className={`mx-auto h-7 w-7 ${colour}`} />
              <div className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                {title}
              </div>
              <div className="mt-2 text-xs leading-5 text-zinc-500">
                {subtitle}
              </div>
            </div>
          ))}
        </div>
  
        <div className="mx-auto my-5 h-8 w-px bg-cyan-400/60 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
  
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Execution Flow</SectionTitle>
  
            <div className="mt-5 space-y-3">
              {[
                "Diagnostic logic executed across modular review domains",
                "Validated datasets evaluated across lifecycle events",
                "Cross-module signals compared for operational inconsistencies",
                "Findings emitted with severity and evidence context",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-[10px] font-black text-cyan-300">
                    {index + 1}
                  </div>
                  <div className="text-sm text-zinc-300">{item}</div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Findings Stream</SectionTitle>
  
            <div className="mt-5 space-y-3">
              {findings.map(([severity, title, detail, styles]) => (
                <div key={title} className={`rounded-xl border p-4 ${styles}`}>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em]">
                    {severity}
                  </div>
                  <div className="mt-2 text-sm font-bold text-white">
                    {title}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <SectionTitle className="mt-6">Engine Metrics</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {metrics.map(([value, label, Icon, colour]) => (
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
              Engine Status
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Diagnostic execution completed with classified findings.
            </p>
          </div>
  
          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200">
            ● Complete
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