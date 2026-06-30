export const layerDetails = {
    "02:ADDRESS INPUT": {
      title: "Address Input",
      layout: "wide",
      visual: "holiday-input",
      tags: [
        "office address",
        "home address",
        "batch CSV inputs",
        "validation",
        "fallback handling",
      ],
      actions: [
        {
          label: "Solution Design",
          title: "Operational Ingestion Architecture",
          description:
            "The address layer evolved beyond a simple form field into a structured ingestion pipeline capable of handling operational inputs from multiple channels before geographic reasoning executed.",
          items: [
            "Office Address → Validation → Geocode → Entitlement Logic",
            "Home Address → Validation → Geocode → Entitlement Logic",
            "Batch CSV → Normalisation → Validation → Regional Processing",
            "Fallback handling for incomplete locality information",
          ],
        },
        {
          label: "Input Reliability",
          title: "Input Reliability Controls",
          description:
            "The input layer needed to handle messy operational address data before the system could trust any geographic or entitlement reasoning downstream.",
          items: [
            "Normalised office and home address inputs",
            "Supported batch CSV processing for operational scale",
            "Handled incomplete or inconsistent address fields",
            "Created reliable address payloads for downstream services",
          ],
        },
      ],
      body: {
        problem:
          "Public holiday entitlement decisions depended heavily on accurate operational location data, however addresses often arrived incomplete, inconsistently formatted or missing locality information.",
        built:
          "I built an ingestion layer capable of handling office addresses, home addresses and batch CSV inputs while normalising operational data before downstream geographic reasoning executed.",
        mattered:
          "This transformed address handling from a simple form input into a reliable operational ingestion pipeline that geographic and entitlement logic could trust.",
      },
    },
    "02:GEOGRAPHIC RESOLUTION": {
    title: "Geographic Resolution",
    layout: "wide",
    visual: "geo",

    tags: [
        "geocoding",
        "coordinates",
        "location validation",
        "mapping",
        "regional resolution",
    ],

    actions: [
        {
        label: "Geocode Flow",
        title: "Geographic Resolution Pipeline",
        description:
            "The system converted operational address data into validated geographic coordinates before regional entitlement logic executed.",
        items: [
            "Address ingestion into geocoding layer",
            "Coordinate resolution via mapping services",
            "Confidence validation on geographic matches",
            "Fallback handling for ambiguous addresses",
        ],
        },

        {
        label: "Cache Layer",
        title: "Operational Resolution Optimisation",
        description:
            "Previously resolved geographic results could be cached to reduce repeated lookup overhead and improve operational throughput.",
        items: [
            "Reduced repeated external lookups",
            "Improved operational response speed",
            "Lowered unnecessary geocoding requests",
            "Improved downstream consistency",
        ],
        },
    ],

    body: {
        problem:
        "Raw addresses alone were insufficient for entitlement reasoning because the system needed reliable geographic coordinates before regional matching logic could execute.",

        built:
        "I built a geographic resolution layer capable of transforming operational addresses into validated coordinates and regional reference points for downstream entitlement workflows.",

        mattered:
        "This became the bridge between messy operational address data and reliable geographic reasoning.",
    },
    },
        "02:LGA / REGION MATCHING": {
    title: "LGA / Region Matching",
    layout: "wide",
    visual: "map",

    tags: [
        "geojson boundaries",
        "polygon matching",
        "regional logic",
        "suburb exceptions",
        "operational jurisdictions",
    ],

    actions: [
        {
        label: "Jurisdiction Logic",
        title: "Operational Regional Resolution",
        description:
            "The platform evaluated operational coordinates against jurisdiction-aware regional boundaries to determine which entitlement rules should apply across states, LGAs and locality-specific exceptions.",
        items: [
            "Coordinate-to-boundary evaluation",
            "LGA and regional polygon matching",
            "Jurisdiction-specific entitlement routing",
            "Suburb-level operational exceptions",
        ],
        },
        {
        label: "Regional Intelligence",
        title: "Regional Intelligence Layer",
        description:
            "The regional matching layer converted coordinates into operational jurisdiction context so entitlement rules could be applied with more precision than postcode-only logic.",
        items: [
            "GeoJSON regional boundary datasets",
            "Polygon containment matching",
            "LGA and locality resolution",
            "Regional override processing",
        ],
        },
    ],

    body: {
        problem:
        "Public holiday rules could vary by state, LGA and locality-specific exceptions, making simple postcode matching unreliable for operational entitlement decisions.",
        built:
        "I developed a regional matching layer that evaluated coordinates against LGA and regional boundary datasets using geographic polygon matching rather than simplistic postcode logic.",
        mattered:
        "This enabled the platform to support suburb-level and jurisdiction-specific operational rules with significantly greater accuracy and explainability.",
    },
    },
    "02:ENTITLEMENT RULE ENGINE": {
  title: "Entitlement Rule Engine",
  layout: "wide",
  visual: "holiday-rules",

  tags: [
    "external holiday source",
    "regional override CSV",
    "LGA replacements",
    "suburb exceptions",
    "auditable rules",
  ],

  actions: [
    {
      label: "Rule Logic",
      title: "Layered Entitlement Logic",
      description:
        "The entitlement layer combined external public holiday data with locally maintained override rules so the system could reason across national, state, LGA and locality-specific scenarios.",
      items: [
        "External holiday source integration",
        "Regional override CSV processing",
        "State and LGA rule layering",
        "Work-location entitlement evaluation",
      ],
    },
    {
      label: "Override Handling",
      title: "Regional Override Strategy",
      description:
        "Local holidays and replacement rules needed to remain maintainable without hardcoding every exception into the application logic.",
      items: [
        "Structured regional override dataset",
        "LGA and locality match types",
        "Replacement holiday support",
        "Rules maintained as data rather than code",
      ],
    },
  ],

  body: {
    problem:
      "Public holiday logic quickly evolved beyond simple national holiday lookups. Regional replacements, locality exceptions and operational override scenarios created layered entitlement complexity.",
    built:
      "I built a rules engine that combined externally sourced national and state public holiday data with internally maintained regional override datasets and operational entitlement logic.",
    mattered:
      "This allowed the platform to support auditable and geographically-aware entitlement decisions across multiple operational rule layers.",
  },
},

"02:AUDITABLE OUTPUTS": {
  title: "Auditable Outputs",
  layout: "wide",
  visual: "holiday-audit",

  tags: [
    "confidence indicators",
    "audit details",
    "manual review",
    "report outputs",
    "explainability",
  ],

  actions: [
    {
      label: "Audit Outputs",
      title: "Explainable Output Design",
      description:
        "The output layer needed to show not only the entitlement result, but also the reasoning trail behind the result.",
      items: [
        "Resolved address display",
        "Holiday count and status summary",
        "Confidence indicators",
        "Audit detail expansion",
      ],
    },
    {
      label: "Reporting",
      title: "Operational Reporting Layer",
      description:
        "The reporting layer translated calculated entitlements into reviewable outputs suitable for payroll and governance workflows.",
      items: [
        "Table-based public holiday output",
        "Downloadable result artifacts",
        "Review-friendly audit details",
        "Batch output support",
      ],
    },
  ],

  body: {
    problem:
      "Operational users needed more than a simple entitlement result. Decisions had to remain explainable, reviewable and auditable within operational payroll workflows.",
    built:
      "I developed an output layer that generated entitlement decisions alongside confidence indicators, audit metadata and operational review guidance.",
    mattered:
      "This transformed the application from a simple rules utility into a more trustworthy operational system capable of supporting governance and review processes.",
  },
},
  "03:DATA INGESTION": {
  title: "DATA INGESTION",
  layout: "wide",
  body: {
    problem:
      "Operational payroll data rarely arrived in clean or standardised formats. Client datasets contained inconsistent schemas, missing values, mixed date formats and fragmented exports across multiple payroll processes.",

    built:
      "We built ingestion pipelines capable of loading and standardising payroll exports, leave balances, termination datasets and supporting operational datasets into a consistent internal structure for downstream analysis.",

    mattered:
      "Reliable ingestion became the foundation for the entire diagnostics platform. Without structured and validated operational data, downstream rule evaluation and reporting could not remain explainable or trustworthy.",
  },

  tags: [
    "CSV IMPORTS",
    "DATA NORMALISATION",
    "SCHEMA HANDLING",
    "PAYROLL EXPORTS",
  ],

  visual: "ingestion",

  actions: [
    {
      label: "INGESTION FLOW",
      title: "Operational data ingestion",
      description:
        "The ingestion layer transformed fragmented payroll exports into structured operational datasets suitable for downstream diagnostics.",
      items: [
        "Payroll exports",
        "Leave balance datasets",
        "Termination datasets",
        "Operational standardisation",
      ],
    },
  ],
},

"03:DATA VALIDATION": {
  title: "DATA VALIDATION",
  layout: "wide",
  body: {
    problem:
      "Payroll datasets frequently contained structural inconsistencies, invalid records and reconciliation gaps that could silently distort downstream analysis and operational reporting.",

    built:
      "We implemented a validation layer that performed structural checks, field validation, cross-dataset reconciliation and operational integrity checks before diagnostic logic executed.",

    mattered:
      "This ensured the platform could distinguish genuine payroll risk indicators from underlying data quality problems, improving trustworthiness and explainability of findings.",
  },

  tags: [
    "FIELD VALIDATION",
    "RECONCILIATION",
    "INTEGRITY CHECKS",
    "DATA QUALITY",
  ],

  visual: "validation",

  actions: [
    {
      label: "VALIDATION RULES",
      title: "Pre-diagnostic integrity review",
      description:
        "Validation logic ensured downstream diagnostics operated on structurally reliable operational data.",
      items: [
        "Required field checks",
        "Invalid value detection",
        "Cross-dataset reconciliation",
        "Operational integrity checks",
      ],
    },
  ],
},

"03:DIAGNOSTIC ENGINE": {
  title: "DIAGNOSTIC ENGINE",
  layout: "wide",
  body: {
    problem:
      "Payroll risks were often distributed across disconnected operational datasets, making inconsistencies and lifecycle anomalies difficult to identify through manual review alone.",

    built:
      "We developed a modular diagnostics engine capable of evaluating payroll datasets against rule-based operational logic while orchestrating layered analysis and cross-dataset integrity checks across multiple review domains.",

    mattered:
      "This enabled the platform to surface operational inconsistencies, lifecycle mismatches and governance-related payroll risks that were difficult to detect through isolated spreadsheet analysis.",
  },

  tags: [
    "RULE ENGINE",
    "MODULAR ANALYSIS",
    "ORCHESTRATION",
    "RISK DETECTION",
  ],

  visual: "diagnostic-engine",

  actions: [
    {
      label: "RULE PROCESSING",
      title: "Layered diagnostics execution",
      description:
        "The engine evaluated operational payroll risk across multiple modular review domains.",
      items: [
        "Leave diagnostics",
        "Termination analysis",
        "Cross-dataset checks",
        "Operational drift detection",
      ],
    },
  ],
},

"03:RISK FINDINGS": {
  title: "RISK FINDINGS",
  layout: "wide",
  body: {
    problem:
      "Raw diagnostic outputs were difficult for operational stakeholders to interpret, prioritise and investigate consistently across large payroll datasets.",

    built:
      "We transformed diagnostic outputs into structured findings with severity classification, employee-level traceability, supporting evidence and operational context.",

    mattered:
      "This converted technical analysis into explainable operational insights that could support investigation, governance review and stakeholder decision-making.",
  },

  tags: [
    "SEVERITY SCORING",
    "TRACEABILITY",
    "EVIDENCE",
    "EXPLAINABILITY",
  ],

  visual: "risk-findings",

  actions: [
    {
      label: "FINDING STRUCTURE",
      title: "Evidence-backed findings",
      description:
        "Diagnostic outputs were converted into prioritised operational findings suitable for governance review.",
      items: [
        "Severity classification",
        "Employee traceability",
        "Supporting evidence",
        "Operational context",
      ],
    },
  ],
},

"03:EXECUTIVE REPORTING": {
  title: "EXECUTIVE REPORTING",
  layout: "wide",
  body: {
    problem:
      "Technical payroll analysis often failed to communicate operational risk clearly to non-technical stakeholders and decision-makers.",

    built:
      "We developed an executive reporting layer that generated governance-oriented summaries, coverage analysis, prioritised risk views and evidence-backed governance reporting.",

    mattered:
      "This allowed complex diagnostic outputs to be communicated in a structured, explainable and executive-friendly format suitable for operational review and audit support.",
  },

  tags: [
    "EXECUTIVE VIEWS",
    "GOVERNANCE REPORTING",
    "AUDIT SUPPORT",
    "RISK SUMMARIES",
  ],

  visual: "executive-reporting",

  actions: [
    {
      label: "REPORT OUTPUTS",
      title: "Governance-oriented reporting",
      description:
        "The reporting layer translated diagnostics into structured executive-level operational summaries.",
      items: [
        "Coverage analysis",
        "Prioritised findings",
        "Governance summaries",
        "Audit-ready outputs",
      ],
    },
  ],
},
"04:DOCUMENTS": {
  title: "DOCUMENTS",
  layout: "wide",
  body: {
    problem:
      "Operational knowledge rarely existed in AI-ready formats. Policies, procedures and governance documents were fragmented across PDFs, DOCX files and unstructured text with inconsistent formatting and varying levels of quality.",
    built:
      "We built a document foundation layer capable of ingesting operational policies, procedures and supporting governance documents while preserving metadata and preparing them for downstream retrieval workflows.",
    mattered:
      "Reliable document handling became the foundation for grounded retrieval and explainable AI behaviour. Without stable document ingestion, downstream retrieval quality and trustworthy responses would quickly degrade.",
  },
  tags: ["PDF DOCUMENTS", "DOCX FILES", "POLICY INGESTION", "METADATA HANDLING"],
  visual: "documents",
  actions: [],
},

"04:INGESTION": {
  title: "INGESTION",
  layout: "wide",
  body: {
    problem:
      "Raw operational documents were not immediately usable by AI systems. Files required validation, metadata extraction, diagnostics and transformation before they could support reliable retrieval workflows.",
    built:
      "We built ingestion pipelines capable of validating documents, extracting metadata, generating readiness diagnostics and preparing client-scoped document collections for downstream embedding and retrieval.",
    mattered:
      "The ingestion layer became a governance and quality-control checkpoint for the platform. Reliable ingestion improved retrieval consistency, explainability and operational trustworthiness across the system.",
  },
  tags: ["DOCUMENT VALIDATION", "READINESS DIAGNOSTICS", "CLIENT COLLECTIONS", "INGESTION PIPELINES"],
  visual: "rag-ingestion",
  actions: [],
},

"04:CHUNKING": {
  title: "CHUNKING",
  layout: "wide",
  body: {
    problem:
      "Large operational documents could not simply be embedded as single blocks of text. Poor chunking strategies reduced retrieval precision, introduced irrelevant context and weakened grounded response generation.",
    built:
      "We implemented multiple chunking strategies including character chunking, delimiter chunking, page chunking and heading-aware chunking to better adapt retrieval behaviour to different document structures.",
    mattered:
      "Chunking became one of the most important retrieval engineering decisions in the platform, directly influencing retrieval quality, orchestration behaviour and grounded answer consistency.",
  },
  tags: ["CHARACTER CHUNKING", "DELIMITER CHUNKING", "PAGE CHUNKING", "HEADING DETECTION"],
  visual: "chunking",
  actions: [],
},

"04:EMBEDDINGS": {
  title: "EMBEDDINGS",
  layout: "wide",
  body: {
    problem:
      "Operational knowledge needed to be transformed into semantic representations rather than relying purely on keyword matching or static indexing approaches.",
    built:
      "We integrated OpenAI embedding models and vector database infrastructure to convert document chunks into searchable semantic vectors capable of supporting similarity-based retrieval workflows.",
    mattered:
      "Embeddings allowed the platform to retrieve semantically relevant operational knowledge even when user questions did not exactly match the original document wording.",
  },
  tags: ["OPENAI EMBEDDINGS", "VECTOR DATABASES", "CHROMADB", "SEMANTIC SEARCH"],
  visual: "embeddings",
  actions: [],
},

"04:RETRIEVAL": {
  title: "RETRIEVAL",
  layout: "wide",
  body: {
    problem:
      "Retrieving the correct evidence from large operational corpora became increasingly difficult as document collections grew broader and more complex.",
    built:
      "We built retrieval workflows supporting metadata filtering, document-balanced retrieval, conversational query rewriting, retrieval pruning and adaptive retrieval strategy selection.",
    mattered:
      "Retrieval quality became the core driver of grounded AI behaviour. Strong retrieval workflows improved explainability, reduced hallucinations and enabled more trustworthy operational responses.",
  },
  tags: ["METADATA FILTERING", "QUERY REWRITING", "RETRIEVAL PRUNING", "ADAPTIVE RETRIEVAL"],
  visual: "retrieval",
  actions: [],
},

"04:RESPONSE": {
  title: "RESPONSE",
  layout: "wide",
  body: {
    problem:
      "AI-generated responses could not simply prioritise fluency. The system needed grounded, explainable and governance-aware outputs capable of identifying insufficient evidence and unsupported requests.",
    built:
      "We implemented grounded response generation workflows including confidence evaluation, insufficient-evidence handling, conversational clarification behaviour and source-aware response generation.",
    mattered:
      "The response layer transformed the system from a simple document chatbot into a more trustworthy operational AI platform focused on explainability and grounded operational support.",
  },
  tags: ["GROUNDED GENERATION", "CONFIDENCE EVALUATION", "UNSUPPORTED ANSWERS", "CLARIFICATION WORKFLOWS"],
  visual: "response",
  actions: [],
},
"04:ORCHESTRATION": {
  title: "ORCHESTRATION",
  layout: "wide",
  body: {
    problem:
      "Basic RAG workflows can become brittle when ingestion, retrieval, query handling and response generation are handled as disconnected steps.",
    built:
      "We introduced orchestration logic to coordinate retrieval modes, query rewriting, answer handling and response behaviour across the system.",
    mattered:
      "This made the platform feel more like an engineered AI workflow rather than a single prompt wrapped around a vector search.",
  },
  tags: ["RETRIEVAL ROUTING", "QUERY REWRITING", "ANSWER HANDLING", "ORCHESTRATION LOGIC"],
  visual: "orchestration",
  actions: [],
},

"04:TELEMETRY": {
  title: "TELEMETRY",
  layout: "wide",
  body: {
    problem:
      "Without telemetry, retrieval behaviour and response quality were difficult to analyse, evaluate or improve in a structured way.",
    built:
      "We implemented structured telemetry logging capable of capturing orchestration decisions, retrieval traces, timing diagnostics, grounding checks and response outcomes.",
    mattered:
      "Telemetry transformed the platform from a simple prototype into an observable AI system where retrieval quality and orchestration behaviour could be analysed empirically.",
  },
  tags: ["REQUEST LOGGING", "RETRIEVAL TRACES", "TIMING DIAGNOSTICS", "GROUNDEDNESS TRACKING"],
  visual: "telemetry",
  actions: [],
},

"04:EVALUATION": {
  title: "EVALUATION",
  layout: "wide",
  body: {
    problem:
      "RAG systems can appear functional while still producing weak, incomplete or unsupported answers. Manual testing alone was insufficient for understanding retrieval quality.",
    built:
      "We built evaluation harnesses capable of benchmarking retrieval strategies, unsupported-answer handling and orchestration workflows across multiple test scenarios.",
    mattered:
      "Evaluation infrastructure allowed retrieval and orchestration behaviour to be tested systematically rather than relying on ad-hoc experimentation or subjective observations.",
  },
  tags: ["EVALUATION HARNESS", "RETRIEVAL TESTING", "STRATEGY ANALYSIS", "QUALITY BENCHMARKS"],
  visual: "evaluation",
  actions: [],
},

"04:OBSERVABILITY": {
  title: "OBSERVABILITY",
  layout: "wide",
  body: {
    problem:
      "AI systems become difficult to trust when retrieval behaviour, orchestration decisions and pipeline performance remain hidden from users and developers.",
    built:
      "We exposed orchestration details, retrieval diagnostics, stage timings and confidence indicators directly within the UI to improve transparency and operational visibility.",
    mattered:
      "Observability improved explainability, debugging capability and operational trust while helping transform the platform into a more transparent governance-aware AI system.",
  },
  tags: ["STAGE TIMINGS", "ORCHESTRATION DETAILS", "RETRIEVAL VISIBILITY", "EXPLAINABILITY"],
  visual: "observability",
  actions: [],
},

"04:DEPLOYMENT": {
  title: "DEPLOYMENT",
  layout: "wide",
  body: {
    problem:
      "Many AI prototypes remain isolated development experiments without realistic deployment architecture, API infrastructure or operational packaging.",
    built:
      "We implemented a deployable architecture using FastAPI, Streamlit, Docker Compose and API-key authentication to support operational workflows and service-based interaction.",
    mattered:
      "Deployment engineering transformed the platform from a local experimentation environment into a more realistic operational AI platform architecture.",
  },
  tags: ["FASTAPI", "STREAMLIT UI", "DOCKER COMPOSE", "API AUTHENTICATION"],
  visual: "deployment",
  actions: [],
},

"04:CONVERSATIONAL RETRIEVAL": {
  title: "CONVERSATIONAL RETRIEVAL",
  layout: "wide",
  body: {
    problem:
      "Follow-up questions and conversational interactions can lose important context, leading to weak retrieval quality and fragmented responses.",
    built:
      "We implemented conversational query rewriting workflows capable of incorporating previous user context into downstream retrieval behaviour.",
    mattered:
      "This improved conversational continuity and allowed retrieval workflows to behave more naturally across multi-step operational interactions.",
  },
  tags: ["CONVERSATIONAL MEMORY", "QUERY REWRITING", "FOLLOW-UP QUESTIONS", "CONTEXTUAL RETRIEVAL"],
  visual: "conversational-retrieval",
  actions: [],
},

"04:GROUNDED GENERATION": {
  title: "GROUNDED GENERATION",
  layout: "wide",
  body: {
    problem:
      "AI-generated responses could not simply prioritise fluency. Responses needed to remain grounded in retrieved evidence and operational context.",
    built:
      "We implemented grounded response generation workflows including confidence evaluation, source-aware answering and insufficient-evidence handling.",
    mattered:
      "Grounded generation improved trustworthiness, reduced hallucination risk and helped create more explainable operational AI behaviour.",
  },
  tags: ["SOURCE-AWARE ANSWERS", "CONFIDENCE SCORING", "GROUNDED RESPONSES", "HALLUCINATION REDUCTION"],
  visual: "grounded-generation",
  actions: [],
},

"04:API ARCHITECTURE": {
  title: "API ARCHITECTURE",
  layout: "wide",
  body: {
    problem:
      "AI systems become difficult to scale or integrate operationally when retrieval and orchestration logic remain tightly coupled to local interfaces.",
    built:
      "We implemented a FastAPI-based service layer exposing retrieval, orchestration and response-generation workflows through authenticated API endpoints.",
    mattered:
      "The API architecture separated backend orchestration from frontend interaction, improving scalability, deployment flexibility and operational integration capability.",
  },
  tags: ["FASTAPI", "SERVICE LAYER", "API ENDPOINTS", "BACKEND ORCHESTRATION"],
  visual: "api-architecture",
  actions: [],
},

"04:SAFETY & GUARDRAILS": {
  title: "SAFETY & GUARDRAILS",
  layout: "wide",
  body: {
    problem:
      "Operational AI systems require safeguards to prevent unsupported answers, weak grounding and misleading responses.",
    built:
      "We implemented confidence evaluation, insufficient-evidence handling, clarification workflows and grounding checks to improve response safety and operational trust.",
    mattered:
      "Guardrails helped ensure the platform behaved more like a governance-aware operational system rather than an unconstrained generative chatbot.",
  },
  tags: ["INSUFFICIENT EVIDENCE", "CLARIFICATION WORKFLOWS", "CONFIDENCE EVALUATION", "GROUNDEDNESS CHECKS"],
  visual: "safety-guardrails",
  actions: [],
},

"05:DATASET PROFILING": {
  title: "Dataset Profiling",
  layout: "wide",
  body: {
    problem:
      "Operational datasets rarely arrive with clear structure, reliable metadata or obvious analytical pathways. Before any reasoning could happen, the system needed to understand what fields existed, which columns were useful and whether the data was suitable for analysis.",
    built:
      "I built a profiling layer that inspected uploaded datasets, identified date, categorical and numeric fields, detected missing values, suggested candidate metrics and dimensions, and produced a structured dataset profile for downstream analytical routing.",
    mattered:
      "Dataset profiling allowed the platform to move beyond static dashboards by making analytical decisions based on the actual structure and quality of the data provided.",
  },
  tags: ["DATASET INSPECTION", "SCHEMA DETECTION", "QUALITY CHECKS", "ANALYTICAL READINESS"],
  visual: "dataset-profiling",
  actions: [],
},

"05:INTELLIGENT ROUTING": {
  title: "Intelligent Routing",
  layout: "wide",
  body: {
    problem:
      "Operational questions can require very different analytical approaches. A trend question, variance question, anomaly question and risk question should not all be handled by the same generic workflow.",
    built:
      "I built routing logic that used the dataset profile and user question to select the most appropriate deterministic analytical workflow, directing requests toward trend analysis, variance analysis, anomaly detection, risk assessment or summary generation.",
    mattered:
      "Intelligent routing made the system behave more like an analytical copilot rather than a generic chat interface, improving reliability by sending questions to purpose-built analytical paths.",
  },
  tags: ["QUESTION ROUTING", "ANALYSIS SELECTION", "TOOL SELECTION", "DETERMINISTIC PATHS"],
  visual: "intelligent-routing",
  actions: [],
},

"05:DETERMINISTIC ANALYTICS": {
  title: "Deterministic Analytics",
  layout: "wide",
  body: {
    problem:
      "LLMs are useful for explanation, but they should not invent calculations or make unsupported analytical conclusions from business data.",
    built:
      "I implemented deterministic analytical tools for trend analysis, variance analysis, anomaly detection and risk assessment so that findings were generated from structured calculations rather than free-form model output.",
    mattered:
      "This created a trustworthy analytical foundation where AI could help explain results, but the core findings remained grounded in repeatable, testable logic.",
  },
  tags: ["TREND ANALYSIS", "VARIANCE ANALYSIS", "ANOMALY DETECTION", "RISK SCORING"],
  visual: "deterministic-analytics",
  actions: [],
},

"05:EVIDENCE GENERATION": {
  title: "Evidence Generation",
  layout: "wide",
  body: {
    problem:
      "Operational insights are only useful if users can understand where they came from. Findings without supporting evidence are difficult to trust, validate or act on.",
    built:
      "I implemented evidence generation so that analytical findings were linked back to supporting metrics, source rows, comparisons, calculated values and diagnostic context.",
    mattered:
      "Evidence generation transformed analytical outputs from simple summaries into traceable findings that could support operational review, governance and decision-making.",
  },
  tags: ["EVIDENCE ITEMS", "FINDING SUPPORT", "SOURCE DATA", "TRACEABILITY"],
  visual: "evidence-generation",
  actions: [],
},

"05:EXECUTIVE REASONING": {
  title: "Executive Reasoning",
  layout: "wide",
  body: {
    problem:
      "Analytical findings often remain too fragmented for executive use. Trends, anomalies and risks need to be interpreted together before they become useful decision-support information.",
    built:
      "I built an executive reasoning layer that synthesised analytical outputs into higher-level interpretations, connecting findings across tools and translating technical results into operational meaning.",
    mattered:
      "This helped move the platform from analytics output toward decision support, showing not only what happened but why it mattered operationally.",
  },
  tags: ["FINDING SYNTHESIS", "BUSINESS CONTEXT", "RISK INTERPRETATION", "DECISION SUPPORT"],
  visual: "executive-reasoning",
  actions: [],
},

"05:EXECUTIVE SUMMARY": {
  title: "Executive Summary",
  layout: "wide",
  body: {
    problem:
      "Operational leaders need concise, prioritised summaries rather than raw analytical output or long technical explanations.",
    built:
      "I built executive summary generation that converted evidence-backed findings into clear summaries, key risks, recommended actions and decision-support narratives.",
    mattered:
      "The executive summary layer made the platform useful to non-technical stakeholders by converting structured analysis into clear, reviewable and action-oriented output.",
  },
  tags: ["EXECUTIVE REPORTING", "RECOMMENDATIONS", "PRIORITISED INSIGHTS", "DECISION SUPPORT"],
  visual: "executive-summary",
  actions: [],
},

"05:AUDIT TRAIL": {
  title: "Audit Trail",
  layout: "wide",
  body: {
    problem:
      "Operational AI systems need to be reviewable. Users should be able to see what data was analysed, which tools ran, what evidence was used and how conclusions were produced.",
    built:
      "I implemented an audit trail concept that records dataset context, analytical steps, generated findings, evidence references and reasoning outputs so results can be reviewed and explained.",
    mattered:
      "Auditability helped ensure the platform behaved like a governance-aware operational system rather than a black-box AI assistant.",
  },
  tags: ["TRACEABILITY", "GOVERNANCE", "REPRODUCIBILITY", "REVIEWABILITY"],
  visual: "audit-trail",
  actions: [],
},

"05:TREND ANALYSIS": {
  title: "Trend Analysis",
  layout: "wide",
  body: {
    problem:
      "Leaders need to know whether metrics are genuinely changing over time, not react to isolated data points or anecdotes.",
    built:
      "Developed deterministic trend analysis that evaluates metric movement across periods, calculates percentage change and produces evidence-backed findings.",
    mattered:
      "Gave the platform a repeatable way to explain directional movement without relying on an LLM to infer trends from raw tables.",
  },
  tags: ["TREND DETECTION", "TIME SERIES", "MOVEMENT ANALYSIS", "DETERMINISTIC CALCULATION"],
  visual: "trend-analysis",
  actions: [],
},

"05:VARIANCE ANALYSIS": {
  title: "Variance Analysis",
  layout: "wide",
  body: {
    problem:
      "Operational risk often concentrates in specific departments or business units, but high-level summaries can hide where variance originates.",
    built:
      "Engineered variance analysis that compares metrics across categorical dimensions and identifies which groups drive the strongest operational differences.",
    mattered:
      "Converted broad operational movement into explainable business context by showing where issues were concentrated.",
  },
  tags: ["GROUP COMPARISON", "DEPARTMENT VARIANCE", "CONTRIBUTION ANALYSIS", "OPERATIONAL DIFFERENCES"],
  visual: "variance-analysis",
  actions: [],
},

"05:ANOMALY DETECTION": {
  title: "Anomaly Detection",
  layout: "wide",
  body: {
    problem:
      "Operational datasets contain unusual spikes, drops and outliers that are difficult to identify manually, especially at scale.",
    built:
      "Introduced deterministic anomaly detection using statistical thresholds to flag values materially outside expected operating ranges.",
    mattered:
      "Surfaced unusual events warranting investigation without subjective interpretation or model-generated assumptions.",
  },
  tags: ["OUTLIER DETECTION", "BASELINE COMPARISON", "Z-SCORE ANALYSIS", "EXCEPTION IDENTIFICATION"],
  visual: "anomaly-detection",
  actions: [],
},

"05:RISK ASSESSMENT": {
  title: "Risk Assessment",
  layout: "wide",
  body: {
    problem:
      "Analytical findings are not equally important. Users need to know which results require attention and which are lower priority.",
    built:
      "Designed a risk assessment layer that translates analytical outputs into prioritised findings using severity, evidence coverage and operational context.",
    mattered:
      "Made the platform decision-support oriented by turning raw analytical results into ranked operational priorities.",
  },
  tags: ["RISK SCORING", "FINDING PRIORITISATION", "SEVERITY EVALUATION", "REVIEW GUIDANCE"],
  visual: "risk-assessment",
  actions: [],
},

"05:DIRECT ANSWERS": {
  title: "Direct Answers",
  layout: "wide",
  body: {
    problem:
      "Business users ask direct operational questions and expect clear answers, but generic AI responses can be unsupported or disconnected from the data.",
    built:
      "Built direct answer workflows that generate concise responses from deterministic analysis and attach supporting evidence rather than free-form model assumptions.",
    mattered:
      "Made the platform easier to use while preserving trust, because responses remained grounded in analytical outputs and evidence items.",
  },
  tags: ["QUESTION ANSWERING", "ANALYTICAL RESPONSE", "EVIDENCE-BACKED ANSWERS", "EXECUTIVE Q&A"],
  visual: "direct-answers",
  actions: [],
},

"05:EVIDENCE TRANSPARENCY": {
  title: "Evidence Transparency",
  layout: "wide",
  body: {
    problem:
      "AI-assisted operational systems must show why a conclusion was reached. Without transparency, users cannot validate or trust the output.",
    built:
      "Integrated evidence transparency into the output layer so claims could be linked back to supporting calculations, source data and analytical findings.",
    mattered:
      "Improved trust and reviewability by making every important answer traceable to the underlying analysis.",
  },
  tags: ["EVIDENCE TRAIL", "SOURCE SUPPORT", "CLAIM VALIDATION", "TRANSPARENT OUTPUTS"],
  visual: "evidence-transparency",
  actions: [],
},

"05:AUDIT & VERIFICATION": {
  title: "Audit & Verification",
  layout: "wide",
  body: {
    problem:
      "Operational AI outputs must be reviewable and defensible, especially for governance, risk and executive decision support.",
    built:
      "Implemented audit and verification patterns that record datasets, analytical tools, evidence references, calculation paths and AI involvement.",
    mattered:
      "Helped ensure the platform behaved like a governance-aware operational system rather than a black-box AI assistant.",
  },
  tags: ["AUDITABILITY", "REVIEW CONTROLS", "GOVERNANCE", "VERIFICATION CHECKS"],
  visual: "audit-verification",
  actions: [],
},

"05:GOLDEN DATASETS": {
  title: "Golden Datasets",
  layout: "wide",
  body: {
    problem:
      "Complex analytical systems are difficult to trust without stable test datasets representing known scenarios and expected outputs.",
    built:
      "Created a golden dataset approach using curated operational datasets with known structures, expected patterns and repeatable testing scenarios.",
    mattered:
      "Made it possible to validate analytical behaviour consistently as the platform evolved.",
  },
  tags: ["TEST DATASETS", "EXPECTED PATTERNS", "REGRESSION SAFETY", "QUALITY BASELINES"],
  visual: "golden-datasets",
  actions: [],
},

"05:GOLDEN USER JOURNEYS": {
  title: "Golden User Journeys",
  layout: "wide",
  body: {
    problem:
      "Individual tool tests are useful, but they do not prove the full journey works from question through analysis, evidence and summary.",
    built:
      "Introduced golden user journeys to test complete operational workflows across profiling, routing, analytics, evidence generation and executive output.",
    mattered:
      "Helped validate the platform from a user perspective rather than only testing isolated components.",
  },
  tags: ["END-TO-END TESTING", "USER FLOWS", "JOURNEY VALIDATION", "QUALITY ENGINEERING"],
  visual: "golden-user-journeys",
  actions: [],
},

"05:REGRESSION TESTING": {
  title: "Regression Testing",
  layout: "wide",
  body: {
    problem:
      "As analytical and AI-assisted systems grow, small changes can accidentally break previously working behaviour.",
    built:
      "Added regression testing to verify that core workflows continued producing expected outputs across profiling, routing, analytics, evidence and summary generation.",
    mattered:
      "Gave the platform stronger engineering reliability and reduced the risk of silent behavioural drift.",
  },
  tags: ["AUTOMATED TESTING", "QUALITY CONTROL", "EXPECTED OUTPUTS", "ENGINEERING CONFIDENCE"],
  visual: "regression-testing",
  actions: [],
},

"05:LLM FALLBACKS": {
  title: "LLM Fallbacks",
  layout: "wide",
  body: {
    problem:
      "Operational systems should not fail or invent conclusions when an LLM is unavailable, unreliable or inappropriate for a given task.",
    built:
      "Designed fallback behaviour where deterministic analysis and evidence generation still run even when AI-assisted narrative generation is disabled or unavailable.",
    mattered:
      "Made the platform more reliable by ensuring users still receive structured analytical outputs without unsupported AI conclusions.",
  },
  tags: ["FAILSAFE BEHAVIOUR", "LLM RESILIENCE", "DETERMINISTIC OUTPUTS", "SAFE DEGRADATION"],
  visual: "llm-fallbacks",
  actions: [],
},
}