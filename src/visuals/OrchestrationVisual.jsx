import {
    MessageSquare,
    PenLine,
    GitBranch,
    Settings,
    ListChecks,
    CheckCircle2,
    Info,
    Target,
    Shuffle,
    Scale,
    UserRound,
    Wrench,
    AlertTriangle,
    ArrowRight,
    Clock3,
    FileText,
    ShieldCheck,
  } from "lucide-react"
  
  const pipeline = [
    ["1. User Query", "User asks a question in natural language", MessageSquare],
    ["2. Query Rewriting", "Rewrite and expand query for better retrieval", PenLine],
    ["3. Retrieval Routing", "Select the best retrieval strategy based on query characteristics", GitBranch],
    ["4. Execute Retrieval", "Run the chosen retrieval workflow", Settings],
    ["5. Handoff to Response Layer", "Pass results to response layer", ListChecks],
    ["6. Response Generated", "Grounded answer returned to user", CheckCircle2],
  ]
  
  const strategies = [
    ["Standard Retrieval", "Best for factual and direct lookups", Target, true],
    ["Document-Balanced Retrieval", "Best for broad coverage across documents", Shuffle, false],
    ["Aggregation Retrieval", "Best when combining information from multiple sources", Scale, false],
  ]
  
  const decisions = [
    ["Intent Detection", "Determine what the user is asking"],
    ["Query Rewriting", "Generate a retrieval-ready query"],
    ["Strategy Routing", "Select the most suitable retrieval mode"],
    ["Clarification Trigger", "Ask for more detail if query is unclear"],
    ["Context & History Handling", "Incorporate conversation context"],
    ["Telemetry Capture", "Log decisions and timings"],
  ]
  
  const output = [
    ["Retrieval Strategy", "Standard"],
    ["Rewritten Query", "What is the leave policy for academic staff?"],
    ["Chunks Retrieved", "8"],
    ["Sources", "5 documents"],
    ["Context Tokens", "~3.2k tokens"],
    ["Confidence (Est.)", "0.87"],
  ]
  
  const telemetry = [
    ["1.23s", "Total Orchestration Time", Clock3, "text-blue-300"],
    ["Standard", "Retrieval Strategy Used", GitBranch, "text-emerald-300"],
    ["1", "Query Rewrite Performed", PenLine, "text-cyan-300"],
    ["8", "Chunks Retrieved", FileText, "text-yellow-300"],
    ["8", "Chunks Passed Filters", ShieldCheck, "text-cyan-300"],
    ["0.87", "Estimated Confidence", Target, "text-violet-300"],
  ]
  
  export default function OrchestrationVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Orchestration Pipeline</SectionTitle>
  
        <div className="mt-6 grid grid-cols-6 gap-4">
          {pipeline.map(([title, description, Icon], index) => (
            <div key={title} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
  
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.15em] text-cyan-300">
                  {title}
                </div>
  
                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  {description}
                </p>
              </div>
  
              {index !== pipeline.length - 1 && (
                <div className="absolute left-full top-7 hidden h-px w-4 bg-cyan-400/60 xl:block" />
              )}
            </div>
          ))}
        </div>
  
        <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-300" />
            <p className="text-sm text-zinc-300">
              The orchestration layer coordinates retrieval strategies, query handling and response handoff to ensure consistent, explainable outcomes.
            </p>
          </div>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <Panel title="Retrieval Strategy Selection">
            <p className="text-sm leading-6 text-zinc-400">
              Choose the most appropriate strategy based on the nature of the user query.
            </p>
  
            <div className="mt-5 space-y-3">
              {strategies.map(([title, description, Icon, active]) => (
                <div
                  key={title}
                  className={`rounded-xl border p-4 ${
                    active
                      ? "border-violet-400/50 bg-violet-500/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={active ? "h-5 w-5 text-violet-300" : "h-5 w-5 text-cyan-300"} />
                    <div className="flex-1">
                      <div className="text-sm font-bold text-zinc-200">{title}</div>
                      <div className="mt-1 text-xs text-zinc-500">{description}</div>
                    </div>
                    {active && <CheckCircle2 className="h-5 w-5 text-cyan-300" />}
                  </div>
                </div>
              ))}
            </div>
  
            <div className="mt-5 rounded-xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm">
              <div className="text-violet-300">Selected Strategy</div>
              <div className="mt-1 font-bold text-violet-200">Standard Retrieval</div>
            </div>
          </Panel>
  
          <Panel title="Orchestration Decisions">
            <div className="space-y-3">
              {decisions.map(([title, description]) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <div className="text-sm font-bold text-zinc-200">{title}</div>
                    <div className="text-xs text-zinc-500">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Orchestration Output">
            <div className="overflow-hidden rounded-xl border border-white/10">
              {output.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_1fr] gap-4 border-b border-white/10 px-4 py-3 text-sm last:border-b-0"
                >
                  <div className="text-zinc-400">{label}</div>
                  <div className="text-right font-semibold text-zinc-200">{value}</div>
                </div>
              ))}
            </div>
  
            <div className="mt-5 rounded-xl border border-cyan-400/25 bg-cyan-500/10 p-4">
              <div className="flex items-center gap-3">
                <ArrowRight className="h-6 w-6 text-cyan-300" />
                <div className="text-sm font-bold text-cyan-200">
                  Hand off to Response Layer for grounded generation
                </div>
              </div>
            </div>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
          <Panel title="Query Rewriting Example">
            <p className="text-sm text-zinc-400">
              Improves retrieval by making the query clearer and context-aware.
            </p>
  
            <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <MiniCard icon={UserRound} title="Original User Query">
                What are the leave rules for academics?
              </MiniCard>
  
              <div className="text-cyan-300">↔</div>
  
              <MiniCard icon={Wrench} title="Rewritten Query">
                What is the leave policy for academic staff including types of leave and eligibility?
              </MiniCard>
            </div>
          </Panel>
  
          <Panel title="Insufficient Evidence Handling">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <MiniCard icon={AlertTriangle} title="Insufficient Evidence" tone="yellow">
                Not enough relevant or high-quality information found in retrieved sources.
              </MiniCard>
  
              <div className="text-cyan-300">↔</div>
  
              <MiniCard icon={MessageSquare} title="Clarification Workflow" tone="cyan">
                Ask the user for more details or suggest alternative questions.
              </MiniCard>
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">Orchestration Telemetry</SectionTitle>
  
        <div className="mt-4 grid grid-cols-6 gap-4">
          {telemetry.map(([value, label, Icon, colour]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-xl font-black ${colour}`}>{value}</div>
              <div className="mt-1 text-[9px] font-black uppercase tracking-[0.12em] text-white">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  function MiniCard({ icon: Icon, title, children, tone = "violet" }) {
    const tones = {
      violet: "border-violet-400/20 bg-violet-500/10 text-violet-300",
      yellow: "border-yellow-400/20 bg-yellow-500/10 text-yellow-300",
      cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
    }
  
    return (
      <div className={`rounded-xl border p-4 ${tones[tone]}`}>
        <Icon className="h-5 w-5" />
        <div className="mt-3 text-sm font-bold text-zinc-200">{title}</div>
        <div className="mt-2 text-xs leading-5 text-zinc-400">{children}</div>
      </div>
    )
  }
  
  function Panel({ title, children }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
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