---
title: "Your AI design system needs a manifesto, not just a style guide"
description: "On building an AI design system at Quentic that started with a position, not a Figma library."
date: "2026-05-07"
tags: ["AI", "Design systems", "Design engineering"]
---

Most AI design systems I see are style guides with a sparkle icon. They tell you what color the button is, what shape the chip is, where the gradient goes, when to reach for purple. They are careful, considered, and incomplete.

Style guides answer visual questions. AI raises behavior questions. *When does the AI ask, and when does it just suggest? What is it allowed to overwrite? How does it tell the user it's wrong? What does it refuse to do, even when asked nicely?* You can't answer those by picking a hex code.

So before I drew anything, I wrote a manifesto.

## Five rules and a refusal

The Quentic AI manifesto is five principles. Two are about authority: AI assists, it never decides; AI never overwrites without explicit user awareness. Two are about transparency: hidden logic breaks trust, predictable behavior earns it. The fifth is about graceful failure: every AI feature must have a manual fallback, because AI failure must never block task completion.

The line that does the most work is the one I wrote last:

> If AI cannot clearly improve the experience, it should not exist.

It's not a principle for how to design AI. It's a permission to refuse it. Without that line, every product manager has the right to ask why a feature isn't AI-powered yet. With it, the designer has the right to say *because it shouldn't be*.

A manifesto isn't aspirational copy. It's a contract. It tells everyone on the team what's in scope and what isn't, what AI is allowed to do and what it can't, what we'll build and what we'll turn down. If your AI design system can't tell you what AI is allowed to do to a user's data without asking, the system isn't done yet.

## Tokens, not aspirations

Once the position was locked, the visual system mostly wrote itself.

The AI accent color is a token. Used only for contextual indicators. Never for success, warning, error, validation, or required action. The AI background gradient is a token, allowed inside AI containers, forbidden on confirmation dialogs and destructive actions. The sparkle icon means AI is involved. It is never decoration.

Tokens are the difference between a style guide and a system. A style guide says *use this purple*. A system says *AI accent, full stop, gated by these rules, defined as `colors/AI/Accent` in the design tokens, enforced at PR review*.

You can argue with a style guide. You can't argue with a token without changing the token.

## Three tiers of AI presence

The three-tier classification is what the manifesto produces when you stop asking *what should AI look like* and start asking *what kinds of AI presence exist, and what behavior does each kind demand*.

**Micro AI** is inline assistance. A single field, a short action, lightweight visual treatment. Image translation. Face blur. Summarize a record. The user doesn't enter an AI workspace; AI shows up briefly inside theirs.

**Mid-Level AI** is structured suggestion. AI generates editable content inside a workflow; the user reviews before saving. 5 Whys analyses. AI-generated training questions. The AI gets a container with a gradient. The container is the boundary of AI's authority. Outside the container, the workflow is human.

**Main AI** is the dedicated workflow. AI is the task. Conversational assistants. Reporting agents. Full-height drawer or dedicated page, neutral background, persistent AI identity in the header. Enterprise tone over visual excitement.

The taxonomy isn't decorative. It tells designers what they're allowed to do *before* they start designing. They don't argue about whether to use purple, or whether to require confirmation, or where to put the sparkle. They classify the feature into a tier, and the system answers the rest.

## The system writes the features

When I shipped AI-Assisted 5 Whys, I didn't invent any of its rules. The wizard structure, the data-quality warning before AI runs, the cascade-impact dialog when the user regenerates a Why, the way AI-suggested causes land in their own grid above the existing Causes field instead of writing into it: all applications of the manifesto and the Mid-Level pattern. The system did the design work. I did the implementation.

Same for SDS Extract. Its four-state diff vocabulary (added, changed, removed, unchanged) is an application of *no silent changes*. Its row-level checkboxes are an application of *AI assists, never decides*. Its match-confidence override is an application of *transparency over magic*. None of those choices were invented for SDS Extract. They were what the system required.

That's the test of a design system. The features that ship under it look like they belong together, because the rules wrote them.

## What to do first

If you're starting an AI design system from scratch, the first artifact isn't a Figma library. It's a one-pager that says what AI is for and what it isn't. Get the position right, and the visual system follows. Skip the position, and the visual system papers over it.

A style guide tells designers what to draw. A manifesto tells them what to refuse. AI design systems need both. The second matters more.

The single sentence I'd write first, if I were doing it again:

> If AI cannot clearly improve the experience, it should not exist.

Everything else is downstream of that.
