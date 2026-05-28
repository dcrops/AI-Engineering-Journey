import {
    AlertTriangle,
    FileText,
    ShieldCheck,
    Target,
    ClipboardList,
    Users,
    Network,
    SearchCheck,
    Layers,
  } from "lucide-react"
  
  const severityCards = [
    ["28", "High Risk", "findings", AlertTriangle, "text-red-300 border-red-400/25 bg-red-500/10"],
    ["67", "Medium Risk", "findings", Target, "text-yellow-300 border-yellow-400/25 bg-yellow-500/10"],
    ["124", "Low Risk", "findings", SearchCheck, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
    ["219", "Total", "findings", FileText, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
  ]
  
  const findings = [
    ["HIGH", "Leave balance mismatch", "23 employees", "3 sources", "LEAVE", "text-red-300 border-red-400/30 bg-red-500/10"],
    ["MEDIUM", "Missing termination evidence", "7 employees", "2 sources", "TERMINATION", "text-yellow-300 border-yellow-400/30 bg-yellow-500/10"],
    ["LOW", "Unmatched employee identifier", "2 employees", "2 sources", "CROSS-MODULE", "text-cyan-300 border-cyan-400/30 bg-cyan-500/10"],
    ["HIGH", "Potential duplicate employment", "5 employees", "4 sources", "RECORD KEEPING", "text-red-300 border-red-400/30 bg-red-500/10"],
    ["MEDIUM", "Payroll lifecycle mismatch", "11 employees", "3 sources", "PAYROLL INTEGRITY", "text-yellow-300 border-yellow-400/30 bg-yellow-500/10"],
  ]
  
  const metrics = [
    ["5", "Datasets Analysed", Network, "text-cyan-300"],
    ["182,441", "Employee Records", Users, "text-violet-300"],
    ["26", "Rule Domains Evaluated", SearchCheck, "text-yellow-300"],
    ["Evidence-linked", "Outputs", ShieldCheck, "text-emerald-300"],
  ]
  
  export default function RiskFindingsVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Findings Pipeline</SectionTitle>
  
        <div className="mt-5 grid grid-cols-4 gap-4">
          {[
            ["Diagnostic Outputs", ClipboardList, "text-cyan-300"],
            ["Finding Structure", FileText, "text-violet-300"],
            ["Prioritised Insights", Target, "text-yellow-300"],
            ["Investigation Support", ShieldCheck, "text-emerald-300"],
          ].map(([label, Icon, colour]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <Icon className={`mx-auto h-7 w-7 ${colour}`} />
              <div className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
  
        <SectionTitle className="mt-6">Finding Structure</SectionTitle>
  
        <div className="mt-4 grid grid-cols-4 gap-4">
          {severityCards.map(([value, label, sub, Icon, styles]) => (
            <div key={label} className={`rounded-2xl border p-4 ${styles}`}>
              <Icon className="h-6 w-6" />
              <div className="mt-3 text-3xl font-black">{value}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                {label}
              </div>
              <div className="mt-1 text-xs text-zinc-400">{sub}</div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          <div className="grid grid-cols-[0.8fr_1.7fr_1fr_1fr_1.2fr] border-b border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
            <div>Severity</div>
            <div>Finding Title</div>
            <div>Impacted</div>
            <div>Evidence</div>
            <div>Detected By</div>
          </div>
  
          {findings.map(([severity, title, impacted, evidence, module, styles]) => (
            <div
              key={title}
              className="grid grid-cols-[0.8fr_1.7fr_1fr_1fr_1.2fr] items-center border-b border-white/10 px-4 py-3 text-sm text-zinc-300 last:border-b-0"
            >
              <div>
                <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${styles}`}>
                  {severity}
                </span>
              </div>
              <div className="font-semibold text-zinc-200">{title}</div>
              <div>{impacted}</div>
              <div>{evidence}</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                {module}
              </div>
            </div>
          ))}
        </div>
  
        <SectionTitle className="mt-6">Operational Context</SectionTitle>
  
        <div className="mt-4 grid grid-cols-4 gap-4">
          {metrics.map(([value, label, Icon, colour]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-2xl font-black ${colour}`}>{value}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">
              Findings Status
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Diagnostic outputs converted into prioritised, evidence-linked findings.
            </p>
          </div>
  
          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200">
            ● Review Ready
          </div>
        </div>
      </div>
    )
  }
  
  function SectionTitle({ children, className = "" }) {
    return (
      <div className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}>
        {children}
      </div>
    )
  }