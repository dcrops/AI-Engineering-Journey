import {
  MapPin,
  Crosshair,
  Map,
  Route,
  CheckCircle2,
  Database,
  Zap,
  Info,
} from "lucide-react"

const pipeline = [
  [
    "1. Geocode",
    "Convert address into geographic coordinates",
    MapPin,
    "text-violet-300 border-violet-400/25 bg-violet-500/10",
  ],
  [
    "2. Validate",
    "Validate accuracy and confidence of coordinates",
    Crosshair,
    "text-blue-300 border-blue-400/25 bg-blue-500/10",
  ],
  [
    "3. Map",
    "Map coordinates to reference datasets",
    Map,
    "text-cyan-300 border-cyan-400/25 bg-cyan-500/10",
  ],
  [
    "4. Prepare",
    "Prepare validated coordinates for downstream regional matching",
    Route,
    "text-yellow-300 border-yellow-400/25 bg-yellow-500/10",
  ],
  [
    "5. Output",
    "Provide validated geographic output",
    CheckCircle2,
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ],
]

const statusChecks = [
  "Address matched successfully",
  "Coordinates within expected range",
  "Reference data validated",
  "Ready for regional matching",
]

const geocodeFlow = [
  ["Address Input", MapPin, "text-violet-300"],
  ["Geocoder API", Database, "text-violet-300"],
  ["Coordinates Returned", CheckCircle2, "text-violet-300"],
]

const cacheFlow = [
  ["Check Cache", Database, "text-blue-300"],
  ["Cache Hit", Zap, "text-blue-300"],
  ["Return Result", CheckCircle2, "text-blue-300"],
]

const metrics = [
  ["98.7%", "Match Rate"],
  ["24ms", "Avg. Resolution Time"],
  ["1.3%", "Manual Review"],
]

export default function GeographicResolutionVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Resolution Pipeline</SectionTitle>

      <div className="mt-6 grid grid-cols-5 gap-4">
        {pipeline.map(([title, description, Icon, styles], index) => {
          const textColour = styles.split(" ")[0]

          return (
            <div key={title} className="relative">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${styles}`}
                >
                  <Icon className={`h-6 w-6 ${textColour}`} />
                </div>

                <div className={`mt-4 text-[10px] font-black uppercase tracking-[0.18em] ${textColour}`}>
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

      <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Panel title="Address Input">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-violet-300" />
              <div className="text-xl font-black text-white">
                123 Collins St, Melbourne VIC
              </div>
            </div>
          </div>

          <div className="my-5 flex justify-center text-cyan-300">↓</div>

          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Latitude" value="-37.81" colour="text-blue-300" />
            <MetricCard label="Longitude" value="144.96" colour="text-blue-300" />
          </div>
        </Panel>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="h-12 w-12 text-emerald-300" />

            <div>
              <div className="text-xl font-black text-white">
                High confidence geographic match
              </div>

              <div className="mt-1 text-sm text-emerald-300">
                Resolution Status
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {statusChecks.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <FlowPanel title="Geocode Flow" items={geocodeFlow} />
        <FlowPanel title="Cache Layer" items={cacheFlow} />
      </div>

      <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
        <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
          <div className="flex gap-4">
            <Info className="mt-1 h-8 w-8 shrink-0 text-blue-300" />

            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
                System Impact
              </div>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Reliable geographic resolution enables downstream state, LGA and replacement holiday rule matching.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {metrics.map(([value, label]) => (
              <div key={label} className="border-l border-white/10 pl-4">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FlowPanel({ title, items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
      <SectionTitle>{title}</SectionTitle>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {items.map(([label, Icon, colour], index) => (
          <div key={label} className="relative text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <Icon className={`h-6 w-6 ${colour}`} />
            </div>

            <div className="mt-3 text-xs leading-5 text-zinc-300">
              {label}
            </div>

            {index !== items.length - 1 && (
              <div className="absolute left-full top-7 hidden h-px w-4 bg-cyan-400/60 xl:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricCard({ label, value, colour }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </div>

      <div className={`mt-3 text-3xl font-black ${colour}`}>
        {value}
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
    <div className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}>
      {children}
    </div>
  )
}