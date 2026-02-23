# Project Backlog

> **Next Actions**: See state.json for immediate priorities (top 3-5 items)

**Last Review**: 2026-02-23
**Next Review**: 2026-03-02

---

## Epic: Email Capture System CRITICAL
**Status**: Active | **Target**: Phase 1

### Tasks
- [x] EMAIL-1: Choose email service provider (Formspree)
- [x] EMAIL-2: Create EmailSignup component with form validation
- [x] EMAIL-3: Add email signup to homepage below testimonials section
- [x] EMAIL-4: Add email signup to footer component
- [ ] EMAIL-5: Configure Formspree form and update constants.ts

**Spec**: `.project/architect/features/email-capture.md`
**Dependencies**: None

---

## Epic: Water Safety Content HIGH
**Status**: Active | **Target**: Phase 1

### Tasks
- [x] SAFETY-1: Create water safety resources page (/water-safety)
- [x] SAFETY-2: Write water safety tips content (drowning prevention, pool rules)
- [ ] SAFETY-3: Add seasonal safety content (summer tips, pool party safety)
- [ ] SAFETY-4: Create lead magnet content (downloadable PDF or email series)
- [x] SAFETY-5: Link email signup with content offer

**Spec**: `.project/architect/features/water-safety-content.md`
**Dependencies**: Email Capture System

---

## Epic: Polish & Launch MEDIUM
**Status**: Planned | **Target**: Phase 3

### Tasks
- [ ] LAUNCH-1: Mobile responsiveness testing
- [ ] LAUNCH-2: SEO optimization for new pages
- [ ] LAUNCH-3: Analytics event tracking for email signups
- [ ] LAUNCH-4: Deploy to production

**Spec**: TBD
**Dependencies**: Email Capture System, Water Safety Content

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
