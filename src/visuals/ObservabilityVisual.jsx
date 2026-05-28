import {
    Eye,
    UserRound,
    CheckCircle2,
    Star,
    ShieldCheck,
    FileText,
    GitBranch,
    Clock3,
    Search,
    HelpCircle,
    FileStack,
    MessageSquare,
    Download,
  } from "lucide-react"
  
  const retrieved = [
    ["1", "Academic_Promotion_Policy.pdf (chunk_06)", "0.86"],
    ["2", "Academic_Promotion_Policy.pdf (chunk_02)", "0.81"],
    ["3", "Academic_Board_Regulations.docx (chunk_11)", "0.72"],
    ["4", "HR_Procedures_Manual.pdf (chunk_04)", "0.63"],
    ["5", "Employee_Code_of_Conduct.pdf (chunk_01)", "0.48"],
  ]
  
  const timings = [
    ["Total API Duration", "2,496 ms", "bg-blue-400"],
    ["Orchestration", "28 ms", "bg-cyan-400"],
    ["Retrieval", "695 ms", "bg-emerald-400"],
    ["Generation", "1,504 ms", "bg-violet-400"],
    ["Post-processing", "145 ms", "bg-yellow-400"],
  ]
  
  const diagnostics = [
    ["Retrieval Confidence", "0.88", "HIGH"],
    ["Groundedness", "PASS", "Supported by retrieved sources"],
    ["Insufficient Evidence", "FALSE", "Sufficient evidence was available"],
    ["Answer Relevance", "0.91", "HIGH"],
  ]
  
  const signals = [
    ["Why this answer?", "The answer is based on 7 highly relevant chunks from policy documents.", HelpCircle, "text-yellow-300"],
    ["Why these sources?", "Sources are ranked by semantic relevance to the rewritten query.", FileStack, "text-emerald-300"],
    ["Why no clarification?", "The question was specific and did not require clarification.", MessageSquare, "text-cyan-300"],
    ["How confident is the system?", "High confidence due to strong grounding and source alignment.", ShieldCheck, "text-violet-300"],
  ]
  
  const health = [
    ["Latency (ms)", "2,496", "text-cyan-400"],
    ["Retrieval Time", "695", "text-emerald-400"],
    ["Generation Time", "1,504", "text-violet-400"],
    ["Success Rate", "98.6%", "text-green-400"],
    ["Ground Pass", "96.2%", "text-fuchsia-400"],
    ["Avg. Confidence", "0.87", "text-sky-400"],
  ]
  
  export default function ObservabilityVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <div className="flex items-center justify-between">
          <SectionTitle>Observability Overview</SectionTitle>
  
          <button className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
            <Download className="mr-2 inline h-4 w-4" />
            Export Observability Report
          </button>
        </div>
  
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="grid gap-5 xl:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_0.8fr]">
            <div className="flex gap-4">
              <UserRound className="h-9 w-9 text-violet-300" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-violet-300">
                  User Question
                </div>
                <p className="mt-2 text-sm text-zinc-300">
                  What does the Academic Promotion Policy say about appeals?
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  Time: 25 May 2025, 14:32:18
                </p>
              </div>
            </div>
  
            <Status icon={CheckCircle2} label="Answer Status" value="Answered" colour="text-emerald-300" />
            <Status icon={Star} label="Confidence" value="High" colour="text-yellow-300" />
            <Status icon={ShieldCheck} label="Grounding Check" value="Pass" colour="text-emerald-300" />
            <Status icon={FileText} label="Sources Used" value="7" colour="text-blue-300" />
          </div>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[0.85fr_0.85fr_1.35fr]">
          <Panel title="Orchestration Details" colour="text-cyan-300">
            <KeyValue label="Intent Detected" value="standard" />
            <KeyValue label="Retrieval Strategy" value="standard" />
            <KeyValue label="Query Rewritten" value="Yes" good />
            <KeyValue label="Clarification Triggered" value="No" bad />
  
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <SectionTitle>Orchestration Reasoning</SectionTitle>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                No comparison, aggregation or clarification triggers detected. Standard retrieval used.
              </p>
            </div>
          </Panel>
  
          <Panel title="Stage Timings" colour="text-blue-300">
            <div className="space-y-4">
              {timings.map(([label, value, colour]) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <span className={`h-2.5 w-2.5 rounded-full ${colour}`} />
                    {label}
                  </div>
                  <div className="font-semibold text-zinc-200">{value}</div>
                </div>
              ))}
            </div>
  
            <SectionTitle className="mt-6">Timeline Breakdown</SectionTitle>
            <div className="mt-4 flex h-4 overflow-hidden rounded-full bg-white/10">
              <div className="w-[8%] bg-blue-400" />
              <div className="w-[28%] bg-emerald-400" />
              <div className="w-[58%] bg-violet-400" />
              <div className="w-[6%] bg-yellow-400" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-zinc-500">
              <span>0</span><span>1s</span><span>2s</span><span>2.5s</span>
            </div>
          </Panel>
  
          <Panel title="Retrieval Visibility" colour="text-emerald-300">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="grid grid-cols-[0.4fr_1.8fr_0.5fr] border-b border-white/10 px-4 py-3 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                <div>Rank</div><div>Document / Chunk</div><div>Score</div>
              </div>
  
              {retrieved.map(([rank, doc, score]) => (
                <div
                  key={rank}
                  className="grid grid-cols-[0.4fr_1.8fr_0.5fr] border-b border-white/10 px-4 py-3 text-xs text-zinc-300 last:border-b-0"
                >
                  <div>{rank}</div>
                  <div className="font-semibold text-zinc-200">{doc}</div>
                  <div>{score}</div>
                </div>
              ))}
            </div>
  
            <button className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              View All 7 Retrieved Chunks
            </button>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_1fr]">
          <Panel title="Response & Quality Diagnostics" colour="text-violet-300">
            <div className="grid grid-cols-2 gap-4">
            {diagnostics.map(([label, value, detail]) => (
                <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                <Dial value={value} />

                <div className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                    {label}
                </div>

                <div className="mt-2 text-xs leading-5 text-zinc-500">
                    {detail}
                </div>
                </div>
            ))}
            </div>
  
            <SectionTitle className="mt-6">Answer Preview</SectionTitle>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
              Appeals must be submitted in writing within 15 working days of the decision to the Appeals Committee.
            </div>
          </Panel>
  
          <Panel title="Explainability Signals" colour="text-yellow-300">
            <div className="space-y-5">
              {signals.map(([title, text, Icon, colour]) => (
                <div key={title} className="flex gap-4">
                  <Icon className={`mt-1 h-7 w-7 shrink-0 ${colour}`} />
                  <div>
                    <div className="text-sm font-black text-yellow-300">{title}</div>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">System Health</SectionTitle>
  
        <div className="mt-4 grid grid-cols-6 gap-4">
        {health.map(([label, value, colour]) => (
            <div
            key={label}
            className="flex h-[130px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
            <div>
                <div className="text-xs text-zinc-400">
                {label}
                </div>

                <div className="mt-2 text-3xl font-black text-white">
                {value}
                </div>
            </div>

            <Sparkline colour={colour} />
            </div>
        ))}
        </div>
      </div>
    )
  }
  
  function Status({ icon: Icon, label, value, colour }) {
    return (
      <div className="flex items-center gap-4 border-l border-white/10 pl-5">
        <Icon className={`h-8 w-8 ${colour}`} />
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{label}</div>
          <div className={`mt-1 text-sm font-black uppercase ${colour}`}>{value}</div>
        </div>
      </div>
    )
  }
  
  function KeyValue({ label, value, good, bad }) {
    return (
      <div className="flex items-center justify-between border-b border-white/10 py-3 text-sm last:border-b-0">
        <span className="text-zinc-400">{label}</span>
        <span className={good ? "text-emerald-300" : bad ? "text-red-300" : "text-zinc-200"}>{value}</span>
      </div>
    )
  }
  
  function Sparkline({ colour = "text-cyan-400" }) {
    return (
      <svg
        viewBox="0 0 120 36"
        className={`mt-3 h-8 w-full overflow-visible ${colour}`}
        fill="none"
      >
        <path
          d="M0 30 L10 30 L18 24 L27 28 L36 18 L45 25 L54 20 L63 27 L72 13 L81 25 L90 9 L99 22 L108 15 L120 21"
          stroke="currentColor"
          strokeWidth="2"
        />
  
        <path
          d="M0 34 H120"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </svg>
    )
  }
  
  function Panel({ title, children, colour = "text-cyan-300" }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
        <SectionTitle className={colour}>{title}</SectionTitle>
        <div className="mt-5">{children}</div>
      </div>
    )
  }

  function Dial({ value }) {
    return (
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-emerald-400 border-r-zinc-700 bg-black/40">
        <span className="text-lg font-black text-white">{value}</span>
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