import {
    ShieldCheck,
    Lock,
    Code2,
    Cloud,
    Activity,
    Monitor,
    GitBranch,
    Settings,
    CheckCircle2,
    Info,
    Box,
    Puzzle,
    AlertCircle,
    Link,
    Database,
    FileText,
    Layers,
    Server,
    Target,
  } from "lucide-react"
  
  const status = [
    ["Layer Status", "Active", ShieldCheck, "text-emerald-300"],
    ["Authentication", "Enabled", Lock, "text-emerald-300"],
    ["API Endpoints", "3 Active", Code2, "text-cyan-300"],
    ["Service Health", "Healthy", Cloud, "text-violet-300"],
    ["Telemetry Logging", "Enabled", Activity, "text-yellow-300"],
  ]
  
  const requestFlow = [
    ["1. Client Request", "Streamlit UI\nAPI Client / Tools", Monitor, "border-blue-400/30 bg-blue-500/10 text-blue-300"],
    ["2. Authentication", "API-Key validation and request authorization", Lock, "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"],
    ["3. Routing", "FastAPI routes incoming requests to handlers", GitBranch, "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"],
    ["4. Orchestration", "Execute retrieval, orchestration and response generation", Settings, "border-violet-400/30 bg-violet-500/10 text-violet-300"],
    ["5. Response", "Return JSON response with data, sources and status", CheckCircle2, "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"],
  ]
  
  const endpoints = [
    ["/ask", "POST", "Submit a question and run retrieval + generation workflow", "Yes", "Active"],
    ["/health", "GET", "Check API and service health status", "No", "Active"],
    ["/version", "GET", "Return API version and build info", "No", "Active"],
  ]
  
  const security = [
    ["API-Key Authentication", "All protected endpoints require a valid API key.", Lock, "text-emerald-300"],
    ["Request Validation", "Input validation and error handling for all requests.", ShieldCheck, "text-cyan-300"],
    ["Secure Headers", "Security headers added to all responses.", ShieldCheck, "text-violet-300"],
    ["Structured Error Handling", "Consistent error responses and logging.", AlertCircle, "text-yellow-300"],
  ]
  
  const components = [
    ["FastAPI Framework", "High-performance async Python framework.", Server, "text-blue-300"],
    ["Pydantic Models", "Request/response validation and serialization.", Box, "text-cyan-300"],
    ["Modular Services", "Retrieval, orchestration and generation are reusable services.", Puzzle, "text-violet-300"],
    ["Exception Handling", "Graceful error handling and logging.", AlertCircle, "text-yellow-300"],
  ]
  
  const integration = [
    ["Streamlit Frontend", "Primary UI connected to /ask endpoint.", Link, "text-cyan-300"],
    ["External Clients", "Any REST client can integrate with the API.", Link, "text-cyan-300"],
    ["Vector Store", "Retrieval layer for indexed documents.", Database, "text-emerald-300"],
  ]
  
  const persistence = [
    ["ChromaDB", "Vector embeddings and collections.", Database, "text-emerald-300"],
    ["Indexed Documents", "Stored source files and chunks.", FileText, "text-violet-300"],
    ["Telemetry Logs", "Request/response logs for diagnostics.", Activity, "text-yellow-300"],
  ]
  
  const snapshot = [
    ["Active Endpoints", "3", "/ask, /health, /version", Monitor, "text-cyan-300"],
    ["Authentication", "Enabled", "API-Key Protected", Lock, "text-emerald-300"],
    ["Frontend Link", "Connected", "Streamlit → FastAPI", GitBranch, "text-violet-300"],
    ["Backend Status", "Online", "FastAPI Running", Settings, "text-yellow-300"],
    ["Telemetry Logging", "Enabled", "JSONL Logging", Activity, "text-cyan-300"],
    ["Orchestration Layer", "Active", "RAG Workflows", Cloud, "text-violet-300"],
    ["Vector Store", "Connected", "ChromaDB", Database, "text-emerald-300"],
  ]
  
  export default function ApiArchitectureVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <div className="grid grid-cols-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {status.map(([label, value, Icon, colour]) => (
            <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
              <div className="flex items-center gap-3">
                <Icon className={`h-8 w-8 ${colour}`} />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                    {label}
                  </div>
                  <div className={`mt-2 text-sm font-black uppercase ${colour}`}>
                    ● {value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <Panel title="API Request Flow" className="mt-5">
          <p className="text-sm text-zinc-400">From client request to JSON response.</p>
  
          <div className="mt-6 grid gap-4 xl:grid-cols-5">
            {requestFlow.map(([title, text, Icon, styles], index) => (
              <div key={title} className="relative">
                <div className={`h-full rounded-2xl border p-5 ${styles}`}>
                  <Icon className="h-8 w-8" />
                  <div className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-white">
                    {title}
                  </div>
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-zinc-300">
                    {text}
                  </p>
                </div>
  
                {index !== requestFlow.length - 1 && (
                  <div className="absolute left-full top-1/2 hidden h-px w-4 bg-cyan-400/60 xl:block" />
                )}
              </div>
            ))}
          </div>
        </Panel>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <Panel title="API Endpoints">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="grid grid-cols-[0.7fr_0.55fr_1.8fr_0.75fr_0.6fr] border-b border-white/10 px-4 py-3 text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500">
                <div>Endpoint</div>
                <div>Method</div>
                <div>Description</div>
                <div>Auth Required</div>
                <div>Status</div>
              </div>
  
              {endpoints.map(([endpoint, method, description, auth, status]) => (
                <div
                  key={endpoint}
                  className="grid grid-cols-[0.7fr_0.55fr_1.8fr_0.75fr_0.6fr] border-b border-white/10 px-4 py-3 text-xs text-zinc-300 last:border-b-0"
                >
                  <div className="font-black text-cyan-300">{endpoint}</div>
                  <div>{method}</div>
                  <div>{description}</div>
                  <div>{auth}</div>
                  <div className="font-black text-emerald-300">● {status}</div>
                </div>
              ))}
            </div>
  
            <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-zinc-300">
              <Info className="mr-2 inline h-4 w-4 text-blue-300" />
              All requests and responses are in JSON format.
            </div>
          </Panel>
  
          <Panel title="Authentication & Security">
            <Stack items={security} />
          </Panel>
  
          <Panel title="Service Layer Components">
            <Stack items={components} />
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-2">
            <Panel title="Deployment & Runtime">
                <div className="space-y-3 text-sm">
                {["Frontend (Streamlit)", "Backend (FastAPI)", "ChromaDB", "Telemetry Logger"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-zinc-300">{item}</span>
                    <span className="font-black text-emerald-300">Running</span>
                    </div>
                ))}
                </div>
            </Panel>

            <Panel title="Integration & Storage">
                <div className="grid gap-4 xl:grid-cols-2">
                <Stack items={integration} />
                <Stack items={persistence} />
                </div>
            </Panel>
            </div>

            <Panel title="API Diagnostics Snapshot" className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {snapshot.map(([label, value, detail, Icon, colour]) => (
                <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                    <Icon className={`h-6 w-6 ${colour}`} />

                    <div className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                    {label}
                    </div>

                    <div className="mt-2 text-xl font-black text-white">
                    {value}
                    </div>

                    <div className="mt-1 text-xs leading-5 text-zinc-500">
                    {detail}
                    </div>
                </div>
                ))}
            </div>
            </Panel>

            <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
            <Target className="h-9 w-9 text-cyan-300" />

            <div className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Impact Summary
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
                The API architecture separates backend orchestration from frontend interaction,
                enabling secure, deployable and integrable RAG workflows.
            </p>
            </div>
        </div>
    )
  }
  
  function Stack({ items }) {
    return (
      <div className="space-y-4">
        {items.map(([title, text, Icon, colour]) => (
          <div key={title} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
            <Icon className={`mt-1 h-7 w-7 shrink-0 ${colour}`} />
            <div>
              <div className="text-sm font-black text-white">{title}</div>
              <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
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