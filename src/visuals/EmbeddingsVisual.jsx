import {
    FileText,
    BrainCircuit,
    MoveRight,
    Database,
    Search,
    Box,
    Gauge,
    CheckCircle2,
    Folder,
    Zap,
    HardDrive,
    Info,
    Layers,
  } from "lucide-react"
  
  const pipeline = [
    ["1. Chunks In", "Text chunks from the chunking layer are received", FileText],
    ["2. Embedding Model", "OpenAI embedding model converts text into dense vectors", BrainCircuit],
    ["3. Vector Generation", "High-dimensional vectors capture semantic meaning", MoveRight],
    ["4. Store in Vector DB", "Vectors and metadata are stored in the vector database", Database],
    ["5. Ready for Retrieval", "Semantic vectors are now available for similarity search", Search],
  ]

  const pipelineColours = [
    "text-violet-300 border-violet-400/25 bg-violet-500/10",
    "text-blue-300 border-blue-400/25 bg-blue-500/10",
    "text-cyan-300 border-cyan-400/25 bg-cyan-500/10",
    "text-yellow-300 border-yellow-400/25 bg-yellow-500/10",
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ]
  
  const config = [
    ["Model", "text-embedding-3-small", "OpenAI Embeddings", BrainCircuit, "text-emerald-300"],
    ["Dimensions", "1536", "Vector Size", Box, "text-violet-300"],
    ["Max Tokens", "8191", "Per chunk", Gauge, "text-blue-300"],
  ]
  
  const dbBenefits = [
    "High performance similarity search",
    "Metadata filtering and indexing",
    "Persistent local storage",
    "Scalable and reproducible",
  ]
  
  const collections = [
    ["payroll_policies", "24,562", "text-violet-300"],
    ["procedures", "18,340", "text-blue-300"],
    ["governance", "12,871", "text-emerald-300"],
    ["templates", "7,203", "text-yellow-300"],
  ]
  
  const quality = [
    ["62,976", "Total Vectors", "embedded this run", CheckCircle2, "text-emerald-300"],
    ["1536", "Vector Dimensions", "per embedding", Box, "text-violet-300"],
    ["98.6%", "Successful", "embedding rate", Gauge, "text-blue-300"],
    ["3.2s", "Average Embedding Time", "per 1K chunks", Zap, "text-yellow-300"],
    ["1.24 GB", "Vector Storage", "used", HardDrive, "text-cyan-300"],
  ]
  
  export default function EmbeddingsVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Embedding Pipeline</SectionTitle>
  
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
  
        <SectionTitle className="mt-6">Embedding Configuration</SectionTitle>
  
        <div className="mt-4 grid grid-cols-3 gap-4">
          {config.map(([label, value, detail, Icon, colour]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-2xl bg-white/[0.04] p-3 ${colour}`}>
                  <Icon className="h-8 w-8" />
                </div>
  
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                    {label}
                  </div>
                  <div className="mt-2 text-xl font-black text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">{detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <SectionTitle className="mt-6">Vector Database</SectionTitle>
  
        <div className="mt-4 grid gap-5 xl:grid-cols-[1.3fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <div className="grid gap-5 xl:grid-cols-[0.8fr_1fr]">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-500/10">
                    <Layers className="h-9 w-9 text-yellow-300" />
                </div>
  
                <div>
                  <div className="text-2xl font-black text-white">ChromaDB</div>
                  <div className="mt-1 text-sm text-zinc-500">Vector Store</div>
                </div>
              </div>
  
              <div className="space-y-3">
                {dbBenefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <div className="grid grid-cols-[1fr_auto] border-b border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              <div>Collections</div>
              <div>Total Vectors</div>
            </div>
  
            {collections.map(([name, vectors, colour]) => (
              <div
                key={name}
                className="grid grid-cols-[1fr_auto] items-center border-b border-white/10 px-4 py-3 text-sm last:border-b-0"
              >
                <div className="flex items-center gap-3 font-semibold text-zinc-300">
                  <Folder className={`h-5 w-5 ${colour}`} />
                  {name}
                </div>
                <div className="text-zinc-300">{vectors}</div>
              </div>
            ))}
  
            <div className="grid grid-cols-[1fr_auto] px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              <div>Total</div>
              <div>62,976</div>
            </div>
          </div>
        </div>
  
        <SectionTitle className="mt-6">Embedding Quality Overview</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 gap-4">
          {quality.map(([value, label, detail, Icon, colour]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
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
              Semantic embeddings enable the system to find meaning, not just keywords — improving retrieval accuracy and grounded response generation.
            </p>
          </div>
        </div>
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