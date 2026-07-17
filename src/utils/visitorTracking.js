import ReactGA from "react-ga4";

const TIME_MILESTONES = [15, 30, 60, 120];
const SCROLL_MILESTONES = [25, 50, 75, 90];
const VISITOR_SEEN_KEY = "portfolio_visitor_seen";
const HIGH_ENGAGEMENT_THRESHOLD = 8;
const ENGAGEMENT_SUMMARY_DELAY_MS = 60_000;
const sessionStartedAt = Date.now();

let engagementScore = 0;
let highEngagementNotified = false;
let engagementSummaryTimer;
let lastSummaryActivityCount = 0;

const scoredActionsThisSession = new Set();
const engagementActivities = [];

let visitorTypeThisSession;

const notifiedThisSession = new Set();

function trackGA(eventName, params = {}) {
  try {
    ReactGA.event(eventName, params);
  } catch {
    // Never break the portfolio site because analytics failed.
  }
}

function getVisitorType() {
  if (visitorTypeThisSession) return visitorTypeThisSession;

  try {
    const hasVisitedBefore =
      window.localStorage.getItem(VISITOR_SEEN_KEY) === "true";

    visitorTypeThisSession = hasVisitedBefore ? "Returning" : "New";

    window.localStorage.setItem(VISITOR_SEEN_KEY, "true");
  } catch {
    // Storage can be blocked by browser privacy settings.
    visitorTypeThisSession = "Unknown";
  }

  return visitorTypeThisSession;
}

async function notifyDiscord(payload) {
  const key = [
      payload.eventType,
      payload.projectName || "",
      payload.videoName || "",
      payload.label || "",
      payload.value || "",
    ].join(":");

  if (notifiedThisSession.has(key)) return;
  notifiedThisSession.add(key);

  try {
    await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        path: window.location.pathname,
        pageTitle: document.title,
        referrer: document.referrer,
        visitorType: getVisitorType(),
      }),
    });
  } catch {
    // Silent fail. GA4 still records the event.
  }
}

function getEngagementDetails(eventType, params = {}) {
  const label = String(params.label || "");
  const normalisedLabel = label.toLowerCase();
  const projectName = params.project_name || "Portfolio project";
  const videoName = params.video_name || projectName;

  if (eventType === "video_started") {
    return {
      points: 2,
      key: `video_started:${projectName}:${videoName}`,
      activity: `${projectName} video started`,
    };
  }

  if (eventType === "video_50") {
    return {
      points: 1,
      key: `video_50:${projectName}:${videoName}`,
      activity: `${projectName} video reached 50%`,
    };
  }

  if (eventType === "video_75") {
    return {
      points: 2,
      key: `video_75:${projectName}:${videoName}`,
      activity: `${projectName} video reached 75%`,
    };
  }

  if (eventType === "video_completed") {
    return {
      points: 4,
      key: `video_completed:${projectName}:${videoName}`,
      activity: `${projectName} video completed`,
    };
  }

  if (eventType === "time_on_page" && Number(params.value) === 120) {
    return {
      points: 1,
      key: "time_on_page:120",
      activity: "Spent at least 2 minutes on the portfolio",
    };
  }

  if (eventType === "cta_click") {
    if (normalisedLabel.includes("github")) {
      return {
        points: 4,
        key: `github:${label}`,
        activity: `GitHub clicked: ${label}`,
      };
    }

    if (
      normalisedLabel.includes("resume") ||
      normalisedLabel.includes("cv")
    ) {
      return {
        points: 5,
        key: `resume:${label}`,
        activity: `Resume/CV accessed: ${label}`,
      };
    }

    if (normalisedLabel.includes("linkedin")) {
      return {
        points: 2,
        key: `linkedin:${label}`,
        activity: `LinkedIn clicked: ${label}`,
      };
    }
  }

  return null;
}

