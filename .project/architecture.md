# Project Architecture

## Overview
Aqua Journey Swim School website - a Next.js 16 marketing site for a family-owned swim school in Ormond Beach, Florida. The site provides information about swim programs, class registration, and now adding email capture for water safety education content.

## Design Principles
- Static-first: No backend server required
- External integrations: Formspree, Stripe, Jack Rabbit Class
- Mobile-responsive: Tailwind CSS 4
- SEO optimized: Structured data, meta tags, sitemap
- Accessibility: Semantic HTML, ARIA labels, keyboard navigation

## Component Map

> Auto-generated from `.project/architecture/components.json`
> Run `/sync architect` to regenerate

```mermaid
graph TD
    classDef current fill:#4a9eff,stroke:#333,color:#fff
    classDef planned fill:#fff,stroke:#333,stroke-dasharray: 5 5
    classDef potential fill:#e0e0e0,stroke:#999,color:#666

    core[Next.js Website]:::current
    formspree[Formspree Contact]:::current
    jackrabbit[Jack Rabbit Class]:::current
    stripe[Stripe Gift Cards]:::current
    analytics[Google Analytics]:::current

    email_capture[Email Newsletter Signup]:::planned
    email_service[Email Service Integration]:::planned
    water_safety[Water Safety Resources]:::planned

    core --> formspree
    core --> jackrabbit
    core --> stripe
    core --> analytics

    email_capture -.-> email_service
    email_capture -.-> core
    water_safety -.-> core
    water_safety -.-> email_capture
```

## Tech Stack
- **Framework**: Next.js 16.1.6
- **UI**: React 19.2.3, Tailwind CSS 4
- **Language**: TypeScript 5
- **Forms**: Formspree
- **Payments**: Stripe (gift cards)
- **Registration**: Jack Rabbit Class
- **Analytics**: Google Analytics 4

## Constraints
- No backend infrastructure (static site)
- Use existing brand colors (blue #03a9f4, orange #f79007)
- Mobile-first responsive design
- Maintain existing SEO optimization

## Technical Decisions
- 2026-02-23: Use existing Formspree integration or similar service for email capture (no new backend needed)
