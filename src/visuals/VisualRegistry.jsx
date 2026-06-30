import HolidayInputVisual from "./HolidayInputVisual"
import GeographicResolutionVisual from "./GeographicResolutionVisual"
import LgaRegionVisual from "./LgaRegionVisual"
import EntitlementRuleVisual from "./EntitlementRuleVisual"
import AuditableOutputVisual from "./AuditableOutputVisual"
import IngestionVisual from "./IngestionVisual"
import DiagnosticEngineVisual from "./DiagnosticEngineVisual"
import ValidationIntegrityVisual from "./ValidationIntegrityVisual"
import RiskFindingsVisual from "./RiskFindingsVisual"
import ExecutiveReportingVisual from "./ExecutiveReportingVisual"
import DocumentsVisual from "./DocumentsVisual"
import RagIngestionVisual from "./RagIngestionVisual"
import ChunkingVisual from "./ChunkingVisual"
import EmbeddingsVisual from "./EmbeddingsVisual"
import RetrievalVisual from "./RetrievalVisual"
import ResponseVisual from "./ResponseVisual"
import OrchestrationVisual from "./OrchestrationVisual"
import TelemetryVisual from "./TelemetryVisual"
import EvaluationVisual from "./EvaluationVisual"
import ObservabilityVisual from "./ObservabilityVisual"
import DeploymentVisual from "./DeploymentVisual"
import ConversationalRetrievalVisual from "./ConversationalRetrievalVisual"
import GroundedGenerationVisual from "./GroundedGenerationVisual"
import ApiArchitectureVisual from "./ApiArchitectureVisual"
import SafetyGuardrailsVisual from "./SafetyGuardrailsVisual"
import DatasetProfilingVisual from "./DatasetProfilingVisual"
import IntelligentRoutingVisual from "./IntelligentRoutingVisual"
import DeterministicAnalyticsVisual from "./DeterministicAnalyticsVisual"
import EvidenceGenerationVisual from "./EvidenceGenerationVisual"
import ExecutiveReasoningVisual from "./ExecutiveReasoningVisual"
import ExecutiveSummaryVisual from "./ExecutiveSummaryVisual"
import AuditTrailVisual from "./AuditTrailVisual"
import TrendAnalysisVisual from "./TrendAnalysisVisual"
import VarianceAnalysisVisual from "./VarianceAnalysisVisual"
import AnomalyDetectionVisual from "./AnomalyDetectionVisual"
import RiskAssessmentVisual from "./RiskAssessmentVisual"
import DirectAnswersVisual from "./DirectAnswersVisual"
import EvidenceTransparencyVisual from "./EvidenceTransparencyVisual"
import AuditVerificationVisual from "./AuditVerificationVisual"
import GoldenDatasetsVisual from "./GoldenDatasetsVisual"
import GoldenUserJourneysVisual from "./GoldenUserJourneysVisual"
import RegressionTestingVisual from "./RegressionTestingVisual"
import LlmFallbacksVisual from "./LlmFallbacksVisual"

const visualMap = {
  "holiday-input": HolidayInputVisual,
  geo: GeographicResolutionVisual,
  map: LgaRegionVisual,
  "holiday-rules": EntitlementRuleVisual,
  "holiday-audit": AuditableOutputVisual,
  ingestion: IngestionVisual,
  validation: ValidationIntegrityVisual,
  "diagnostic-engine": DiagnosticEngineVisual,
  "risk-findings": RiskFindingsVisual,
  "executive-reporting": ExecutiveReportingVisual,
  documents: DocumentsVisual,
  "rag-ingestion": RagIngestionVisual,
  chunking: ChunkingVisual,
  embeddings: EmbeddingsVisual,
  retrieval: RetrievalVisual,
  response: ResponseVisual,
  orchestration: OrchestrationVisual,
  telemetry: TelemetryVisual,
  evaluation: EvaluationVisual,
  observability: ObservabilityVisual,
  deployment: DeploymentVisual,
  "conversational-retrieval": ConversationalRetrievalVisual,
  "grounded-generation": GroundedGenerationVisual,
  "api-architecture": ApiArchitectureVisual,
  "safety-guardrails": SafetyGuardrailsVisual,
  "dataset-profiling": DatasetProfilingVisual,
  "intelligent-routing": IntelligentRoutingVisual,
  "deterministic-analytics": DeterministicAnalyticsVisual,
  "evidence-generation": EvidenceGenerationVisual,
  "executive-reasoning": ExecutiveReasoningVisual,
  "executive-summary": ExecutiveSummaryVisual,
  "audit-trail": AuditTrailVisual,
  "trend-analysis": TrendAnalysisVisual,
  "variance-analysis": VarianceAnalysisVisual,
  "anomaly-detection": AnomalyDetectionVisual,
  "risk-assessment": RiskAssessmentVisual,
  "direct-answers": DirectAnswersVisual,
  "evidence-transparency": EvidenceTransparencyVisual,
  "audit-verification": AuditVerificationVisual,
  "golden-datasets": GoldenDatasetsVisual,
  "golden-user-journeys": GoldenUserJourneysVisual,
  "regression-testing": RegressionTestingVisual,
  "llm-fallbacks": LlmFallbacksVisual,
}

export default function VisualRegistry({ type }) {
  const Visual = visualMap[type]

  if (!Visual) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-zinc-500">
        Visual placeholder: {type}
      </div>
    )
  }

  return <Visual />
}