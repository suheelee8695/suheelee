---
title: "AI-Assisted 5 Whys"
tagline: "Bringing a methodology into the platform without taking it away from the user."
summary: "An AI-assisted root cause analysis feature for Quentic's Investigations module. A guided wizard turns case data into a structured 5 Whys analysis, then hands the result back to the user as an editable grid. The case study covers the decisive calls: why AI gets its own surface, what the research said versus what shipped, and how every design decision is wired to a measurement."
cover: "/images/5-whys-cover.png"
tile: "/images/5-whys-step3.png"
accent: "pink"
role: "Senior Product Designer"
year: "2026"
tags: ["AI/UX", "Enterprise SaaS", "Wizard pattern", "Workflow design"]
featured: true
order: 1
locked: false
---

<div class="key-decisions">
  <p class="key-decisions-label">Four calls that shaped this design</p>
  <ul>
    <li><a href="#the-approach">AI gets its own grid. The existing form keeps its authority.</a></li>
    <li><a href="#what-we-tested-and-learned">Users preferred four steps. We shipped three, and kept the editing power.</a></li>
    <li><a href="#the-wizard-three-steps">No silent overwrites. The cascade is the warning.</a></li>
    <li><a href="#what-we-tested-and-learned">Position AI as a supporting tool, not a replacement.</a></li>
  </ul>
</div>

## Overview

Customers told the EHS team, in different words but the same shape: *we run 5 Whys, but never inside Quentic*. The methodology lived in spreadsheets, meeting minutes, and the heads of senior safety officers. The platform's investigation form had a *Causes* field that was, in practice, used to copy-paste conclusions reached elsewhere.

AI-Assisted 5 Whys is the feature that brings the methodology into the platform. It's the canonical Mid-Level AI example in our [AI design system](/work/ai-design-guidelines): an AI assistant that proposes structured output, a contained workspace where the user reviews and refines, and an explicit handoff to the existing form when the user is done.

What I owned:

- ✔ The flow. A three-step wizard from prompt to suggestions to review.
- ✔ The data-quality pre-flight. The system inspects what it has before AI runs, and warns the user when the input isn't strong enough to produce reliable output.
- ✔ The cascade rules. What happens to a 5 Why chain when the user edits one node, and how the system tells them.
- ✔ The boundary between AI's grid and the existing form. AI gets its own space; the user keeps theirs.
- ✔ The research. What 5 Whys looks like in the wild, what the methodology actually requires, and where AI helps versus where it pretends to help.

## The problem

Three customer quotes sat at the top of the brief:

> "We run 5 Why sessions, but always outside of Quentic."
> "We only use the *Causes* field to copy over what was already analyzed offline."
> "Less experienced staff struggle to move beyond symptoms and find real root causes."

That last one is the most interesting design problem. The 5 Whys methodology is simple to describe and hard to do well. *Why did the spill happen? The valve failed. Why did the valve fail? It wasn't inspected. Why wasn't it inspected?* The technique works only if the user keeps pushing past comfortable answers. New investigators stop at "human error" and write that down. Senior investigators keep going.

So the brief wasn't *automate 5 Whys*. It was *help less experienced people do better 5 Whys, without making the methodology disappear into a black box*.

## The approach

The decisive call I made early: *the AI gets a wizard. The existing form keeps its authority.*

<blockquote class="pull-quote"><p>"The AI gets a wizard. The existing form keeps its authority."</p></blockquote>

The alternative I rejected: putting AI suggestions directly into the existing *Causes* field. That would have been faster to build and worse for the user. It would have collapsed the boundary between AI's reasoning and the user's record. Once mixed, the user can't tell what they decided versus what the AI decided. Audit defense becomes guesswork.

Instead: AI works inside a wizard. When the user confirms, the result lands in a *new* grid called *AI Suggested Causes*, placed above the existing *Causes* field. The user can edit any item in the new grid. The existing field is untouched and continues to behave the way it always has.

Two domains, both visible. AI proposes in its own space; the user keeps theirs.

