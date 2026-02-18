# Project Backlog

> **Next Actions**: See state.json for immediate priorities (top 3-5 items)

**Last Review**: 2026-02-18
**Next Review**: 2026-02-25

---

## Epic: Code Review & Issue Discovery CRITICAL
**Status**: Active | **Target**: Phase 0

### Tasks
- [ ] REVIEW-1: Review all page components for issues
- [ ] REVIEW-2: Check Header and Footer components
- [ ] REVIEW-3: Audit SEO configuration (sitemap, robots, meta)
- [ ] REVIEW-4: Check responsive design across pages
- [ ] REVIEW-5: Identify accessibility issues

**Spec**: Pending code review
**Dependencies**: None

---

## Epic: Bug Fixes HIGH
**Status**: Planned | **Target**: Phase 1

### Tasks
- [ ] BUG-1: Issues to be identified from review

**Spec**: `.project/architect/features/bug-fixes.md`
**Dependencies**: Code Review epic

---

## Epic: Visual Updates MEDIUM
**Status**: Planned | **Target**: Phase 2

### Tasks
- [ ] VIS-1: Updates to be defined with user

**Spec**: `.project/architect/features/visual-updates.md`
**Dependencies**: Bug Fixes epic

---

## Epic: Performance & SEO MEDIUM
**Status**: Planned | **Target**: Phase 3

### Tasks
- [ ] PERF-1: Run Lighthouse audit
- [ ] PERF-2: Optimize images
- [ ] SEO-1: Review and improve meta tags
- [ ] SEO-2: Verify sitemap completeness

**Spec**: `.project/architect/features/performance-seo.md`
**Dependencies**: None (can run in parallel)

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
