import {
  MapPin,
  Hexagon,
  Landmark,
  CheckCircle2,
  Map,
  GitBranch,
  BrainCircuit,
  Layers,
} from "lucide-react"

const jurisdiction = [
  ["State", "VIC", Map, "text-cyan-300"],
  ["Boundary", "LGA", Landmark, "text-violet-300"],
  ["Rule Path", "Regional", GitBranch, "text-yellow-300"],
]

const process = [
  ["1. Input", "Validated coordinates", MapPin, "text-violet-300 border-violet-400/25 bg-violet-500/10"],
  ["2. Boundary Match", "Evaluate point-in-polygon match", Hexagon, "text-blue-300 border-blue-400/25 bg-blue-500/10"],
  ["3. Jurisdiction", "Determine state and LGA context", Landmark, "text-cyan-300 border-cyan-400/25 bg-cyan-500/10"],
  ["4. Rule Path", "Select regional entitlement pathway", GitBranch, "text-yellow-300 border-yellow-400/25 bg-yellow-500/10"],
  ["5. Matched Region", "Return matched jurisdiction", CheckCircle2, "text-emerald-300 border-emerald-400/25 bg-emerald-500/10"],
]

export default function LgaRegionVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Regional Matching Visualisation</SectionTitle>

      <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.03] p-5">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          <div className="relative h-[300px] overflow-hidden">
            {/* SVG map-style boundary layer */}
            <svg
              className="absolute inset-0 h-full w-full opacity-60"
              viewBox="0 0 900 300"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M40 180 C120 120, 190 160, 260 95 C340 30, 430 120, 520 70 C620 15, 690 95, 850 55" stroke="rgba(34,211,238,0.22)" />
              <path d="M30 230 C130 210, 180 250, 300 200 C430 140, 530 230, 690 160 C770 125, 820 140, 880 115" stroke="rgba(34,211,238,0.18)" />
              <path d="M180 0 C210 85, 200 160, 170 300" stroke="rgba(139,92,246,0.18)" />
              <path d="M420 0 C450 95, 450 190, 475 300" stroke="rgba(34,211,238,0.16)" />
              <path d="M640 0 C610 80, 630 200, 600 300" stroke="rgba(139,92,246,0.16)" />
              <path d="M0 120 L900 75" stroke="rgba(34,211,238,0.12)" />
              <path d="M0 260 L900 210" stroke="rgba(139,92,246,0.12)" />
            </svg>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_50%,rgba(34,211,238,0.24),transparent_34%)]" />

            {/* boundaries */}
            <div className="absolute left-[7%] top-[20%] h-[170px] w-[58%] rounded-[50%] border border-cyan-400/80 bg-cyan-500/5 shadow-[0_0_40px_rgba(34,211,238,0.16)]" />
            <div className="absolute left-[24%] top-[31%] h-[130px] w-[42%] rounded-[50%] border border-violet-400/80 bg-violet-500/5 shadow-[0_0_40px_rgba(139,92,246,0.16)]" />

            {/* coordinate point */}
            <div className="absolute left-[48%] top-[49%] h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(103,232,249,1)]" />
          </div>
        </div>

        {/* moved below map so it no longer covers the graphic */}
        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.48fr]">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
            <div className="flex items-center gap-4">
              <Hexagon className="h-8 w-8 shrink-0 text-violet-300" />
              <p className="text-sm leading-6 text-zinc-300">
                Coordinate point matched against geographic boundary data to determine
                jurisdiction-specific entitlement logic.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-black/70 p-5">
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
              Matched Region
            </div>

            <div className="mt-3 text-2xl font-black leading-tight text-white">
              Melbourne LGA
            </div>

            <div className="mt-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
              High Confidence Match
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 p-5">
          <div className="flex items-center gap-4">
            <Hexagon className="h-8 w-8 shrink-0 text-violet-300" />
            <p className="text-sm leading-6 text-zinc-300">
              Coordinate point matched against geographic boundary data to determine jurisdiction-specific entitlement logic.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {jurisdiction.map(([label, value, Icon, colour]) => (
          <InfoCard key={label} Icon={Icon} label={label} value={value} colour={colour} />
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <SectionTitle>Matching Process Flow</SectionTitle>

        <div className="mt-5 grid grid-cols-5 gap-4">
          {process.map(([title, text, Icon, styles], index) => {
            const textColour = styles.split(" ")[0]

            return (
              <div key={title} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${styles}`}>
                    <Icon className={`h-6 w-6 ${textColour}`} />
                  </div>

                  <div className={`mt-4 text-[10px] font-black uppercase tracking-[0.16em] ${textColour}`}>
                    {title}
                  </div>

                  <p className="mt-2 text-xs leading-5 text-zinc-400">{text}</p>
                </div>

                {index !== process.length - 1 && (
                  <div className="absolute left-full top-7 hidden h-px w-4 bg-cyan-400/60 xl:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        <BottomCard
          Icon={BrainCircuit}
          title="Jurisdiction Logic"
          colour="text-violet-300"
          border="border-violet-400/20"
          bg="bg-violet-500/10"
        >
          Applies state, LGA and locality-specific logic to route the address toward the correct public holiday entitlement pathway.
        </BottomCard>

        <BottomCard
          Icon={Layers}
          title="Regional Intelligence"
          colour="text-cyan-300"
          border="border-cyan-400/20"
          bg="bg-cyan-500/10"
        >
          Boundary-aware matching improves accuracy over postcode-only approaches and supports clearer entitlement reasoning.
        </BottomCard>
      </div>
    </div>
  )
}

function InfoCard({ Icon, label, value, colour }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-4">
        <Icon className={`h-8 w-8 ${colour}`} />
        <div>
          <div className={`text-[10px] font-black uppercase tracking-[0.22em] ${colour}`}>
            {label}
          </div>
          <div className="mt-2 text-3xl font-black text-white">{value}</div>
        </div>
      </div>
    </div>
  )
}

function BottomCard({ Icon, title, children, colour, border, bg }) {
  return (
    <div className={`rounded-2xl border ${border} ${bg} p-5`}>
      <div className="flex gap-4">
        <Icon className={`h-8 w-8 shrink-0 ${colour}`} />
        <div>
          <div className={`text-[10px] font-black uppercase tracking-[0.25em] ${colour}`}>
            {title}
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{children}</p>
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