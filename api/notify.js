const ALLOWED_EVENT_TYPES = new Set([
    "journey_visit",
    "time_on_page",
    "scroll_depth",
    "cta_click",
    "project_section_viewed",
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
  
      if (!ALLOWED_EVENT_TYPES.has(eventType)) {
        return res.status(400).json({ ok: false, error: "Unsupported event type" });
      }
  
      const discordPayload = {
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
              { name: "Referrer", value: referrer || "Direct / unknown", inline: false },
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