<div class="diagram">
  <div class="domain-diagram">
    <div class="dd-surface dd-ai">
      <span class="dd-badge">AI Suggested Causes</span>
      <p>AI's domain · Editable · Removable · Retryable</p>
      <p class="dd-note">Stored as plain text · Not linked to master data</p>
    </div>
    <div class="dd-separator">clear boundary</div>
    <div class="dd-surface dd-user">
      <span class="dd-badge dd-badge-muted">Causes (legacy field)</span>
      <p>User's domain · Master-data linked · Always writable</p>
      <p class="dd-note">Untouched by AI · The user's authoritative record</p>
    </div>
  </div>
  <p class="diagram-caption">Two surfaces, one investigation form. AI proposes above; the user records below.</p>
</div>

## The wizard, three steps

#### 1. Prompt, with a data-quality check before AI runs

<figure><img src="/images/5-whys-step1.png" alt="Step 1 of the wizard: an investigation overview screen with auto-filled case description, image description, what went wrong, circumstances, and a data-quality warning when the description is too short." /></figure>

The wizard opens with the case and investigation context already pulled in: description, what went wrong, circumstances, chain of events. The user doesn't paste, summarize, or re-explain. The platform already knows what the incident is.

Before generation, the system runs a quiet check: *is the available data strong enough to support a useful analysis?* If it isn't, the user sees a warning that makes the AI's limits visible:

> *Your description is very short. AI will generate a summary, but the result may be generic. The quality of the root cause analysis depends on the data quality.*

The user can add context in their own words and try again, or proceed knowing the result will be weak. The point isn't to gate the user. The point is to refuse silent confidence. The AI doesn't pretend it can produce a strong result from thin data.

#### 2. Suggestions, revealed sequentially

<figure><img src="/images/5-whys-step2.png" alt="Step 2 of the wizard: AI-suggested root causes with five expandable Why questions, each tagged with a cause group like Personal or Technical, with options to refine, regenerate, and reclassify." /></figure>

The AI returns:

- **Cause groups** mapped to the customer's existing master data categories (e.g., *Manpower*, *Method*, *Machine*).
- **A 5 Why chain** for each cause group, ending with an identified root cause.

The Whys appear one at a time, with a brief delay between them. *Why 1, then Why 2, then Why 3.* The reasoning unfolds rather than landing all at once.

This is a tone choice. A loading spinner followed by a finished block of conclusions feels like magic. A sequential reveal feels like thinking. Magic invites trust where trust hasn't been earned. Thinking invites the user to follow along.

The user can refine in two ways, and the difference between them is the design call worth highlighting:

**Targeted feedback.** Click into a Why, type a short note (*"this should be about training, not equipment"*), submit. The AI updates that Why. The downstream Whys may also change because they were derived from it.

**Regenerate.** Click *Regenerate* on a Why. The AI starts that Why over and may also change the Whys derived from it.

Both are destructive in their own way, and both surface that fact:

> *Regenerating the Why may change the following Whys and the root cause. Do you want to continue?*

The user confirms or cancels. No silent overwrites. The cascade isn't hidden; the cascade is the warning.

<div class="diagram">
  <div class="cascade-flow">
    <div class="cf-step">Edit Why 2</div>
    <div class="cf-arrow">→</div>
    <div class="cf-step cf-affected">Why 3 may change</div>
    <div class="cf-arrow">→</div>
    <div class="cf-step cf-affected">Why 4 may change</div>
    <div class="cf-arrow">→</div>
    <div class="cf-step cf-affected">Root cause may change</div>
    <div class="cf-arrow">→</div>
    <div class="cf-step cf-warn">⚠ Warning shown</div>
    <div class="cf-branch">
      <div class="cf-choice cf-confirm">Confirm</div>
      <div class="cf-choice cf-cancel">Cancel: no change</div>
    </div>
  </div>
  <p class="diagram-caption">Any destructive action surfaces what it will affect before proceeding.</p>
</div>

The user can also re-classify the cause group from a dropdown without triggering a regeneration. Sometimes the AI's reasoning is right but its category is wrong. Letting the user fix the label without resetting the chain saves work and respects the user's domain expertise.

#### 3. Review and confirm

<figure><img src="/images/5-whys-step3.png" alt="Step 3 of the wizard: a Review and Save screen showing the full 5 Why chain with each Why tagged by cause group and an Explanation of root cause beneath." /></figure>

