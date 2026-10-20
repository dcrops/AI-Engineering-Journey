import { agenticLayers } from "../data/workflowProjects"
import { DiagramFrame } from "./FlowDiagram"
import AgenticFlowchart from "./agenticFlowcharts"

export default function AgenticLayerVisual({ layerId }) {
  const layer = agenticLayers.find((item) => item.id === layerId)

  if (!layer) return null

  return (
    <DiagramFrame kicker={layer.title}>
      <AgenticFlowchart diagramId={layerId} />
    </DiagramFrame>
  )
}
