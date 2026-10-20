import { useId } from "react"

const stroke = {
  ai: "#22d3ee",
  rules: "#c4b5fd",
  database: "#34d399",
  external: "#e4e4e7",
  human: "#e879f9",
  failure: "#fb7185",
  simulated: "#fbbf24",
  dead: "#a1a1aa",
  note: "#67e8f9",
}

const fill = {
  ai: "rgba(34,211,238,0.14)",
  rules: "rgba(139,92,246,0.16)",
  database: "rgba(16,185,129,0.14)",
  external: "rgba(255,255,255,0.04)",
  human: "rgba(217,70,239,0.14)",
  failure: "rgba(244,63,94,0.12)",
  simulated: "rgba(245,158,11,0.12)",
  dead: "rgba(255,255,255,0.03)",
  note: "rgba(34,211,238,0.08)",
}

const kicker = {
  ai: "AI / LLM",
  rules: "Deterministic",
  database: "Database",
  external: "External",
  human: "Human",
  failure: "Stop",
  simulated: "Simulated",
  dead: "Not connected",
  note: "",
}

const legend = [
  ["ai", "AI / LLM"],
  ["rules", "Deterministic"],
  ["database", "Database"],
  ["external", "External system"],
  ["human", "Human"],
  ["failure", "Failure or stop"],
  ["simulated", "Simulated"],
  ["dead", "Not connected"],
]

function diamondPoints({ x, y, w, h }) {
  const cx = x + w / 2
  const cy = y + h / 2
  return `${cx},${y} ${x + w},${cy} ${cx},${y + h} ${x},${cy}`
}

function cylinderPath({ x, y, w, h }) {
  const ry = 9
  return [
    `M ${x} ${y + ry}`,
    `A ${w / 2} ${ry} 0 0 1 ${x + w} ${y + ry}`,
    `L ${x + w} ${y + h - ry}`,
    `A ${w / 2} ${ry} 0 0 1 ${x} ${y + h - ry}`,
    "Z",
  ].join(" ")
}

function pathFrom(points) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point[0]} ${point[1]}`).join(" ")
}

function Node({ node }) {
  const color = stroke[node.kind]
  const { x, y, w, h } = node
  const cx = x + w / 2
  const dash = node.kind === "dead" ? "5 4" : undefined
  const lines = node.lines || [node.title]

  return (
    <g>
      {node.shape === "decision" ? (
        <polygon
          points={diamondPoints(node)}
          fill={fill[node.kind]}
          stroke={color}
          strokeWidth="1.6"
        />
      ) : node.shape === "datastore" ? (
        <path d={cylinderPath(node)} fill={fill[node.kind]} stroke={color} strokeWidth="1.6" />
      ) : (
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          rx={node.shape === "end" ? 18 : 12}
          fill={fill[node.kind]}
          stroke={color}
          strokeWidth="1.6"
          strokeDasharray={dash}
        />
      )}
      {node.shape !== "decision" && kicker[node.kind] && (
        <text
          x={x + 12}
          y={y + 16}
          fill={color}
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          {kicker[node.kind]}
        </text>
      )}
      <text
        x={node.shape === "decision" ? cx : x + 12}
        y={node.shape === "decision" ? y + h / 2 - (lines.length - 1) * 7 : y + (kicker[node.kind] ? 34 : 22)}
        fill="#f4f4f5"
        fontSize={node.shape === "decision" ? 12 : 13}
        fontWeight="700"
        textAnchor={node.shape === "decision" ? "middle" : "start"}
      >
        {lines.map((line, index) => (
          <tspan
            key={line}
            x={node.shape === "decision" ? cx : x + 12}
            dy={index === 0 ? 0 : 15}
          >
            {line}
          </tspan>
        ))}
      </text>
      {node.detail && node.shape !== "decision" && (
        <text x={x + 12} y={y + h - 14} fill="#a1a1aa" fontSize="11">
          {node.detail}
        </text>
      )}
    </g>
  )
}

function Edge({ edge, marker }) {
  return (
    <g>
      <path
        d={pathFrom(edge.points)}
        fill="none"
        stroke={edge.tone === "fail" ? stroke.failure : edge.tone === "dead" ? stroke.dead : "#67e8f9"}
        strokeWidth="1.6"
        strokeDasharray={edge.tone === "dead" ? "5 4" : undefined}
        markerEnd={edge.arrow === false ? undefined : `url(#${marker})`}
      />
      {edge.label && (
        <g>
          <rect
            x={edge.labelAt[0] - edge.label.length * 3.3 - 6}
            y={edge.labelAt[1] - 9}
            width={edge.label.length * 6.6 + 12}
            height="16"
            rx="4"
            fill="#09090b"
            stroke={edge.tone === "fail" ? stroke.failure : "#3f3f46"}
          />
          <text
            x={edge.labelAt[0]}
            y={edge.labelAt[1] + 3}
            fill={edge.tone === "fail" ? "#fecdd3" : "#e4e4e7"}
            fontSize="10"
            fontWeight="700"
            textAnchor="middle"
          >
            {edge.label}
          </text>
        </g>
      )}
    </g>
  )
}

