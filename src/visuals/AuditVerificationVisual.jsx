import { ShieldCheck, CheckCircle2, FileSpreadsheet, Wrench, Link2, Calculator, BrainCircuit, Eye } from "lucide-react"

const checklist = [
  ["Dataset recorded", FileSpreadsheet],
  ["Analytical tools logged", Wrench],
  ["Evidence linked", Link2],
  ["Calculations deterministic", Calculator],
  ["LLM usage disclosed", BrainCircuit],
  ["Output reviewable", Eye],
]

export default function AuditVerificationVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Audit & Verification</SectionTitle>

      <Panel title="Verification Checklist" className="mt-6">
        <div className="space-y-2.5">
          {checklist.map(([item, Icon]) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-emerald-400/15 bg-emerald-500/5 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-emerald-300/80" />
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                Verified
              </span>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-6 text-center">
        <ShieldCheck className="mx-auto h-10 w-10 text-emerald-300" />
        <div className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
          Status
        </div>
        <div className="mt-2 text-2xl font-black text-emerald-300">Audit Ready</div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Governance Layer
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
