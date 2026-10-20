import {
    Rocket,
    Monitor,
    Box,
    ShieldCheck,
    ShipWheel,
    Database,
    KeyRound,
    Server,
    Network,
    FileText,
    Activity,
    Users,
    BarChart3,
    Settings,
    Lock,
  } from "lucide-react"
  
  const overview = [
    ["Streamlit UI", "Local demo", Monitor, "text-cyan-300"],
    ["FastAPI Service", "Local demo", Box, "text-cyan-300"],
    ["API Authentication", "Configured", ShieldCheck, "text-emerald-300"],
    ["Docker Runtime", "Local", ShipWheel, "text-blue-300"],
    ["ChromaDB", "Local", Database, "text-emerald-300"],
  ]
  
  const flow = [
    ["Streamlit UI", "User interface for interaction, uploads and diagnostics.", Monitor, "border-blue-400/30 bg-blue-500/10"],
    ["FastAPI API Layer", "API endpoints for queries, ingestion and orchestration.", Box, "border-cyan-400/30 bg-cyan-500/10"],
    ["Retrieval & Orchestration", "Query routing, retrieval execution and grounded response generation.", Network, "border-violet-400/30 bg-violet-500/10"],
    ["ChromaDB Vector Store", "Vector collections, document embeddings and metadata.", Database, "border-yellow-400/30 bg-yellow-500/10"],
  ]
  
  const runtime = [
    ["Environment", "Local Deployment", Settings],
    ["Framework", "FastAPI", Box],
    ["Python Version", "3.10", Server],
    ["API Server Host", "0.0.0.0", Monitor],
    ["API Server Port", "8000", ShieldCheck],
    ["Docker Compose", "Local", Network],
    ["Containers", "3 local services", Box],
    ["Network", "rag-network", Network],
    ["Telemetry Logging", "Enabled", Activity],
  ]
  
  const persistence = [
    ["ChromaDB", "Sample", "Collections", "12", "Documents", "3,248", Database, "text-emerald-300"],
    ["Indexed Documents", "Sample", "Total Chunks", "18,732", "Sample sets", "5", FileText, "text-violet-300"],
    ["Telemetry Logs", "Sample", "Total Logs", "24,531", "Storage", "245 MB", Activity, "text-yellow-300"],
  ]
  
  const diagnostics = [
    ["Local Containers", "3", "Demonstration services", Server, "text-cyan-300"],
    ["API Routes Enabled", "5", "/ask, /ingest, /health +2 internal", Monitor, "text-blue-300"],
    ["Sample Collections", "5", "Not commercial clients", Users, "text-cyan-300"],
    ["Vector Collections", "12", "Sample ChromaDB collections", Database, "text-emerald-300"],
    ["Authenticated Endpoints", "5", "Protected by API key", Lock, "text-emerald-300"],
    ["Telemetry", "Sample", "Illustrative request logs", BarChart3, "text-violet-300"],
  ]
  
  export default function DeploymentVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <div className="flex items-center justify-between">
          <SectionTitle>Deployment Overview</SectionTitle>
  
          <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
            Local demo snapshot
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
          Local demonstration. Collection counts are sample data, and the status
          marks are illustrative. This panel does not show commercial clients or
          production service health.
        </p>
  
        <div className="mt-5 grid grid-cols-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {overview.map(([label, status, Icon, colour]) => (
            <div key={label} className="border-r border-white/10 p-5 last:border-r-0">
              <div className="flex items-center gap-4">
                <Icon className={`h-8 w-8 ${colour}`} />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-300">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-black uppercase text-emerald-300">
                    {status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[0.9fr_1fr_0.9fr]">
          <Panel title="Deployment Flow">
            <div className="space-y-4">
              {flow.map(([title, text, Icon, styles], index) => (
                <div key={title}>
                  <div className={`rounded-2xl border p-5 ${styles}`}>
                    <div className="flex gap-4">
                      <Icon className="h-9 w-9 text-cyan-300" />
                      <div>
                        <div className="text-sm font-black uppercase tracking-[0.16em] text-white">
                          {title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
                        <div className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                          ● Local demo
                        </div>
                      </div>
                    </div>
                  </div>
                  {index !== flow.length - 1 && (
                    <div className="mx-auto h-8 w-px bg-cyan-400/60" />
                  )}
                </div>
              ))}
            </div>
          </Panel>
  
          <div className="space-y-5">
            <Panel title="Runtime Configuration">
              <div className="overflow-hidden rounded-xl border border-white/10">
                {runtime.map(([label, value, Icon]) => (
                  <div key={label} className="grid grid-cols-[32px_1fr_auto] items-center gap-3 border-b border-white/10 px-4 py-3 text-sm last:border-b-0">
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <div className="text-zinc-400">{label}</div>
                    <div className="font-semibold text-zinc-200">{value}</div>
                  </div>
                ))}
              </div>
            </Panel>
  
            <Panel title="Persistence Layer">
            <div className="space-y-4">
                {persistence.map(
                    ([title, status, label1, value1, label2, value2, Icon, colour]) => (
                    <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                        <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/40">
                            <Icon className={`h-7 w-7 ${colour}`} />
                        </div>

                        <div className="flex-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.14em] text-white">
                            {title}
                            </div>

                            <div className="mt-1 text-[10px] font-black uppercase text-emerald-300">
                            ● {status}
                            </div>
                        </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                        <div>
                            <div className="text-xs text-zinc-500">{label1}</div>

                            <div className="mt-1 text-2xl font-black text-white">
                            {value1}
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-zinc-500">{label2}</div>

                            <div className="mt-1 text-2xl font-black text-white">
                            {value2}
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                )}
                </div>
            </Panel>
          </div>
  
          <div className="space-y-5">
            <Panel title="Authentication & Security">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
                <div className="flex gap-4">
                  <ShieldCheck className="h-12 w-12 text-emerald-300" />
                  <div>
                    <div className="text-lg font-black text-white">
                      API Key Authentication
                    </div>
                    <p className="mt-2 text-sm text-zinc-300">
                      Configured on protected endpoints in the local demonstration.
                    </p>
                  </div>
                </div>
  
                <div className="mt-5 space-y-3 text-sm">
                  <KeyValue label="Auth Status" value="● Configured locally" good />
                  <KeyValue label="Protected Endpoints" value="5" />
                  <KeyValue label="Unauthorized Requests" value="Illustrative" />
                  <KeyValue label="Last Authenticated" value="Sample" />
                </div>
  
                <div className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-zinc-300">
                  Illustrative security panel
                </div>
              </div>
            </Panel>
  
            <Panel title="Service Architecture">
              <ServiceItem
                icon={Monitor}
                title="Frontend / Backend Separation"
                text="Streamlit frontend communicates with FastAPI backend via REST API."
                colour="text-blue-300"
              />
              <ServiceItem
                icon={Network}
                title="API-Accessible Workflows"
                text="Core workflows exposed via standardised API endpoints."
                colour="text-emerald-300"
              />
              <ServiceItem
                icon={Box}
                title="Containerized Deployment"
                text="Docker Compose orchestrates services for consistent deployment."
                colour="text-violet-300"
              />
            </Panel>
          </div>
        </div>
  
        <SectionTitle className="mt-6">Deployment Diagnostics</SectionTitle>
  
        <div className="mt-4 grid grid-cols-6 gap-4">
          {diagnostics.map(([label, value, detail, Icon, colour]) => (
            <div key={label} className="flex h-[140px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  {label}
                </div>
                <div className="mt-2 text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs leading-5 text-zinc-500">{detail}</div>
              </div>
              <Icon className={`h-7 w-7 ${colour}`} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  function ServiceItem({ icon: Icon, title, text, colour }) {
    return (
      <div className="flex gap-4 border-b border-white/10 py-4 first:pt-0 last:border-b-0 last:pb-0">
        <Icon className={`h-8 w-8 shrink-0 ${colour}`} />
        <div>
          <div className="text-sm font-black text-white">{title}</div>
          <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
        </div>
      </div>
    )
  }
  
  function KeyValue({ label, value, good }) {
    return (
      <div className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0">
        <span className="text-zinc-400">{label}</span>
        <span className={good ? "font-black text-emerald-300" : "font-semibold text-zinc-200"}>
          {value}
        </span>
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