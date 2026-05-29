import {
    MessageSquare,
    GitBranch,
    Search,
    BrainCircuit,
    ShieldCheck,
    Database,
    Info,
    ListChecks,
    PenLine,
    Clock3,
    Target,
    FileText,
    CheckCircle2,
  } from "lucide-react"
  
  const pipeline = [
    ["1. User Query", "User asks a question in natural language", MessageSquare],
    ["2. Orchestration", "Intent detected, strategy selected and query rewritten", GitBranch],
    ["3. Retrieval", "Documents retrieved using selected strategy", Search],
    ["4. Generation", "Grounded answer generated from retrieved context", BrainCircuit],
    ["5. Evaluation", "Grounding check and confidence evaluation performed", ShieldCheck],
    ["6. Telemetry Capture", "Events, metrics and outcomes captured and logged", Database],
  ]

  const pipelineColours = [
    "text-violet-300 border-violet-400/25 bg-violet-500/10",
    "text-blue-300 border-blue-400/25 bg-blue-500/10",
    "text-cyan-300 border-cyan-400/25 bg-cyan-500/10",
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
    "text-yellow-300 border-yellow-400/25 bg-yellow-500/10",
    "text-fuchsia-300 border-fuchsia-400/25 bg-fuchsia-500/10",
  ]
  
  const captureAreas = [
    ["Orchestration Decisions", ["Intent detected", "Retrieval strategy selected", "Clarification triggered", "Orchestration path taken"], ListChecks, "text-violet-300"],
    ["Query Details", ["Original user query", "Rewritten query", "Detected entities", "Query type"], PenLine, "text-cyan-300"],
    ["Retrieval Traces", ["Documents retrieved", "Chunk IDs", "Scores & rankings", "Metadata filters", "Top-k"], Database, "text-emerald-300"],
    ["Timing Diagnostics", ["Orchestration time", "Retrieval time", "Generation time", "Total latency"], Clock3, "text-yellow-300"],
    ["Groundedness Checks", ["Grounding result", "Evidence sufficiency", "Confidence score"], ShieldCheck, "text-blue-300"],
    ["Response Outcomes", ["Answer status", "Sources used", "Confidence", "Insufficient evidence flag"], Target, "text-violet-300"],
  ]
  
  const traceRows = [
    ["1", "Academic Promotion Policy.pdf", "chunk_06", "0.86", "Appeals Committee will review..."],
    ["2", "Academic Promotion Policy.pdf", "chunk_02", "0.81", "Eligibility criteria include..."],
    ["3", "HR Procedures Manual.pdf", "chunk_11", "0.72", "Appeals process overview..."],
    ["4", "Academic Board Regulations.docx", "chunk_04", "0.63", "Governance and decisions..."],
    ["5", "Employee Code of Conduct.pdf", "chunk_01", "0.48", "General conduct guidelines..."],
  ]
  
  const logText = `{
    "request_id": "b3f1e7d2-8a52-4f42-9e7b",
    "timestamp": "2025-05-21T14:32:18.125Z",
    "client_name": "RMIT_Demo",
    "orchestration": {
      "intent": "standard",
      "retrieval_strategy": "standard",
      "clarification_triggered": false
    },
    "query": {
      "original": "what are the appeal rules?",
      "rewritten": "appeal process academic promotion rmit"
    },
    "retrieval": {
      "top_k": 5,
      "results": [
        { "doc": "policy.pdf#chunk_06", "score": 0.86 },
        { "doc": "policy.pdf#chunk_02", "score": 0.81 }
      ]
    },
    "timings_ms": {
      "orchestration": 18,
      "retrieval": 692,
      "generation": 1432,
      "total": 2142
    },
    "grounding": {
      "result": "PASS",
      "evidence_sufficient": true,
      "confidence": 0.87
    },
    "response": {
      "status": "ANSWERED",
      "sources_used": 7
    }
  }`
  
  export default function TelemetryVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Telemetry Pipeline</SectionTitle>
  
        <div className="mt-6 grid grid-cols-6 gap-4">
        {pipeline.map(([title, description, Icon], index) => {
          const colourClasses = pipelineColours[index]
          const textColour = colourClasses.split(" ")[0]

          return (
            <div key={title} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${colourClasses}`}
              >
                <Icon className={`h-6 w-6 ${textColour}`} />
              </div>
  
                <div className={`mt-4 text-[10px] font-black uppercase tracking-[0.2em] ${textColour}`}>
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
            )
          })}
        </div>
  
        <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-300" />
            <p className="text-sm text-zinc-300">
              Telemetry is captured at every stage to provide visibility into decisions, evidence used and system performance.
            </p>
          </div>
        </div>
  
        <SectionTitle className="mt-6">What Telemetry Captures</SectionTitle>
  
        <div className="mt-4 grid grid-cols-6 gap-4">
          {captureAreas.map(([title, items, Icon, colour]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-[10px] font-black uppercase tracking-[0.16em] ${colour}`}>
                {title}
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-xs leading-5 text-zinc-400">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div className="mt-6 grid gap-5 xl:grid-cols-[0.9fr_1.35fr]">
          <Panel title="Example Telemetry Log">
            <pre className="max-h-[520px] overflow-auto rounded-2xl border border-white/10 bg-black/60 p-5 text-xs leading-5 text-yellow-200">
              <code>{logText}</code>
            </pre>
          </Panel>
  
          <div className="space-y-5">
            <Panel title="Retrieval Trace Example">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <div className="grid grid-cols-[0.35fr_1.4fr_0.8fr_0.5fr_1.2fr] border-b border-white/10 px-4 py-3 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                  <div>Rank</div>
                  <div>Document</div>
                  <div>Chunk</div>
                  <div>Score</div>
                  <div>Snippet</div>
                </div>
  
                {traceRows.map(([rank, doc, chunk, score, snippet]) => (
                  <div
                    key={`${rank}-${doc}-${chunk}`}
                    className="grid grid-cols-[0.35fr_1.4fr_0.8fr_0.5fr_1.2fr] border-b border-white/10 px-4 py-3 text-xs text-zinc-300 last:border-b-0"
                  >
                    <div>{rank}</div>
                    <div className="font-semibold text-zinc-200">{doc}</div>
                    <div>{chunk}</div>
                    <div>{score}</div>
                    <div className="text-zinc-500">{snippet}</div>
                  </div>
                ))}
              </div>
            </Panel>
  
            <Panel title="Timing Breakdown">
              <div className="grid grid-cols-4 gap-4 text-xs text-zinc-400">
                <Metric label="Orchestration" value="18ms" />
                <Metric label="Retrieval" value="692ms" />
                <Metric label="Generation" value="1432ms" />
                <Metric label="Total" value="2142ms" />
              </div>
  
              <div className="mt-4 flex h-4 overflow-hidden rounded-full bg-white/10">
                <div className="w-[8%] bg-violet-400" />
                <div className="w-[32%] bg-cyan-400" />
                <div className="w-[60%] bg-emerald-400" />
              </div>
            </Panel>
  
            <div className="grid gap-5 xl:grid-cols-2">
              <Panel title="Grounding & Confidence">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <Metric label="Grounding Result" value="PASS" colour="text-emerald-300" />
                  <Metric label="Evidence Sufficient" value="Yes" colour="text-emerald-300" />
                  <Metric label="Confidence Score" value="0.87" colour="text-white" />
                </div>
  
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[87%] bg-emerald-400" />
                </div>
              </Panel>
  
              <Panel title="Response Outcome">
                <div className="space-y-3 text-sm">
                  <Outcome label="Answer Status" value="ANSWERED" />
                  <Outcome label="Sources Used" value="7" />
                  <Outcome label="Insufficient Evidence" value="FALSE" />
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function Metric({ label, value, colour = "text-white" }) {
    return (
      <div>
        <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          {label}
        </div>
        <div className={`mt-1 text-lg font-black ${colour}`}>{value}</div>
      </div>
    )
  }
  
  function Outcome({ label, value }) {
    return (
      <div className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0">
        <span className="text-zinc-400">{label}</span>
        <span className="font-black text-emerald-300">{value}</span>
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