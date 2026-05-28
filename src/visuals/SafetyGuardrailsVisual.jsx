import {
    ShieldCheck,
    CheckCircle2,
    Database,
    HelpCircle,
    FileCheck2,
    UserRound,
    Search,
    Scale,
    AlertTriangle,
    FileText,
    ListChecks,
    Activity,
    Info,
    Target,
  } from "lucide-react"
  
  const status = [
    ["Layer Status", "Active", ShieldCheck, "text-emerald-300"],
    ["Confidence Evaluation", "Enabled", CheckCircle2, "text-emerald-300"],
    ["Grounding Checks", "Active", Database, "text-cyan-300"],
    ["Clarification Workflows", "Enabled", HelpCircle, "text-violet-300"],
    ["Source-Aware Answering", "Enabled", FileCheck2, "text-cyan-300"],
  ]
  
  const controls = [
    ["Insufficient Evidence Handling", "Detects low evidence and prevents unsupported answers.", ShieldCheck],
    ["Clarification Workflows", "Asks follow-up questions when information is insufficient.", HelpCircle],
    ["Confidence Evaluation", "Evaluates retrieval confidence to guide response decisions.", CheckCircle2],
    ["Grounding Checks", "Verifies responses are supported by retrieved evidence.", Database],
    ["Source-Aware Responses", "Attaches sources and references in all grounded answers.", FileCheck2],
  ]
  
  const safetyCards = [
    ["Grounded Responses", "Enabled", ShieldCheck, "text-emerald-300"],
    ["Unsupported Answer Handling", "Active", ShieldCheck, "text-cyan-300"],
    ["Clarification Behaviour", "Enabled", HelpCircle, "text-violet-300"],
    ["Retrieved Evidence Required", "Yes", FileText, "text-yellow-300"],
  ]
  
  const metrics = [
    ["Avg Evidence Coverage", "0.83", "Average across evaluated responses", FileText, "text-cyan-300"],
    ["Grounding Pass Rate", "92.4%", "Responses that passed grounding review", Target, "text-emerald-300"],
    ["Clarification Trigger Rate", "14.7%", "Questions that triggered clarification workflow", HelpCircle, "text-violet-300"],
  ]
  
  export default function SafetyGuardrailsVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <div className="grid grid-cols-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {status.map(([label, value, Icon, colour]) => (
            <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
              <div className="flex items-center gap-3">
                <Icon className={`h-8 w-8 ${colour}`} />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-400">
                    {label}
                  </div>
                  <div className={`mt-2 text-sm font-black uppercase ${colour}`}>
                    ● {value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <Panel title="Safety & Guardrails Workflow" className="mt-5">
          <p className="text-sm text-zinc-400">
            Governance-aware safeguards for grounded operational AI responses.
          </p>
  
          <div className="mt-6 space-y-4">
            <FlowCard
              icon={UserRound}
              title="1. User Question"
              tone="violet"
              text="How many publications are required for promotion?"
            />
  
            <FlowCard
              icon={Search}
              title="2. Retrieval Execution"
              tone="cyan"
              text="8 chunks retrieved from 3 source documents. Retrieval workflow executed."
            />
  
            <FlowCard
              icon={ShieldCheck}
              title="3. Grounding Review"
              tone="yellow"
              text="Evidence coverage, retrieval confidence and grounding status are evaluated."
            />
  
            <div className="rounded-2xl border border-blue-400/25 bg-blue-500/10 p-5">
              <div className="flex items-center gap-3">
                <Scale className="h-7 w-7 text-cyan-300" />
                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  4. Response Decision
                </div>
              </div>
  
              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-4">
                  <CheckCircle2 className="h-7 w-7 text-emerald-300" />
                  <div className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-emerald-300">
                    4A. Grounded Response
                  </div>
                  <ul className="mt-3 space-y-2 text-xs leading-5 text-zinc-300">
                    <li>✓ answer generated</li>
                    <li>✓ citations attached</li>
                    <li>✓ confidence shown</li>
                    <li>✓ evidence referenced</li>
                  </ul>
                </div>
  
                <div className="rounded-xl border border-violet-400/25 bg-violet-500/10 p-4">
                  <AlertTriangle className="h-7 w-7 text-violet-300" />
                  <div className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-violet-300">
                    4B. Clarification Required
                  </div>
                  <p className="mt-3 text-xs leading-5 text-zinc-300">
                    Insufficient evidence detected. System requests clarification instead of generating an unsupported response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <Panel title="Safety Controls">
            <div className="space-y-3">
              {controls.map(([title, text, Icon]) => (
                <div key={title} className="grid grid-cols-[32px_1fr_1.2fr] gap-3 border-b border-white/10 pb-3 last:border-b-0">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <div className="text-sm font-semibold text-zinc-200">{title}</div>
                  <div className="text-xs leading-5 text-zinc-500">{text}</div>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Response Safety Status">
            <div className="grid gap-4 xl:grid-cols-2">
              {safetyCards.map(([title, value, Icon, colour]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <Icon className={`mx-auto h-10 w-10 ${colour}`} />
                  <div className="mt-4 text-lg font-black text-white">{title}</div>
                  <div className={`mt-4 border-t border-white/10 pt-4 text-sm font-black uppercase ${colour}`}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
  
        <div className="mt-5 space-y-5">
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
          <ShieldCheck className="h-11 w-11 text-emerald-300" />

          <div className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
            Guardrails In
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-300">
            The system prioritizes accuracy, transparency and operational trust by
            ensuring responses are grounded, confident and supported by real evidence.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          {metrics.map(([label, value, detail, Icon, colour]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <Icon className={`h-7 w-7 ${colour}`} />

              <div className="mt-3 text-sm text-zinc-400">{label}</div>

              <div className={`mt-2 text-3xl font-black ${colour}`}>
                {value}
              </div>

              <p className="mt-2 text-xs leading-5 text-zinc-500">{detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
          <Info className="h-7 w-7 text-blue-300" />

          <p className="mt-4 text-sm leading-6 text-zinc-300">
            Metrics are computed from evaluation runs in the MVP harness, not live
            production analytics.
          </p>
        </div>
      </div>
    </div>
  )
}
  
  function FlowCard({ icon: Icon, title, text, tone }) {
    const tones = {
      violet: "border-violet-400/25 bg-violet-500/10 text-violet-300",
      cyan: "border-cyan-400/25 bg-cyan-500/10 text-cyan-300",
      yellow: "border-yellow-400/25 bg-yellow-500/10 text-yellow-300",
    }
  
    return (
      <div className={`rounded-2xl border p-5 ${tones[tone]}`}>
        <div className="flex items-start gap-4">
          <Icon className="h-8 w-8 shrink-0" />
  
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.16em] text-white">
              {title}
            </div>
  
            <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
          </div>
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
      <div className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}>
        {children}
      </div>
    )
  }