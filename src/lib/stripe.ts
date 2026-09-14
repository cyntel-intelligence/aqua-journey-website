import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2026-08-26.dahlia',
  typescript: true,
});

export type DeliveryMethod = 'email' | 'mail' | 'pickup';

export interface GiftCardPurchaseData {
  amount: number;
  deliveryMethod: DeliveryMethod;
  buyerName: string;
  buyerEmail: string;
  recipientName: string;
  recipientEmail?: string;
  recipientAddress?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  personalMessage?: string;
}

export function generateGiftCardCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'AQ-';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
