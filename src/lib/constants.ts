// Centralized business information
// Update this file when business details change

export const BUSINESS_INFO = {
  name: 'Aqua Journey Swim School',
  phone: '(386) 676-9555',
  phoneLink: 'tel:+13866769555',
  phoneSchema: '+1-386-676-9555',
  email: 'info@aquajourneyswimschool.com',
  address: {
    street: '721 S. Nova Rd.',
    city: 'Ormond Beach',
    state: 'FL',
    zip: '32174',
    full: '721 S. Nova Rd., Ormond Beach, FL 32174',
  },
  coordinates: {
    lat: 29.2858,
    lng: -81.0558,
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/AquaJourneySwimSchool',
    instagram: 'https://www.instagram.com/aquajourneyswimschool/',
    tiktok: 'https://www.tiktok.com/@aqua.journeys',
  },
  registration: 'https://app.aquajourneyswimschool.com/enroll',
  giftCards: 'https://buy.stripe.com/3cI5kD7ev3HYeoC2uIcQU00',
} as const;

export const BUSINESS_HOURS = {
  display: {
    weekdays: 'Monday - Thursday: 9am - 7pm',
    friday: 'Friday: 9am - 4pm',
    weekend: 'Saturday - Sunday: Closed',
  },
  schema: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
} as const;

export const POOL_TEMP = '90°F';

// Formspree form IDs
// Create new forms at https://formspree.io/forms
export const FORMSPREE_IDS = {
  contact: 'xrekqlpz',           // Existing contact form
  newsletter: 'meelppoa',        // Newsletter signup form
} as const;

// Gift Card Configuration
export const GIFT_CARD_CONFIG = {
  presetAmounts: [25, 50, 75, 100, 150, 200],
  minAmount: 1,
  maxAmount: 10000,
  deliveryMethods: [
    {
      id: 'email',
      label: 'Email Delivery',
      description: 'Virtual gift card sent instantly to recipient\'s email',
      icon: 'email',
    },
    {
      id: 'mail',
      label: 'Mail Delivery',
      description: 'Physical gift card mailed to recipient (5-7 business days)',
      icon: 'mail',
    },
    {
      id: 'pickup',
      label: 'Local Pickup',
      description: 'Pick up at our Ormond Beach location',
      icon: 'pickup',
    },
  ],
} as const;

// Holiday Packages (seasonal)
// Set `enabled: false` after the holidays to hide the banner, the
// /holiday-packages page, the gift card page callout, and stop new checkouts.
// stripeProductId (live-mode prod_...) is the Stripe product sales are
// recorded under for reports; the price always comes from `price` below.
export const HOLIDAY_PACKAGES = {
  enabled: true,
  packages: [
    {
      id: 'holiday-swim',
      name: 'Holiday Swim Package',
      stripeProductId: 'prod_VX3uAj2JWlyGtb',
      tagline: 'Full program package — the gift of confidence, safety & a lifetime skill.',
      price: 840,
      value: 1070,
      highlight: '32 Swim Lessons + Registration Fee',
      includes: [
        '32 swim lessons + registration fee',
        'Aqua Journeys reusable swim bag',
        'Aqua Journeys towel',
        'Swim toy',
        '$10 Snack Shack punch card',
        '$10 Aqua Swim Store credit',
      ],
    },
    {
      id: 'refresher',
      name: 'Refresher Package',
      stripeProductId: 'prod_VX3xwEYDRQJD9J',
      tagline: 'Brush up, build confidence, and keep the skills going this season.',
      price: 300,
      value: 386,
      highlight: '12 Swim Lessons',
      includes: [
        '12 swim lessons',
        'Aqua Journeys towel',
        '$10 Aqua Swim Store credit',
      ],
    },
  ],
} as const;

export type HolidayPackageId = (typeof HOLIDAY_PACKAGES.packages)[number]['id'];

export function getHolidayPackage(id: string) {
  return HOLIDAY_PACKAGES.packages.find((pkg) => pkg.id === id);
}
