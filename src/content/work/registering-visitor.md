---
title: "Registering Visitor"
tagline: "Redesigning visitor registration for usability, efficiency, and privacy compliance."
summary: "The Register Visitor feature in MyQ is a system for managing visitor check-ins. The goal: simplify visitor search and registration by making the process more intuitive, reducing confusion, and improving search results."
cover: "/images/My-Quentic-1.png"
tile: "/images/Visitor-mockup-1.png"
accent: "orange"
role: "Lead Product Designer"
year: "2024–2025"
tags: ["UX research", "Enterprise", "GDPR", "Search"]
featured: true
order: 1
---

## Overview

The **Register Visitor** feature in **MyQ** is a system for managing visitor check-ins. The goal of this project was to **simplify visitor search and registration** by making the process more intuitive, reducing confusion, and improving search results.

This redesign focused on:

- ✅ **Modernizing the search experience**
- ✅ **Supporting flexible search across name, email, and company**
- ✅ **Supporting group visitor registration**
- ✅ **Enhancing compliance for GDPR and different regional needs**

This redesign primarily benefits three user groups:

- **🕵️‍♀️ Admin & Gatekeepers**: Responsible for managing visitor records, ensuring safety qualifications, and handling compliance.
- **🕵️ Employees Hosting Visitors**: Need a simple and quick way to register guests for appointments.
- **🕵️ Visitors**: Require a fast, smooth check-in process with minimal manual input.

## The Problems

Through research and user feedback, we identified **critical pain points** in the existing system.

#### ❌ Search experience issues
- Two separate search options in settings (email-based & partial-name search) created confusion
- Search **only worked with exact or partial matches** (e.g., first 3 letters), leading to failed searches
- No **auto-suggestions or fuzzy matching**, making it **harder to find visitors**

#### ❌ Manual & inefficient registration
- No **group registration**, forcing admins to register visitors **one-by-one**
- Frequent visitors **had to re-enter details manually**, slowing down check-ins

#### ❌ Privacy & compliance challenges
- GDPR rules in **Europe** required **strict data privacy**, hiding visitor details
- US users expected **open search visibility**, conflicting with GDPR constraints
- Email was a **mandatory search field**, but not all visitors had emails

These issues led to **frustration, longer processing times, and compliance concerns.**

<figure>
  <img src="/images/image-7-1.png" alt="Classic view implementation" />
  <figcaption>How it was implemented in classic view</figcaption>
</figure>

<figure class="figure-wide">
  <img src="/images/HazChem-Visitor-Registration---Frame-2.jpg" alt="Heuristic analysis" />
  <figcaption>Our heuristic analysis</figcaption>
</figure>

<figure class="figure-wide">
  <img src="/images/HazChem-Visitor-Registration---Frame-3.jpg" alt="Heuristic analysis details" />
</figure>

## Research & user journey

#### Customer insights: what we learned from users

To design a more efficient and user-friendly visitor registration system, we conducted research with safety engineers, gatekeepers, and frequent system users. This helped us understand how visitors were registered, the key challenges faced, and what improvements were needed.

#### 1️⃣ Understanding the current system

We identified **three primary user groups** involved in visitor registration:

**Gate setup & workflow**
- Each site has at least one gatekeeper with a computer and printer, but they are safety personnel, not receptionists.
- One shared Quentic account is used by all gatekeepers, limiting customized role-based settings.
- Visitor pre-entry qualifications vary depending on the visitor's activities, making manual verification necessary.
- High-traffic seasons, such as summer, bring 600–700 visitors per site.

**Current visitor check-in process**
- Visitors typically wait in queues to be checked in by a gatekeeper.
- Visitor details are stored in Word documents, making retrieval and record-keeping inefficient.
- Visitors must go through safety briefings, often handled in groups rather than individually.

#### 2️⃣ Key insights from research

**Time-consuming registration process**: Registering visitors manually takes too long, especially during peak hours. Automating with pre-registered visitor lists and QR-code self-check-in can significantly reduce wait times.

**Inefficient visitor record management**: Gatekeepers rely on Word documents instead of a structured digital database. A centralized system with searchable records and automatic visitor history tracking would improve efficiency.

**Preference for mobile-based check-in**: Many visitors prefer to scan a QR code and complete pre-entry requirements on their phones rather than using on-site tablets.

<figure>
  <img src="/images/Screenshot-2025-03-17-at-16.17.16.png" alt="User interview" />
  <figcaption>User interview</figcaption>
