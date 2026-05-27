export default function LgaRegionVisual() {
    return (
      <div className="space-y-5">
        <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-black to-violet-500/10">
          <div className="absolute left-10 top-10 h-48 w-72 rounded-[45%] border border-cyan-300/30 bg-cyan-400/5" />
          <div className="absolute left-24 top-20 h-40 w-60 rounded-[45%] border border-violet-300/50 bg-violet-500/10" />
          <div className="absolute left-44 top-34 h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,.9)]" />
  
          <div className="absolute right-5 top-5 rounded-xl border border-white/10 bg-black/50 px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-300">
              Matched Region
            </div>
            <div className="mt-2 text-sm font-black text-white">
              Melbourne LGA
            </div>
          </div>
  
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/60 p-4 text-xs leading-6 text-zinc-300">
            Coordinate point matched against geographic boundary data to determine jurisdiction-specific entitlement logic.
          </div>
        </div>
  
        <div className="grid gap-3 md:grid-cols-3">
          <MiniMetric label="State" value="VIC" />
          <MiniMetric label="Boundary" value="LGA" />
          <MiniMetric label="Rule Path" value="Regional" />
        </div>
      </div>
    )
  }
  
  function MiniMetric({ label, value }) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-4">
        <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          {label}
        </div>
        <div className="mt-2 text-lg font-black text-white">{value}</div>
      </div>
    )
  }