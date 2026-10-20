export const northstarWorkflows = [
  {
    id: "support",
    layer: "SUPPORT TRIAGE",
    title: "Support Intake & Triage",
    purpose:
      "Classifies incoming support emails, assesses urgency and routes requests to the appropriate Slack team, with manual review for unclear cases.",
    summary:
      "Unread Gmail is classified and routed. The model interprets the email. Workflow rules choose the channel.",
    activeLabel: "Active",
    steps: [
      { label: "Gmail trigger", detail: "Unread mail on a configured label", mode: "rules" },
      { label: "Normalise", detail: "Sender, subject, and body", mode: "rules" },
      { label: "Empty body", detail: "Skip the model and ask for review", mode: "rules" },
      { label: "OpenAI", detail: "Category, summary, urgency, meaningful request", mode: "ai" },
      { label: "Switch", detail: "Billing, technical, account, or other", mode: "rules" },
      { label: "Slack", detail: "Category channel, plus urgent when flagged", mode: "rules" },
      { label: "Mark read", detail: "Only after the Slack message is sent", mode: "rules" },
    ],
    body: {
      problem:
        "Support mail needs a category, a summary, and an urgency judgement before someone can route it. An empty or meaningless message should not be classified as a real request.",
      built:
        "The active n8n workflow polls unread Gmail on a configured label, retrieves the full message, and normalises it to sender, subject, and body. An empty body goes to Slack for manual review and does not call the model. Otherwise OpenAI returns a strict object with category, summary, urgent, and has_meaningful_request. A Switch routes BILLING, TECHNICAL, ACCOUNT, and OTHER to separate Slack channels. Urgent items also go to the urgent channel. Gmail is marked read after the Slack send. Retry-on-fail is enabled on the Gmail and Slack nodes. An error workflow sends a Slack failure alert.",
      mattered:
        "The model interprets language. The workflow decides the route, the review path, and when a message counts as processed.",
    },
    notes: [
      "A separate error workflow is attached.",
      "The stored node settings enable retry-on-fail and do not record an explicit retry count.",
      "A manual sample-email node is present and is not connected to the live path.",
    ],
  },
  {
    id: "invoice",
    layer: "INVOICE VALIDATION",
    title: "Invoice Intake & Validation",
    purpose:
      "Extracts invoice data from PDFs, validates totals, detects duplicates and controls downstream processing using deterministic checks and idempotency.",
    summary:
      "A PDF is extracted by a model, then checked, deduplicated, and sent only as far as a simulated accounting API.",
    activeLabel: "Present, inactive",
    steps: [
      { label: "Manual PDF", detail: "One mounted training invoice", mode: "rules" },
      { label: "Extract text", detail: "PDF text before the model call", mode: "rules" },
      { label: "OpenAI", detail: "Supplier, number, date, subtotal, GST, total", mode: "ai" },
      { label: "Field checks", detail: "Required fields and arithmetic", mode: "rules" },
      { label: "PostgreSQL", detail: "Duplicate count and idempotency key", mode: "rules" },
      { label: "httpbin", detail: "Simulated accounting POST", mode: "simulated" },
    ],
    body: {
      problem:
        "Invoice intake needs the fields from a PDF, but a language model should not decide whether the amounts reconcile, whether the invoice was already processed, or whether it may be submitted.",
      built:
        "A manual run reads one mounted PDF and extracts its text. GPT-5.6-Luna returns supplier name, invoice number, invoice date, subtotal, GST, and total. Deterministic checks require those identity fields, non-negative amounts, and subtotal plus GST within 0.01 of the total. Failures go to Slack. Passing invoices are counted in PostgreSQL. A count above zero stops as a duplicate. New invoices are inserted, then an idempotency key is inserted with ON CONFLICT DO NOTHING. Only a newly registered key is posted to https://httpbin.org/post. An HTTP failure sets the invoice status to FAILED and notifies Slack.",
      mattered:
        "Extraction is probabilistic. Financial acceptance, deduplication, and the decision to submit are ordinary software checks. The accounting endpoint is simulated.",
    },
    notes: [
      "The workflow is present and currently inactive.",
      "It has no error-handler link. HTTP failure uses the node's error output.",
      "There is no inbox or folder watcher. The run reads one configured file.",
    ],
  },
  {
    id: "revenue",
    layer: "REVENUE VALIDATION",
    title: "Daily Revenue Validation",
    purpose:
      "Uses PostgreSQL and SQL reconciliation to identify incomplete, duplicated or inconsistent revenue data before downstream processing. No LLM required.",
    summary:
      "SQL checks source and aggregate revenue. No language model is used.",
    activeLabel: "Active",
    steps: [
      { label: "Schedule or manual", detail: "Previous day, or the fixed test date", mode: "rules" },
      { label: "PostgreSQL", detail: "One validation query", mode: "rules" },
      { label: "overall_pass", detail: "Totals, duplicates, coverage, nulls", mode: "rules" },
      { label: "Ready or Slack", detail: "In-workflow status, or an operations alert", mode: "rules" },
    ],
    body: {
      problem:
        "Revenue data needs exact checks before anything downstream treats it as ready. A language model is the wrong tool for totals, duplicates, and nulls.",
      built:
        "The active workflow has a manual path fixed to 15 September 2026 and a 06:00 Australia/Sydney schedule for the previous day. One PostgreSQL query checks that source rows exist, that source and aggregate totals match, that customer and date groups are not duplicated, that completed customers appear in the aggregate, and that required aggregate fields are not null. The combined result is overall_pass. A pass sets an in-workflow READY status. A failure notifies the operations Slack channel. The shared error workflow is attached.",
      mattered:
        "This prototype deliberately uses deterministic SQL. The ready status is held in the workflow run. It is not written back to PostgreSQL.",
    },
    notes: [
      "No language model is used.",
      "The failure message reads the scheduled date context, which is not on the manual path.",
    ],
  },
  {
    id: "travel",
    layer: "TRAVEL APPROVAL",
    title: "Travel Exception Approval",
    purpose:
      "Checks travel exception requests against defined policy limits, using AI to interpret justifications while keeping approval decisions with a human reviewer.",
    summary:
      "A form request is validated in code. The model may interpret the reason. It cannot approve the exception.",
    activeLabel: "Active",
    steps: [
      { label: "Request form", detail: "Employee, travel, rates, and reason", mode: "rules" },
      { label: "Validate", detail: "Rates, dates, and EMP-1234", mode: "rules" },
      { label: "Authority", detail: "At most $50 over policy and 3 nights", mode: "rules" },
      { label: "OpenAI", detail: "Interpret the justification only", mode: "ai" },
      { label: "Slack and wait", detail: "APPROVE or REJECT on a form", mode: "rules" },
      { label: "Notify", detail: "Decision stays on the execution", mode: "rules" },
    ],
    body: {
      problem:
        "An employee can ask for a travel rate above policy, but the model must not be the approver and the request still has to be checked before anyone reviews it.",
      built:
        "An active form collects the employee, destination, dates, exception type, policy rate, requested rate, and justification. Code requires positive rates, a requested rate above the policy rate, a valid date order, a decision date no later than travel starts, and an employee id in EMP-1234 form. Invalid requests notify Slack and stop. Policy authority is hardcoded: the rate difference is at most $50 and the stay is at most 3 nights. Those rates are entered on the form. Requests outside that authority have no next node. Within authority, GPT-5.6-Luna may classify and summarise the justification and is instructed not to approve. Slack sends a review link. A form waits for APPROVE or REJECT. The decision is recorded on the execution and the requester is notified.",
      mattered:
        "Interpretation and authority are separate. There is no manager-escalation branch, no enterprise sign-in, and no database audit store.",
    },
    notes: [
      "No error-handler workflow is attached.",
      "Policy rates are form inputs. The authority limits are prototype rules in the workflow.",
    ],
  },
]