export function FlowSvg({ graph, title }) {
  const uid = useId().replace(/:/g, "")
  const markers = {
    flow: `${uid}-flow`,
    fail: `${uid}-fail`,
    dead: `${uid}-dead`,
  }

  return (
    <div className="min-w-0 max-w-full">
      <div className="mb-3 flex flex-wrap gap-2">
        {legend.map(([kind, label]) => (
          <span
            key={kind}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: stroke[kind] }}
            />
            {label}
          </span>
        ))}
      </div>
      <div
        className="max-w-full min-w-0 overflow-x-auto rounded-2xl border border-white/10 bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
        tabIndex={0}
        aria-label={title}
      >
        <p className="px-3 pt-3 text-[11px] text-zinc-500 md:hidden">
          Scroll horizontally to follow the flow.
        </p>
        <svg
          width={graph.width}
          height={graph.height}
          viewBox={`0 0 ${graph.width} ${graph.height}`}
          role="img"
          className="mx-auto block"
        >
          <title>{title}</title>
          <defs>
            <marker id={markers.flow} markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="#67e8f9" />
            </marker>
            <marker id={markers.fail} markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill={stroke.failure} />
            </marker>
            <marker id={markers.dead} markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill={stroke.dead} />
            </marker>
          </defs>
          {graph.edges.map((edge) => (
            <Edge
              key={edge.id}
              edge={edge}
              marker={edge.tone === "fail" ? markers.fail : edge.tone === "dead" ? markers.dead : markers.flow}
            />
          ))}
          {graph.nodes.map((node) => (
            <Node key={node.id} node={node} />
          ))}
        </svg>
      </div>
    </div>
  )
}

