import {
  Inbox,
  Link2,
  FileSearch,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Bot,
  Braces,
  Library,
  Briefcase,
  GraduationCap,
  Award,
  Scale,
  FileText,
  Mail,
  FileOutput,
  GitBranch,
  Cog,
  PauseCircle,
  PlayCircle,
  Ban,
  History,
  Wrench,
  Info,
  ArrowRight,
  Activity,
} from "lucide-react"

export default function CicLayerVisual({ type }) {
  switch (type) {
    case "analysis":
      return <AnalysisVisual />
    case "evidence":
      return <EvidenceVisual />
    case "assessment":
      return <AssessmentVisual />
    case "generation":
      return <GenerationVisual />
    case "orchestration":
      return <OrchestrationVisual />
    case "tracking":
      return <TrackingVisual />
    case "intake":
    default:
      return <IntakeVisual />
  }
}

/* ───────────────────────── 1. Intake & Discovery ───────────────────────── */

function IntakeVisual() {
  const sources = [
    ["Mailbox alerts", "IMAP job-alert intake", Inbox, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
    ["URL discovery", "Direct posting URLs", Link2, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
  ]

  const queue = [
    ["opp_1842", "Senior AI Engineer · SEEK", "new", "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    ["opp_1841", "Applied AI · LinkedIn alert", "deduped", "text-amber-300 border-amber-400/25 bg-amber-500/10"],
    ["opp_1839", "Platform Engineer · URL", "retry", "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
  ]

  const controls = [
    ["Normalise", "Canonical opportunity record"],
    ["Identity check", "Duplicates linked, never merged"],
    ["Retryable fail", "Transient acquisition errors"],
    ["cic daily", "Newly acquired visibility"],
  ]

  return (
    <Shell title="Job Intake Console">
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel title="Acquisition Sources">
          <div className="space-y-3">
            {sources.map(([title, detail, Icon, styles]) => (
              <div key={title} className={`rounded-xl border p-4 ${styles}`}>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-black text-white">{title}</div>
                    <div className="mt-1 text-xs text-zinc-400">{detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {controls.map(([label, detail]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.14em] text-cyan-300">
                  {label}
                </div>
                <div className="mt-2 text-xs leading-5 text-zinc-400">{detail}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Daily Acquisition Queue">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-xs text-zinc-500">Illustrative opportunity artefacts</div>
            <span className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-cyan-300">
              cic daily
            </span>
          </div>

          <div className="space-y-2.5">
            {queue.map(([id, title, status, styles]) => (
              <div
                key={id}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div className="min-w-0">
                  <div className="font-mono text-[11px] text-zinc-500">{id}</div>
                  <div className="mt-1 truncate text-sm text-zinc-200">{title}</div>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] ${styles}`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-500/10 p-3">
            <RefreshCw className="h-4 w-4 shrink-0 text-violet-300" aria-hidden="true" />
            <p className="text-xs leading-5 text-zinc-300">
              Acquisition failures stay retryable — analysis never starts on an incomplete identity.
            </p>
          </div>
        </Panel>
      </div>
    </Shell>
  )
}

/* ───────────────────────── 2. Structured Analysis ───────────────────────── */

function AnalysisVisual() {
  const fields = [
    ["title", "Senior Applied AI Engineer"],
    ["skills", "Python · Pydantic · OpenAI · FastAPI*"],
    ["seniority", "Senior / IC4"],
    ["location", "Melbourne · Hybrid"],
    ["eligibility", "Australian work rights required"],
  ]

  return (
    <Shell title="Structured Extraction">
      <div className="grid gap-5 xl:grid-cols-[0.85fr_auto_1.15fr]">
        <Panel title="Job Advertisement">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 font-mono text-xs leading-6 text-zinc-400">
            <div className="text-cyan-300">Senior Applied AI Engineer</div>
            <div className="mt-3">
              We are seeking an engineer to design AI-assisted workflows with strong
              software engineering discipline…
            </div>
            <div className="mt-3 text-zinc-500">
              Requirements: Python, typed APIs, LLM integration, testing…
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
            <FileSearch className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            Unstructured source text
          </div>
        </Panel>

        <div className="hidden items-center xl:flex">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10">
              <Bot className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            </div>
            <ArrowRight className="h-4 w-4 text-cyan-400/70" aria-hidden="true" />
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-cyan-300">
              Parse
            </div>
          </div>
        </div>

        <Panel title="Typed Artefact">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-violet-300">
              <Braces className="h-4 w-4" aria-hidden="true" />
              job_analysis.json
            </div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-emerald-300">
              Pydantic validated
            </span>
          </div>

          <div className="space-y-2">
            {fields.map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-[6.5rem_1fr] gap-3 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 sm:grid-cols-[7rem_1fr]"
              >
                <span className="font-mono text-[11px] text-cyan-300">{key}</span>
                <span className="text-sm text-zinc-200">{value}</span>
              </div>
            ))}
          </div>

          <p className="mt-3 text-[11px] leading-5 text-zinc-500">
            * Skills listed in a posting are extracted role requirements — not CIC runtime
            dependencies.
          </p>
        </Panel>
      </div>

      <Note tone="cyan">
        OpenAI structured parsing fills a typed schema; invalid shapes trigger bounded
        retries or fail closed.
      </Note>
    </Shell>
  )
}

/* ───────────────────────── 3. Career Evidence ───────────────────────── */

function EvidenceVisual() {
  const categories = [
    {
      title: "Established experience",
      icon: Briefcase,
      styles: "border-cyan-400/25 bg-cyan-500/10",
      titleColour: "text-cyan-300",
      items: ["Payroll diagnostics delivery", "Governance-aware AI systems"],
      claim: ["Allowed", "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    },
    {
      title: "Portfolio projects",
      icon: Library,
      styles: "border-violet-400/25 bg-violet-500/10",
      titleColour: "text-violet-300",
      items: ["Document Intelligence RAG", "Operational Intelligence"],
      claim: ["Allowed · scoped", "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    },
    {
      title: "Recent learning",
      icon: GraduationCap,
      styles: "border-fuchsia-400/25 bg-fuchsia-500/10",
      titleColour: "text-fuchsia-300",
      items: ["Workflow orchestration practice", "Evidence-first generation"],
      claim: ["Allowed · limited", "text-amber-300 border-amber-400/25 bg-amber-500/10"],
    },
    {
      title: "Gaps / uncertainty",
      icon: AlertTriangle,
      styles: "border-amber-400/25 bg-amber-500/10",
      titleColour: "text-amber-300",
      items: ["No commercial CIC customers", "No invented tenure claims"],
      claim: ["Blocked", "text-red-300 border-red-400/25 bg-red-500/10"],
    },
  ]

  const rules = [
    ["Provenance required", "Every claim maps to a career-profile artefact"],
    ["Fail closed", "Unsupported experience cannot ship in packages"],
    ["Scope boundaries", "Portfolio work stays labelled as portfolio work"],
  ]

  return (
    <Shell title="Evidence Source of Truth">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-violet-400/20 bg-violet-500/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-violet-300" aria-hidden="true" />
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-300">
              career_profile.yaml
            </div>
            <div className="mt-1 text-sm text-zinc-300">
              Structured evidence constrains assessment and document generation
            </div>
          </div>
        </div>
        <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-emerald-300">
          SoT active
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <div
              key={category.title}
              className={`rounded-2xl border p-4 ${category.styles}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Icon className={`h-5 w-5 ${category.titleColour}`} aria-hidden="true" />
                  <div
                    className={`text-[10px] font-black uppercase tracking-[0.14em] ${category.titleColour}`}
                  >
                    {category.title}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.08em] ${category.claim[1]}`}
                >
                  {category.claim[0]}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-zinc-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <Panel title="Provenance Rules" className="mt-5">
        <div className="grid gap-3 sm:grid-cols-3">
          {rules.map(([label, detail]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
            >
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-cyan-300">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </div>
              <p className="mt-2 text-xs leading-5 text-zinc-400">{detail}</p>
            </div>
          ))}
        </div>
      </Panel>
    </Shell>
  )
}

/* ───────────────────────── 4. Opportunity Assessment ───────────────────────── */

function AssessmentVisual() {
  const dimensions = [
    ["Technical fit", "Strong", "Python · orchestration · typed LLM I/O", "text-emerald-300 border-emerald-400/25 bg-emerald-500/10", 86],
    ["Commercial fit", "Moderate", "Independent build · no CIC customers yet", "text-amber-300 border-amber-400/25 bg-amber-500/10", 58],
    ["Portfolio fit", "Strong", "Evidence-first AI workflow projects", "text-cyan-300 border-cyan-400/25 bg-cyan-500/10", 82],
  ]

  return (
    <Shell title="Assessment Workspace">
      <div className="grid gap-5 xl:grid-cols-2">
        <Panel title="Compared Inputs">
          <CompareColumn
            title="Job requirements"
            icon={FileSearch}
            colour="text-cyan-300"
            items={[
              "AI workflow engineering",
              "Typed Python services",
              "Human-in-the-loop controls",
            ]}
          />
          <div className="my-3 flex justify-center">
            <Scale className="h-5 w-5 text-violet-300" aria-hidden="true" />
          </div>
          <CompareColumn
            title="Career evidence"
            icon={Library}
            colour="text-violet-300"
            items={[
              "Deterministic orchestration",
              "Truth-validated generation",
              "Large automated test suite",
            ]}
          />
        </Panel>

        <Panel title="Fit Dimensions">
          <div className="space-y-3">
            {dimensions.map(([title, level, detail, styles, score]) => (
              <div key={title} className={`rounded-xl border p-4 ${styles}`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.14em]">
                    {title}
                  </div>
                  <div className="text-sm font-black tabular-nums">{score}</div>
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-100">{level}</div>
                <div className="mt-1 text-xs leading-5 text-zinc-400">{detail}</div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/40">
                  <div
                    className="h-full rounded-full bg-current opacity-70"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-amber-300">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            Gaps / uncertainty
          </div>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Enterprise deployment experience for CIC itself is not claimed. Assessment
            remains decision support — not an automatic pursue/reject verdict.
          </p>
        </div>
        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
          <div className="text-[10px] font-black uppercase tracking-[0.14em] text-violet-300">
            Recommendation
          </div>
          <div className="mt-2 text-lg font-black text-white">Pursue with review</div>
          <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
            <PauseCircle className="h-4 w-4 text-violet-300" aria-hidden="true" />
            Owner approval required
          </div>
        </div>
      </div>
    </Shell>
  )
}

function CompareColumn({ title, icon: Icon, colour, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] ${colour}`}>
        <Icon className="h-4 w-4" aria-hidden="true" />
        {title}
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
            <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${colour}`} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ───────────────────────── 5. Application Generation ───────────────────────── */

function GenerationVisual() {
  const stages = [
    ["Strategy", "Evidence selection plan", GitBranch, "border-violet-400/25 bg-violet-500/10 text-violet-300"],
    ["CV draft", "AI-assisted rewrite", FileText, "border-cyan-400/25 bg-cyan-500/10 text-cyan-300"],
    ["Cover letter", "Tailored narrative", Mail, "border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-300"],
    ["Truth gate", "Fail-closed validation", ShieldCheck, "border-amber-400/25 bg-amber-500/10 text-amber-300"],
    ["HTML → PDF", "WeasyPrint package", FileOutput, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
    ["Human review", "Owner gate", PauseCircle, "border-violet-400/25 bg-violet-500/10 text-violet-300"],
  ]

  const checks = [
    ["Unsupported tenure wording", "blocked", true],
    ["Portfolio labelled as employment", "blocked", true],
    ["Evidence-backed project claims", "passed", false],
  ]

  return (
    <Shell title="Controlled Document Generation">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {stages.map(([title, detail, Icon, styles]) => (
          <div key={title} className={`rounded-2xl border p-4 ${styles}`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
            <div className="mt-3 text-[10px] font-black uppercase tracking-[0.14em]">
              {title}
            </div>
            <div className="mt-2 text-xs leading-5 text-zinc-300">{detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel title="Truth Validation">
          <div className="space-y-2.5">
            {checks.map(([label, status, blocked]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  {blocked ? (
                    <XCircle className="h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                  )}
                  {label}
                </div>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] ${
                    blocked
                      ? "border-red-400/25 bg-red-500/10 text-red-300"
                      : "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">
            Package outcome
          </div>
          <div className="mt-3 text-2xl font-black text-white">Held for review</div>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Unsupported claims prevent successful package release. Rendering proceeds only
            after truth gates pass and the owner approves.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Fail closed</Tag>
            <Tag>WeasyPrint</Tag>
            <Tag>Human gate</Tag>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* ───────────────────────── 6. Workflow Orchestration ───────────────────────── */

function OrchestrationVisual() {
  const states = [
    ["running", "analyse → assess", PlayCircle, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
    ["checkpointed", "JSON run store", ShieldCheck, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
    ["awaiting_owner", "Interrupt before apply", PauseCircle, "text-amber-300 border-amber-400/25 bg-amber-500/10"],
    ["completed", "Side effects recorded", CheckCircle2, "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    ["failed", "Fail closed / retryable", Ban, "text-red-300 border-red-400/25 bg-red-500/10"],
  ]

  const controlPlane = [
    ["Typed WorkflowState", "Artefacts · approval · retry budget"],
    ["Deterministic routing", "Inspectable next-stage sequence"],
    ["Bounded retries", "Eligible analyse / assess nodes only"],
    ["Owner resume", "No silent submission path"],
  ]

  return (
    <Shell title="Orchestration Control Plane">
      <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Cog className="h-5 w-5 text-violet-300" aria-hidden="true" />
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-300">
                ApplicationWorkflowRunner
              </div>
              <div className="mt-1 text-sm text-zinc-300">
                Deterministic transitions — not an autonomous agent graph
              </div>
            </div>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">run_id · checkpoint · resume</span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {states.map(([name, detail, Icon, styles]) => (
          <div key={name} className={`rounded-2xl border p-4 ${styles}`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
            <div className="mt-3 font-mono text-xs font-black">{name}</div>
            <div className="mt-2 text-[11px] leading-5 text-zinc-300">{detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Panel title="Control Mechanisms">
          <div className="grid gap-3 sm:grid-cols-2">
            {controlPlane.map(([title, detail]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-cyan-300">
                  <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                  {title}
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">{detail}</p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">
            Example transition
          </div>
          <div className="mt-4 space-y-2 font-mono text-xs text-zinc-300">
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-2">
              analyse → assess
            </div>
            <div className="rounded-lg border border-violet-400/20 bg-violet-500/10 px-3 py-2">
              assess → awaiting_owner
            </div>
            <div className="rounded-lg border border-amber-400/20 bg-amber-500/10 px-3 py-2">
              owner resume → apply side effects
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-zinc-500">
            LangGraph was deliberately not adopted for this control path.
          </p>
        </div>
      </div>
    </Shell>
  )
}

/* ───────────────────────── 7. Tracking & Reliability ───────────────────────── */

function TrackingVisual() {
  const capabilities = [
    ["Status events", "Pipeline stage transitions", Activity, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
    ["Decision history", "Pursue / defer / reject trail", History, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
    ["Validation gates", "Schema · truth · package checks", ShieldCheck, "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    ["Retry / repair", "Recoverable acquisition & LLM nodes", Wrench, "text-amber-300 border-amber-400/25 bg-amber-500/10"],
    ["Automated tests", "2,500 collected PyTest cases", CheckCircle2, "text-fuchsia-300 border-fuchsia-400/25 bg-fuchsia-500/10"],
    ["Auditability", "Inspectable artefacts & run state", FileSearch, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
  ]

  const events = [
    ["12:01", "mailbox-intake", "3 opportunities acquired"],
    ["12:04", "analyse", "job_analysis.json written"],
    ["12:07", "awaiting_owner", "assessment ready for review"],
    ["12:18", "truth.validate", "unsupported claim blocked"],
  ]

  return (
    <Shell title="Reliability & Visibility">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {capabilities.map(([title, detail, Icon, styles]) => (
          <div key={title} className={`rounded-2xl border p-4 ${styles}`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
            <div className="mt-3 text-[10px] font-black uppercase tracking-[0.14em]">
              {title}
            </div>
            <div className="mt-2 text-xs leading-5 text-zinc-300">{detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <Panel title="Illustrative Pipeline Events">
          <div className="space-y-2.5">
            {events.map(([time, event, detail]) => (
              <div
                key={`${time}-${event}`}
                className="grid grid-cols-[3.25rem_1fr] gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 sm:grid-cols-[3.5rem_8.5rem_1fr]"
              >
                <span className="font-mono text-[11px] text-zinc-500">{time}</span>
                <span className="font-mono text-[11px] text-cyan-300">{event}</span>
                <span className="col-span-2 text-sm text-zinc-300 sm:col-span-1">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
          <div className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-300">
            Design posture
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            Operational visibility and automated tests support a real job-search workflow by
            providing traceability, controlled recovery and regression protection throughout
            the application workflow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Pipeline CLI</Tag>
            <Tag>PyTest</Tag>
            <Tag>Artefact stores</Tag>
          </div>
        </div>
      </div>
    </Shell>
  )
}

/* ───────────────────────── shared chrome ───────────────────────── */

function Shell({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-[0_0_60px_rgba(34,211,238,0.04)] sm:p-6">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-5">{children}</div>
    </div>
  )
}

function Panel({ title, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
      {children}
    </div>
  )
}

function Note({ children, tone = "cyan" }) {
  const styles =
    tone === "violet"
      ? "border-violet-400/20 bg-violet-500/10 text-violet-300"
      : "border-cyan-400/20 bg-cyan-500/10 text-cyan-300"

  return (
    <div className={`mt-5 rounded-2xl border p-4 ${styles}`}>
      <div className="flex items-start gap-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <p className="text-sm leading-6 text-zinc-300">{children}</p>
      </div>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-300">
      {children}
    </span>
  )
}
