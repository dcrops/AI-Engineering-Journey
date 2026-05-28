import {
    MessageSquare,
    Wand2,
    Filter,
    Search,
    CheckCircle2,
    FileText,
    Info,
    Layers,
    Target,
    Files,
    Clock3,
    BrainCircuit,
  } from "lucide-react"
  
  const pipeline = [
    ["1. User Query", "User asks a question in natural language", MessageSquare],
    ["2. Query Rewriting", "Rewrite and expand query for better retrieval", Wand2],
    ["3. Metadata Filtering", "Apply filters like client, document type and tags", Filter],
    ["4. Vector Retrieval", "Search vector database for similar chunks", Search],
    ["5. Pruning & Selection", "Rank, prune and select strongest evidence", CheckCircle2],
    ["6. Context Assembly", "Assemble context window for response generation", FileText],
  ]
  
  const strategies = [
    ["Standard Retrieval", "Best for factual and policy lookup queries", "ACTIVE"],
    ["Multi-Query Retrieval", "Best for broad or ambiguous queries", null],
    ["Document-Balanced Retrieval", "Best for coverage across multiple documents", null],
    ["Contextual Compression Retrieval", "Best for long or verbose documents", null],
  ]
  
  const filters = [
    ["Client", "University X"],
    ["Document Type", "Policy, Procedure"],
    ["Department", "Human Resources"],
    ["Date Range", "2022 - Present"],
    ["Tags", "Promotion, Appeals"],
  ]
  
  const results = [
    ["Academic Promotion Policy.pdf", "chunk_06 — Appeals Committee", "0.86", "SELECTED"],
    ["Academic Promotion Policy.pdf", "chunk_02 — Eligibility Criteria", "0.81", "SELECTED"],
    ["HR Procedures Manual.pdf", "chunk_11 — Appeals Process", "0.72", "SELECTED"],
    ["Academic Board Regulations.docx", "chunk_04 — Governance", "0.63", "FILTERED"],
    ["Employee Code of Conduct.pdf", "chunk_01 — General Conduct", "0.48", "PRUNED"],
  ]
  
  const context = [
    ["Academic Promotion Policy.pdf", "chunk_06 — Appeals Committee", "Score: 0.86"],
    ["Academic Promotion Policy.pdf", "chunk_02 — Eligibility Criteria", "Score: 0.81"],
    ["HR Procedures Manual.pdf", "chunk_11 — Appeals Process", "Score: 0.72"],
  ]
  
  const metrics = [
    ["8", "Chunks Selected", "out of 20 retrieved", Files, "text-violet-300"],
    ["0.82", "Avg. Relevance Score", "selected chunks", Target, "text-blue-300"],
    ["3", "Unique Documents", "represented", FileText, "text-emerald-300"],
    ["60%", "Retrieval Pruning", "12 removed", Filter, "text-yellow-300"],
    ["312ms", "Retrieval Latency", "end-to-end", Clock3, "text-cyan-300"],
    ["Standard", "Strategy Used", "adaptive", BrainCircuit, "text-violet-300"],
  ]
  
  export default function RetrievalVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Retrieval Pipeline</SectionTitle>
  
        <div className="mt-6 grid grid-cols-6 gap-4">
          {pipeline.map(([title, description, Icon], index) => (
            <div key={title} className="relative">
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
  
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
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
              Adaptive retrieval strategy is selected based on query type, intent and collection characteristics.
            </p>
          </div>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_0.8fr_1.4fr]">
          <Panel title="Retrieval Strategy">
            <div className="space-y-3">
              {strategies.map(([title, description, status]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-bold text-zinc-200">{title}</div>
                    {status && (
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-300">
                        {status}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">{description}</div>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Filters Applied">
            <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
              {filters.map(([label, value]) => (
                <div key={label} className="px-4 py-3">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                    {label}
                  </div>
                  <div className="mt-1 text-sm text-zinc-300">{value}</div>
                </div>
              ))}
            </div>
          </Panel>
  
          <Panel title="Retrieval Results">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="grid grid-cols-[1.5fr_0.5fr_0.7fr] border-b border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                <div>Document</div>
                <div>Score</div>
                <div>Status</div>
              </div>
  
              {results.map(([doc, chunk, score, status]) => (
                <div
                  key={`${doc}-${chunk}`}
                  className="grid grid-cols-[1.5fr_0.5fr_0.7fr] items-center border-b border-white/10 px-4 py-3 text-xs last:border-b-0"
                >
                  <div>
                    <div className="font-semibold text-zinc-200">{doc}</div>
                    <div className="mt-1 text-zinc-500">{chunk}</div>
                  </div>
                  <div className="text-zinc-300">{score}</div>
                  <div>
                    <span
                      className={`rounded-full border px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em] ${
                        status === "SELECTED"
                          ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                          : status === "FILTERED"
                            ? "border-yellow-400/20 bg-yellow-500/10 text-yellow-300"
                            : "border-zinc-400/20 bg-zinc-500/10 text-zinc-400"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
          <Panel title="Context Window Final">
            <div className="grid gap-4 xl:grid-cols-[120px_1fr]">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-center">
                <Layers className="mx-auto h-8 w-8 text-cyan-300" />
                <div className="mt-3 text-3xl font-black text-white">8</div>
                <div className="text-xs text-zinc-400">chunks selected</div>
              </div>
  
              <div className="space-y-2">
                {context.map(([doc, chunk, score]) => (
                  <div
                    key={`${doc}-${chunk}`}
                    className="grid grid-cols-[1fr_auto] rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs"
                  >
                    <div className="text-zinc-300">
                      <span className="font-semibold text-zinc-200">{doc}</span>
                      <span className="mx-2 text-zinc-600">›</span>
                      {chunk}
                    </div>
                    <div className="text-emerald-300">{score}</div>
                  </div>
                ))}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-zinc-500">
                  + 5 more chunks
                </div>
              </div>
            </div>
          </Panel>
  
          <Panel title="Retrieval Outcome">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <Target className="h-9 w-9 text-emerald-300" />
              <div className="mt-4 text-lg font-black text-white">
                High Quality Retrieval
              </div>
              <div className="mt-2 inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300">
                Confidence: High
              </div>
  
              <div className="mt-5 space-y-3">
                {[
                  "Sufficient relevant evidence found",
                  "Diverse document coverage",
                  "Strong semantic relevance",
                  "Ready for response generation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">Retrieval Quality Overview</SectionTitle>
  
        <div className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1.35fr]">
          {metrics.map(([value, label, detail, Icon, colour]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Icon className={`h-6 w-6 ${colour}`} />
              <div
                className={`mt-3 break-words text-lg font-black leading-tight ${colour}`}
                >
                {value}
                </div>
              <div className="mt-1 text-[9px] font-black uppercase tracking-[0.12em] text-white">
                {label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{detail}</div>
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
  
  function SectionTitle({ children, className = "" }) {
    return (
      <div
        className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}
      >
        {children}
      </div>
    )
  }