const supportGraph = {
  width: 880,
  height: 900,
  nodes: [
    {
      id: "sample",
      x: 16,
      y: 16,
      w: 210,
      h: 72,
      kind: "dead",
      lines: ["Sample email"],
      detail: "Present. No outgoing connection.",
    },
    {
      id: "gmail",
      x: 250,
      y: 24,
      w: 270,
      h: 64,
      kind: "external",
      lines: ["Gmail trigger"],
      detail: "Polls unread mail on a configured label.",
    },
    {
      id: "error",
      x: 560,
      y: 16,
      w: 300,
      h: 80,
      kind: "failure",
      lines: ["Attached error workflow"],
      detail: "Slack: workflow, failed node, error, URL.",
    },
    {
      id: "norm",
      x: 250,
      y: 124,
      w: 270,
      h: 64,
      kind: "rules",
      lines: ["Normalise"],
      detail: "Sender, subject, and body.",
    },
    {
      id: "empty",
      x: 285,
      y: 220,
      w: 200,
      h: 112,
      shape: "decision",
      kind: "rules",
      lines: ["Empty body?"],
    },
    {
      id: "manual",
      x: 16,
      y: 246,
      w: 220,
      h: 72,
      kind: "human",
      lines: ["Slack #operations"],
      detail: "Manual review. Model is not called.",
    },
    {
      id: "openai",
      x: 540,
      y: 236,
      w: 300,
      h: 78,
      kind: "ai",
      lines: ["OpenAI strict JSON"],
      detail: "Category, summary, urgent, meaningful.",
    },
    {
      id: "switch",
      x: 540,
      y: 348,
      w: 300,
      h: 64,
      kind: "rules",
      lines: ["n8n Switch"],
      detail: "Route is chosen by category, not the model.",
    },
    {
      id: "billing",
      x: 250,
      y: 470,
      w: 145,
      h: 52,
      kind: "external",
      lines: ["#billing-support"],
    },
    {
      id: "technical",
      x: 410,
      y: 470,
      w: 155,
      h: 52,
      kind: "external",
      lines: ["#technical-support"],
    },
    {
      id: "account",
      x: 580,
      y: 470,
      w: 145,
      h: 52,
      kind: "external",
      lines: ["#account-support"],
    },
    {
      id: "ops",
      x: 740,
      y: 470,
      w: 120,
      h: 52,
      kind: "external",
      lines: ["#operations"],
    },
    {
      id: "urgent",
      x: 470,
      y: 570,
      w: 190,
      h: 108,
      shape: "decision",
      kind: "rules",
      lines: ["Urgent?"],
    },
    {
      id: "urgentCh",
      x: 720,
      y: 592,
      w: 140,
      h: 64,
      kind: "external",
      lines: ["#urgent-support"],
      detail: "Additional channel.",
    },
    {
      id: "read",
      x: 250,
      y: 800,
      w: 270,
      h: 64,
      kind: "rules",
      shape: "end",
      lines: ["Mark Gmail read"],
      detail: "Only after the Slack message is sent.",
    },
  ],
  edges: [
    { id: "g-n", points: [[385, 88], [385, 124]] },
    { id: "n-e", points: [[385, 188], [385, 220]] },
    {
      id: "e-yes",
      points: [[285, 276], [236, 276]],
      label: "Yes",
      labelAt: [260, 264],
    },
    {
      id: "e-no",
      points: [[485, 276], [540, 276]],
      label: "No",
      labelAt: [512, 264],
    },
    { id: "o-s", points: [[690, 314], [690, 348]] },
    { id: "s-bus", points: [[690, 412], [690, 448], [322, 448]], arrow: false },
    { id: "s-bill", points: [[322, 448], [322, 470]] },
    { id: "s-tech", points: [[487, 448], [487, 470]] },
    { id: "s-acc", points: [[652, 448], [652, 470]] },
    { id: "s-ops", points: [[800, 448], [800, 470]] },
    { id: "bus-right", points: [[322, 448], [800, 448]], arrow: false },
    { id: "ch-merge", points: [[322, 522], [322, 548], [800, 548]], arrow: false },
    { id: "tech-m", points: [[487, 522], [487, 548]] },
    { id: "acc-m", points: [[652, 522], [652, 548]] },
    { id: "ops-m", points: [[800, 522], [800, 548]] },
    { id: "merge-d", points: [[565, 548], [565, 570]] },
    {
      id: "u-yes",
      points: [[660, 624], [720, 624]],
      label: "Yes",
      labelAt: [690, 612],
    },
    {
      id: "u-no",
      points: [[565, 678], [565, 832], [520, 832]],
      label: "No",
      labelAt: [548, 740],
    },
    { id: "urg-down", points: [[790, 656], [790, 832], [520, 832]] },
    { id: "man-down", points: [[126, 318], [126, 832], [250, 832]] },
  ],
}

