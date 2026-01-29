import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[var(--gray-light)]">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-[var(--gray)] mb-8">
          Oops! It looks like this page took a dive and didn't come back up. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