export const agenticSteps = [
  {
    id: "systems",
    label: "Mock business systems",
    detail: "CRM, booking, payment, policy, and reconciliation JSON",
    state: "simulated",
  },
  {
    id: "agents",
    label: "Specialist investigation",
    detail: "Evidence, booking/payment, policy, and reconciliation agents",
    state: "exercised",
  },
  {
    id: "supervisor",
    label: "Bounded supervisor",
    detail: "At most two specialist reruns and one reconciliation",
    state: "exercised",
  },
  {
    id: "validation",
    label: "Deterministic validation",
    detail: "Payment target, amount, evidence, and policy",
    state: "exercised",
  },
  {
    id: "approval",
    label: "Human approve or reject",
    detail: "LangGraph interrupt and FastAPI resume",
    state: "exercised",
  },
  {
    id: "n8n",
    label: "n8n and Slack",
    detail: "Approval form and result messages for the sample case",
    state: "exercised",
  },
  {
    id: "refund",
    label: "Refund execution",
    detail: "Not implemented",
    state: "outstanding",
  },
]

export const agenticDevelopmentStatus = {
  implemented: [
    "LangGraph investigation through specialist agents, a bounded supervisor, deterministic validation, and a human interrupt.",
    "FastAPI endpoints to start a case and resume it with approve or reject.",
    "The n8n Slack and form path for CASE-3001. Stored executions on 15 October 2026 finished both an approval and a rejection while the API process was running.",
  ],
  simulated: [
    "CRM, booking, payment, policy, and reconciliation data are local JSON files.",
    "The approval checkpoint lasts for the life of the API process.",
    "The n8n workflow was run manually. It is present and not currently active.",
  ],
  outstanding: [
    "No refund is executed.",
    "The validation-failure path exists in the graph and was not part of the stored n8n executions.",
    "The n8n branch for an investigation that does not need approval is not connected.",
    "Resume does not survive an API restart.",
    "There is no automated test suite, and the five-run reliability script has no stored result.",
  ],
}

