# Public Holiday Entitlements

## Overview

Duration: ~2:45

Audience:
Recruiters
Engineering Managers
Technical Leads

Objective:
Demonstrate engineering thinking rather than application features.

---

# Scene 1 – The Problem

## Scene Header - The Problem

## Duration

20–25 seconds

## Objective

Introduce the business problem before introducing the software.

The viewer should understand why public holiday entitlement determination is a genuine engineering challenge rather than a simple address lookup.

## Visual

• Portfolio opening completes.

• Hard cut to the application landing page.

• Hold for approximately two seconds.

• Slow push-in towards the application title.

No mouse movement.

No scrolling.

The interface should feel calm and professional.

## Narration

Paying employees correctly for public holidays sounds straightforward. In practice, determining the correct entitlement can depend on far more than an employee's state.

Eligibility isn't determined by state alone. It can also depend on local government areas, regional rules and even specific localities.

Getting those rules wrong can lead to incorrect payroll outcomes.

I wanted to build an engine that could automatically determine the correct public holiday calendar while remaining transparent, auditable and easy to validate.

## Editing Notes

Slow push-in only.

No pans.

No transitions.

Music begins underneath the narration at a low level.

Hard cut into Scene 2.
---

# Scene 2 – The Engineering Challenge

## Scene Header - The Engineering Challenge

## Duration

25–30 seconds

## Objective

Explain why this is an engineering problem rather than simply a data lookup.

Introduce the decision pipeline that underpins the application.

## Visual

Hard cut to the completed address inputs.

Do not show typing.

Hold briefly.

Click **Lookup**.

Immediately cut to the results screen once processing completes.

Avoid showing loading time.

## Narration

Determining the correct public holiday entitlement isn't simply a postcode lookup.

An address must first be resolved into accurate geographic coordinates before being matched against Australian Bureau of Statistics LGA boundaries.

From there, national, state, regional and locality-specific rules are evaluated to determine which public holidays actually apply.

The application combines those decisions into a single auditable result.

## Editing Notes

Hard cuts between each stage.

Avoid long pauses.

Keep the pace moving.

Music continues underneath narration.

No sound effects.

---

# Scene 3 – The Decision Engine

## Scene Header - The Decision Engine

## Duration

35–40 seconds

## Objective

Demonstrate that the system doesn't simply return public holidays.

It explains how each decision was reached through confidence scoring, geographic resolution and fully auditable evidence.

## Visual

Hard cut from the completed lookup to the results page.

Pause for approximately two seconds.

Allow the viewer to absorb the layout before directing attention.

Use slow digital push-ins to focus on:

• Confidence score
• Status
• Audit Details
• Geographic resolution (State / Locality / LGA)

Expand the Audit Details panel.

Pause briefly.

Avoid rapid movement.

The viewer should never wonder where to look.

## Narration

Rather than returning a simple list of holidays, every result is accompanied by supporting evidence.

Every decision is accompanied by a confidence score, the resolved geographic information and a complete audit trail showing how the result was reached.

This allows uncertain or ambiguous locations to be identified immediately while giving reviewers confidence in results that can be resolved automatically.

## Editing Notes

Use slow push-ins rather than pans.

Introduce subtle highlight boxes around:

• Confidence
• Status
• Audit Details

Allow each area to remain on screen long enough to be read.

No fast zooms.

No flashy transitions.

Music remains understated.

Hard cut into the holiday evidence.

---

# Scene 4 – Evidence, Not Assumptions

## Scene Header - Evidence

## Duration

25–30 seconds

## Objective

Demonstrate that every public holiday decision is supported by evidence rather than hidden business logic.

Show how the system exposes the actual holidays that were selected for each location.

## Visual

Transition from the audit panel to the holiday tables.

Use a slow push-in towards the office location.

Pause briefly.

Then gently pan across to the home location.

Allow the viewer to compare the two results.

Use subtle spotlights to highlight:

• Different holiday counts
• Different regional holidays
• Different applicable calendars

Do not scroll quickly.

## Narration

