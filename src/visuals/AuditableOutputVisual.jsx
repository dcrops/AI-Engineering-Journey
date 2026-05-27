function StatusChip({ children, tone = "cyan" }) {
    const styles = {
      cyan: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
      green: "border-green-400/20 bg-green-500/10 text-green-200",
      violet: "border-violet-400/20 bg-violet-500/10 text-violet-200",
    }
  
    return (
      <div className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${styles[tone]}`}>
        {children}
      </div>
    )
  }
  
  export default function AuditableOutputVisual() {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <div className="flex flex-wrap gap-2">
            <StatusChip tone="green">Resolved</StatusChip>
            <StatusChip tone="cyan">High Confidence</StatusChip>
            <StatusChip tone="violet">Audit Ready</StatusChip>
          </div>
  
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Public Holiday Result
            </div>
  
            <div className="mt-3 text-2xl font-black text-white">
              4 applicable holidays found
            </div>
  
            <div className="mt-3 text-sm leading-6 text-zinc-400">
              Based on resolved location, regional boundary match and entitlement rule evaluation.
            </div>
          </div>
        </div>
  
        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-violet-200">
            Evidence Trail
          </div>
  
          <div className="mt-4 space-y-3">
            {[
              "Geocode confidence: 1.00",
              "Matched LGA: Melbourne",
              "Holiday source: external calendar",
              "Regional override CSV checked",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }