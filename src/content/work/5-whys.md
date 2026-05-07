---
title: "AI-Assisted 5 Whys"
tagline: "Bringing a methodology into the platform without taking it away from the user."
summary: "An AI-assisted root cause analysis feature for Quentic's Investigations module. A guided wizard turns case data into a structured 5 Whys analysis, then hands the result back to the user as an editable grid. The case study is in the rules: when AI runs, what it warns the user about, and how editing one cause cascades through the rest."
cover: "/images/5-whys-cover.png"
tile: "/images/5-whys-step3.png"
accent: "pink"
role: "Senior Product Designer"
year: "2026"
tags: ["AI/UX", "Enterprise SaaS", "Wizard pattern", "Workflow design"]
featured: true
order: 3
locked: true
---

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

The alternative I rejected: putting AI suggestions directly into the existing *Causes* field. That would have been faster to build and worse for the user. It would have collapsed the boundary between AI's reasoning and the user's record. Once mixed, the user can't tell what they decided versus what the AI decided. Audit defense becomes guesswork.

Instead: AI works inside a wizard. When the user confirms, the result lands in a *new* grid called *AI Suggested Causes*, placed above the existing *Causes* field. The user can edit any item in the new grid. The existing field is untouched and continues to behave the way it always has.

Two domains, both visible. AI proposes in its own space; the user keeps theirs.

## The wizard, three steps

#### 1. Prompt, with a data-quality check before AI runs

<figure><img src="/images/5-whys-step1.png" alt="Step 1 of the wizard: an investigation overview screen with auto-filled case description, image description, what went wrong, circumstances, and a data-quality warning when the description is too short." /></figure>

The wizard opens with the case and investigation context already pulled in: case description, image description, what went wrong, equipment, damage-causing object, circumstances at the scene, chain of events. The user doesn't paste, summarize, or re-explain. The platform already knows what the incident is.

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

**Regenerate.** Click *Regenerate*. The AI starts over from the prompt and replaces the entire chain.

Both are destructive in their own way, and both surface that fact:

> *Regenerating the Why may change the following Whys and the root cause. Do you want to continue?*

The user confirms or cancels. No silent overwrites. The cascade isn't hidden; the cascade is the warning.

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

One quiet edge case shaped a small but meaningful rule: what happens when the user removes every cause the AI suggested? The grid doesn't sit empty. The system clears the explanation field, treats the AI's prior contribution as withdrawn, and reopens the wizard. A dead grid is worse than no grid; the user gets nudged back to a starting point.

## Constraints

- **The methodology has to remain visible.** A "give me the root cause" black box would have been the wrong tool. The wizard structure surfaces the chain of reasoning, not just the conclusion. The user reviews the *thinking*, not just the *answer*.
- **Less experienced users are the design audience.** Senior EHS officers don't need this feature. New supervisors and operations staff do. The wizard's pace, prompts, sequential reveal, and editing affordances are tuned for someone learning the methodology, not someone confirming it.
- **Permissions stay aligned.** The AI feature respects the existing investigation permissions. No new permission model. Users who can write to investigations can use the AI; users who can't, can't see it.
- **Regulatory tone.** Same constraint as every AI feature in this platform: neutral, factual, no human-like enthusiasm. The wizard speaks like documentation, not like a chatbot.

## How it relates to the design system

Writing this case study is the only place I'll say it directly: 5 Whys is the feature that taught me the rules I later wrote down in the [Human-Centered AI Design Guidelines](/work/ai-design-guidelines).

The AI gets a container. Outside the container, the workflow is human. The container's contents are editable, deletable, regenerable. Save is explicit. Destructive actions are warned. Cascades are surfaced. The AI's limits are visible *before* the user invests in them. Every Mid-Level AI rule in the system was learned somewhere first; this is one of the places.

## What shipped

The MVP recently went live in the Investigations module behind a license toggle. The team has just begun tracking adoption, session efficiency, and CSAT against the original hypotheses: that bringing 5 Whys into the platform makes investigations faster, more consistent across teams, and accessible to less experienced staff. I'll update this section once early signal lands.

The most important call wasn't the wizard or the grid. It was refusing to let AI write into the existing form. AI got its own grid. The user keeps theirs. The compliance officer defending an audit can say *I decided this* about every line in the existing field, and *the AI suggested this and I kept it* about every line in the new grid. Two domains, both visible. That's the design.