const invoiceGraph = {
  width: 760,
  height: 1420,
  nodes: [
    {
      id: "trigger",
      x: 36,
      y: 16,
      w: 320,
      h: 76,
      kind: "external",
      lines: ["Manual trigger"],
      detail: "Inactive. One mounted PDF. No watcher.",
    },
    {
      id: "extract",
      x: 36,
      y: 124,
      w: 320,
      h: 64,
      kind: "rules",
      lines: ["Extract PDF text"],
      detail: "Text is taken before the model call.",
    },
    {
      id: "llm",
      x: 36,
      y: 220,
      w: 320,
      h: 76,
      kind: "ai",
      lines: ["GPT-5.6-Luna"],
      detail: "Supplier, number, date, amounts.",
    },
    {
      id: "checks",
      x: 96,
      y: 328,
      w: 200,
      h: 116,
      shape: "decision",
      kind: "rules",
      lines: ["Checks pass?", "Fields and totals"],
    },
    {
      id: "checkFail",
      x: 430,
      y: 348,
      w: 300,
      h: 76,
      kind: "failure",
      shape: "end",
      lines: ["Slack #operations"],
      detail: "Missing fields, a negative amount, or totals that disagree.",
    },
    {
      id: "count",
      x: 46,
      y: 480,
      w: 300,
      h: 80,
      shape: "datastore",
      kind: "database",
      lines: ["PostgreSQL count"],
      detail: "Has this invoice already been processed?",
    },
    {
      id: "dup",
      x: 96,
      y: 596,
      w: 200,
      h: 108,
      shape: "decision",
      kind: "rules",
      lines: ["Duplicate?"],
    },
    {
      id: "dupStop",
      x: 430,
      y: 616,
      w: 300,
      h: 68,
      kind: "failure",
      shape: "end",
      lines: ["Stop"],
      detail: "Count is above zero. No second submit.",
    },
    {
      id: "insert",
      x: 36,
      y: 740,
      w: 320,
      h: 64,
      kind: "database",
      lines: ["Insert invoice"],
      detail: "New PostgreSQL row.",
    },
    {
      id: "key",
      x: 36,
      y: 836,
      w: 320,
      h: 72,
      kind: "database",
      lines: ["Idempotency key"],
      detail: "INSERT … ON CONFLICT DO NOTHING.",
    },
    {
      id: "newKey",
      x: 96,
      y: 940,
      w: 200,
      h: 108,
      shape: "decision",
      kind: "rules",
      lines: ["New key?"],
    },
    {
      id: "noPost",
      x: 430,
      y: 960,
      w: 300,
      h: 68,
      kind: "failure",
      shape: "end",
      lines: ["No accounting POST"],
      detail: "That key was already registered.",
    },
    {
      id: "http",
      x: 36,
      y: 1084,
      w: 320,
      h: 76,
      kind: "simulated",
      lines: ["POST httpbin.org/post"],
      detail: "Simulated API. Idempotency-Key header.",
    },
    {
      id: "httpGate",
      x: 96,
      y: 1192,
      w: 200,
      h: 108,
      shape: "decision",
      kind: "rules",
      lines: ["HTTP ok?"],
    },
    {
      id: "httpFail",
      x: 430,
      y: 1210,
      w: 300,
      h: 76,
      kind: "failure",
      shape: "end",
      lines: ["FAILED + Slack"],
      detail: "Node error output. No error-workflow link.",
    },
    {
      id: "httpOk",
      x: 36,
      y: 1336,
      w: 320,
      h: 64,
      shape: "end",
      kind: "rules",
      lines: ["POST completed"],
      detail: "No further system is called.",
    },
  ],
  edges: [
    { id: "t-e", points: [[196, 92], [196, 124]] },
    { id: "e-l", points: [[196, 188], [196, 220]] },
    { id: "l-c", points: [[196, 296], [196, 328]] },
    {
      id: "c-no",
      points: [[296, 386], [430, 386]],
      label: "No",
      labelAt: [360, 374],
      tone: "fail",
    },
    {
      id: "c-yes",
      points: [[196, 444], [196, 480]],
      label: "Yes",
      labelAt: [214, 466],
    },
    { id: "count-d", points: [[196, 560], [196, 596]] },
    {
      id: "d-yes",
      points: [[296, 650], [430, 650]],
      label: "Count > 0",
      labelAt: [360, 636],
      tone: "fail",
    },
    {
      id: "d-no",
      points: [[196, 704], [196, 740]],
      label: "Count = 0",
      labelAt: [230, 726],
    },
    { id: "i-k", points: [[196, 804], [196, 836]] },
    { id: "k-n", points: [[196, 908], [196, 940]] },
    {
      id: "n-no",
      points: [[296, 994], [430, 994]],
      label: "Conflict",
      labelAt: [358, 982],
      tone: "fail",
    },
    {
      id: "n-yes",
      points: [[196, 1048], [196, 1084]],
      label: "Inserted",
      labelAt: [230, 1070],
    },
    { id: "h-gate", points: [[196, 1160], [196, 1192]] },
    {
      id: "h-no",
      points: [[296, 1246], [430, 1246]],
      label: "Error",
      labelAt: [360, 1234],
      tone: "fail",
    },
    {
      id: "h-yes",
      points: [[196, 1300], [196, 1336]],
      label: "Ok",
      labelAt: [214, 1322],
    },
  ],
}

