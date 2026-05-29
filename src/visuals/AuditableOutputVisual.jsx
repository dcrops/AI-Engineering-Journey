import {
  CheckCircle2,
  Target,
  BarChart3,
  CalendarDays,
  Globe2,
  Map,
  FileText,
  ShieldCheck,
  ClipboardList,
} from "lucide-react"

const badges = [
  ["Resolved", CheckCircle2, "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
  ["High Confidence", Target, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
  ["Audit Ready", BarChart3, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
]

const evidence = [
  ["Geocode confidence: 1.00", Globe2, "text-violet-300"],
  ["Matched LGA: Melbourne", Map, "text-cyan-300"],
  ["Holiday source: external calendar", CalendarDays, "text-emerald-300"],
  ["Regional override CSV checked", FileText, "text-yellow-300"],
]

export default function AuditableOutputVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <div className="flex flex-wrap gap-3">
        {badges.map(([label, Icon, styles]) => {
          const textColour = styles.split(" ")[0]

          return (
            <div
              key={label}
              className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 ${styles}`}
            >
              <Icon className={`h-5 w-5 ${textColour}`} />

              <span className={`text-[10px] font-black uppercase tracking-[0.18em] ${textColour}`}>
                {label}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-violet-400/25 bg-violet-500/10 p-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_auto]">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-300">
              Public Holiday Result
            </div>

            <div className="mt-4 text-4xl font-black leading-tight text-white">
              4 applicable holidays found
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-300">
              Based on resolved location, regional boundary match and entitlement rule evaluation.
            </p>
          </div>

          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/30 bg-black/40 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
            <CalendarDays className="h-12 w-12 text-violet-300" />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-violet-400/25 bg-violet-500/10 p-6">
        <SectionTitle className="text-violet-300">Evidence Trail</SectionTitle>

        <div className="mt-5 space-y-3">
          {evidence.map(([label, Icon, colour]) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 px-4 py-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <Icon className={`h-5 w-5 ${colour}`} />
              </div>

              <div className="text-sm text-zinc-300">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BottomPill({ icon, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-center gap-3">
        {icon}

        <div className="text-[10px] font-black uppercase tracking-[0.25em] text-white">
          {label}
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