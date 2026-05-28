export const layerDetails = {
    "02:ADDRESS INPUT": {
      title: "Address Input",
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
}