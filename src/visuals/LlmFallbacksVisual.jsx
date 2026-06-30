import {
  AlertCircle,
  Calculator,
  FileText,
  BrainCircuit,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Info,
} from "lucide-react"

const fallbackSteps = [
  ["Deterministic analysis still runs", Calculator, "text-cyan-300"],
  ["Evidence still generated", FileText, "text-emerald-300"],
  ["Executive narrative disabled", BrainCircuit, "text-violet-300"],
  ["User receives structured analytical output", ShieldCheck, "text-amber-300"],
  ["No unsupported AI conclusion generated", CheckCircle2, "text-emerald-300"],
]

export default function LlmFallbacksVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>LLM Fallbacks</SectionTitle>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-8 w-8 shrink-0 text-amber-300" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-300">
              Scenario
            </div>
            <p className="mt-2 text-sm font-semibold text-zinc-200">
              LLM unavailable or confidence below threshold
            </p>
          </div>
        </div>
      </div>

      <Panel title="Fallback Behaviour" className="mt-5">
        <div className="space-y-3">
          {fallbackSteps.map(([step, Icon, colour], index) => (
            <div key={step} className="flex items-center gap-3">
              {index > 0 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-cyan-400/40 sm:block" />
              )}
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <Icon className={`h-5 w-5 shrink-0 ${colour}`} />
                <span className="text-sm text-zinc-300">{step}</span>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-6 text-center">
        <ShieldCheck className="mx-auto h-10 w-10 text-emerald-300" />
        <div className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
          Status
        </div>
        <div className="mt-2 text-xl font-black text-emerald-300">System remains operational</div>
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
        <div className="flex items-center gap-3">
          <Info className="h-5 w-5 text-blue-300" />
          <p className="text-sm text-zinc-300">
            Platform degrades gracefully — analytical integrity preserved without unsupported AI output.
          </p>
        </div>
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Supports · Reliable Executive Output
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
