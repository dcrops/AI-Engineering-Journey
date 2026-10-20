import { DiagramFrame } from "./FlowDiagram"
import AgenticFlowchart from "./agenticFlowcharts"

export default function AgenticArchitectureVisual() {
  return (
    <DiagramFrame
      kicker="Orchestration"
      title="Follow the arrows from the inactive n8n case through the LangGraph investigation, the validation gate, and the Slack decision. A dashed node has no next step."
    >
      <AgenticFlowchart diagramId="architecture" />
    </DiagramFrame>
  )
}
