import {
    Upload,
    FileCheck2,
    FileText,
    BarChart3,
    Database,
    Copy,
    CheckCircle2,
    AlertTriangle,
    HardDrive,
    TableProperties,
    Tag,
    Grid2X2,
    ShieldCheck,
    Folder,
    Info,
  } from "lucide-react"
  
  const pipeline = [
    ["1. Upload", "Documents are uploaded to the system", Upload],
    ["2. Validate", "File type, size and basic structure validated", FileCheck2],
    ["3. Extract Metadata", "Metadata, properties and document details extracted", FileText],
    ["4. Readiness Checks", "Quality and integrity diagnostics performed", BarChart3],
    ["5. Collection Ready", "Document added to client collection for downstream use", Database],
  ]

  const pipelineColours = [
    "text-violet-300 border-violet-400/25 bg-violet-500/10",
    "text-blue-300 border-blue-400/25 bg-blue-500/10",
    "text-cyan-300 border-cyan-400/25 bg-cyan-500/10",
    "text-yellow-300 border-yellow-400/25 bg-yellow-500/10",
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ]
  
  const overview = [
    ["248", "Documents Ingested", "this run", Copy, "text-violet-300"],
    ["232", "Documents Valid", "93.5% of total", CheckCircle2, "text-blue-300"],
    ["12", "Issues Detected", "requires attention", AlertTriangle, "text-yellow-300"],
    ["18.4 MB", "Processed Size", "total data ingested", Database, "text-emerald-300"],
  ]
  
  const diagnostics = [
    ["File Type Check", "allowed formats only (TXT, PDF, DOCX)", FileText],
    ["File Size Check", "within size limits", HardDrive],
    ["Content Extracted", "text extracted successfully", TableProperties],
    ["Metadata Extracted", "required metadata fields present", Tag],
    ["Structure Quality", "document structure is valid", Grid2X2],
    ["Virus / Malware Scan", "no threats detected", ShieldCheck],
  ]
  
  const collections = [
    ["Payroll Policies", "86", "6.2 MB", "text-violet-300"],
    ["Procedures", "74", "5.1 MB", "text-blue-300"],
    ["Governance", "52", "3.4 MB", "text-emerald-300"],
    ["Templates", "36", "2.1 MB", "text-yellow-300"],
  ]
  
  export default function RagIngestionVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Ingestion Pipeline</SectionTitle>
  
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
  
                <div className={`mt-4 text-[10px] font-black uppercase tracking-[0.22em] ${textColour}`}>
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
  
        <SectionTitle className="mt-6">Ingestion Overview</SectionTitle>
  
        <div className="mt-4 grid grid-cols-4 gap-4">
          {overview.map(([value, label, detail, Icon, colour]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <Icon className={`h-7 w-7 ${colour}`} />
              <div className={`mt-3 text-2xl font-black ${colour}`}>
                {value}
              </div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                {label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{detail}</div>
            </div>
          ))}
        </div>
  
        <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Readiness Diagnostics</SectionTitle>
  
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              {diagnostics.map(([label, description, Icon]) => (
                <div
                  key={label}
                  className="grid grid-cols-[36px_1fr_auto] items-center gap-4 border-b border-white/10 px-4 py-3 last:border-b-0"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
                    <Icon className="h-4 w-4 text-cyan-300" />
                  </div>
  
                  <div>
                    <div className="text-sm font-semibold text-zinc-200">
                      {label}
                    </div>
                    <div className="text-xs text-zinc-500">{description}</div>
                  </div>
  
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                    Pass
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <SectionTitle>Client Collections</SectionTitle>
  
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr] border-b border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                <div>Collection</div>
                <div>Documents</div>
                <div>Size</div>
              </div>
  
              {collections.map(([name, docs, size, colour]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1.4fr_0.7fr_0.7fr] items-center border-b border-white/10 px-4 py-4 text-sm last:border-b-0"
                >
                  <div className="flex items-center gap-3 font-semibold text-zinc-200">
                    <Folder className={`h-5 w-5 ${colour}`} />
                    {name}
                  </div>
                  <div className="text-zinc-300">{docs}</div>
                  <div className="text-zinc-300">{size}</div>
                </div>
              ))}
            </div>
  
            <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.06] p-5">
              <div className="flex gap-3">
                <Info className="mt-1 h-6 w-6 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-zinc-300">
                  Documents are organised into client-scoped collections for secure access,
                  governance and downstream retrieval.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-5">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="h-9 w-9 text-cyan-300" />
  
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">
                Ingestion Status
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                Documents are validated and ready for chunking and embedding.
              </p>
            </div>
          </div>
  
          <div className="rounded-full border border-emerald-400/20 bg-emerald-500/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-200">
            ● Ready
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