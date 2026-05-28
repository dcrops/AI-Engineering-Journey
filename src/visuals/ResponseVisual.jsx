import {
    FileText,
    BrainCircuit,
    ShieldCheck,
    CheckCircle2,
    MessageSquare,
    Send,
    Info,
    UserRound,
    FileWarning,
    AlertTriangle,
    HelpCircle,
    Timer,
    Target,
  } from "lucide-react"
  
  const pipeline = [
    ["1. Context In", "Top chunks and metadata from retrieval layer", FileText],
    ["2. Intent & Plan", "Understand user intent and response approach", BrainCircuit],
    ["3. Generate", "Generate grounded response using context and rules", ShieldCheck],
    ["4. Evaluate", "Check grounding, confidence and safety", CheckCircle2],
    ["5. Clarify / Refine", "Ask clarifying questions if evidence is insufficient", MessageSquare],
    ["6. Deliver", "Return answer with sources and confidence", Send],
  ]
  
  const sources = [
    ["Academic Promotion Policy.pdf", "chunk_06 — Appeals Committee", "0.86", "PDF"],
    ["Academic Promotion Policy.pdf", "chunk_02 — Eligibility Criteria", "0.81", "PDF"],
    ["Academic Board Regulations.docx", "chunk_04 — Governance", "0.63", "DOCX"],
    ["HR Procedures Manual.pdf", "chunk_11 — Appeals Process", "0.58", "PDF"],
    ["Academic Calendar.xlsx", "chunk_01 — Key Dates", "0.41", "XLSX"],
  ]
  
  const outcome = [
    ["Delivered", "Response returned successfully", CheckCircle2, "text-emerald-300"],
    ["Grounded", "Supported by verified sources", ShieldCheck, "text-cyan-300"],
    ["0.87", "High confidence response quality", Target, "text-violet-300"],
    ["5 Sources", "Top chunks used", FileText, "text-yellow-300"],
    ["1.2s", "Response time end-to-end", Timer, "text-emerald-300"],
  ]
  
  export default function ResponseVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Response Pipeline</SectionTitle>
  
        <div className="mt-6 grid grid-cols-6 gap-4">
          {pipeline.map(([title, description, Icon], index) => (
            <div key={title} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
  
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">
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
              Every response is grounded in retrieved sources, evaluated for quality and designed for operational trust.
            </p>
          </div>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.9fr]">
          <Panel title="Grounded Response Example">
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                  User Question
                </div>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                  <UserRound className="h-5 w-5 text-cyan-300" />
                  What is the process for appealing an academic promotion decision?
                </div>
              </div>
  
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                  AI Response
                </div>
  
                <div className="mt-2 rounded-xl border border-white/10 bg-black/40 p-4 text-sm leading-6 text-zinc-300">
                  <p>
                    According to the Academic Promotion Policy, an appeal must be
                    submitted in writing to the Academic Promotion Appeals Committee
                    within 15 working days of receiving the decision. The Committee
                    will review the case and provide a recommendation to the
                    Academic Board.
                  </p>
  
                  <p className="mt-4">Key steps include:</p>
  
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-400">
                    <li>Submit a written appeal within 15 working days.</li>
                    <li>Appeals Committee reviews the case and evidence.</li>
                    <li>Committee recommendation is forwarded to Academic Board.</li>
                    <li>The Academic Board issues the final decision.</li>
                  </ul>
  
                  <p className="mt-4 text-zinc-400">
                    Note: Appeals must be based on procedural fairness or new
                    evidence not previously considered.
                  </p>
  
                  <div className="mt-4 flex flex-wrap gap-3">
                    <StatusPill label="Grounded" tone="emerald" />
                    <StatusPill label="High Confidence 0.87" tone="cyan" />
                    <StatusPill label="Sources 5" tone="violet" />
                  </div>
                </div>
              </div>
            </div>
          </Panel>
  
          <Panel title="Sources (Top Chunks)">
            <div className="space-y-3">
              {sources.map(([doc, chunk, score, type]) => (
                <div
                  key={`${doc}-${chunk}`}
                  className="grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-[9px] font-black ${
                      type === "DOCX"
                        ? "bg-blue-500/20 text-blue-300"
                        : type === "XLSX"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {type}
                  </div>
  
                  <div>
                    <div className="text-sm font-semibold text-zinc-200">
                      {doc}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">{chunk}</div>
                  </div>
  
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-black text-emerald-300">
                    Score {score}
                  </div>
                </div>
              ))}
            </div>
  
            <button className="mt-4 w-full rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">
              View all sources →
            </button>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <Panel title="Confidence Evaluation">
            <div className="flex gap-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[12px] border-emerald-400 border-r-yellow-400 bg-black/40">
                <div className="text-xl font-black text-white">0.87</div>
              </div>
  
              <div className="space-y-3">
                {[
                  "Sufficient relevant evidence",
                  "High source relevance",
                  "Consistent across sources",
                  "No conflicts detected",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
  
            <p className="mt-4 text-xs leading-5 text-zinc-500">
              Confidence is calculated based on relevance, consistency, coverage and source quality.
            </p>
          </Panel>
  
          <Panel title="Insufficient Evidence Handling">
            <div className="rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-yellow-300" />
                <div className="text-sm font-black text-yellow-300">
                  Insufficient Evidence
                </div>
              </div>
  
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                There is not enough information in the available documents to answer this question accurately.
              </p>
  
              <div className="mt-4 text-xs text-zinc-400">
                Suggestions:
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Try rephrasing your question</li>
                  <li>Provide more context</li>
                  <li>Contact your administrator</li>
                </ul>
              </div>
  
              <button className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-300">
                How can I refine my question?
              </button>
            </div>
          </Panel>
  
          <Panel title="Clarification Workflow">
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-zinc-300">
                <HelpCircle className="mt-1 h-5 w-5 text-violet-300" />
                <div>To answer accurately, could you clarify:</div>
              </div>
  
              {[
                "Are you referring to academic staff or professional staff promotion?",
                "Is this related to a specific faculty or department?",
                "Do you want information about the appeal timeline or the review criteria?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-xs leading-5 text-violet-200"
                >
                  {item}
                </div>
              ))}
  
              <button className="w-full rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-violet-200">
                Ask a different question
              </button>
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">Response Outcome</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 gap-4">
          {outcome.map(([value, detail, Icon, colour]) => (
            <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-lg font-black ${colour}`}>{value}</div>
              <div className="mt-1 text-xs leading-5 text-zinc-500">{detail}</div>
            </div>
          ))}
        </div>
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
  
  function StatusPill({ label, tone = "cyan" }) {
    const tones = {
      emerald: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
      cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
      violet: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    }
  
    return (
      <div className={`rounded-xl border px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] ${tones[tone]}`}>
        {label}
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