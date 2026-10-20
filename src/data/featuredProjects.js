import { cicProject } from "./cicProject"

export const featuredProjects = [
  {
    id: "agentic-support",
    number: "08",
    title: "Governed Agentic Support Orchestration",
    problem: "A booking failed while two payments were captured.",
    outcome:
      "Specialist agents and a bounded supervisor investigate the case. A person approves or rejects the proposal from Slack.",
    technologies: ["Python", "LangGraph", "FastAPI", "n8n", "Slack"],
    governance:
      "Code checks the payment target, amount, evidence, and policy before that decision. The business systems are simulated, and no refund is executed.",
    detailHref: "#08",
    detailLabel: "Explore engineering details",
  },
  {
    id: "northstar",
    number: "07",
    title: "Northstar — Applied AI Workflow Automation",
    problem:
      "Support mail, invoices, daily revenue, and travel exceptions need different controls.",
    outcome:
      "Four separate workflows classify mail, check an invoice, reconcile revenue, and collect a travel decision.",
    technologies: ["n8n", "OpenAI", "PostgreSQL", "Slack", "Gmail"],
    governance:
      "Models read unstructured text. Routing, arithmetic, SQL, and approval authority stay in workflow rules. The invoice accounting call is simulated.",
    detailHref: "#07",
    detailLabel: "Explore engineering details",
  },
  {
    id: "career-intelligence",
    number: "06",
    title: cicProject.title,
    problem:
      "A job search needs evidence-backed assessment and tailored documents.",
    outcome:
      "A Python application takes in opportunities, assesses fit against a career profile, and drafts CVs and cover letters for review.",
    technologies: ["Python", "Pydantic", "OpenAI", "PyTest"],
    governance:
      "Models interpret vacancies and draft text. Software controls sequencing, evidence checks, and approval.",
    detailHref: "#06",
    detailLabel: "Explore engineering details",
  },
]
