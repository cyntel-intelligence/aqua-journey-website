import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Purchase Cancelled | Aqua Journey Gift Cards',
  description: 'Your gift card purchase was cancelled.',
};

export default function GiftCardCancelPage() {
  return (
    <div className="min-h-screen bg-[var(--gray-light)] flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        {/* Cancel Icon */}
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          Purchase Cancelled
        </h1>

        <p className="text-lg text-[var(--gray)] mb-8">
          Your gift card purchase was cancelled. No charges have been made to your payment method.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gift-cards"
            className="inline-block bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Try Again
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white border-2 border-gray-200 hover:border-[var(--primary)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-sm text-[var(--gray)] mt-8">
          Having trouble? Contact us at{' '}
          <a
            href="mailto:info@aquajourneyswimschool.com"
            className="text-[var(--primary)] hover:underline"
          >
            info@aquajourneyswimschool.com
          </a>
        </p>
      </div>
    </div>
  );
}
