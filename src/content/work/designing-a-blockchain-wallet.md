---
title: "Designing a Blockchain Wallet for DHX"
tagline: "End-to-end design of a Polkadot-based crypto wallet: brand, onboarding, staking."
summary: "Led the end-to-end design of a cryptocurrency wallet for DataHighway (DHX), creating a new brand identity and simplifying complex blockchain interactions like staking and account setup. The result: a sleek, beginner-friendly wallet built on Polkadot, designed to educate, empower, and earn trust."
cover: "/images/DHX-front.png"
tile: "/images/ezgif.com-gif-maker-3.gif"
accent: "violet"
role: "Product Designer & Brand Lead"
year: "2022"
tags: ["Crypto", "Mobile", "Brand identity", "Onboarding"]
featured: true
order: 4
---

## Background

**DHX** (DataHighway) is a decentralized IoT blockchain network built as a parachain on **Polkadot**, designed to power an Inter-Chain Data Market and incentivize network participation through staking, governance, and mining.

When DHX was preparing to launch its token, they needed a dedicated wallet app. The foundation was based on an existing Polkadot wallet, but the company wanted a fresh user experience and visual identity tailored to the DHX community.

## Problem

Most blockchain wallets are designed by engineers, for engineers. While powerful, they're often confusing for users who are new to crypto or unfamiliar with concepts like staking, controller accounts, or mnemonic phrases.

#### In DHX's case
1. There was no traditional signup (no email or password), only mnemonic phrases for account recovery.
2. Users needed to understand the Polkadot system, including stash and controller accounts.
3. There was no visual identity for the DHX brand yet.

**The challenge:** How do we make a technically complex app feel accessible, secure, and trustworthy, without diluting its advanced capabilities?

## Goals

- Design a **simple, intuitive UI** for new crypto users
- Create a **distinct brand identity** for DHX
- Help users understand **staking**, **account roles**, and **wallet safety** through clear UX
- Build a **prototype** that could later be integrated into a broader product

## Research & discovery

#### User insights
To understand user pain points, I interviewed early DHX community members and reviewed feedback from Polkadot wallet users.

> "I lost my backup phrase and now my funds are gone."
>
> "I don't understand what a controller account does."
>
> "Why do I need two accounts just to stake?"

#### Competitor audit
I explored wallets like MetaMask, Trust Wallet, and Polkadot.js. Most required users to set up accounts using seed phrases, but few explained **why** or **how**. Many lacked beginner-friendly onboarding or fallback options if a recovery phrase was lost.

## Branding

Before jumping into screens, I created a full **brand system** for DHX:

1. A futuristic yet approachable **logo** inspired by interconnectivity
2. A **dark UI theme** to signal tech-savviness, paired with soft accent colors
3. Typography and layout aligned with Polkadot's developer-friendly tone but softened for broader appeal

<figure>
  <img src="/images/Group-3069.png" alt="DHX brand exploration 1" />
</figure>
<figure>
  <img src="/images/Group-3070.png" alt="DHX brand exploration 2" />
</figure>
<figure>
  <img src="/images/Group-3071.png" alt="DHX brand exploration 3" />
</figure>
<figure>
  <img src="/images/Group-3072.png" alt="DHX brand exploration 4" />
</figure>

## UX design

#### Account setup & safety
Users were required to create a **stash account** (main fund holder) and a **controller account** (used for governance/staking actions). I added onboarding screens and tooltips explaining why this dual-account system enhances security.

> "Your **stash account** holds your funds. Think of it as a vault. Your **controller account** is the key, but it can't open the vault without permission."

#### Staking flow
The staking process was a core use case. I simplified it into three steps:
1. Choose a validator
2. Set amount
3. Confirm & review

Visual progress indicators and inline explanations helped users understand staking without leaving the app.

#### Backup code education
Rather than simply displaying the mnemonic phrase, I added:
- Visual warnings and emotional cues to stress importance
- Suggestions to store offline or in a password manager
- A quiz step to reinforce understanding of backup safety

## Prototype & handoff

The full UI was prototyped in Figma and shared with the dev team.

#### Home screen & staking dashboard
<figure>
  <img src="/images/DHX-Home-01-p-800.png" alt="DHX home screen" style="max-width: 320px; margin-inline: auto;" />
</figure>

#### Staking
<figure>
  <img src="/images/ezgif.com-gif-maker-3.gif" alt="Staking flow animation" style="max-width: 320px; margin-inline: auto;" />
</figure>

#### Create account
<figure>
  <img src="/images/ezgif.com-gif-maker-2_1.gif" alt="Create account flow animation" style="max-width: 320px; margin-inline: auto;" />
</figure>

<figure>
  <img src="/images/Signaltoken.png" alt="Token visual" />
</figure>

## Outcome

The DHX wallet was fully built and tested. However, before launch, the company shifted direction and asked me to **merge** this wallet into their existing app (DataDash).

This posed a major challenge: DataDash was built for different users with a completely different architecture. The integration required compromises in UX and design, which I documented and iterated on in a follow-up project.

## Reflection

This project deepened my knowledge of crypto UX and taught me how to:

- Balance **complex logic** with **clear storytelling**
- Advocate for **user onboarding and education**, especially when working with technically dense products
- Collaborate across **engineering and brand** to shape product direction from scratch