function scheduleEngagementSummary() {
  if (!highEngagementNotified) return;

  window.clearTimeout(engagementSummaryTimer);

  engagementSummaryTimer = window.setTimeout(() => {
    if (engagementActivities.length === lastSummaryActivityCount) return;

    lastSummaryActivityCount = engagementActivities.length;

    const sessionDurationSeconds = Math.round(
      (Date.now() - sessionStartedAt) / 1000
    );

    trackGA("engagement_summary", {
      event_category: "journey_portfolio",
      engagement_score: engagementScore,
      session_duration_seconds: sessionDurationSeconds,
      activity_count: engagementActivities.length,
    });

    notifyDiscord({
      eventType: "engagement_summary",
      label: "Engagement session summary",
      value: engagementScore,
      engagementScore,
      sessionDurationSeconds,
      activities: [...engagementActivities],
    });
  }, ENGAGEMENT_SUMMARY_DELAY_MS);
}

function recordEngagement(eventType, params = {}) {
  const details = getEngagementDetails(eventType, params);

  if (!details || scoredActionsThisSession.has(details.key)) return;

  scoredActionsThisSession.add(details.key);
  engagementScore += details.points;
  engagementActivities.push(details.activity);

  if (
    engagementScore >= HIGH_ENGAGEMENT_THRESHOLD &&
    !highEngagementNotified
  ) {
    highEngagementNotified = true;

    const sessionDurationSeconds = Math.round(
      (Date.now() - sessionStartedAt) / 1000
    );

    trackGA("high_engagement", {
      event_category: "journey_portfolio",
      engagement_score: engagementScore,
      session_duration_seconds: sessionDurationSeconds,
    });

    notifyDiscord({
      eventType: "high_engagement",
      label: "High engagement visitor",
      value: engagementScore,
      engagementScore,
      sessionDurationSeconds,
      activities: [...engagementActivities],
    });
  }

  scheduleEngagementSummary();
}

function shouldNotify(eventType, value, label = "") {
    const normalisedLabel = String(label).toLowerCase();
  
    if (eventType === "journey_visit") return true;
  
    if (eventType === "project_section_viewed") return false;

    if (eventType === "video_started" || eventType === "video_completed") {
      return true;
    }
  
    if (eventType === "time_on_page") {
      return Number(value) >= 60;
    }
  
    if (eventType === "scroll_depth") {
      return Number(value) >= 90;
    }
  
    if (eventType === "cta_click") {
      return (
        normalisedLabel.includes("resume") ||
        normalisedLabel.includes("linkedin") ||
        normalisedLabel.includes("github") ||
        normalisedLabel.includes("email") ||
        normalisedLabel.includes("phone") ||
        normalisedLabel.includes("crc website")
      );
    }
  
    return false;
  }

export function trackJourneyEvent(eventType, params = {}) {
  const label = params.label || "";
  const value = params.value || "";

  trackGA(eventType, {
    event_category: "journey_portfolio",
    event_label: label,
    value,
    ...params,
  });

  if (shouldNotify(eventType, value, label)) {
    notifyDiscord({
      eventType,
      label,
      value,
      projectName: params.project_name,
      videoName: params.video_name,
      videoDuration: params.video_duration,
      completion: params.completion,
    });
  }

  recordEngagement(eventType, params);
}

export function initVisitorTracking() {
  trackJourneyEvent("journey_visit", {
    label: "Journey site visit",
  });

  TIME_MILESTONES.forEach((seconds) => {
    window.setTimeout(() => {
      trackJourneyEvent("time_on_page", {
        label: `${seconds}s time on page`,
        value: seconds,
      });
    }, seconds * 1000);
  });

  const reachedScrollMilestones = new Set();

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (documentHeight <= 0) return;

    const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

    SCROLL_MILESTONES.forEach((milestone) => {
      if (scrollPercent >= milestone && !reachedScrollMilestones.has(milestone)) {
        reachedScrollMilestones.add(milestone);

        trackJourneyEvent("scroll_depth", {
          label: `${milestone}% scroll depth`,
          value: milestone,
        });
      }
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  function handleClick(event) {
    const trackedElement = event.target.closest("[data-track]");

    if (!trackedElement) return;

    trackJourneyEvent("cta_click", {
      label:
        trackedElement.getAttribute("data-track-label") ||
        trackedElement.innerText ||
        trackedElement.href ||
        "Tracked click",
    });
  }

  document.addEventListener("click", handleClick);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClick);
    window.clearTimeout(engagementSummaryTimer);
  };
}