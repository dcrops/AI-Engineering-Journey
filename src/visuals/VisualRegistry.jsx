import HolidayInputVisual from "./HolidayInputVisual"
import GeographicResolutionVisual from "./GeographicResolutionVisual"
import LgaRegionVisual from "./LgaRegionVisual"
import EntitlementRuleVisual from "./EntitlementRuleVisual"
import AuditableOutputVisual from "./AuditableOutputVisual"

const visualMap = {
  "holiday-input": HolidayInputVisual,
  geo: GeographicResolutionVisual,
  map: LgaRegionVisual,
  "holiday-rules": EntitlementRuleVisual,
  "holiday-audit": AuditableOutputVisual,
}

export default function VisualRegistry({ type }) {
  const Visual = visualMap[type]

  if (!Visual) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-zinc-500">
        Visual placeholder: {type}
      </div>
    )
  }

  return <Visual />
}