</figure>

<figure class="figure-wide">
  <img src="/images/HazChem-Visitor-Registration---User-journey.jpg" alt="User journey map" />
  <figcaption>User journey</figcaption>
</figure>

## Design process & iterations

#### HMW questions

To ideate potential solutions, we asked:
- How might we make visitor search more flexible and intuitive?
- How might we allow admins to register multiple visitors at once?
- How might we improve search layout for better readability?
- How might we balance privacy and search usability across different regions?

<figure>
  <img src="/images/HazChem-Visitor-Registration---Frame-4.jpg" alt="HMW workshop output" />
</figure>

#### Key design decisions
- ✅ **Smarter search**: Structured visitor database for faster lookup and history tracking
- ✅ **Faster check-ins**: QR-code self-registration to reduce manual processing
- ✅ **Real-time suggestions & fuzzy matching**: Partial input instead of exact matches
- ✅ **Modern card-based results**: Replacing cluttered grid format with structured, scannable results
- ✅ **Multi-selection for group registration**: Admins can register multiple visitors at once
- ✅ **Privacy compliance settings**: Toggle data visibility based on GDPR & regional policies

## Ideation

<figure class="figure-wide">
  <img src="/images/HazChem-Visitor-Registration---Frame-23-1.jpg" alt="Ideation board" />
</figure>

#### 1️⃣ Visitor search visibility settings

<figure>
  <img src="/images/Screenshot-2025-03-18-at-10.22.32.png" alt="Search visibility settings" />
</figure>

**Understanding the problem**: Users need flexible control over search permissions and data access while ensuring GDPR compliance. Some companies require full visibility; others must mask personal data.

**Key design decisions**
- Granular search permissions: enable/disable search by name, company, email, or phone
- Data masking controls: limit visitor history and mask email/phone for compliance
- Confirmation modals: prevent accidental changes

**Expected impact**
- ✔ Full admin control based on organizational needs
- ✔ GDPR compliance while keeping search flexible
- ✔ Reduced confusion about which visitor data is accessible

#### 2️⃣ Register visitor: QR code & manual options

<figure>
  <img src="/images/Screenshot-2025-03-18-at-10.25.40.png" alt="QR vs manual registration" />
</figure>

**Understanding the problem**: Companies needed multiple registration paths. Some visitors preferred self-registration; others needed manual admin input.

**Key design decisions**
- QR code self-registration reduces admin workload
- Manual registration retained for visitors without digital access
- Clear descriptions help admins choose the right method

**Expected impact**
- ✔ Saves time via automated entry
- ✔ Flexible for different visitor needs
- ✔ Higher accuracy by letting visitors input their own details

#### 3️⃣ Register visitor: search

<figure>
  <img src="/images/Screenshot-2025-03-18-at-10.24.43.png" alt="Search experience" />
</figure>

**Key design decisions**
- Three dedicated search inputs for targeted filtering
- Real-time results, no guesswork
- Masked emails for GDPR compliance
- Manual entry below results when a visitor doesn't exist yet

**Expected impact**
- ✔ Reduces failed lookups
- ✔ Speeds up selection in large databases
- ✔ Eliminates unnecessary scrolling

## Expected impact of the redesign

#### ✔ Increased efficiency in visitor search
**Before:** users scrolled through thousands of records or relied on exact matches.
**Now:** Name, Company, and Email filters make lookup fast and flexible.

#### ✔ Reduced manual data entry
**Before:** repeat visitors had to be re-entered every time.
**Now:** the system suggests returning visitors and pre-fills their details.

#### ✔ Improved compliance & privacy control
**Before:** limited control over visitor visibility; GDPR sometimes hid critical info.
**Now:** role-based visibility settings balance security with efficiency.

#### ✔ Scalability for future growth
**Before:** no batch processing.
**Now:** the structure supports batch registration in future updates.

## Next steps

- **Phase 1: MVP & feedback**: Deploy, collect quantitative data and qualitative feedback.
- **Phase 2: Batch registration & group invites**: Bulk visitor upload, group invitation flow.
- **Phase 3: QR-based self-registration**: Reduce admin workload, improve record accuracy.
- **Phase 4: AI-powered search**: Fuzzy matching and predictive suggestions.

## Final thought

This redesign isn't just about making visitor registration easier. It's about making it smarter. By balancing search flexibility, automation, and compliance, the new system ensures that organizations can handle large-scale visitor management efficiently while maintaining security and trust.
