import ReactGA from "react-ga4";

const TIME_MILESTONES = [15, 30, 60, 120];
const SCROLL_MILESTONES = [25, 50, 75, 90];

const notifiedThisSession = new Set();

function trackGA(eventName, params = {}) {
  try {
    ReactGA.event(eventName, params);
  } catch {
    // Never break the portfolio site because analytics failed.
  }
}

async function notifyDiscord(payload) {
  const key = `${payload.eventType}:${payload.label || ""}:${payload.value || ""}`;

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
      }),
    });
  } catch {
    // Silent fail. GA4 still records the event.
  }
}

function shouldNotify(eventType, value) {
  if (eventType === "journey_visit") return true;
  if (eventType === "cta_click") return true;
  if (eventType === "time_on_page") return Number(value) >= 60;
  if (eventType === "scroll_depth") return Number(value) >= 75;
  if (eventType === "project_section_viewed") return false;

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

  if (shouldNotify(eventType, value)) {
    notifyDiscord({
      eventType,
      label,
      value,
    });
  }
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
  };
}