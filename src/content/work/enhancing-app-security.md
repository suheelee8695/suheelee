---
title: "Enhancing App Security"
tagline: "Designing the user authentication experience for better security & usability."
summary: "A complete redesign of the signup and authentication flow for a crypto wallet app: biometric login, 2FA, secure passcode setup, and recovery code management. The result is a more secure and user-friendly onboarding journey."
cover: "/images/App-security-1.png"
tile: "/images/App-security-1.png"
accent: "blue"
role: "Lead Product Designer"
year: "2023"
tags: ["Authentication", "Mobile", "Security", "Onboarding"]
featured: true
order: 3
---

## Overview

Security is a fundamental aspect of any digital experience, yet it often comes at the cost of usability. The goal of this project was to **enhance app security without compromising user experience**: ensuring a seamless yet secure authentication flow.

#### Key improvements
- ✔ Streamlined onboarding: a step-by-step signup that integrates security without friction
- ✔ Multi-layered security options: passcodes, biometrics, and 2FA
- ✔ Clearer security settings: simplified controls for easy updates
- ✔ Improved account recovery: more intuitive password reset and recovery flows

## The problem

Many users struggle with complex security processes, leading to:

- Weak passwords due to frustration with complex requirements
- High dropout rates during 2FA and biometric setup
- Inconsistent security configurations, making protection levels hard to manage

We identified that security measures need to be both **strong and user-friendly**.

## Research & competitor analysis

Our research focused on how other apps handle authentication, comparing key factors like:

- **Ease of signup**: How quickly users can create an account
- **Security layers**: The types of authentication methods provided
- **Recovery options**: The flexibility in account recovery

By analyzing leading security-focused apps, we refined our approach to balance security and usability.

<figure>
  <img src="/images/competitor-analysis.png" alt="Competitor analysis" />
</figure>

<figure>
  <img src="/images/Group-35.png" alt="Comparison matrix" />
</figure>

## Quick wireframe session

Created initial sketches to visualize the 2FA flow and gathered feedback from the team. Addressed concerns such as onboarding complexity and reducing friction for existing users.

<figure>
  <img src="/images/AGV_vUegPPT2GSRzasR_7zcOiksC2msSMNaO1zVlSwtC1A9dQL8XrpB_OKqgbbPSnOf3y-F4NZSI7so9N1CbciHZr6QvPRfDl-CydeR6rXbq1CjPM-YuMCRK0K3KLfcFdblA23M10qxGKGKlEOnLyLJvw5qS3VgUvV8s2048.png" alt="Wireframe" />
  <figcaption>Wireframe</figcaption>
</figure>

<figure>
  <img src="/images/AGV_vUfwEPud65p8lS2-XXlOcrgYZmqaUQKF2FxoA-oKpz3Y02dVvnjk4unmPx-5j4nvIqA3_swEelvp_9-vUfd78gagpmaAdv0010PcYE-r2BavQwm7gEqi9hnsXXLOMzcV6vLmDLqCbkaDbWfCtM3R0iZqKjSsGy-Ls2048.png" alt="Brainstorming" />
  <figcaption>Brainstorming</figcaption>
</figure>

## User flow & key design decisions

To simplify the process, we structured authentication into **clear, guided steps**:

#### 🔹 Signup & authentication steps
1. **Create account**: Minimal friction with progressive disclosure for security settings
2. **Set passcode**: Encouraging strong but memorable passwords
3. **Enable biometrics**: Optional step for quick but secure access
4. **Two-Factor Authentication (2FA)**: Seamless integration without disrupting the flow

These steps ensure users progressively enhance security while maintaining a smooth onboarding experience.

<figure class="figure-wide">
  <img src="/images/AGV_vUeOJwIOyla_nmIipW72kepH31Xr3N67lUZyYDe_ESBVQsfrimsFIo3UAE6qT4nc0A0en1vZPNZLOt21xO33kycDQ3lSloXvBRZzrRRkgKgaOvTbQo2P-hw2iCqztdJrsCuui9F9A23xe8CATGFLoq_11g6lwTCos2048.png" alt="User flow diagram" />
</figure>

## Final design highlights

- ✔ Step-by-step authentication makes security setup seamless
- ✔ Flexible biometric and passcode options provide personalized security
- ✔ Streamlined security updates make managing protection intuitive
- ✔ Improved password recovery reduces friction for locked-out users

## Design outcome

We didn't just aim to add security. We designed a secure experience that felt intuitive, empowering, and human.

<figure class="figure-wide">
  <img src="/images/Group-2838.png" alt="Live password criteria" />
</figure>

#### Live password criteria
**Why**: Many users were confused by vague password requirements.
**What we designed**: Live feedback as the user types; show/hide toggle.
**Impact**: Increased signup success and stronger passwords.

<figure class="figure-wide">
  <img src="/images/Group-2824.png" alt="Biometric login options" />
</figure>

#### Biometric login options
**Why**: Users wanted faster, secure access without typing passwords every time.
**What we designed**: Support for Face ID, Touch ID, and Fingerprint. Users can enable for faster login or skip and stick with passcode only.
**Impact**: Flexibility while meeting industry standards.

<figure>
  <img src="/images/Group-2839.png" alt="6-digit passcode" />
</figure>

#### 6-digit app passcode
**Why**: A reliable fallback if biometrics fail or aren't enabled.
**What we designed**: A simple, secure 6-digit code creation during onboarding.
**Impact**: Every user, regardless of device support, has a reliable way in.

<figure>
  <img src="/images/Group-2844.png" alt="Lockout flows" />
</figure>

#### Fail-safe lockout flows
**Why**: Brute-force attacks and shared-device risks required guardrails.
**What we designed**: App lockout after 3 failed passcode attempts (30 minutes); reset option using the account password.
**Impact**: Reduced attack surface while giving legitimate users a way back in.

<figure>
  <img src="/images/Group-2841.png" alt="Adaptive security settings" />
</figure>

#### Adaptive security settings
**Why**: Power users needed visibility and control over their setup.
**What we designed**: A dynamic settings menu that adjusts based on enabled features.
**Impact**: Reduced reliance on support and empowered users to manage their own safety.

<figure>
  <img src="/images/Group-2842.png" alt="2FA with recovery codes" />
</figure>

#### Two-Factor Authentication with recovery codes
**Why**: Users needed protection from unauthorized access, but also a way to recover their accounts.
**What we designed**: Seamless 2FA setup via QR or manual key entry; smart recovery codes with warnings and clear next steps.
**Impact**: Balanced security and peace of mind without lockout stress.

## Final thought

This project demonstrates how user experience and security can coexist. By focusing on clear guidance, flexible security options, and frictionless authentication, we've created a system that protects users while keeping the experience smooth.
