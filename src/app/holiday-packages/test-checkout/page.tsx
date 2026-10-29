import type { Metadata } from 'next';
import HolidayPackageBuyButton from '@/components/HolidayPackageBuyButton';

// TEMPORARY: internal $1 test purchase to verify holiday package emails.
// Delete this page and the 'test' package in constants.ts after testing.
export const metadata: Metadata = {
  title: 'Test Checkout | Aqua Journey',
  robots: { index: false, follow: false },
};

export default function HolidayPackageTestCheckoutPage() {
  return (
    <div className="min-h-screen bg-[var(--gray-light)] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-[var(--foreground)] mb-4">Holiday Package Test</h1>
        <p className="text-[var(--gray)] mb-6">
          $1 test purchase. Check for the receipt and the info@ notification, then refund it in Stripe.
        </p>
        <HolidayPackageBuyButton packageId="test" price={1} />
      </div>
    </div>
  );
}
