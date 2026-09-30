# Project Decisions Log

## 2026-02-23

### Decision: Project Structure
- **Choice**: v2.5 .project/ tracking structure
- **Rationale**: Component dependency map, lean backlog, architect folder for specs, archival workflow
- **Alternatives**: Ad-hoc management
- **Impact**: Smaller BACKLOG.md, clear document separation, better agent efficiency

### Decision: No Backend Infrastructure
- **Choice**: Continue with serverless/external service approach
- **Rationale**: Site is static Next.js, uses Formspree for forms, Stripe for payments - no need for custom backend
- **Alternatives**: Add custom backend for email handling
- **Impact**: Simpler deployment, lower cost, consistent with existing architecture

### Decision: Email Service Provider
- **Choice**: TBD (options: Formspree, Mailchimp, ConvertKit, Buttondown)
- **Rationale**: Pending - need to evaluate features vs complexity
- **Alternatives**: See above
- **Impact**: Affects EmailSignup component implementation

## 2026-09-30 — Scholarship copy omits child age range
Public scholarship copy (site + application PDF) states no age range. The print
PDF said "6 months to 8 years" but the shipped fillable PDF says only "for their
children"; publishing a range the form doesn't back would set an eligibility
expectation we can't support. Confirmed twice by Carly. Settled — do not re-raise.

## 2026-09-30 — Volusia applications handled in-house
Volusia County (CFAB) scholarship applications go through Aqua Journey directly,
not an outside org. Site and FAQ say so explicitly so families don't look for a
partner portal that doesn't exist.

## 2026-09-30 — Prepaid multi-week tuition credit retired
FAQ no longer offers to credit prepaid tuition beyond the 7-day notice period.
Superseded by week-to-week billing ("no large upfront package"). Pending Carly's
confirmation that prepayment is genuinely gone.

## 2026-09-30 — Logo is the canonical route home
Home removed from the top nav as a duplicate of the logo link. Logo carries
aria-label "Aqua Journey Swim School, home" so screen readers still get it.
