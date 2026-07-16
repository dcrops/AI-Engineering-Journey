import { phases } from "./phases"
import { futureProjects } from "./futureProjects"

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
    futureProjectId: "06",
    title: "Career Intelligence Copilot",
    tagline: "Coming Soon",
    comingSoon: true,
  },
]

export function getProjectDemonstrations() {
  return demonstrationsOrder.map((item) => {
    if (item.comingSoon) {
      const project = futureProjects.find((p) => p.id === item.futureProjectId)
      return {
        ...item,
        title: project?.title ?? item.title,
      }
    }

    const phase = phases.find((p) => p.id === item.phaseId)
    if (!phase?.demoVideo) return null

    return {
      ...item,
      demoVideo: phase.demoVideo,
    }
  }).filter(Boolean)
}
