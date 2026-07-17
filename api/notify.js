const ALLOWED_EVENT_TYPES = new Set([
    "journey_visit",
    "time_on_page",
    "scroll_depth",
    "cta_click",
    "project_section_viewed",
    "video_started",
    "video_completed",
    "high_engagement",
  ]);
  
  function safeText(value, maxLength = 300) {
    if (!value) return "";
    return String(value).replace(/[`<>@]/g, "").slice(0, maxLength);
  }

  function getReferrerLabel(referrer) {
    if (!referrer) return "Direct / unknown";
  
    const normalised = String(referrer).toLowerCase();
  
    if (normalised.includes("linkedin.com")) return "LinkedIn";
    if (normalised.includes("seek.com")) return "Seek";
    if (normalised.includes("google.")) return "Google";
    if (normalised.includes("github.com")) return "GitHub";
    if (normalised.includes("chatgpt.com")) return "ChatGPT";
    if (normalised.includes("openai.com")) return "OpenAI";
  
    try {
      const url = new URL(referrer);
      return url.hostname.replace(/^www\./, "");
    } catch {
      return "Direct / unknown";
    }
  }
  
  export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, error: "Method not allowed" });
    }
  
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
    if (!webhookUrl) {
      return res.status(500).json({ ok: false, error: "Webhook not configured" });
    }
  
    try {
      const body = req.body || {};
  
      const eventType = safeText(body.eventType, 80);
      const label = safeText(body.label, 160);
      const path = safeText(body.path, 160);
      const pageTitle = safeText(body.pageTitle, 160);
      const referrer = getReferrerLabel(safeText(body.referrer, 300));
      const value = safeText(body.value, 80);
      const projectName = safeText(body.projectName, 160);
      const videoName = safeText(body.videoName, 160);
      const videoDuration = safeText(body.videoDuration, 40);
      const completion = safeText(body.completion, 40);
      const visitorType = safeText(body.visitorType, 40);
      const referrerSource = safeText(body.referrerSource, 80);
      const engagementScore = safeText(body.engagementScore, 20);
      const sessionDurationSeconds = safeText(
        body.sessionDurationSeconds,
        20
      );

      const activities = Array.isArray(body.activities)
        ? body.activities
            .slice(0, 12)
            .map((activity) => safeText(activity, 180))
            .filter(Boolean)
        : [];
  
      if (!ALLOWED_EVENT_TYPES.has(eventType)) {
        return res.status(400).json({ ok: false, error: "Unsupported event type" });
      }
      
      const isHighEngagementEvent = eventType === "high_engagement";
    
      const isVideoEvent =
        eventType === "video_started" || eventType === "video_completed";

      const discordPayload = isHighEngagementEvent
        ? {
            username: "Journey Portfolio Bot",
            embeds: [
              {
                title: "🔥 High Engagement Visitor",
                color: 16753920,
                fields: [
                  {
                    name: "Visitor",
                    value: visitorType || "Unknown",
                    inline: true,
                  },
                  {
                    name: "Referrer",
                    value:
                      referrerSource ||
                      referrer ||
                      "Direct / unknown",
                    inline: true,
                  },
                  {
                    name: "Score",
                    value: engagementScore || value || "Unknown",
                    inline: true,
                  },
                  {
                    name: "Session",
                    value: sessionDurationSeconds
                      ? `${Math.floor(
                          Number(sessionDurationSeconds) / 60
                        )}m ${Number(sessionDurationSeconds) % 60}s`
                      : "Unknown",
                    inline: true,
                  },
                  {
                    name: "Activity",
                    value:
                      activities.length > 0
                        ? activities
                            .map((activity) => `✓ ${activity}`)
                            .join("\n")
                            .slice(0, 1024)
                        : "No activity details available",
                    inline: false,
                  },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }
        : isVideoEvent
        ? {
            username: "Journey Portfolio Bot",
            embeds: [
              {
                title:
                  eventType === "video_started"
                    ? "🎥 Portfolio Video Started"
                    : "✅ Portfolio Video Completed",
                color: eventType === "video_started" ? 5814783 : 5763719,
                fields: [
                  {
                    name: "Project",
                    value: projectName || "Unknown project",
                    inline: false,
                  },
                  {
                    name: "Video",
                    value: videoName || "Unknown video",
                    inline: false,
                  },
                  ...(eventType === "video_started"
                    ? [
                        {
                          name: "Visitor",
                          value: visitorType || "Unknown",
                          inline: true,
                        },
                        {
                          name: "Referrer",
                          value:
                            referrerSource ||
                            referrer ||
                            "Direct / unknown",
                          inline: true,
                        },
                      ]
                    : [
                        {
                          name: "Completion",
                          value: `${completion || "100"}%`,
                          inline: true,
                        },
                        {
                          name: "Duration",
                          value: videoDuration
                            ? `${videoDuration} seconds`
                            : "Unknown",
                          inline: true,
                        },
                      ]),
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }
        : {
            username: "Journey Portfolio Bot",
            embeds: [
              {
                title: "Portfolio visitor activity",
                description: `**${eventType}**${label ? ` — ${label}` : ""}`,
                color: 5814783,
                fields: [
                  { name: "Page", value: pageTitle || "Unknown", inline: true },
                  { name: "Path", value: path || "/", inline: true },
                  { name: "Value", value: value || "n/a", inline: true },
                  {
                    name: "Referrer",
                    value: referrer || "Direct / unknown",
                    inline: false,
                  },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          };
  
      const discordResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      });
  
      if (!discordResponse.ok) {
        return res.status(502).json({ ok: false, error: "Discord webhook failed" });
      }
  
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ ok: false, error: "Notification failed" });
    }
  }