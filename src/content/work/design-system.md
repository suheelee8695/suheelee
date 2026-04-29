---
title: "Design System"
tagline: "A fully customized MUI-based system that aligned design and dev with synced tokens."
summary: "Built on top of MUI but fully customized to match our product's branding, tone, and UX. I redefined base components using design tokens, documented everything in Figma, and synced tokens directly to GitLab, speeding up handoff and ensuring UI consistency."
cover: "/images/Screenshot-2025-03-27-at-11.10.02.png"
tile: "/images/Design-system-cover-1.png"
accent: "lime"
role: "Design Systems Lead"
year: "2024"
tags: ["Design system", "Figma", "MUI", "Tokens"]
featured: true
order: 2
---

This design system was built on top of MUI, but fully customized to match our product's branding, tone, and UX needs. I redefined all base components (buttons, inputs, menus) using design tokens for consistent color, spacing, and typography. Everything was documented in Figma and structured to mirror our code system. I worked closely with developers to sync these tokens with GitLab, improving design-to-dev handoff and reducing redundant work across teams.

## Why we needed a design system

When I joined the team, it quickly became clear that we were growing fast, but our UI wasn't keeping up.

Designers were rebuilding the same components from scratch. Developers were implementing one-off styles. And features that should have felt unified… didn't.

#### The core problems we faced

**Inconsistency everywhere**: Colors, spacing, typography, and component styles varied depending on who built it and when. There was no central reference.

**Slow collaboration between design and development**: Design handoffs often required extra meetings, Slack threads, and clarification.

**Redundant work**: The same elements were being re-created over and over (buttons, dropdowns, forms), all slightly different.

**Hard to scale**: As the product grew, so did the inconsistency.

**Onboarding was painful**: New team members didn't know what to use, where to find it, or whether something already existed.

## How I built it

#### 1. Aligning with dev reality
The development team was already using [MUI](https://mui.com/), so I built the design system directly on top of it. This avoided friction and accelerated adoption.

#### 2. Auditing existing components
I reviewed every reusable element across the platform, cataloging inconsistencies and identifying core patterns that needed standardization.

#### 3. Customizing the MUI theme
- **Color palette**: Replaced default MUI colors with branded module-based tokens.
- **Typography**: Adjusted to match our tone, hierarchy, and accessibility needs.
- **Spacing, radius, elevation**: Standardized all layout and interaction behaviors.

#### 4. Building the design token system
Tokens for **color**, **spacing**, **radius**, **elevation**, **typography**: synced with GitLab to ensure consistency across design and code.

<figure class="figure-wide">
  <img src="/images/Screenshot-2025-03-29-at-10.42.20.png" alt="Token structure in Figma" />
</figure>

<figure class="figure-wide">
  <img src="/images/Screenshot-2025-03-29-at-10.42.57.png" alt="Token usage in components" />
</figure>

#### 5. Creating a scalable Figma library
- Used auto layout, variants, and tokenized styles
- Matched structure and props from the codebase
- Documented usage and states within Figma

<figure>
  <img src="/images/Screenshot-2025-03-29-at-10.45.21.png" alt="Figma library overview" />
</figure>

#### 6. Building components with variant logic
Each component was built to handle real-world usage through structured variants, mirroring how props work in code. This made components flexible, consistent, and developer-friendly.

<figure class="figure-wide">
  <img src="/images/Screenshot-2025-03-27-at-11.13.05.png" alt="Variant logic in Figma" />
</figure>

#### 7. Collaborating with developers
- Synced tokens and tested components in Storybook
- Extended and maintained our custom theme in GitLab
- Aligned on naming, behavior, and responsiveness

This wasn't just about building design assets. It was about creating a unified system our whole team could rely on.

## The outcome

#### 1. Faster design-to-dev handoff
Pre-built components and synced tokens eliminated repetitive questions. Handoffs became faster, clearer, and required less back-and-forth.

#### 2. Shared design–development language
By aligning Figma tokens and MUI theme values, designers and developers spoke the same language. Styles were no longer "interpreted" in code. They were implemented exactly.

#### 3. Scalable and future-proof
The system supports new features, themes, and branding updates. One update to a token updates every component consistently.

#### 4. Smoother onboarding
With clear documentation and a reusable component library, new designers and devs could start contributing confidently in days, not weeks.

#### 5. Stronger collaboration culture
Working cross-functionally from day one built a culture of trust. Our design system wasn't owned by design or dev. It was built together.
