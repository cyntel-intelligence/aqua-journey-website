import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2026-08-26.dahlia',
      typescript: true,
    })
  : (null as unknown as Stripe);

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
