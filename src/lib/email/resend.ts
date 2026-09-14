import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey
  ? new Resend(resendApiKey)
  : (null as unknown as Resend);

export const EMAIL_FROM = 'Aqua Journey Swim School <noreply@aquajourneyswimschool.com>';
export const BUSINESS_EMAIL = 'info@aquajourneyswimschool.com';
