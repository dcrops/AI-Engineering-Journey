import {
    ClipboardList,
    Settings,
    Database,
    BarChart3,
    ShieldCheck,
    Crosshair,
    Info,
    CheckCircle2,
    Search,
    Star,
    XCircle,
    UserRound,
    RefreshCw,
  } from "lucide-react"
  
  const workflow = [
    ["1. Define Tests", "Curate answerable, partial and unsupported scenarios", ClipboardList],
    ["2. Run Evaluations", "Execute the RAG pipeline using different retrieval strategies", Settings],
    ["3. Collect Results", "Capture retrieved sources, groundedness and answer outcome", Database],
    ["4. Score & Analyse", "Score retrieval quality, groundedness and answer outcomes", BarChart3],
    ["5. Compare", "Compare strategies to identify best approach", ShieldCheck],
    ["6. Improve", "Use insights to refine orchestration and retrieval behaviour", Crosshair],
  ]
  
  const workflowColours = [
    "text-violet-300 border-violet-400/20 bg-violet-500/10",
    "text-blue-300 border-blue-400/20 bg-blue-500/10",
    "text-emerald-300 border-emerald-400/20 bg-emerald-500/10",
    "text-yellow-300 border-yellow-400/20 bg-yellow-500/10",
    "text-cyan-300 border-cyan-400/20 bg-cyan-500/10",
    "text-fuchsia-300 border-fuchsia-400/20 bg-fuchsia-500/10",
  ]
  
  const results = [
    ["0.88", "Groundedness Pass Rate", "88% grounded in retrieved sources", CheckCircle2, "text-emerald-300"],
    ["0.83", "Answerable Success Rate", "83% answered successfully", Search, "text-blue-300"],
    ["0.90", "Unsupported Accuracy", "90% correctly handled", ShieldCheck, "text-violet-300"],
    ["5.6", "Avg. Relevant Sources", "per question", Database, "text-yellow-300"],
    ["0.86", "Avg. Confidence Score", "on answered", ShieldCheck, "text-cyan-300"],
  ]
  
  const comparison = [
    ["Standard Retrieval", "15 / 20 (75%)", "0.83", "4.3", "0.87"],
    ["Document-Balanced Retrieval", "17 / 20 (85%)", "0.88", "5.6", "0.93"],
    ["Aggregation Retrieval", "18 / 20 (90%)", "0.92", "6.2", "0.90"],
  ]
  
  const summary = [
    ["Total Test Scenarios", "20", ClipboardList, "text-blue-300"],
    ["Total Pipeline Runs", "60", Settings, "text-cyan-300"],
    ["Answerable Scenarios", "12", CheckCircle2, "text-emerald-300"],
    ["Partially Answerable", "5", ShieldCheck, "text-yellow-300"],
    ["Unsupported Scenarios", "3", XCircle, "text-violet-300"],
    ["Average Overall Score", "0.87", ShieldCheck, "text-blue-300"],
  ]
  
  const enables = [
    ["Data-driven improvement", "Identify weaknesses and focus improvement effort", Crosshair, "text-violet-300"],
    ["Strategy selection", "Choose the best retrieval strategy based on evidence", BarChart3, "text-blue-300"],
    ["Quality assurance", "Ensure answers are grounded and reliable", ShieldCheck, "text-emerald-300"],
    ["Better user experience", "Handle unsupported questions with clarity", UserRound, "text-yellow-300"],
    ["Continuous iteration", "Re-run evaluations after changes", RefreshCw, "text-violet-300"],
  ]
  
  export default function EvaluationVisual() {
    return (
      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
        <SectionTitle>Evaluation Workflow</SectionTitle>
  
        <div className="mt-6 grid grid-cols-6 gap-4">
          {workflow.map(([title, description, Icon], index) => {
            const colourClasses = workflowColours[index]
  
            return (
              <div key={title} className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border ${colourClasses}`}
                  >
                    <Icon className={`h-6 w-6 ${colourClasses.split(" ")[0]}`} />
                  </div>
  
                  <div
                    className={`mt-4 text-[10px] font-black uppercase tracking-[0.15em] ${colourClasses.split(" ")[0]}`}
                  >
                    {title}
                  </div>
  
                  <p className="mt-2 text-xs leading-5 text-zinc-400">
                    {description}
                  </p>
                </div>
  
                {index !== workflow.length - 1 && (
                  <div className="absolute left-full top-7 hidden h-px w-4 bg-cyan-400/60 xl:block" />
                )}
              </div>
            )
          })}
        </div>
  
        <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-blue-300" />
            <p className="text-sm text-zinc-300">
              Evaluation provides objective feedback on retrieval quality,
              unsupported-answer handling and orchestration behaviour.
            </p>
          </div>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_1.35fr]">
          <Panel title="Evaluation Setup">
            <div className="space-y-4">
              <SetupRow
                title="Test Set"
                description="20 evaluation scenarios"
                items={[
                  "12 Answerable",
                  "5 Partially Answerable",
                  "3 Unsupported",
                ]}
              />
  
              <SetupRow
                title="Retrieval Strategies"
                description="Strategy comparison set"
                items={[
                  "Standard Retrieval",
                  "Document-Balanced Retrieval",
                  "Aggregation Retrieval",
                ]}
              />
  
              <SetupRow
                title="What We Evaluate"
                description="Quality dimensions"
                items={[
                  "Retrieval quality",
                  "Groundedness",
                  "Answer outcome",
                  "Orchestration behaviour",
                ]}
              />
            </div>
          </Panel>
  
          <Panel title="Overall Results">
            <div className="grid grid-cols-3 gap-4">
              {results.slice(0, 3).map(
                ([value, label, detail, Icon, colour]) => (
                  <ResultCard
                    key={label}
                    value={value}
                    label={label}
                    detail={detail}
                    Icon={Icon}
                    colour={colour}
                  />
                )
              )}
            </div>
  
            <div className="mt-4 grid grid-cols-2 gap-4">
              {results.slice(3).map(
                ([value, label, detail, Icon, colour]) => (
                  <ResultCard
                    key={label}
                    value={value}
                    label={label}
                    detail={detail}
                    Icon={Icon}
                    colour={colour}
                  />
                )
              )}
            </div>
          </Panel>
        </div>
  
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_1fr_0.8fr]">
          <Panel title="Strategy Comparison">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="grid grid-cols-[1.2fr_0.9fr_0.7fr_0.8fr_0.8fr] border-b border-white/10 px-4 py-3 text-[9px] font-black uppercase tracking-[0.14em] text-zinc-500">
                <div>Strategy</div>
                <div>Tests Passed</div>
                <div>Grounded</div>
                <div>Avg Sources</div>
                <div>Unsupported</div>
              </div>
  
              {comparison.map(
                ([strategy, passed, grounded, sources, unsupported]) => (
                  <div
                    key={strategy}
                    className="grid grid-cols-[1.2fr_0.9fr_0.7fr_0.8fr_0.8fr] border-b border-white/10 px-4 py-4 text-xs text-zinc-300 last:border-b-0"
                  >
                    <div className="font-semibold text-zinc-200">
                      {strategy}
                    </div>
                    <div>{passed}</div>
                    <div className="font-black text-emerald-300">
                      {grounded}
                    </div>
                    <div className="font-black text-emerald-300">
                      {sources}
                    </div>
                    <div>{unsupported}</div>
                  </div>
                )
              )}
            </div>
  
            <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-500/10 p-3 text-xs text-yellow-200">
              ★ Aggregation Retrieval performed best overall across retrieval
              quality and unsupported handling.
            </div>
          </Panel>
  
          <Panel title="Unsupported-Answer Testing">
            <div className="space-y-3">
              <MiniBlock title="Question">
                What is the budget allocation for campus renovations in 2030?
              </MiniBlock>
  
              <MiniBlock title="Expected Behaviour" tone="yellow">
                System should identify insufficient evidence and ask for
                clarification rather than guessing.
              </MiniBlock>
  
              <MiniBlock title="Pipeline Response" tone="cyan">
                I couldn’t find information about the 2030 campus renovation
                budget in the available documents.
              </MiniBlock>
  
              <div className="grid gap-3">
                <MiniMetric
                  label="Result"
                  value="Correctly handled"
                  colour="text-emerald-300"
                />
  
                <MiniMetric
                  label="Confidence"
                  value="0.19 Low"
                  colour="text-yellow-300"
                />
              </div>
            </div>
          </Panel>
  
          <Panel title="Evaluation Summary">
            <div className="space-y-3">
              {summary.map(([label, value, Icon, colour]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0"
                >
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Icon className={`h-5 w-5 ${colour}`} />
                    {label}
                  </div>
                  <div className="font-black text-white">{value}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
  
        <SectionTitle className="mt-6">What This Enables</SectionTitle>
  
        <div className="mt-4 grid grid-cols-5 gap-4">
          {enables.map(([title, detail, Icon, colour]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <Icon className={`h-6 w-6 ${colour}`} />
  
              <div className="mt-3 text-sm font-black text-white">
                {title}
              </div>
  
              <div className="mt-2 text-xs leading-5 text-zinc-500">
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  function SetupRow({ title, description, items }) {
    return (
      <div className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 xl:grid-cols-[0.8fr_1fr]">
        <div>
          <div className="text-sm font-black text-violet-300">{title}</div>
  
          <div className="mt-1 text-xs text-zinc-500">
            {description}
          </div>
        </div>
  
        <ul className="list-disc space-y-1 pl-4 text-xs leading-5 text-zinc-300">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  function ResultCard({ value, label, detail, Icon, colour }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <Icon className={`h-6 w-6 ${colour}`} />
  
        <div className="mt-3 text-3xl font-black text-white">
          {value}
        </div>
  
        <div className="mt-1 text-sm font-semibold text-zinc-200">
          {label}
        </div>
  
        <div className="mt-2 text-xs leading-5 text-zinc-500">
          {detail}
        </div>
      </div>
    )
  }
  
  function MiniBlock({ title, children, tone = "violet" }) {
    const tones = {
      violet: "border-violet-400/20 bg-violet-500/10",
      yellow: "border-yellow-400/20 bg-yellow-500/10",
      cyan: "border-cyan-400/20 bg-cyan-500/10",
    }
  
    return (
      <div className={`rounded-xl border p-4 ${tones[tone]}`}>
        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
          {title}
        </div>
  
        <div className="mt-2 text-sm leading-6 text-zinc-300">
          {children}
        </div>
      </div>
    )
  }
  
  function MiniMetric({ label, value, colour }) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
          {label}
        </div>
  
        <div className={`mt-1 text-sm font-black ${colour}`}>
          {value}
        </div>
      </div>
    )
  }
  
  function Panel({ title, children }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
        <SectionTitle>{title}</SectionTitle>
  
        <div className="mt-5">{children}</div>
      </div>
    )
  }
  
  function SectionTitle({ children, className = "" }) {
    return (
      <div
        className={`text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300 ${className}`}
      >
        {children}
      </div>
    )
  }