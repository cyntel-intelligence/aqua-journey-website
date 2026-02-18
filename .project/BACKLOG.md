# Project Backlog

> **Next Actions**: See state.json for immediate priorities (top 3-5 items)

**Last Review**: 2026-02-18
**Next Review**: 2026-02-25

---

## Epic: Code Review & Issue Discovery COMPLETED
**Status**: Complete | **Target**: Phase 0

### Tasks
- [x] REVIEW-1: Review all page components for issues
- [x] REVIEW-2: Check Header and Footer components
- [x] REVIEW-3: Audit SEO configuration (sitemap, robots, meta)
- [x] REVIEW-4: Check responsive design across pages
- [x] REVIEW-5: Identify accessibility issues

**Spec**: Completed - see decisions.md for findings
**Dependencies**: None

---

## Epic: Bug Fixes HIGH
**Status**: Active | **Target**: Phase 1

### Tasks
- [x] BUG-1: Fix broken footer link to non-existent #preschool section
- [x] BUG-2: Fix Stroke Development icon showing toddler image
- [x] BUG-3: Update contact form options to match actual classes
- [x] BUG-4: Add Gift Cards and Scholarships to contact form options

**Spec**: Critical bugs fixed in commit 8f189d3
**Dependencies**: Code Review epic (complete)

---

## Epic: Accessibility Fixes COMPLETED
**Status**: Complete | **Target**: Phase 1

### Tasks
- [x] A11Y-1: Reviewed heading hierarchy (structure is correct)
- [x] A11Y-2: Add meaningful alt text to class icons
- [x] A11Y-3: Fix orange background color contrast (text-white/90)
- [x] A11Y-4: Add external link indicators and aria-labels
- [x] A11Y-5: Add skip-to-main navigation link

**Spec**: Completed in commit ab51864
**Dependencies**: None

---

## Epic: Code Quality MEDIUM
**Status**: Planned | **Target**: Phase 2

### Tasks
- [ ] CODE-1: Centralize business hours in constants file
- [ ] CODE-2: Extract HeroSection component (repeated in all pages)
- [ ] CODE-3: Add contact form loading/success states
- [ ] CODE-4: Fix mobile menu not closing on external link click
- [ ] CODE-5: Extract common SVG icons to reusable component

**Spec**: `.project/architect/features/code-quality.md`
**Dependencies**: None

---

## Epic: Visual Updates MEDIUM
**Status**: Planned | **Target**: Phase 2

### Tasks
- [ ] VIS-1: Add consistent hover states to buttons
- [ ] VIS-2: Add micro-interactions and transitions
- [ ] VIS-3: Consider adding breadcrumb navigation

**Spec**: `.project/architect/features/visual-updates.md`
**Dependencies**: Bug Fixes epic

---

## Epic: Performance & SEO COMPLETED
**Status**: Complete | **Target**: Phase 3

### Tasks
- [x] PERF-1: Analyzed and optimized images
- [x] PERF-2: Deleted 27MB unused images, compressed remaining (50-85% smaller)
- [x] SEO-1: Fixed sitemap to use static date
- [x] SEO-2: Added Service schema for classes page
- [x] SEO-3: Added loading skeleton for Instagram widget

**Spec**: Completed in commit 0645b50
**Dependencies**: None

---

## Completed Epics (Archived)
<!-- Move completed epics to .project/architect/archive/[YYYY-MM]-completed.md -->

---

## Backlog Rules
- Task descriptions: ONE LINE max
- No implementation details (put in architect/features/)
- No dependency diagrams (put in architect/staging/)
- No session notes (put in session-log.jsonl)
- When epic complete: move to architect/archive/
