export default function GeographicResolutionVisual() {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">
            Address Input
          </div>
          <div className="mt-3 text-lg font-black text-white">
            123 Collins St, Melbourne VIC
          </div>
        </div>
  
        <div className="flex justify-center text-cyan-300">↓</div>
  
        <div className="grid grid-cols-2 gap-4">
          <Metric label="Latitude" value="-37.81" />
          <Metric label="Longitude" value="144.96" />
        </div>
  
        <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-green-300">
            Resolution Status
          </div>
          <div className="mt-3 flex items-center gap-3 text-sm text-zinc-200">
            <div className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,1)]" />
            High confidence geographic match
          </div>
        </div>
      </div>
    )
  }
  
  function Metric({ label, value }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
        <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          {label}
        </div>
        <div className="mt-3 text-2xl font-black text-white">{value}</div>
      </div>
    )
  }