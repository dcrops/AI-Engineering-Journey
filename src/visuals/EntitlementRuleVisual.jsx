function RuleNode({ label, status = "check" }) {
    const styles =
      status === "pass"
        ? "border-green-400/20 bg-green-500/10 text-green-200"
        : status === "review"
          ? "border-yellow-400/20 bg-yellow-500/10 text-yellow-200"
          : "border-cyan-400/20 bg-cyan-500/10 text-cyan-200"
  
    return (
      <div className={`rounded-xl border px-4 py-3 text-sm ${styles}`}>
        <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">
          Rule Check
        </div>
        <div className="mt-2 font-black">{label}</div>
      </div>
    )
  }
  
  export default function EntitlementRuleVisual() {
    return (
      <div className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">
            Entitlement Rule Path
          </div>
  
          <div className="mt-5 space-y-3">
            <RuleNode label="National Holiday Source" status="pass" />
            <RuleNode label="State Holiday Applies" status="pass" />
            <RuleNode label="LGA Replacement Rule" status="review" />
            <RuleNode label="Suburb Exception Check" />
            <RuleNode label="Work Location Selected" status="pass" />
          </div>
        </div>
  
        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
          <div className="text-[10px] uppercase tracking-[0.28em] text-violet-200">
            Final Determination
          </div>
  
          <div className="mt-3 text-2xl font-black text-white">
            Entitlement rule resolved
          </div>
  
          <div className="mt-2 text-sm leading-6 text-zinc-400">
            External holiday data and regional override logic are merged into an auditable decision path.
          </div>
        </div>
      </div>
    )
  }