import { phases } from "./phases"
import { cicProject } from "./cicProject"

const demonstrationsOrder = [
  {
    badge: "①",
    phaseId: "05",
    title: "Operational Intelligence Platform",
    tagline: "Flagship AI Engineering Project",
    buttonLabel: "Watch Operational Intelligence Demo",
  },
  {
    badge: "②",
    phaseId: "04",
    title: "Governance-Aware Document Intelligence RAG",
    tagline: "Production RAG & Orchestration",
    buttonLabel: "Watch Document Intelligence Demo",
  },
  {
    badge: "③",
    phaseId: "03",
    title: "Payroll Diagnostics Engine",
    tagline: "Deterministic Analytics Platform",
    buttonLabel: "Watch Payroll Diagnostics Demo",
  },
  {
    badge: "④",
    phaseId: "02",
    title: "Public Holiday Entitlements App",
    tagline: "Where the journey began",
    buttonLabel: "Watch Public Holiday Demo",
  },
  {
    badge: "⑤",
    cicProjectId: "06",
    title: "Career Intelligence Copilot",
    tagline: cicProject.subtitle,
    statusLabel: "Working System — Demo Video Pending",
    demoPending: true,
  },
]

export function getProjectDemonstrations() {
  return demonstrationsOrder
    .map((item) => {
      if (item.demoPending) {
        return {
          ...item,
          title: cicProject.title,
          tagline: item.tagline ?? cicProject.subtitle,
          statusLabel: item.statusLabel ?? "Demo Video Pending",
        }
      }

      const phase = phases.find((p) => p.id === item.phaseId)
      if (!phase?.demoVideo) return null

      return {
        ...item,
        demoVideo: phase.demoVideo,
      }
    })
    .filter(Boolean)
}
