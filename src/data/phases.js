export const phases = [
  {
    id: "01",
    label: "THE BEGINNING",
    title: "How Chase Risk & Compliance came to being.",
    description: `A friend working for one of the big 4 banks came to me wanting some assistance on a payroll project he was working on.

They wanted a way to track public holiday entitlement as when banks are audited they can be fined millions of dollars for this issue and similar ones like it.

I was intrigued and looked into the problem...`,
  },
  {
    id: "02",
    label: "PHASE 1",
    title: "Public Holiday Entitlements App",
    description:
      "Public holiday logic became far more complex than expected. National holidays, state holidays, LGA-specific replacements and suburb-level exceptions created a layered operational rules problem that required geographic reasoning, validation and auditability.",
    layers: [
      "ADDRESS INPUT",
      "GEOGRAPHIC RESOLUTION",
      "LGA / REGION MATCHING",
      "ENTITLEMENT RULE ENGINE",
      "AUDITABLE OUTPUTS",
    ],
  },
  {
    id: "03",
    label: "PHASE 2",
    title: "Payroll Diagnostics Engine",
    description: `I had now built my first operational application, however it quickly became clear that Public Holiday Entitlements were only one medium-sized operational payroll problem.
  
  Payroll systems contained much larger risks: incorrect leave calculations, termination errors, award interpretation issues, missing evidence, data integrity gaps and operational drift across payroll datasets.
  
  This became the beginning of the Payroll Diagnostics Engine.
  
  The platform evolved from a single entitlement workflow into a broader governance-aware diagnostics system capable of ingesting payroll datasets, validating operational integrity, evaluating modular rule logic and generating evidence-oriented reporting for operational review and audit support.`,
    layers: [
      "DATA INGESTION",
      "DATA VALIDATION",
      "DIAGNOSTIC ENGINE",
      "RISK FINDINGS",
      "EXECUTIVE REPORTING",
    ],
  },
  {
    id: "04",
    label: "PHASE 3",
    title: "Document Intelligence RAG System",
    description: `At this point I had already started exploring AI while building a CRC Copilot to improve risk coverage and operational oversight for the Payroll Diagnostics Engine.

That experience pushed me further toward AI engineering and led to the decision to build a Governance-Aware Document Intelligence RAG System focused on operational knowledge retrieval, grounded responses and explainable AI workflows.

The goal was not simply to build another generic chatbot.

I wanted to better understand and develop practical AI engineering skills across the full retrieval and grounded-response pipeline including:`,
    skills: [
      "retrieval engineering",
      "orchestration-aware workflows",
      "conversational retrieval",
      "telemetry and observability",
      "evaluation harnesses",
      "grounded response generation",
      "unsupported-answer handling",
      "deployment architecture",
      "vector databases and embeddings",
      "governance-aware AI design",
    ],
    extra: `The system was designed to ingest operational documents, policies and procedures, transform them into searchable knowledge, and generate grounded responses with explainability, telemetry and orchestration transparency.

The long-term vision was not to build a generic one-size-fits-all chatbot, but a more tailored operational knowledge platform capable of adapting to different client document structures, ingestion strategies and governance requirements.

This was especially relevant for organisations without dedicated AI engineering capability, where operational knowledge systems still needed to remain explainable, trustworthy and adaptable to real-world workflows.`,
    layers: [
      "DOCUMENTS",
      "INGESTION",
      "CHUNKING",
      "EMBEDDINGS",
      "RETRIEVAL",
      "RESPONSE",
    ],
    advancedLayers: [
      "ORCHESTRATION",
      "TELEMETRY",
      "EVALUATION",
      "OBSERVABILITY",
      "DEPLOYMENT",
      "CONVERSATIONAL RETRIEVAL",
      "GROUNDED GENERATION",
      "API ARCHITECTURE",
      "SAFETY & GUARDRAILS",
    ],
  },
  {
    id: "05",
    label: "PHASE 4",
    title: "Operational Intelligence Copilot",
    description: `
  The next evolution of the platform.
  
  The Document Intelligence RAG System focused on helping AI understand documents.

  For the Operational Intelligence Copilot, I want to explore how AI can understand business operations.

  The goal is to build an Operational Intelligence Copilot capable of analysing structured data, identifying patterns, explaining findings and supporting operational decision-making.

  Beyond the platform itself, this project is an opportunity to continue developing practical AI engineering skills around orchestration, explainability, evaluation, observability and governance-aware AI systems.

  Currently in planning and design.
  `,
    layers: ["Coming Soon"]
  }
]