The user sees the final shape of the analysis: cause groups, the chain that led to each, and the identified root cause. Saving is explicit. Nothing is written to the investigation record until the user confirms.

## The AI Suggested Causes grid

When the wizard saves, the result lands in a new grid placed above the existing *Causes* field in the investigation form.

The grid:

- **Has one column.** Cause groups, each expandable to reveal the 5 Why chain inside.
- **Stores plain text.** Each cause is editable, gated by the same investigation permissions the rest of the form uses.
- **Allows granular removal.** Each cause has a checkbox; toggling it off removes that cause from the record. The AI doesn't get to defend itself.
- **Doesn't link to causes master data.** That was a deliberate MVP scope call. Mapping AI output to a customer's hierarchical master data needed more research. The manual *Causes* field below the grid still supports master data linking the way it always has.

At the bottom of the grid, one button: *Retry root cause analysis*. Clicking it warns the user that the existing AI causes and root cause will be overwritten, then reopens the wizard.

One edge case: remove every AI cause and the system clears the grid and reopens the wizard rather than leaving an empty surface.

## What we tested and learned

The wizard didn't ship straight from sketch. Six months before launch, two concepts went head-to-head in a moderated usability study with real customers, and the most interesting result was the one we chose not to follow.

#### The study

The team designed two concepts in parallel and prototyped both in Axure. Concept A had four steps, including a dedicated editing step between AI suggestions and final review. Concept B condensed it to three, with refinement folded inside the suggestions step itself.

A user researcher led six think-aloud sessions with EHS specialists and operations supervisors from six different customers across multiple industries (manufacturing, food production, leisure, infrastructure). Each participant tested both concepts in counterbalanced order. Three research questions framed the study, but one mattered most: *how do users perceive the AI's role: assistant, guide, or decision-maker?* Each of those is a different relationship with the user, and each implies different defaults for the UI.

The study also confirmed the original design hypothesis on the target user. Two participants explicitly noted the feature would be most useful for inexperienced investigators who tend to stop after one or two whys, which echoed the brief directly. One participant added that responsibility for root cause analysis is now moving from safety coordinators to operational managers: younger, less experienced, more in need of structure.

#### The surprise: users preferred the concept we didn't ship

<div class="participant-strip">
  <div class="ps-dots">
    <div class="ps-dot ps-a" title="Preferred Concept A">A</div>
    <div class="ps-dot ps-a" title="Preferred Concept A">A</div>
    <div class="ps-dot ps-a" title="Preferred Concept A">A</div>
    <div class="ps-dot ps-a" title="Preferred Concept A">A</div>
    <div class="ps-dot ps-b" title="Preferred Concept B">B</div>
    <div class="ps-dot ps-none" title="No preference">—</div>
  </div>
  <div class="ps-legend">
    <span class="ps-item ps-item-a">4 of 6 preferred Concept A (4 steps)</span>
    <span class="ps-item ps-item-b">1 preferred Concept B (3 steps)</span>
    <span class="ps-item ps-item-none">1 no preference</span>
  </div>
</div>

Four of six customers preferred Concept A. Only one preferred Concept B, the three-step version that shipped. The reason was consistent: Concept A had a dedicated step for editing AI-generated content before saving, and five of six participants singled this out as the most valuable thing in either concept. *Editing the AI's output manually was the load-bearing finding of the entire study.*

<blockquote class="pull-quote"><p>"Editing the AI's output manually was the load-bearing finding of the entire study."</p></blockquote>

The PM called three steps. I didn't ignore the finding. I pulled the editing affordances forward into Concept B's Step 2: per-Why Refine, per-Why Regenerate, and cause-group reclassification all became inline actions on the suggestions, not a separate step. The post-save grid added more: per-cause text edits, granular removal, and Retry. The shape became three steps; the editing power that participants valued in Concept A was preserved everywhere it mattered.

