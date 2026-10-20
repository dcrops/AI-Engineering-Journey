import { ArrowRight } from "lucide-react"

const modeStyles = {
  ai: "border-cyan-400/40 bg-cyan-500/15 text-cyan-100",
  rules: "border-violet-400/40 bg-violet-500/15 text-violet-100",
  simulated: "border-amber-400/40 bg-amber-500/10 text-amber-100",
  exercised: "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
  outstanding: "border-white/15 bg-white/[0.03] text-zinc-300",
}

const modeLabels = {
  ai: "Model",
  rules: "Rules",
  simulated: "Simulated",
  exercised: "Exercised",
  outstanding: "Outstanding",
}

export default function FlowDiagram({ steps, modeKey = "mode" }) {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-stretch">
      {steps.map((step, index) => (
        <div key={step.label} className="flex min-w-0 flex-1 flex-col lg:min-w-36 lg:flex-row">
          <div
            className={`w-full rounded-xl border px-3 py-3 ${modeStyles[step[modeKey]] || modeStyles.rules}`}
          >
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-400">
              {modeLabels[step[modeKey]] || step[modeKey]}
            </div>
            <div className="mt-1 text-[11px] font-black uppercase leading-snug tracking-[0.08em]">
              {step.label}
            </div>
            {step.detail && (
              <p className="mt-1 text-[11px] leading-4 text-zinc-400">{step.detail}</p>
            )}
          </div>
          {index !== steps.length - 1 && (
            <div className="flex shrink-0 items-center justify-center py-1 lg:w-5 lg:py-0" aria-hidden="true">
              <ArrowRight className="h-3.5 w-3.5 rotate-90 text-cyan-400/70 lg:rotate-0" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function DiagramFrame({ kicker, title, children, footer }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-5 sm:p-6">
      <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
        {kicker}
      </div>
      {title && (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{title}</p>
      )}
      <div className="mt-5">{children}</div>
      {footer && <div className="mt-5">{footer}</div>}
    </div>
  )
}

export function NoteList({ notes }) {
  return (
    <ul className="grid gap-2">
      {notes.map((note) => (
        <li
          key={note}
          className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[12px] leading-5 text-zinc-400"
        >
          {note}
        </li>
      ))}
    </ul>
  )
}

const zoneTone = {
  cyan: "border-cyan-400/25",
  amber: "border-amber-400/35",
  violet: "border-violet-400/25",
  fuchsia: "border-fuchsia-400/25",
  zinc: "border-white/10",
}

const signalTone = {
  ai: "border-cyan-400/40 bg-cyan-500/10",
  rules: "border-violet-400/40 bg-violet-500/10",
  simulated: "border-amber-400/40 bg-amber-500/10",
  human: "border-fuchsia-400/35 bg-fuchsia-500/10",
  exercised: "border-emerald-400/35 bg-emerald-500/10",
  dead: "border-dashed border-white/20 bg-white/[0.02]",
}

export function Zone({ title, note, tone = "cyan", children }) {
  return (
    <section className={`min-w-0 rounded-2xl border bg-black/30 p-4 ${zoneTone[tone] || zoneTone.cyan}`}>
      <h3 className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">
        {title}
      </h3>
      {note && <p className="mt-1.5 text-[12px] leading-5 text-zinc-500">{note}</p>}
      <div className="mt-3 grid gap-2">{children}</div>
    </section>
  )
}

export function Signal({ kicker, label, detail, tone = "rules", icon: Icon }) {
  return (
    <div className={`min-w-0 rounded-xl border px-3 py-3 ${signalTone[tone] || signalTone.rules}`}>
      <div className="flex items-start gap-2.5">
        {Icon && (
          <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-200" aria-hidden="true" />
        )}
        <div className="min-w-0">
          {kicker && (
            <div className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-400">
              {kicker}
            </div>
          )}
          <div className="mt-1 text-[11px] font-black uppercase leading-snug tracking-[0.05em] text-white">
            {label}
          </div>
          {detail && <p className="mt-1 text-[12px] leading-5 text-zinc-400">{detail}</p>}
        </div>
      </div>
    </div>
  )
}
