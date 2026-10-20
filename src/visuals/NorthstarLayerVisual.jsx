import { northstarWorkflows } from "../data/workflowProjects"
import { DiagramFrame } from "./FlowDiagram"
import NorthstarFlowchart from "./northstarFlowcharts"

export default function NorthstarLayerVisual({ workflowId }) {
  const workflow = northstarWorkflows.find((item) => item.id === workflowId)

  if (!workflow) return null

  return (
    <DiagramFrame kicker={workflow.activeLabel} title={workflow.summary}>
      <NorthstarFlowchart workflowId={workflowId} />
    </DiagramFrame>
  )
}
