export const cicProject = {
  id: "06",
  label: "AI ENGINEERING PROJECT",
  title: "Career Intelligence Copilot",
  subtitle: "Evidence-First AI Workflow Orchestration",
  description: `Career Intelligence Copilot is a working Python CLI that turns job-search grunt work into a traceable AI engineering workflow — from opportunity intake through evidence-backed assessment to tailored application documents.

LLMs handle language-heavy interpretation and drafting; deterministic software owns sequencing, validation, evidence constraints and human approval.`,
  layers: [
    "INTAKE & DISCOVERY",
    "STRUCTURED ANALYSIS",
    "CAREER EVIDENCE",
    "OPPORTUNITY ASSESSMENT",
    "APPLICATION GENERATION",
    "WORKFLOW ORCHESTRATION",
    "TRACKING & RELIABILITY",
  ],
  engineeringHighlights: [
    ["2,500", "Automated Tests"],
    ["18", "Implemented Requirements"],
    ["9", "Workflow Stages"],
    ["7", "Engineering Layers"],
  ],
  techStack: [
    "Python",
    "Pydantic",
    "OpenAI API",
    "Typer",
    "PyYAML",
    "IMAP",
    "WeasyPrint",
    "PyTest",
    "Git",
  ],
}

export const cicLayerDetails = {
  "INTAKE & DISCOVERY": {
    title: "Intake & Discovery",
    visual: "intake",
    body: {
      problem:
        "Job opportunities arrive from alert emails and URLs in inconsistent formats, with duplicates and acquisition failures that waste time if left unmanaged.",
      built:
        "IMAP mailbox intake, URL discovery, record normalisation, duplicate identity checks and a cic daily workflow that surfaces newly acquired opportunities.",
      mattered:
        "Canonical opportunity identities and retryable acquisition failures create a reliable front door before any AI analysis runs.",
    },
  },
  "STRUCTURED ANALYSIS": {
    title: "Structured Analysis",
    visual: "analysis",
    body: {
      problem:
        "Unstructured job advertisements are noisy and incomplete — free-form LLM extraction drifts without typed contracts.",
      built:
        "OpenAI structured parsing into Pydantic models covering requirements, skills, seniority, conditions, location and eligibility.",
      mattered:
        "Constrained extraction makes each analysis inspectable, retryable and safe to feed into downstream assessment.",
    },
  },
  "CAREER EVIDENCE": {
    title: "Career Evidence",
    visual: "evidence",
    body: {
      problem:
        "Without a verified career source of truth, tailored documents risk inventing experience the applicant does not have.",
      built:
        "A structured career profile and evidence store distinguishing established experience, portfolio work, recent learning and genuine gaps.",
      mattered:
        "Evidence provenance is a first-class design constraint — not an afterthought bolted onto generation.",
    },
  },
  "OPPORTUNITY ASSESSMENT": {
    title: "Opportunity Assessment",
    visual: "assessment",
    body: {
      problem:
        "Fit judgments need language understanding, but ranking every role by gut feel does not scale and is hard to review.",
      built:
        "Structured assessments comparing technical, commercial and portfolio fit against career evidence, with pursuit recommendations as decision support.",
      mattered:
        "Recommendations stay reviewable and uncertain — the owner still decides; the system does not pretend assessments are infallible.",
    },
  },
  "APPLICATION GENERATION": {
    title: "Application Generation",
    visual: "generation",
    body: {
      problem:
        "Tailored CVs and cover letters are repetitive to produce and easy for an LLM to over-claim without hard constraints.",
      built:
        "Evidence-aware strategy, CV and cover-letter generation with truth validation, bounded retries and WeasyPrint HTML/PDF rendering.",
      mattered:
        "Unsupported claims fail closed before documents leave the system for human review.",
    },
  },
  "WORKFLOW ORCHESTRATION": {
    title: "Workflow Orchestration",
    visual: "orchestration",
    body: {
      problem:
        "Multi-stage pipelines break down when an LLM is given unrestricted control of what happens next.",
      built:
        "A custom deterministic runner with typed workflow state, explicit stages, checkpoints, bounded retries and awaiting_owner approval gates.",
      mattered:
        "Predictable transitions improve traceability and maintainability — LangGraph was deliberately not adopted for this control path.",
    },
  },
  "TRACKING & RELIABILITY": {
    title: "Tracking & Reliability",
    visual: "tracking",
    body: {
      problem:
        "Partial failures and silent drift undermine trust once opportunities enter an application pipeline.",
      built:
        "Pipeline status tracking, decision history, validation gates and a large PyTest regression suite protecting workflow behaviour.",
      mattered:
        "Operational visibility and automated tests provide traceability, controlled recovery and regression protection throughout the application workflow.",
    },
  },
}
