import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import HolidayPackageBuyButton from '@/components/HolidayPackageBuyButton';
import { BUSINESS_INFO, HOLIDAY_PACKAGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Holiday Swim Packages | Aqua Journey Swim School | Ormond Beach, FL',
  description: 'Give the gift of water safety this holiday season. Aqua Journey Holiday Swim Packages—our only discount of the year. Limited packages available.',
  keywords: 'holiday swim lessons gift, swim lesson package Ormond Beach, swim lessons Christmas gift, Aqua Journey holiday package',
};

export default function HolidayPackagesPage() {
  if (!HOLIDAY_PACKAGES.enabled) {
    notFound();
  }

  return (
    <>
      <HeroSection
        title="Holiday Swim Packages"
        description="Give the gift of confidence, safety, and a lifelong skill. Our only discount of the year—limited packages available!"
      />

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              🎄 Give the Gift of Water Safety 🎁
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              The best gifts aren&apos;t always found under the tree. They&apos;re the skills that build confidence, promote water safety, and last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {HOLIDAY_PACKAGES.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col bg-[var(--gray-light)] rounded-2xl p-8 border-2 border-transparent hover:border-[var(--primary)] transition-colors"
              >
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{pkg.name}</h3>
                <p className="text-[var(--gray)] mb-6">{pkg.tagline}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-5xl font-bold text-[var(--primary-dark)]">${pkg.price}</span>
                    <span className="text-lg text-[var(--gray)] line-through">${pkg.value.toLocaleString()} value</span>
                  </div>
                  <span className="inline-block mt-3 bg-[var(--secondary)] text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Save ${(pkg.value - pkg.price).toLocaleString()}!
                  </span>
                </div>

                <p className="font-semibold text-[var(--foreground)] mb-3">Package includes:</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[var(--gray)]">
                      <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <HolidayPackageBuyButton packageId={pkg.id} price={pkg.price} />
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--gray)] mt-8">
            Secure payment powered by Stripe. Prefer to purchase in person or by phone? Call us at{' '}
            <a href={BUSINESS_INFO.phoneLink} className="text-[var(--primary)] hover:underline">
              {BUSINESS_INFO.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose a Package</h3>
              <p className="text-[var(--gray)]">Pick the Holiday Swim Package or the Refresher Package and check out securely online.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Let&apos;s Get in Touch</h3>
              <p className="text-[var(--gray)]">Have questions? Contact us anytime!</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Pick Up Your Goodies</h3>
              <p className="text-[var(--gray)]">Stop by the swim school to pick up your holiday goodies!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Holiday Packages?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Want a different amount instead? A <Link href="/gift-cards" className="underline">gift card</Link> works for any amount.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--secondary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
