import { Route, ArrowRight, MessageSquare, Wrench, FileText, FileBarChart } from "lucide-react"

const journeys = [
  {
    title: "Workforce overtime investigation",
    steps: ["Question", "Tool route", "Evidence", "Summary"],
  },
  {
    title: "Department variance review",
    steps: ["Question", "Tool route", "Evidence", "Summary"],
  },
  {
    title: "Leave risk assessment",
    steps: ["Question", "Tool route", "Evidence", "Summary"],
  },
  {
    title: "Executive summary generation",
    steps: ["Question", "Tool route", "Evidence", "Summary"],
  },
]

const stepIcons = [MessageSquare, Wrench, FileText, FileBarChart]

export default function GoldenUserJourneysVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
      <SectionTitle>Golden User Journeys</SectionTitle>

      <div className="mt-6 space-y-4">
        {journeys.map((journey, index) => (
          <div
            key={journey.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xs font-black text-cyan-300">
                {index + 1}
              </span>
              <Route className="h-5 w-5 text-violet-300" />
              <span className="text-sm font-black text-zinc-200">{journey.title}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {journey.steps.map((step, stepIndex) => {
                const Icon = stepIcons[stepIndex]

                return (
                  <div key={step} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-zinc-400">
                      <Icon className="h-3.5 w-3.5 text-cyan-300/80" />
                      {step}
                    </span>
                    {stepIndex < journey.steps.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-cyan-400/40" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end border-t border-white/10 pt-4">
        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-violet-300/90">
          Validates · End-to-End Platform
        </span>
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
