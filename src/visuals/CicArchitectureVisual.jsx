import { ArrowRight, Bot, Cog, ShieldCheck } from "lucide-react"

const stages = [
  {
    id: "intake",
    label: "Job Intake",
    mode: "deterministic",
    detail: "Email · URL · dedupe",
  },
  {
    id: "analysis",
    label: "Structured Analysis",
    mode: "ai",
    detail: "Typed extraction",
  },
  {
    id: "assessment",
    label: "Opportunity Assessment",
    mode: "ai",
    detail: "Evidence-backed fit",
  },
  {
    id: "strategy",
    label: "Application Strategy",
    mode: "mixed",
    detail: "Select · constrain",
  },
  {
    id: "documents",
    label: "Document Generation",
    mode: "mixed",
    detail: "Draft · validate · PDF",
  },
  {
    id: "review",
    label: "Human Review",
    mode: "deterministic",
    detail: "Owner approval",
  },
]

const controls = [
  "Evidence & Provenance",
  "Deterministic Orchestration",
  "Validation & Testing",
  "Auditability",
]

const modeStyles = {
  ai: {
    chip: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
    badge: "border-cyan-400/40 bg-cyan-500/20 text-cyan-200",
    label: "AI",
  },
  deterministic: {
    chip: "border-violet-400/40 bg-violet-500/15 text-violet-100",
    badge: "border-violet-400/40 bg-violet-500/20 text-violet-200",
    label: "SW",
  },
  mixed: {
    chip: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-100",
    badge: "border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200",
    label: "AI+SW",
  },
}

export default function CicArchitectureVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-[0_0_60px_rgba(34,211,238,0.04)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
            System Architecture
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            AI handles language understanding and drafting. Deterministic software
            owns sequencing, validation, evidence constraints and approval.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Legend swatch="border-cyan-400/40 bg-cyan-500/20 text-cyan-200" icon={Bot}>
            AI-assisted
          </Legend>
          <Legend swatch="border-violet-400/40 bg-violet-500/20 text-violet-200" icon={Cog}>
            Deterministic
          </Legend>
          <Legend
            swatch="border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200"
            icon={ShieldCheck}
          >
            Combined
          </Legend>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
        {stages.map((stage, index) => {
          const styles = modeStyles[stage.mode]

          return (
            <div key={stage.id} className="flex min-w-0 flex-1 items-stretch lg:flex-row">
              <div
                className={`flex w-full flex-col justify-between rounded-2xl border px-3.5 py-4 ${styles.chip}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-[10px] font-black uppercase leading-snug tracking-[0.14em]">
                    {stage.label}
                  </div>
                  <span
                    className={`shrink-0 rounded-md border px-1.5 py-0.5 text-[9px] font-black tracking-[0.08em] ${styles.badge}`}
                  >
                    {styles.label}
                  </span>
                </div>
                <div className="mt-3 text-[11px] leading-4 text-zinc-400">
                  {stage.detail}
                </div>
              </div>

              {index !== stages.length - 1 && (
                <>
                  <div className="flex items-center justify-center py-1 lg:hidden">
                    <ArrowRight className="h-4 w-4 rotate-90 text-cyan-400/70" />
                  </div>
                  <div className="hidden items-center px-1.5 lg:flex">
                    <ArrowRight className="h-4 w-4 shrink-0 text-cyan-400/70" aria-hidden="true" />
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-violet-400/25 bg-violet-500/10 p-4">
        <div className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-200">
          Cross-Cutting Engineering Controls
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {controls.map((control) => (
            <div
              key={control}
              className="rounded-xl border border-violet-400/20 bg-black/30 px-3 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-violet-100"
            >
              {control}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-zinc-400">
          These controls span the pipeline — they are not extra sequential stages.
        </p>
      </div>
    </div>
  )
}

function Legend({ swatch, icon: Icon, children }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] ${swatch}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </div>
  )
}