export const agenticLayers = [
  {
    id: "investigation",
    layer: "CASE INVESTIGATION",
    title: "Case Investigation",
    steps: [
      { label: "Load mock records", detail: "Customer, booking, payments, policy", state: "simulated" },
      { label: "Evidence check", detail: "Deterministic satisfaction before the model", state: "exercised" },
      { label: "Specialists", detail: "Booking/payment and policy, in parallel", state: "exercised" },
      { label: "Supervisor", detail: "Finish, rerun, reconcile, or escalate", state: "exercised" },
      { label: "Reconciliation", detail: "One further evidence pass when needed", state: "exercised" },
    ],
    body: {
      problem:
        "A failed booking and two captured payments cannot be resolved from one system. The next investigative step depends on conflicting evidence, and the model must not have unrestricted access to those systems.",
      built:
        "The graph loads the sample case from local JSON, checks which evidence is already satisfied, and fans out to a booking/payment investigator and a policy specialist. A supervisor then chooses finish, a specialist rerun, reconciliation, or escalation. Specialist reruns stop at two. Reconciliation stops at one. The specialist, supervisor, and resolution nodes call gpt-4.1-mini. Routing and the rerun caps are ordinary code.",
      mattered:
        "The stored 15 October runs reached a validated resolution for CASE-3001, so this investigation path was exercised on the sample case. The systems behind it are fixtures.",
    },
  },
  {
    id: "validation",
    layer: "DETERMINISTIC VALIDATION",
    title: "Deterministic Validation",
    steps: [
      { label: "Resolution type", detail: "Must be the duplicate-payment refund", state: "exercised" },
      { label: "Payment target", detail: "Must match the duplicate payment record", state: "exercised" },
      { label: "Amount", detail: "Copied from the captured payment", state: "exercised" },
      { label: "Evidence and policy", detail: "Required conditions and a refund permission", state: "exercised" },
      { label: "Failure path", detail: "Ends without asking for approval", state: "outstanding" },
    ],
    body: {
      problem:
        "A model can propose a resolution. It must not choose the refund amount, select an unsupported payment, or continue when the evidence or policy check fails.",
      built:
        "The validation node accepts only refund_duplicate_payment. The target must match the duplicate payment id and that payment must be captured and not already refunded. The amount is copied from the payment record. Evidence for a single valid charge must be satisfied, and the policy text must permit a refund. Any failed check sets resolution_validated to false and ends the graph without the approval interrupt.",
      mattered:
        "The stored n8n executions show resolution_validated true, target PAY-4002, and the amount from that payment. The failure branch is implemented and was not part of those executions.",
    },
  },
  {
    id: "approval",
    layer: "HUMAN APPROVAL",
    title: "Human Approval",
    steps: [
      { label: "Interrupt", detail: "Case, proposal, payment, amount, and reason", state: "exercised" },
      { label: "FastAPI resume", detail: "approve or reject only", state: "exercised" },
      { label: "Checkpoint", detail: "In memory for this API process", state: "simulated" },
      { label: "Refund", detail: "Not executed after either decision", state: "outstanding" },
    ],
    body: {
      problem:
        "A validated duplicate-payment proposal is still a sensitive action. The model must not treat its own proposal as permission to proceed.",
      built:
        "When validation passes and human approval is required, LangGraph interrupts with the case id, resolution type, target payment, amount, reason, and policy basis. The approval payload does not include the CRM profile. FastAPI accepts only approve or reject and resumes that thread. The checkpoint is an in-memory saver kept for the life of the API process.",
      mattered:
        "Stored executions on 15 October 2026 resumed the same sample case once with approve and once with reject. Both results kept resolution_validated true and did not execute a refund. A restart of the API process would drop the paused thread.",
    },
  },
  {
    id: "n8n",
    layer: "N8N BUSINESS WORKFLOW",
    title: "n8n Business Workflow",
    steps: [
      { label: "Manual case", detail: "Fixed CASE-3001 request", state: "exercised" },
      { label: "Start API", detail: "POST /cases/investigate", state: "exercised" },
      { label: "Awaiting approval", detail: "Other outcomes are not connected", state: "outstanding" },
      { label: "Slack and form", detail: "approve or reject", state: "exercised" },
      { label: "Resume API", detail: "POST the decision", state: "exercised" },
      { label: "Result Slack", detail: "States that no refund was executed", state: "exercised" },
    ],
    body: {
      problem:
        "The Python graph can pause for a decision, but the business notification and the human form live in the surrounding workflow.",
      built:
        "A separate inactive n8n workflow sends the fixed CASE-3001 request to FastAPI on the host. It continues only when the response status is awaiting_approval. Slack carries the proposal and a form link. The form returns approve or reject, and n8n posts that decision to the approval endpoint. Separate Slack messages report the approved and rejected results. Both messages say that no refund was executed.",
      mattered:
        "Stored executions finished at both result notifications. The workflow is not active. An investigation that completes without needing approval has no connected n8n path.",
    },
  },
]

const northstarLayerDetails = Object.fromEntries(
  northstarWorkflows.map((workflow) => [
    `07:${workflow.layer}`,
    {
      title: workflow.title,
      layout: "wide",
      visual: `northstar-${workflow.id}`,
      body: workflow.body,
    },
  ]),
)

const agenticLayerDetails = Object.fromEntries(
  agenticLayers.map((layer) => [
    `08:${layer.layer}`,
    {
      title: layer.title,
      layout: "wide",
      visual: `agentic-${layer.id}`,
      body: layer.body,
    },
  ]),
)

export const workflowLayerDetails = {
  ...northstarLayerDetails,
  ...agenticLayerDetails,
}
