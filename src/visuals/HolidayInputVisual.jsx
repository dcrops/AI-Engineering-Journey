function InputCard({ label, sub }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <div className="text-[10px] uppercase tracking-[0.28em] text-violet-300">
          Input
        </div>
        <div className="mt-3 text-lg font-black text-white">{label}</div>
        <div className="mt-2 text-sm text-zinc-500">{sub}</div>
      </div>
    )
  }
  
  function ProcessStep({ label }) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300">
        {label}
      </div>
    )
  }
  
  export default function HolidayInputVisual() {
    return (
      <div className="space-y-5">
  
        <div className="grid gap-4 md:grid-cols-3">
          <InputCard label="Office Address" sub="work location" />
          <InputCard label="Home Address" sub="employee location" />
          <InputCard label="Batch CSV" sub="bulk payroll check" />
        </div>
  
        <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <ProcessStep label="Normalise" />
          <div className="hidden h-px w-8 bg-cyan-400/60 md:block" />
          <ProcessStep label="Validate" />
          <div className="hidden h-px w-8 bg-cyan-400/60 md:block" />
          <ProcessStep label="Route" />
        </div>
  
        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-violet-200">
            Downstream Payload
          </div>
          <div className="mt-4 grid gap-3 text-sm text-zinc-300">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              address.normalised = true
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              source.channel = office | home | batch
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              ready_for_geocoding = true
            </div>
          </div>
        </div>
      </div>
    )
  }