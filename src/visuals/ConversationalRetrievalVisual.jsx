import {
    MessageSquare,
    BrainCircuit,
    PenLine,
    Database,
    CheckCircle2,
    HelpCircle,
    RefreshCw,
  } from "lucide-react"
  
  const status = [
    ["Layer Status", "Active", "text-emerald-300"],
    ["Context Utilization", "Enabled", "text-violet-300"],
    ["Query Rewriting", "Enabled", "text-blue-300"],
    ["Clarification Detection", "Enabled", "text-yellow-300"],
    ["Adaptive Routing", "Enabled", "text-cyan-300"],
  ]
  
  const flow = [
    ["User Input", "User asks a question or follow-up.", MessageSquare, "text-violet-300"],
    ["Context Integration", "Previous turn context is retrieved and incorporated.", BrainCircuit, "text-violet-300"],
    ["Query Rewriting", "Query is rewritten for clarity and completeness.", PenLine, "text-blue-300"],
    ["Retrieval Execution", "Retrieval runs using the rewritten query for higher relevance.", Database, "text-cyan-300"],
    ["Grounded Output", "Grounded response or clarification is returned.", CheckCircle2, "text-yellow-300"],
  ]
  
  const latestTurn = [
    ["User Question", "How many papers are needed?", MessageSquare],
    ["Previous Context", "User previously asked about the Academic Promotion Policy", BrainCircuit],
    ["Rewritten Query", "According to the Academic Promotion Policy, how many research publications are required for promotion?", PenLine],
    ["Retrieval Status", "Retrieved relevant documents using rewritten query\nTop Chunks: 8    |    Score Threshold: 0.35", Database],
    ["Response Type", "Grounded Answer", CheckCircle2],
    ["Routing Decision", "Standard RAG Path\n(No clarification needed)", RefreshCw],
  ]
  
  const capabilities = [
    ["Context Integration", "Incorporates previous conversation turns to preserve important context.", BrainCircuit, "text-violet-300"],
    ["Query Rewriting", "Rewrites follow-up questions into clear, standalone retrieval queries.", PenLine, "text-blue-300"],
    ["Context-Aware Retrieval", "Executes retrieval using the rewritten query to improve relevance.", Database, "text-cyan-300"],
    ["Clarification Detection", "Detects ambiguity and returns a clarification request when needed.", HelpCircle, "text-yellow-300"],
    ["Adaptive Routing", "Dynamically chooses the best retrieval path based on the query.", RefreshCw, "text-cyan-300"],
  ]
  
  const recent = [
    ["2m ago", "How many papers are needed?", "According to the Academic Promotion Policy, how...", "REWRITE", "RAG"],
    ["5m ago", "What are the requirements?", "What are the Academic Promotion Policy requirements...", "REWRITE", "RAG"],
    ["9m ago", "And what about research expectations?", "What research expectations are defined in the...", "REWRITE", "RAG"],
    ["12m ago", "Can you clarify that?", "Could you clarify which specific aspect you...", "CLARIFICATION", "CLARIFY"],
  ]
  
  const technical = [
    ["Context Window Used", "Last 5 turns"],
    ["Rewriting Model", "LLM"],
    ["Clarity Threshold", "0.70"],
    ["Retrieval Top K", "8"],
    ["Similarity Threshold", "0.35"],
    ["Clarification Trigger", "Low clarity / ambiguity"],
    ["Routing Modes", "Standard RAG / Clarification"],
  ]
  
  const diagnostics = [
    ["Total Turns", "84", "↑ 18.2%", "text-cyan-300"],
    ["Rewrites Performed", "61", "72.6% of turns", "text-blue-300"],
    ["Clarification Triggered", "8", "9.5% of turns", "text-yellow-300"],
    ["Context Utilization", "100%", "All used context", "text-violet-300"],
    ["Avg Rewrite Latency", "1.21s", "↓ 12.3%", "text-emerald-300"],
    ["Successful Retrievals", "96.4%", "↑ 6.7%", "text-emerald-300"],
  ]
  
  export default function ConversationalRetrievalVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <div className="grid grid-cols-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {status.map(([label, value, colour]) => (
            <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                {label}
              </div>
              <div className={`mt-2 text-sm font-black uppercase ${colour}`}>
                ● {value}
              </div>
            </div>
          ))}
        </div>
  
        <Panel title="Conversation Flow" className="mt-5">
          <p className="text-sm text-zinc-400">
            How a follow-up question is transformed into a high-quality retrieval.
          </p>
  
          <div className="mt-6 space-y-3">
            {flow.map(([title, text, Icon, colour], index) => (
                <div key={title}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                        <Icon className={`h-6 w-6 ${colour}`} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white">
                        {title}
                        </div>

                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {text}
                        </p>
                    </div>
                    </div>
                </div>

                {index !== flow.length - 1 && (
                    <div className="ml-6 h-4 w-px bg-cyan-400/50" />
                )}
                </div>
            ))}
            </div>
        </Panel>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <Panel title="Live Example">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              {latestTurn.map(([label, value, Icon]) => (
                <div
                  key={label}
                  className="grid grid-cols-[180px_1fr] border-b border-white/10 last:border-b-0"
                >
                  <div className="flex items-center gap-3 border-r border-white/10 px-4 py-4">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      {label}
                    </span>
                  </div>
                  <div className="whitespace-pre-line px-4 py-4 text-sm leading-6 text-zinc-300">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Capabilities">
            <div className="space-y-3">
              {capabilities.map(([title, text, Icon, colour]) => (
                <div key={title} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Icon className={`mt-1 h-6 w-6 shrink-0 ${colour}`} />
                  <div>
                    <div className={`text-sm font-black ${colour}`}>{title}</div>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <Panel title="Recent Rewritten Queries">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="grid grid-cols-[0.6fr_1.2fr_1.4fr_0.7fr_0.6fr] border-b border-white/10 px-4 py-3 text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500">
                <div>Time</div>
                <div>User Question</div>
                <div>Rewritten Query</div>
                <div>Type</div>
                <div>Routed Path</div>
              </div>
  
              {recent.map(([time, question, rewritten, type, route]) => (
                <div
                  key={`${time}-${question}`}
                  className="grid grid-cols-[0.6fr_1.2fr_1.4fr_0.7fr_0.6fr] border-b border-white/10 px-4 py-3 text-xs text-zinc-300 last:border-b-0"
                >
                  <div>{time}</div>
                  <div>{question}</div>
                  <div>{rewritten}</div>
                  <div className={type === "CLARIFICATION" ? "text-yellow-300" : "text-blue-300"}>
                    {type}
                  </div>
                  <div className={route === "CLARIFY" ? "text-yellow-300" : "text-emerald-300"}>
                    {route}
                  </div>
                </div>
              ))}
            </div>
  
            <button className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              View Full Conversation History →
            </button>
          </Panel>
  
          <Panel title="Technical Details">
            <div className="overflow-hidden rounded-xl border border-white/10">
              {technical.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm last:border-b-0"
                >
                  <div className="text-zinc-400">{label}</div>
                  <div className="font-semibold text-zinc-200">{value}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">Layer Diagnostics</SectionTitle>
  
        <div className="mt-4 grid grid-cols-3 gap-4 xl:grid-cols-6">
          {diagnostics.map(([label, value, detail, colour]) => (
            <div
              key={label}
              className="flex h-[150px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div>
                <div className="min-h-[34px] text-[9px] font-black uppercase tracking-[0.12em] text-zinc-400">
                  {label}
                </div>
  
                <div className="mt-2 text-2xl font-black text-white">
                  {value}
                </div>
  
                <div className={`mt-1 min-h-[18px] text-xs font-bold ${colour}`}>
                  {detail}
                </div>
              </div>
  
              <Sparkline colour={colour} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  function Sparkline({ colour = "text-cyan-400" }) {
    return (
      <svg
        viewBox="0 0 120 34"
        className={`h-8 w-full overflow-visible ${colour}`}
        fill="none"
      >
        <path
          d="M0 25 L12 26 L24 22 L36 25 L48 19 L60 23 L72 17 L84 21 L96 15 L108 18 L120 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
  
        <path
          d="M0 31 H120"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
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