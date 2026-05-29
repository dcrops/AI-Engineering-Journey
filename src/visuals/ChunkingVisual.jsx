import {
    FileText,
    ScanSearch,
    Scissors,
    ListChecks,
    Database,
    Type,
    Braces,
    File,
    Heading,
    ArrowRight,
    Layers,
    CheckCircle2,
    Repeat,
    Wand2,
    Gauge,
    Info,
  } from "lucide-react"
  
  const pipeline = [
    ["1. Input Document", "Validated documents from ingestion layer", FileText],
    ["2. Analyse Structure", "Detect headings, delimiters, pages and content patterns", ScanSearch],
    ["3. Apply Chunking Strategy", "Split text into meaningful and coherent chunks", Scissors],
    ["4. Enrich Chunks", "Add metadata, position and context information", ListChecks],
    ["5. Ready for Embedding", "High quality chunks for embedding layer", Database],
  ]
  
  const pipelineColours = [
    "text-violet-300 border-violet-400/25 bg-violet-500/10",
    "text-blue-300 border-blue-400/25 bg-blue-500/10",
    "text-cyan-300 border-cyan-400/25 bg-cyan-500/10",
    "text-yellow-300 border-yellow-400/25 bg-yellow-500/10",
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ]

  const strategies = [
    ["Character Chunking", "Splits text based on a fixed character limit with optional overlap.", "Best for: Unstructured text with no clear boundaries.", Type, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
    ["Delimiter Chunking", "Splits text using natural delimiters such as new lines or symbols.", "Best for: Lists, tables and delimiter-rich content.", Braces, "text-blue-300 border-blue-400/25 bg-blue-500/10"],
    ["Page Chunking", "Splits text based on page boundaries from source files.", "Best for: PDFs and documents where page context matters.", File, "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    ["Heading-Aware Chunking", "Splits text using headings to preserve section-level context.", "Best for: Structured documents with clear section hierarchy.", Heading, "text-yellow-300 border-yellow-400/25 bg-yellow-500/10"],
  ]
  
  const chunks = [
    ["Chunk 1", "1. Payroll Policy", "border-yellow-400/30 bg-yellow-500/10"],
    ["Chunk 2", "1.1 Employee Eligibility\nAll full-time employees are eligible for payroll...", "border-emerald-400/30 bg-emerald-500/10"],
    ["Chunk 3", "1.2 Pay Schedule\nEmployees are paid on a fortnightly basis...", "border-violet-400/30 bg-violet-500/10"],
    ["Chunk 4", "1.3 Overtime\nOvertime is calculated at 1.5x the regular rate...", "border-cyan-400/30 bg-cyan-500/10"],
  ]
  
  const metadata = [
    "Source Document",
    "Page Number",
    "Chunk Index",
    "Section / Heading",
    "Token Count",
    "Start / End Offset",
  ]
  
  const quality = [
    ["1,842", "Total Chunks Created", "this run", Layers, "text-blue-300"],
    ["98.2%", "Coherent Chunks", "high quality splits", CheckCircle2, "text-emerald-300"],
    ["12.3%", "Average Overlap", "between chunks", Repeat, "text-yellow-300"],
    ["412", "Avg. Tokens / Chunk", "optimal range", Wand2, "text-violet-300"],
    ["0", "Chunks Too Small", "below threshold", Gauge, "text-cyan-300"],
  ]
  
  export default function ChunkingVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Chunking Pipeline</SectionTitle>
  
        <div className="mt-6 grid grid-cols-5 gap-4">
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
  
        <SectionTitle className="mt-6">Chunking Strategies</SectionTitle>
  
        <div className="mt-4 grid grid-cols-4 gap-4">
          {strategies.map(([title, description, bestFor, Icon, styles]) => (
            <div key={title} className={`rounded-2xl border p-5 ${styles}`}>
              <Icon className="h-7 w-7" />
              <div className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-white">
                {title}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                {description}
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {bestFor}
              </p>
            </div>
          ))}
        </div>
  
        <SectionTitle className="mt-6">Chunking Example</SectionTitle>
  
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 p-5">
          <div className="grid gap-5 xl:grid-cols-[1fr_auto_1.15fr_0.7fr]">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                Original Document
              </div>
  
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-mono text-xs leading-6 text-zinc-400">
                <div className="text-cyan-300">1. Payroll Policy</div>
                <div>1.1 Employee Eligibility</div>
                <div>All full-time employees are eligible for payroll.</div>
                <div>Part-time employees must meet the minimum hours requirement.</div>
                <br />
                <div>1.2 Pay Schedule</div>
                <div>Employees are paid on a fortnightly basis...</div>
                <br />
                <div>1.3 Overtime</div>
                <div>Overtime is calculated at 1.5x the regular rate...</div>
              </div>
            </div>
  
            <div className="hidden items-center xl:flex">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10">
                <ArrowRight className="h-6 w-6 text-cyan-300" />
              </div>
            </div>
  
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                Chunked Output
              </div>
  
              <div className="mt-4 space-y-3">
                {chunks.map(([label, text, styles]) => (
                  <div key={label} className={`rounded-xl border p-3 ${styles}`}>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                      {label}
                    </div>
                    <div className="mt-1 whitespace-pre-line font-mono text-xs leading-5 text-zinc-300">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <div className="text-sm font-semibold text-zinc-300">
                Metadata added to each chunk
              </div>
  
              <div className="mt-4 space-y-3">
                {metadata.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        <SectionTitle className="mt-6">Chunking Quality Overview</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 gap-4">
          {quality.map(([value, label, detail, Icon, colour]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <Icon className={`h-6 w-6 ${colour}`} />
              <div className={`mt-3 text-2xl font-black ${colour}`}>
                {value}
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                {label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{detail}</div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-300" />
            <p className="text-sm text-zinc-300">
              Well-chunked content leads to better retrieval precision, stronger grounding and higher quality responses.
            </p>
          </div>
        </div>
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