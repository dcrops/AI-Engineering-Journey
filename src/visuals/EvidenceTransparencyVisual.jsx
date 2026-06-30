import { Link2, FileSearch, ShieldCheck, CheckCircle2 } from "lucide-react"

const evidence = [
  "Operations overtime: +64%",
  "March total: 1,711 hrs",
  "Prior month: 1,240 hrs",
  "Change: +38%",
  "Supporting rows: 248",
]

export default function EvidenceTransparencyVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Evidence Transparency</SectionTitle>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
        <div className="flex items-start gap-4">
          <FileSearch className="h-8 w-8 shrink-0 text-amber-300" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300">
              Answer Claim
            </div>
            <p className="mt-2 text-lg font-semibold text-zinc-200">
              Operations drove the overtime increase.
            </p>
          </div>
        </div>
      </div>

      <div className="my-5 flex justify-center">
        <Link2 className="h-5 w-5 text-cyan-400/60" />
      </div>

      <Panel title="Evidence Trail">
        <div className="space-y-2.5">
          {evidence.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xs font-black text-cyan-300">
                {index + 1}
              </span>
              <span className="text-sm text-zinc-300">{item}</span>
              <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-emerald-300/70" />
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
            Confidence
          </div>
          <div className="mt-2 text-2xl font-black text-emerald-300">0.87</div>
        </div>
        <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
            Coverage
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <ShieldCheck className="h-6 w-6 text-cyan-300" />
            <span className="text-sm font-black text-cyan-300">5 evidence items linked</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Supports · Audit Trail
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
