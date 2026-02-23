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