<div class="diagram">
  <div class="concept-compare">
    <div class="concept-col">
      <div class="cc-header">
        <span class="cc-label">Concept A — 4 steps</span>
        <span class="cc-sub">What 4 of 6 users preferred</span>
      </div>
      <div class="cc-step">Step 1: Prompt</div>
      <div class="cc-step">Step 2: AI Suggestions</div>
      <div class="cc-step cc-step-edit">Step 3: Edit AI output<span class="cc-tag">dedicated editing step</span></div>
      <div class="cc-step">Step 4: Review &amp; Save</div>
    </div>
    <div class="concept-col">
      <div class="cc-header">
        <span class="cc-label">Concept B — 3 steps</span>
        <span class="cc-sub">PM's call. What shipped.</span>
      </div>
      <div class="cc-step">Step 1: Prompt</div>
      <div class="cc-step cc-step-edit">Step 2: AI Suggestions<span class="cc-tag">+ Refine · Regenerate · Reclassify inline</span></div>
      <div class="cc-step">Step 3: Review &amp; Save</div>
      <div class="cc-step cc-step-edit cc-step-dashed">Post-save grid<span class="cc-tag">edit · remove · retry</span></div>
    </div>
  </div>
  <p class="diagram-caption">The dedicated edit step from Concept A wasn't cut. It was dissolved into Step 2 and the post-save grid.</p>
</div>

#### Other findings that shaped the design

The research team rated each finding by severity. Each one mapped directly to a shipped design decision.

**Cascade-rule confusion (major).** Three of six weren't sure whether manual edits would trigger further AI updates. Shaped the cascade warning: any destructive action surfaces what it will affect before proceeding.

**Data-quality concern (major).** Three of six flagged it as a top concern. Shaped the pre-flight check on Step 1: thin input triggers a warning before generation runs.

**Cause-type confusion (medium).** Choosing a cause type was the most confusing part of the flow. Shaped the AI's automatic cause-group suggestion, with a dropdown to override.

**AI replacement concern.** Multiple participants worried AI would displace the human work of investigation. Confirmed the target audience: operations supervisors, not senior EHS officers. The same concern is also why the AI gets a wizard and the existing form keeps its authority.

The thread running through every finding: *position AI as a supporting tool, not a replacement.*

#### What we deferred, and why

**Master data mapping for cause groups.** Three of six participants surfaced this directly: the tool should choose from the company's own specific list of root causes, not generic AI labels. Every customer's taxonomy is different. Forcing the mapping would either over-constrain the AI (making it choose from a fixed list it doesn't understand) or generate noise (mapping the AI's labels to wrong customer categories). For MVP, cause groups are stored as plain text in the new grid. We'll revisit master data mapping once we see how often users reclassify (see below).

**Tree-based root cause analysis.** Two of six found the 5 Why method too linear and asked for a tree-based approach that lets multiple root causes branch from one incident. That's a larger product question than the MVP scope: not just a UI change but a different methodology. A candidate for the next iteration.

## What I designed to measure, and why

The wizard makes design assumptions I have no data to validate yet: that users trust the AI's output enough to accept it, that three steps is the right granularity, that the post-save grid is doing useful work rather than patching a wizard gap. The instrumentation specified for the MVP exists to test those assumptions, not to count clicks.

Each signal I asked the team to add answers a design question. Five questions, in priority order.

