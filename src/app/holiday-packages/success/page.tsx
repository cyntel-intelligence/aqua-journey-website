import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Purchase Complete | Aqua Journey Holiday Packages',
  description: 'Your holiday package purchase was successful!',
};

export default function HolidayPackageSuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--gray-light)] flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          Thank You! 🎄
        </h1>

        <p className="text-lg text-[var(--gray)] mb-6">
          Your holiday package purchase was successful. A confirmation email has been sent to your email address.
        </p>

        <div className="bg-[var(--gray-light)] rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-[var(--foreground)] mb-3">What happens next?</h2>
          <ul className="text-left text-[var(--gray)] space-y-2">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>You&apos;ll receive a receipt via email</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Have questions? Contact us anytime!</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Stop by the swim school to pick up your holiday goodies</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/holiday-packages"
            className="inline-block bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Purchase Another
          </Link>
          <Link
            href="/"
            className="inline-block bg-white border-2 border-gray-200 hover:border-[var(--primary)] text-[var(--foreground)] px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
