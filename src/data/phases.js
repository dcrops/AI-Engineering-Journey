export const phases = [
  {
    id: "01",
    label: "THE BEGINNING",
    title: "How Chase Risk & Compliance came to being.",
    trackingLabel: "Origin story section opened",
    description: `The project began when I was asked to help investigate a public holiday entitlement challenge affecting a major Australian banking environment.

What started as a small side project eventually became Chase Risk & Compliance (CRC), a company I founded to explore operational risk, governance and AI-driven decision support systems.

The projects throughout this portfolio were designed and built by me as part of that journey.

The bank wanted a way to track public holiday entitlement as when banks are audited they can be fined millions of dollars for this issue and similar ones like it.

I was intrigued and looked into the problem...`,
  },
  {
    id: "02",
    label: "PHASE 1",
    title: "Public Holiday Entitlements App",
    trackingLabel: "Public Holiday Entitlements project opened",
    description:
      "Public holiday logic became far more complex than expected. National holidays, state holidays, LGA-specific replacements and suburb-level exceptions created a layered operational rules problem that required geographic reasoning, validation and auditability.",
    layers: [
      "ADDRESS INPUT",
      "GEOGRAPHIC RESOLUTION",
      "LGA / REGION MATCHING",
      "ENTITLEMENT RULE ENGINE",
      "AUDITABLE OUTPUTS",
    ],
    engineeringHighlights: [
      ["6", "Processing Engines"],
      ["17", "Production Features"],
      ["8", "Australian Jurisdictions"],
      ["7", "Governance Status Codes"],
    ],
  },
  {
    id: "03",
    label: "PHASE 2",
    title: "Payroll Diagnostics Engine",
    trackingLabel: "Payroll Diagnostics Engine project opened",
    description: `
I had now built my first operational application, however it quickly became clear that Public Holiday Entitlements were only one medium-sized operational payroll problem.

Payroll systems contained much larger risks: incorrect leave calculations, termination errors, award interpretation issues, missing evidence, data integrity gaps and operational drift across payroll datasets.

This became the beginning of the Payroll Diagnostics Engine.

The platform evolved from a single entitlement workflow into a broader governance-aware diagnostics system capable of ingesting payroll datasets, validating operational integrity, evaluating modular rule logic and generating evidence-oriented reporting for operational review and audit support.
`,
    layers: [
      "DATA INGESTION",
      "DATA VALIDATION",
      "DIAGNOSTIC ENGINE",
      "RISK FINDINGS",
      "EXECUTIVE REPORTING",
    ],
    engineeringHighlights: [
      ["115", "Diagnostic Rules"],
      ["6", "Diagnostic Engines"],
      ["10", "Executive Reports"],
      ["78", "Automated Tests"],
    ],
  },
  {
    id: "04",
    label: "PHASE 3",
    title: "Document Intelligence RAG System",
    trackingLabel: "Document Intelligence RAG project opened",
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
    engineeringHighlights: [
      ["13", "RAG Components"],
      ["36", "Evaluation Cases"],
      ["4", "Orchestration Intents"],
      ["4", "Chunking Strategies"],
    ],
  },
  {
    id: "05",
    label: "PHASE 4",
    title: "Operational Intelligence Platform",
    trackingLabel: "Operational Intelligence Copilot project opened",
    description: `
After building the Governance-Aware Document Intelligence RAG Platform, I wanted to move beyond document retrieval and build a system capable of reasoning over operational datasets.

The goal was not to create another dashboard.

I wanted to build an executive decision-support platform capable of analysing business data, identifying patterns, explaining its reasoning, surfacing supporting evidence and producing trusted recommendations without relying on an LLM to invent conclusions.

This became the Operational Intelligence Platform — a deterministic-first analytics platform combining structured analytical reasoning, evidence-based decision support and AI-assisted executive insights.
`,
    layers: [
      "DATASET PROFILING",
      "INTELLIGENT ROUTING",
      "DETERMINISTIC ANALYTICS",
      "EVIDENCE GENERATION",
      "EXECUTIVE REASONING",
      "EXECUTIVE SUMMARY",
      "AUDIT TRAIL",
    ],
    advancedLayers: [
      "TREND ANALYSIS",
      "VARIANCE ANALYSIS",
      "ANOMALY DETECTION",
      "RISK ASSESSMENT",
      "DIRECT ANSWERS",
      "EVIDENCE TRANSPARENCY",
      "AUDIT & VERIFICATION",
      "GOLDEN DATASETS",
      "GOLDEN USER JOURNEYS",
      "REGRESSION TESTING",
      "LLM FALLBACKS",
    ],
    engineeringHighlights: [
      ["595", "Automated Tests"],
      ["15", "Golden User Journeys"],
      ["18", "Engineering Components"],
      ["21", "Production Features"],
    ],
  },
]