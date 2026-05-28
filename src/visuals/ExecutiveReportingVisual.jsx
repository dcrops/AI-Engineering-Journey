import {
    AlertTriangle,
    BarChart3,
    ClipboardList,
    Database,
    FileText,
    Gauge,
    PieChart,
    ShieldCheck,
    Target,
  } from "lucide-react"
  
  const reportFlow = [
    ["Diagnostic Findings", "structured inputs", Database, "text-cyan-300"],
    ["Governance Summaries", "executive summary", FileText, "text-violet-300"],
    ["Coverage Analysis", "data & rule coverage", PieChart, "text-yellow-300"],
    ["Risk Priority Views", "top risks & themes", AlertTriangle, "text-red-300"],
    ["Evidence-Oriented Reports", "review support outputs", ShieldCheck, "text-emerald-300"],
  ]
  
  const dashboardMetrics = [
    ["219", "Total Findings", FileText, "text-violet-300"],
    ["28", "High Risk", AlertTriangle, "text-red-300"],
    ["67", "Medium Risk", Target, "text-yellow-300"],
    ["124", "Low Risk", Gauge, "text-cyan-300"],
    ["5", "Datasets Analysed", Database, "text-emerald-300"],
  ]
  
  const riskAreas = [
    ["Leave", "54", "bg-cyan-400"],
    ["Termination", "48", "bg-violet-400"],
    ["Cross-Module", "42", "bg-yellow-400"],
    ["Record Keeping", "38", "bg-emerald-400"],
    ["Payroll Integrity", "37", "bg-red-400"],
  ]
  
  export default function ExecutiveReportingVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Report Outputs</SectionTitle>
  
        <div className="mt-5 grid grid-cols-5 gap-4">
          {reportFlow.map(([title, subtitle, Icon, colour]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
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
  
        <SectionTitle className="mt-6">Executive Dashboard</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 gap-4">
          {dashboardMetrics.map(([value, label, Icon, colour]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-3xl font-black ${colour}`}>
                {value}
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Risk Distribution</SectionTitle>
  
            <div className="mt-6 flex items-center gap-6">
              <div className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full border-[22px] border-cyan-400/80 border-r-yellow-400 border-t-red-400 bg-black/40">
                <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-black text-center text-sm font-semibold text-white">
                  Findings<br />by Severity
                </div>
              </div>
  
              <div className="space-y-3 text-sm text-zinc-300">
                <Legend colour="bg-red-400" label="High Risk" value="28" />
                <Legend colour="bg-yellow-400" label="Medium Risk" value="67" />
                <Legend colour="bg-cyan-400" label="Low Risk" value="124" />
              </div>
            </div>
          </div>
  
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Top Risk Areas</SectionTitle>
  
            <div className="mt-5 space-y-4">
              {riskAreas.map(([label, value, colour]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div>
                    <div className="text-sm font-semibold text-zinc-200">
                      {label}
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${colour}`}
                        style={{ width: `${Math.min(Number(value) * 1.6, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-lg font-black text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.04] p-5">
            <div className="flex gap-4">
                <ClipboardList className="mt-1 h-8 w-8 shrink-0 text-cyan-300" />

                <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                    Executive Summary
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">
                    Executive reporting delivers clear, prioritised and evidence-oriented insights to support governance oversight and informed decision-making.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                    <StatusPill label="Governance Focused" />
                    <StatusPill label="Explainable Insights" />
                    <StatusPill label="Review Support Ready" />
                </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
  
  function Legend({ colour, label, value }) {
    return (
      <div className="flex items-center gap-3">
        <div className={`h-3 w-3 rounded-full ${colour}`} />
        <div className="flex-1">{label}</div>
        <div className="font-bold text-white">{value}</div>
      </div>
    )
  }
  
  function StatusPill({ label }) {
    return (
      <div className="inline-flex h-8 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-200 whitespace-nowrap">
        ✓ {label}
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