Every decision is backed by the underlying holiday data that was actually used during evaluation.

Rather than simply returning a count, the system exposes the complete calendar applied to each location, making differences between office and home work locations immediately visible.

This transparency allows reviewers to understand not only the outcome, but also the evidence supporting it.

## Editing Notes

Slow cross-frame movement between the two tables.

No rapid cuts.

Hold each comparison long enough to read.

Music remains understated.

Hard cut into batch processing.

---

# Scene 5 – Batch Processing

## Scene Header - Batch Processing

## Duration

30–35 seconds

## Objective

Demonstrate that the same decision engine scales from individual lookups to payroll-wide processing.

Show that no separate logic exists for batch execution.

## Visual

Show the batch upload section.

Jump cut to the CSV already selected.

Avoid showing file browser dialogs.

Run the batch.

Immediately cut to completed results.

Highlight:

• Records processed
• Download buttons
• Results table

Avoid long processing sequences.

## Narration

The same decision engine is used for payroll-wide batch processing.

Each employee is evaluated independently using the same geographic resolution and rule evaluation pipeline before structured outputs and downloadable reports are generated automatically.

The architecture scales naturally from a single lookup to organisation-wide analysis without changing the underlying decision logic.

## Editing Notes

Quicker pacing than previous scenes.

This section should communicate capability rather than process.

Hard cut into reporting.

---

# Scene 6 – Executive Reporting

## Scene Header - Executive Reporting

## Duration

25–30 seconds

## Objective

Demonstrate that the project produces outputs suitable for operational use, rather than simply displaying information on screen.

Show that technical decisions are translated into reports that support business review and compliance activities.

## Visual

Open the generated HTML report.

Pause on the Executive Summary.

Slowly scroll through the report.

Highlight:

• Executive Summary
• Risk Levels
• Confidence
• Recommendations
• Supporting evidence

Avoid scrolling continuously.

Pause naturally on each section.

## Narration

Rather than simply displaying results on screen, the engine generates professional reports designed for operational review.

Technical findings are translated into clear business summaries, confidence indicators and supporting evidence, allowing both technical teams and business stakeholders to quickly understand where attention is required.

This creates an audit trail that is suitable for both technical teams and business stakeholders.

## Editing Notes

Use slow scrolling.

Pause frequently.

Allow headings to remain on screen long enough to read.

Avoid fast movement.

Music remains subtle.

Hard cut into architecture.

---

# Scene 7 – Engineering Architecture

## Scene Header - Engineering Architecture

## Duration

30–35 seconds

## Objective

Briefly demonstrate the engineering behind the application without turning the video into a coding tutorial.

Highlight the architectural decisions rather than implementation details.

## Visual

Display a simple architecture diagram.

Show the project structure briefly.

Cut to:

• Regional holiday rules
• Terminal execution
• Processing pipeline

Do not scroll through source code.

Keep every shot short and intentional.

## Narration

Behind the interface is a modular Python architecture that combines geocoding, spatial analysis, curated regional datasets, caching and automated reporting.

Rather than focusing on individual functions, the project was designed around reusable components that keep the decision pipeline transparent, testable and easy to extend.

The emphasis throughout was on building a maintainable engineering solution rather than simply producing the correct result.

## Editing Notes

Use quick cuts between architecture assets.

No long code walkthroughs.

Allow the architecture diagram to remain on screen long enough to understand the pipeline.

Music remains understated.

Hard cut into closing.

---

# Scene 8 – Closing

## Duration

15 seconds

## Objective

Summarise what the project demonstrates and transition naturally into the end branding.

## Visual

Return briefly to the application.

Fade to the CRC closing sequence.

## Narration

This project demonstrates how geospatial analysis, operational rules and software engineering can be combined to create an auditable decision engine for real-world payroll compliance.

The project demonstrates an engineering approach focused on transparency, auditability and production-ready software design—principles that underpin the wider AI Engineering Journey portfolio.

## Editing Notes

Minimal movement.

Music carries through to the closing.

Fade to black.