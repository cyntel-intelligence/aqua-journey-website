# Feature: Email Capture System

## Overview
Add email newsletter signup functionality to capture visitor emails and provide water safety content.

## User Stories
- As a visitor, I want to sign up for water safety tips so I can keep my family safe
- As a business owner, I want to build an email list to engage with potential customers

## Requirements

### Functional
- Email input field with validation
- Submit button with loading state
- Success/error feedback messages
- Optional: Name field
- Optional: Interest selection (water safety tips, class updates, promotions)

### Non-Functional
- Must work without JavaScript (progressive enhancement)
- Mobile-responsive design
- Match existing site branding
- GDPR/CAN-SPAM compliant (unsubscribe option noted)

## Component Placement
1. **Homepage** - Below hero section or in dedicated signup section
2. **Footer** - Site-wide visibility on all pages
3. **Water Safety Page** - Prominent placement with content offer

## Email Service Options

### Option A: Formspree (Recommended)
- **Pros**: Already integrated for contact form, simple setup, free tier
- **Cons**: Basic - just collects emails, no automation
- **Implementation**: Create new form endpoint

### Option B: Mailchimp
- **Pros**: Industry standard, email automation, templates
- **Cons**: Learning curve, overkill for simple use case
- **Implementation**: Embed form or API integration

### Option C: ConvertKit
- **Pros**: Creator-focused, good automation, landing pages
- **Cons**: Paid, more complex
- **Implementation**: Embed form

### Option D: Buttondown
- **Pros**: Simple, developer-friendly, clean
- **Cons**: Less known
- **Implementation**: API or embed

## Recommended Approach
Use **Formspree** for initial implementation (already in use for contact form). Can migrate to Mailchimp/ConvertKit later if email automation is needed.

## Technical Design

### Component: EmailSignup.tsx
```tsx
// Props
interface EmailSignupProps {
  variant?: 'inline' | 'card' | 'footer';
  showNameField?: boolean;
  heading?: string;
  description?: string;
}
```

### Integration Points
- Form submission to Formspree
- Success tracking with Google Analytics
- Optional: Store emails in spreadsheet via Zapier

## Acceptance Criteria
- [ ] Email signup form renders on homepage
- [ ] Email signup form renders in footer
- [ ] Form validates email format
- [ ] Form shows loading state during submission
- [ ] Form shows success message after submission
- [ ] Form shows error message on failure
- [ ] Mobile responsive
- [ ] Matches site branding
