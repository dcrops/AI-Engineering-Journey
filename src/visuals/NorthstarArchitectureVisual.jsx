import { northstarWorkflows } from "../data/workflowProjects"
import { DiagramFrame } from "./FlowDiagram"
import NorthstarFlowchart from "./northstarFlowcharts"

export default function NorthstarArchitectureVisual() {
  return (
    <DiagramFrame
      kicker="Four workflows"
      title="Each prototype is a separate flow. Follow the arrows from the trigger. Diamonds are decisions, and a dashed node has no outgoing path."
    >
      <div className="grid gap-10">
        {northstarWorkflows.map((workflow) => (
          <section key={workflow.id} className="min-w-0" aria-label={workflow.title}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-sm font-black leading-snug text-white">{workflow.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{workflow.purpose}</p>
              </div>
              <div className="shrink-0 rounded-full border border-white/10 px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-zinc-400">
                {workflow.activeLabel}
              </div>
            </div>
            <NorthstarFlowchart workflowId={workflow.id} />
          </section>
        ))}
      </div>
    </DiagramFrame>
  )
}
