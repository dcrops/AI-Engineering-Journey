import {
    FileText,
    FileType,
    File,
    CheckCircle2,
    AlertTriangle,
    Copy,
    Calendar,
    Upload,
    Database,
    Info,
  } from "lucide-react"
  
  const formats = [
    ["PDF", "PDF Documents", "Portable Document Format", FileText, "text-red-300 border-red-400/25 bg-red-500/10"],
    ["DOCX Files", "DOCX Files", "Microsoft Word Documents", FileType, "text-blue-300 border-blue-400/25 bg-blue-500/10"],
    ["TXT Files", "TXT Files", "Plain Text Documents", File, "text-zinc-300 border-zinc-400/20 bg-zinc-500/10"],
  ]
  
  const metadata = [
    ["File Name", "Original filename", FileText, "text-violet-300"],
    ["File Type", "Document format", File, "text-cyan-300"],
    ["File Size", "Storage size", Database, "text-yellow-300"],
    ["Created Date", "Creation timestamp", Calendar, "text-violet-300"],
    ["Modified Date", "Last modified", Calendar, "text-emerald-300"],
    ["Source", "Upload source", Upload, "text-cyan-300"],
  ]
  
  const summary = [
    ["259", "Total Documents", "Ready for ingestion", FileText, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
    ["259", "Valid Documents", "100%", CheckCircle2, "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
    ["0", "Invalid Documents", "0%", AlertTriangle, "text-yellow-300 border-yellow-400/25 bg-yellow-500/10"],
    ["0", "Duplicates Detected", "0%", Copy, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
  ]
  
  export default function DocumentsVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Document Overview</SectionTitle>
  
        <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.04] p-5">
            <div className="relative min-h-[190px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),rgba(0,0,0,0.8)_65%)]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.08),transparent,rgba(34,211,238,0.08))]" />

                <div className="relative flex h-full min-h-[190px] items-center justify-between gap-8 px-8">
                <DocumentStack />

                <div className="relative flex flex-1 items-center justify-center">
                    <svg className="absolute h-24 w-full" viewBox="0 0 420 120" fill="none">
                    <path
                        d="M10 35 C120 10 170 70 260 42 C320 25 355 42 410 28"
                        stroke="rgba(34,211,238,0.45)"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                    />
                    <path
                        d="M10 80 C120 105 170 45 260 78 C320 98 355 72 410 88"
                        stroke="rgba(139,92,246,0.45)"
                        strokeWidth="2"
                        strokeDasharray="6 8"
                    />
                    </svg>

                    <div className="z-10 text-5xl font-black text-violet-300 drop-shadow-[0_0_22px_rgba(139,92,246,0.9)]">
                    →
                    </div>
                </div>

                <KnowledgeFolder />
                </div>
            </div>
        </div>
  
        <SectionTitle className="mt-6">Supported Formats</SectionTitle>
  
        <div className="mt-4 grid grid-cols-3 gap-4">
          {formats.map(([title, label, description, Icon, styles]) => (
            <div key={title} className={`rounded-2xl border p-5 ${styles}`}>
              <Icon className="h-9 w-9" />
              <div className="mt-4 text-lg font-black text-white">{title}</div>
              <div className="mt-4 text-sm font-semibold text-zinc-200">{label}</div>
              <div className="mt-1 text-sm leading-6 text-zinc-400">{description}</div>
            </div>
          ))}
        </div>
  
        <SectionTitle className="mt-6">Supported Metadata Captured</SectionTitle>
  
        <div className="mt-4 grid grid-cols-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          {metadata.map(([title, description, Icon, colour]) => (
            <div key={title} className="border-r border-white/10 p-4 text-center last:border-r-0">
              <Icon className={`mx-auto h-7 w-7 ${colour}`} />
              <div className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                {title}
              </div>
              <div className="mt-1 text-xs leading-5 text-zinc-500">{description}</div>
            </div>
          ))}
        </div>
  
        <SectionTitle className="mt-6">Document Quality Summary</SectionTitle>
  
        <div className="mt-4 grid grid-cols-4 gap-4">
          {summary.map(([value, label, detail, Icon, styles]) => (
            <div key={label} className={`rounded-2xl border p-5 text-center ${styles}`}>
              <Icon className="mx-auto h-8 w-8" />
              <div className="mt-4 text-4xl font-black">{value}</div>
              <div className="mt-2 text-sm font-black text-white">{label}</div>
              <div className="mt-2 text-sm text-zinc-400">{detail}</div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
          <div className="flex items-center gap-3">
            <Info className="h-7 w-7 text-blue-300" />
            <p className="text-sm leading-6 text-zinc-300">
              These documents form the knowledge foundation that powers all downstream retrieval and generation.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  function DocumentStack() {
    return (
      <div className="relative flex items-center gap-4">
        <MiniDoc label="TXT" tone="zinc" />
        <MiniDoc label="PDF" tone="red" raised />
        <MiniDoc label="DOCX" tone="blue" />
      </div>
    )
  }
  
  function MiniDoc({ label, tone, raised = false }) {
    const tones = {
      zinc: "bg-zinc-200 text-zinc-700 shadow-zinc-500/20",
      red: "bg-red-500 text-white shadow-red-500/40",
      blue: "bg-blue-500 text-white shadow-blue-500/40",
    }
  
    return (
      <div
        className={`relative flex h-24 w-20 items-center justify-center rounded-2xl text-xs font-black shadow-2xl transition-transform duration-300 ${
          tones[tone]
        } ${raised ? "-translate-y-4" : "translate-y-2"}`}
      >
        <div className="absolute right-0 top-0 h-5 w-5 rounded-bl-xl bg-white/30" />
        {label}
      </div>
    )
  }
  
  function KnowledgeFolder() {
    return (
      <div className="relative h-32 w-44">
        <div className="absolute left-8 top-2 h-28 w-32 rounded-2xl border border-cyan-300/25 bg-cyan-500/10" />
        <div className="absolute left-4 top-5 h-28 w-32 rounded-2xl border border-violet-300/25 bg-violet-500/15" />
  
        <div className="absolute left-0 top-8 h-28 w-32 rounded-2xl border border-violet-300/45 bg-black/70 shadow-[0_0_35px_rgba(139,92,246,0.4)]">
          <div className="absolute left-5 top-5 h-3 w-20 rounded-full bg-violet-300/40" />
          <div className="absolute left-5 top-11 h-3 w-16 rounded-full bg-cyan-300/30" />
          <div className="absolute left-5 top-17 h-3 w-24 rounded-full bg-violet-300/25" />
          <div className="absolute left-5 top-23 h-3 w-14 rounded-full bg-cyan-300/20" />
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