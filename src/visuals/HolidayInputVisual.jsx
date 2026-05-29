import {
  Building2,
  Home,
  FileSpreadsheet,
  SlidersHorizontal,
  ShieldCheck,
  Route,
  PackageCheck,
  CheckCircle2,
} from "lucide-react"

const inputs = [
  ["Office Address", "work location", Building2, "text-violet-300"],
  ["Home Address", "employee location", Home, "text-blue-300"],
  ["Batch CSV", "bulk payroll check", FileSpreadsheet, "text-cyan-300"],
]

const steps = [
  ["Normalise", "standardise address format", SlidersHorizontal, "text-violet-300"],
  ["Validate", "check required address fields", ShieldCheck, "text-cyan-300"],
  ["Route", "prepare for geographic reasoning", Route, "text-yellow-300"],
]

const payload = [
  "address.normalised = true",
  "source.channel = office | home | batch",
  "ready_for_geocoding = true",
]

export default function AddressInputVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
      <SectionTitle>Address Input Pipeline</SectionTitle>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {inputs.map(([title, subtitle, Icon, colour]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <Icon className={`h-7 w-7 ${colour}`} />

            <div className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              {title}
            </div>

            <div className="mt-2 text-xs text-zinc-500">{subtitle}</div>
          </div>
        ))}
      </div>

      <div className="my-6 h-px bg-cyan-400/30" />

      <div className="grid grid-cols-3 gap-4">
        {steps.map(([title, subtitle, Icon, colour]) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-black/50 p-4 text-center"
          >
            <Icon className={`mx-auto h-7 w-7 ${colour}`} />

            <div className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              {title}
            </div>

            <div className="mt-2 text-xs leading-5 text-zinc-500">
              {subtitle}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
        <div className="flex items-start gap-4">
          <PackageCheck className="mt-1 h-8 w-8 shrink-0 text-violet-300" />

          <div className="flex-1">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-300">
              Downstream Payload
            </div>

            <div className="mt-4 space-y-3">
              {payload.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-300" />

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300">
              Ready for Geographic Resolution
            </div>

            <p className="mt-1 text-sm text-zinc-300">
              Address inputs are normalised, validated and prepared for downstream geographic reasoning.
            </p>
          </div>
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