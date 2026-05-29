import {
  CalendarDays,
  Map,
  Landmark,
  Home,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Settings,
} from "lucide-react"

const ruleChecks = [
  [
    "National Holiday Source",
    CalendarDays,
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ],
  [
    "State Holiday Applies",
    Map,
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ],
  [
    "LGA Replacement Rule",
    Landmark,
    "text-yellow-300 border-yellow-400/25 bg-yellow-500/10",
  ],
  [
    "Suburb Exception Check",
    Home,
    "text-cyan-300 border-cyan-400/25 bg-cyan-500/10",
  ],
  [
    "Work Location Selected",
    MapPin,
    "text-emerald-300 border-emerald-400/25 bg-emerald-500/10",
  ],
]

export default function EntitlementRuleVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Entitlement Rule Path</SectionTitle>

      <div className="mt-6 space-y-4">
        {ruleChecks.map(([label, Icon, styles]) => {
          const textColour = styles.split(" ")[0]

          return (
            <div key={label} className={`rounded-2xl border p-5 ${styles}`}>
              <div className="flex items-center gap-5">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border ${styles}`}>
                  <Icon className={`h-7 w-7 ${textColour}`} />
                </div>

                <div className="flex-1">
                  <div className={`text-[10px] font-black uppercase tracking-[0.22em] ${textColour}`}>
                    Rule Check
                  </div>

                  <div className="mt-2 text-lg font-black text-white">
                    {label}
                  </div>
                </div>

                <CheckCircle2 className={`h-8 w-8 ${textColour}`} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-5 flex justify-center">
        <div className="h-8 w-px bg-emerald-400/60" />
      </div>

      <div className="rounded-2xl border border-violet-400/25 bg-violet-500/10 p-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_auto]">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-300">
              Final Determination
            </div>

            <div className="mt-4 text-3xl font-black text-white">
              Entitlement rule resolved
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              External holiday data and regional override logic are merged into
              an auditable decision path.
            </p>
          </div>

          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/30 bg-black/40 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
            <ShieldCheck className="h-12 w-12 text-violet-300" />
          </div>
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
    <div className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}>
      {children}
    </div>
  )
}