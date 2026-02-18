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
  registration: 'https://app.jackrabbitclass.com/regv2.asp?id=529327',
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
