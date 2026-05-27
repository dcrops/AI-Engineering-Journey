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
  }