const revenueGraph = {
  width: 820,
  height: 640,
  nodes: [
    {
      id: "banner",
      x: 170,
      y: 12,
      w: 480,
      h: 36,
      kind: "note",
      shape: "end",
      lines: ["No language model is used"],
    },
    {
      id: "schedule",
      x: 24,
      y: 76,
      w: 280,
      h: 72,
      kind: "rules",
      lines: ["Schedule 06:00"],
      detail: "Australia/Sydney. Previous day.",
    },
    {
      id: "manual",
      x: 516,
      y: 76,
      w: 280,
      h: 72,
      kind: "rules",
      lines: ["Manual trigger"],
      detail: "Fixed date 15 September 2026.",
    },
    {
      id: "sql",
      x: 230,
      y: 210,
      w: 360,
      h: 96,
      shape: "datastore",
      kind: "database",
      lines: ["One PostgreSQL query"],
      detail: "Source rows, totals, duplicates, coverage, nulls.",
    },
    {
      id: "pass",
      x: 310,
      y: 340,
      w: 200,
      h: 112,
      shape: "decision",
      kind: "rules",
      lines: ["overall_pass?"],
    },
    {
      id: "ready",
      x: 24,
      y: 490,
      w: 300,
      h: 72,
      kind: "rules",
      shape: "end",
      lines: ["READY on this run"],
      detail: "Not written back to PostgreSQL.",
    },
    {
      id: "slack",
      x: 496,
      y: 490,
      w: 300,
      h: 84,
      kind: "failure",
      lines: ["Slack #operations"],
      detail: "Text reads the scheduled date context.",
    },
    {
      id: "err",
      x: 24,
      y: 590,
      w: 772,
      h: 36,
      kind: "note",
      lines: ["Attached error workflow: Slack alert. Not an item branch."],
    },
  ],
  edges: [
    { id: "sch-j", points: [[164, 148], [164, 180], [410, 180]], arrow: false },
    { id: "man-j", points: [[656, 148], [656, 180], [410, 180]], arrow: false },
    { id: "j-sql", points: [[410, 180], [410, 210]] },
    { id: "sql-p", points: [[410, 306], [410, 340]] },
    {
      id: "p-yes",
      points: [[310, 396], [174, 396], [174, 490]],
      label: "Yes",
      labelAt: [250, 384],
    },
    {
      id: "p-no",
      points: [[510, 396], [646, 396], [646, 490]],
      label: "No",
      labelAt: [560, 384],
      tone: "fail",
    },
  ],
}

