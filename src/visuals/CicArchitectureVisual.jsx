import {
  ArrowRight,
  Bot,
  Scale,
  ShieldCheck,
  Library,
  GitBranch,
  CheckCircle2,
  History,
} from "lucide-react"

const stages = [
  {
    id: "intake",
    label: "Job Intake",
    mode: "rules",
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
    mode: "combined",
    detail: "Select · constrain",
  },
  {
    id: "documents",
    label: "Document Generation",
    mode: "combined",
    detail: "Draft · validate · PDF",
  },
  {
    id: "review",
    label: "Human Review",
    mode: "rules",
    detail: "Owner approval",
  },
]

const controls = [
  {
    title: "Evidence & Provenance",
    text: "Grounding generated claims in career evidence.",
    icon: Library,
  },
  {
    title: "Deterministic Orchestration",
    text: "Explicit stage transitions, retries and approval checkpoints.",
    icon: GitBranch,
  },
  {
    title: "Validation & Testing",
    text: "Output validation and regression protection.",
    icon: CheckCircle2,
  },
  {
    title: "Auditability",
    text: "Inspectable execution records and decision history.",
    icon: History,
  },
]

const modeStyles = {
  ai: {
    chip: "border-cyan-400/40 bg-cyan-500/15 text-cyan-200",
    badge: "border-cyan-400/40 bg-cyan-500/20 text-cyan-200",
    label: "AI",
  },
  rules: {
    chip: "border-violet-400/40 bg-violet-500/15 text-violet-100",
    badge: "border-violet-400/40 bg-violet-500/20 text-violet-200",
    label: "RULES",
  },
  combined: {
    chip: "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-100",
    badge: "border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200",
    label: "AI + RULES",
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
            AI — AI-assisted processing
          </Legend>
          <Legend swatch="border-violet-400/40 bg-violet-500/20 text-violet-200" icon={Scale}>
            RULES — Deterministic software processing
          </Legend>
          <Legend
            swatch="border-fuchsia-400/40 bg-fuchsia-500/20 text-fuchsia-200"
            icon={ShieldCheck}
          >
            AI + RULES — Combined AI and deterministic software
          </Legend>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        {stages.map((stage, index) => {
          const styles = modeStyles[stage.mode]

          return (
            <div key={stage.id} className="flex min-w-0 flex-1 items-stretch lg:flex-row">
              <div
                className={`flex w-full min-w-0 flex-col justify-between gap-3 rounded-2xl border px-3 py-3.5 ${styles.chip}`}
              >
                <div className="flex min-w-0 flex-col gap-2.5">
                  <span
                    className={`inline-flex w-fit max-w-full rounded-md border px-1.5 py-1 text-[9px] font-black uppercase leading-none tracking-[0.06em] ${styles.badge}`}
                  >
                    {styles.label}
                  </span>
                  <div className="text-[10px] font-black uppercase leading-snug tracking-[0.12em]">
                    {stage.label}
                  </div>
                </div>
                <div className="text-[11px] leading-4 text-zinc-400">
                  {stage.detail}
                </div>
              </div>

              {index !== stages.length - 1 && (
                <>
                  <div
                    className="flex shrink-0 items-center justify-center py-0.5 lg:hidden"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5 rotate-90 text-cyan-400/70" />
                  </div>
                  <div
                    className="hidden w-4 shrink-0 items-center justify-center lg:flex"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-cyan-400/70" />
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
        <p className="mt-2 text-xs leading-5 text-zinc-400">
          These controls span the workflow — they are not sequential processing stages.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {controls.map((control) => {
            const Icon = control.icon
            return (
              <div
                key={control.title}
                className="rounded-xl border border-violet-400/20 bg-black/30 px-3.5 py-3 text-left"
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-400/25 bg-violet-500/15 text-violet-200">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase leading-snug tracking-[0.12em] text-violet-100">
                      {control.title}
                    </div>
                    <p className="mt-1.5 text-[11px] leading-4 text-zinc-400">
                      {control.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Legend({ swatch, icon: Icon, children }) {
  return (
    <div
      className={`inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-black uppercase leading-snug tracking-[0.1em] sm:text-[10px] sm:tracking-[0.12em] ${swatch}`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