<div class="events-flow" role="list" aria-label="Instrumentation events mapped across the wizard experience">
  <div class="ev-stage">
    <span class="ev-label">Entry</span>
    <div class="ev-events">
      <div class="ev-event"><span class="ev-name">clickRootCauseAnalysisAI</span><span class="ev-desc">user opens the wizard</span></div>
    </div>
  </div>
  <div class="ev-stage">
    <span class="ev-label">Step 1: Prompt</span>
    <div class="ev-events">
      <span class="ev-empty">no new events; loading state precedes Step 2</span>
    </div>
  </div>
  <div class="ev-stage">
    <span class="ev-label">Step 2: AI Suggestions</span>
    <div class="ev-events">
      <div class="ev-event"><span class="ev-name">viewSuggestionsRootCauseAI</span><span class="ev-desc">fires on successful render</span></div>
      <div class="ev-event"><span class="ev-name">refineWhyRootCauseAI</span><span class="ev-desc">Refine on a specific Why; Why number as parameter</span></div>
      <div class="ev-event"><span class="ev-name">changeCauseGroupRootCauseAI</span><span class="ev-desc">dropdown reclassification on a Why</span></div>
      <div class="ev-event"><span class="ev-name">regenerateRootCauseAI</span><span class="ev-desc">Regenerate per Why</span></div>
    </div>
  </div>
  <div class="ev-stage">
    <span class="ev-label">Step 3: Review &amp; Save</span>
    <div class="ev-events">
      <div class="ev-event"><span class="ev-name">saveRootCauseAI</span><span class="ev-desc">confirm and save; captures duration in ms, segmented by userType</span></div>
    </div>
  </div>
  <div class="ev-stage">
    <span class="ev-label">Wizard exit (any step)</span>
    <div class="ev-events">
      <div class="ev-event"><span class="ev-name">cancelRootCauseAI</span><span class="ev-desc">captures the active step at exit</span></div>
    </div>
  </div>
  <div class="ev-stage">
    <span class="ev-label">Post-save grid</span>
    <div class="ev-events">
      <div class="ev-event"><span class="ev-name">editCauseInGridRootCauseAI</span><span class="ev-desc">text edit on a cause row</span></div>
      <div class="ev-event"><span class="ev-name">removeCauseInGridRootCauseAI</span><span class="ev-desc">checkbox-off removes a cause</span></div>
      <div class="ev-event"><span class="ev-name">retryRootCauseAI</span><span class="ev-desc">Retry button reopens the wizard</span></div>
    </div>
  </div>
  <div class="ev-stage">
    <span class="ev-label">Adoption denominator</span>
    <div class="ev-events">
      <div class="ev-event"><span class="ev-name">viewInvestigationRootCausesTab</span><span class="ev-desc">Root Causes tab opened; denominator for all wizard rates</span></div>
    </div>
  </div>
</div>

#### Does the wizard carry users through?

Two funnel ratios: entry-to-Step-2 (does the AI's output load and convince?) and Step-2-to-save (does the output get committed?). Where users cancel matters as much as whether they cancel. Step 1 exit = framing missed. Step 2 exit = output didn't convince. Step 3 exit = review surfaced something unfixable in-wizard. Each pattern implies a different fix.

#### How much do users edit what the AI gave them?

Every Refine, Regenerate, or reclassification is a measurable *I don't fully trust this* moment. Refine frequency per Why position shows where the model is weakest. A high Regenerate-to-Refine ratio means the Refine affordance isn't worth the effort: a problem with the UI, not just the AI.

#### Does three steps feel right?

Median time-to-save, segmented by user role. A 30-second median means rubber-stamping. A 5+ minute median means the review step is doing too much. A large gap between standard users and administrators tells me the defaults are tuned for the wrong mental model.

#### Is the grid earning its space?

Low edit-cause rate = the save-now-edit-later architecture is working. High remove-cause rate = the wizard is committing too eagerly. The retry rate tests the PM's step-count call directly: four of six users preferred four steps, the PM called three, and a retry is a measurable *I-still-believe-in-this-but-something-went-wrong* moment.

#### What this unlocks

Each signal maps to a known next decision: wizard granularity, Refine UX, pre-save editing, Step 1 framing, cause-group taxonomy. Without the signals, every iteration on the wizard is opinion. With them, the argument is from evidence.

<blockquote class="pull-quote"><p>"Every iteration on the wizard is opinion. With the signals, the argument is from evidence."</p></blockquote>

## What shipped

The MVP went live in the Investigations module behind a license toggle.

<div class="stat-strip">
  <div class="stat-item">
    <span class="stat-num">12</span>
    <span class="stat-label">times triggered</span>
  </div>
  <div class="stat-div"></div>
  <div class="stat-item">
    <span class="stat-num">8</span>
    <span class="stat-label">customers</span>
  </div>
  <div class="stat-div"></div>
  <div class="stat-item">
    <span class="stat-num">13</span>
    <span class="stat-label">days after launch</span>
  </div>
</div>

Early adoption from real customers. The instrumentation above is what comes next; the rest waits on usage.

The most important call wasn't the wizard or the grid. It was refusing to let AI write into the existing form. AI got its own grid. The user keeps theirs. The compliance officer defending an audit can say *I decided this* about every line in the existing field, and *the AI suggested this and I kept it* about every line in the new grid. Two domains, both visible. That's the design.
