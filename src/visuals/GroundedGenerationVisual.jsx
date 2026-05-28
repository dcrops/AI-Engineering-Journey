import {
    ShieldCheck,
    CheckCircle2,
    Database,
    Puzzle,
    PenLine,
    AlertTriangle,
    UserRound,
    MessageSquare,
    FileText,
    Target,
    Settings,
    HelpCircle,
    Activity,
  } from "lucide-react"
  
  const status = [
    ["Layer Status", "Active", "text-emerald-300"],
    ["Confidence Evaluation", "Enabled", "text-emerald-300"],
    ["Source-Aware Answering", "Enabled", "text-cyan-300"],
    ["Insufficient-Evidence Handling", "Enabled", "text-violet-300"],
  ]
  
  const workflow = [
    ["1. Retrieved Evidence", "Top relevant chunks and documents are retrieved.", Database, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
    ["2. Context Assembly", "Retrieved content is assembled with the user’s question.", Puzzle, "border-cyan-400/25 bg-cyan-500/10 text-cyan-300"],
    ["3. Response Generation", "LLM generates answer using only provided context.", PenLine, "border-blue-400/25 bg-blue-500/10 text-blue-300"],
    ["4. Confidence Check", "Grounding is evaluated based on evidence coverage and clarity.", ShieldCheck, "border-yellow-400/25 bg-yellow-500/10 text-yellow-300"],
    ["5. Grounded Response", "Answer returned with sources and confidence status.", CheckCircle2, "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"],
  ]
  
  const exampleRows = [
    ["User Question", "How many papers are needed for the Academic Promotion Policy?", UserRound],
    ["Rewritten Query", "According to the Academic Promotion Policy, how many research publications are required for promotion?", PenLine],
    ["Retrieved Context", "8 chunks retrieved from 3 documents.", FileText],
    ["Generated Response", "According to the Academic Promotion Policy, eight (8) research publications are required for promotion.", MessageSquare],
    ["Confidence", "0.87   High Confidence", Target],
    ["Sources Used", "Policy_Document.pdf (p. 12)  •  Academic_Promotion_Policy.pdf (p. 4)", Database],
    ["Grounding Status", "Grounded — Answer is supported by retrieved evidence.", ShieldCheck],
  ]
  
  const sources = [
    ["Policy_Document.pdf (p. 12)", "For promotion to Associate Professor, a minimum of eight research publications in peer-reviewed journals is required.", "0.91"],
    ["Academic_Promotion_Policy.pdf (p. 4)", "Department requirements include at least 8 publications within the evaluation period.", "0.84"],
    ["HR_Guidelines.pdf (p. 18)", "Academic performance expectations are aligned with the promotion policy.", "0.65"],
  ]
  
  const generationDetails = [
    ["LLM Model", "gpt-4o-mini"],
    ["Grounding Strategy", "Use only provided context"],
    ["Temperature", "0.2"],
    ["Max Tokens", "800"],
    ["Top P", "0.9"],
  ]
  
  const diagnostics = [
    ["Answers Generated", "76", "↑ 18.4%", "text-cyan-300"],
    ["High Confidence Answers", "64", "84.2%", "text-blue-300"],
    ["Insufficient Evidence", "6", "7.9%", "text-violet-300"],
    ["Average Confidence", "0.78", "↑ 7.1%", "text-emerald-300"],
    ["Grounding Pass Rate", "92.1%", "↑ 8.6%", "text-cyan-300"],
    ["Evidence Coverage", "0.81", "↑ 6.3%", "text-yellow-300"],
  ]
  
  export default function GroundedGenerationVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {status.map(([label, value, colour]) => (
            <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">{label}</div>
              <div className={`mt-2 text-sm font-black uppercase ${colour}`}>● {value}</div>
            </div>
          ))}
        </div>
  
        <Panel title="Grounded Generation Workflow" className="mt-5">
          <p className="text-sm text-zinc-400">
            From retrieved evidence to accurate, source-grounded response.
          </p>
  
          <div className="mt-6 grid gap-4 xl:grid-cols-5">
            {workflow.map(([title, text, Icon, styles], index) => (
              <div key={title} className="relative">
                <div className={`h-full rounded-2xl border p-5 ${styles}`}>
                  <Icon className="h-7 w-7" />
                  <div className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                    {title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p>
                </div>
  
                {index !== workflow.length - 1 && (
                  <div className="absolute left-full top-1/2 hidden h-px w-4 bg-cyan-400/60 xl:block" />
                )}
              </div>
            ))}
          </div>
        </Panel>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
          <Panel title="Live Generation Example">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {exampleRows.map(([label, value, Icon]) => (
                <div key={label} className="grid grid-cols-[180px_1fr] border-b border-white/10 last:border-b-0">
                  <div className="flex items-center gap-3 border-r border-white/10 px-4 py-4">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">{label}</span>
                  </div>
                  <div className="px-4 py-4 text-sm leading-6 text-zinc-300">{value}</div>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Source Evidence Used">
            <div className="space-y-3">
              {sources.map(([title, text, score], index) => (
                <div key={title} className="grid grid-cols-[32px_1fr_auto] gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs font-black text-zinc-300">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-black text-zinc-200">{title}</div>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{text}</p>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 px-3 py-1 text-sm font-black text-emerald-300">
                    {score}
                  </div>
                </div>
              ))}
            </div>
  
            <button className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              View All Retrieved Evidence →
            </button>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_0.9fr_1fr]">
          <Panel title="Confidence Overview">
            <div className="flex gap-5">
              <Dial value="0.87" label="High" />
              <div className="flex-1 space-y-3 text-sm">
                <ScoreRow label="Evidence Coverage" value="0.86" />
                <ScoreRow label="Answer Relevance" value="0.89" />
                <ScoreRow label="Context Support" value="0.84" />
              </div>
            </div>
  
            <div className="mt-5 flex justify-between border-t border-white/10 pt-4 text-sm">
              <span className="text-zinc-400">Confidence Threshold: 0.70</span>
              <span className="font-black text-emerald-300">Status: High Confidence</span>
            </div>
          </Panel>
  
          <Panel title="Generation Details">
            <div className="overflow-hidden rounded-xl border border-white/10">
              {generationDetails.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm last:border-b-0">
                  <span className="text-zinc-400">{label}</span>
                  <span className="font-semibold text-zinc-200">{value}</span>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Insufficient-Evidence Handling">
            <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-4">
              <div className="flex gap-3">
                <HelpCircle className="h-6 w-6 text-violet-300" />
                <div>
                  <div className="text-sm font-black text-white">When evidence is insufficient:</div>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-xs leading-5 text-zinc-300">
                    <li>The system returns a clarification question instead of a speculative answer.</li>
                    <li>This reduces hallucination risk and ensures operational reliability.</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                Example Clarification
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                I don’t have enough information in the provided documents to answer that. Could you clarify which policy or time period you’re referring to?
              </p>
            </div>
  
            <div className="mt-4 text-xs text-zinc-500">
              Trigger condition: low confidence or insufficient evidence coverage.
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">Layer Diagnostics</SectionTitle>
  
        <div className="mt-4 grid grid-cols-6 gap-4">
          {diagnostics.map(([label, value, detail, colour]) => (
            <div key={label} className="flex h-[135px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.12em] text-zinc-400">{label}</div>
                <div className="mt-2 text-2xl font-black text-white">{value}</div>
                <div className={`mt-1 text-xs font-bold ${colour}`}>{detail}</div>
              </div>
              <Sparkline colour={colour} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  function Dial({ value, label }) {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[12px] border-emerald-400 border-r-zinc-700 bg-black/40">
          <span className="text-2xl font-black text-white">{value}</span>
        </div>
        <div className="mt-2 text-sm font-black text-emerald-300">{label}</div>
        <div className="text-xs text-zinc-500">Overall Confidence</div>
      </div>
    )
  }
  
  function ScoreRow({ label, value }) {
    return (
      <div className="flex items-center justify-between">
        <span className="text-zinc-400">{label}</span>
        <span className="font-black text-white">{value}</span>
      </div>
    )
  }
  
  function Sparkline({ colour = "text-cyan-400" }) {
    return (
      <svg viewBox="0 0 120 34" className={`h-8 w-full overflow-visible ${colour}`} fill="none">
        <path d="M0 25 L12 26 L24 22 L36 25 L48 19 L60 23 L72 17 L84 21 L96 15 L108 18 L120 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0 31 H120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      </svg>
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