const travelGraph = {
  width: 780,
  height: 980,
  nodes: [
    {
      id: "form",
      x: 40,
      y: 16,
      w: 340,
      h: 84,
      kind: "external",
      lines: ["Request form"],
      detail: "Rates are entered here, not read from a policy system.",
    },
    {
      id: "valid",
      x: 110,
      y: 132,
      w: 200,
      h: 116,
      shape: "decision",
      kind: "rules",
      lines: ["Input valid?"],
    },
    {
      id: "invalid",
      x: 470,
      y: 152,
      w: 280,
      h: 76,
      kind: "failure",
      shape: "end",
      lines: ["Slack and stop"],
      detail: "Rates, dates, or employee id failed.",
    },
    {
      id: "auth",
      x: 90,
      y: 284,
      w: 240,
      h: 120,
      shape: "decision",
      kind: "rules",
      lines: ["Within authority?", "≤ $50 and ≤ 3 nights"],
    },
    {
      id: "outside",
      x: 470,
      y: 304,
      w: 280,
      h: 80,
      kind: "dead",
      lines: ["No next node"],
      detail: "No manager escalation is connected.",
    },
    {
      id: "llm",
      x: 70,
      y: 444,
      w: 280,
      h: 76,
      kind: "ai",
      lines: ["GPT-5.6-Luna"],
      detail: "Interpret the reason. Must not approve.",
    },
    {
      id: "wait",
      x: 70,
      y: 552,
      w: 280,
      h: 68,
      kind: "human",
      lines: ["Slack wait form"],
      detail: "A person chooses APPROVE or REJECT.",
    },
    {
      id: "decision",
      x: 110,
      y: 652,
      w: 200,
      h: 108,
      shape: "decision",
      kind: "human",
      lines: ["Decision"],
    },
    {
      id: "approve",
      x: 24,
      y: 796,
      w: 160,
      h: 48,
      kind: "human",
      lines: ["Approve"],
    },
    {
      id: "reject",
      x: 236,
      y: 796,
      w: 160,
      h: 48,
      kind: "human",
      lines: ["Reject"],
    },
    {
      id: "record",
      x: 40,
      y: 876,
      w: 340,
      h: 72,
      kind: "rules",
      shape: "end",
      lines: ["Recorded on the execution"],
      detail: "Requester is notified. No database audit store.",
    },
  ],
  edges: [
    { id: "f-v", points: [[210, 100], [210, 132]] },
    {
      id: "v-no",
      points: [[310, 190], [470, 190]],
      label: "No",
      labelAt: [380, 178],
      tone: "fail",
    },
    {
      id: "v-yes",
      points: [[210, 248], [210, 284]],
      label: "Yes",
      labelAt: [228, 270],
    },
    {
      id: "a-no",
      points: [[330, 344], [470, 344]],
      label: "No",
      labelAt: [390, 332],
      tone: "dead",
    },
    {
      id: "a-yes",
      points: [[210, 404], [210, 444]],
      label: "Yes",
      labelAt: [228, 428],
    },
    { id: "l-w", points: [[210, 520], [210, 552]] },
    { id: "w-d", points: [[210, 620], [210, 652]] },
    {
      id: "d-a",
      points: [[110, 706], [104, 706], [104, 796]],
      label: "Approve",
      labelAt: [150, 730],
    },
    {
      id: "d-r",
      points: [[310, 706], [316, 706], [316, 796]],
      label: "Reject",
      labelAt: [360, 730],
      tone: "fail",
    },
    { id: "a-join", points: [[104, 844], [104, 860], [210, 860]], arrow: false },
    { id: "r-join", points: [[316, 844], [316, 860], [210, 860]], arrow: false },
    { id: "join-rec", points: [[210, 860], [210, 876]] },
  ],
}

const graphs = {
  support: supportGraph,
  invoice: invoiceGraph,
  revenue: revenueGraph,
  travel: travelGraph,
}

const titles = {
  support: "Support intake and triage flow",
  invoice: "Invoice intake and validation flow",
  revenue: "Daily revenue validation flow",
  travel: "Travel exception approval flow",
}

export default function NorthstarFlowchart({ workflowId }) {
  const graph = graphs[workflowId]
  if (!graph) return null
  return <FlowSvg graph={graph} title={titles[workflowId]} />
}
