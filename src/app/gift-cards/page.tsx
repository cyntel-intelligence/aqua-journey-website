import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gift Cards | Aqua Journey Swim School',
  description: 'Give the gift of swimming! Purchase Aqua Journey Swim School gift cards for birthdays, holidays, or any special occasion.',
};

export default function GiftCardsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Cards</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Give the gift of swimming—a skill that lasts a lifetime.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              The Perfect Gift for Any Occasion
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              Whether it's a birthday, holiday, baby shower, or just because—an Aqua Journey gift card is a meaningful gift that helps keep children safe around water.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Any Amount</h3>
              <p className="text-[var(--gray)] text-sm">Choose the perfect amount for your gift.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Delivery</h3>
              <p className="text-[var(--gray)] text-sm">Receive via email, mail, or pick up in person.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Meaningful Gift</h3>
              <p className="text-[var(--gray)] text-sm">Give the lifelong gift of water safety.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/3cI5kD7ev3HYeoC2uIcQU00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Purchase a Gift Card
            </a>
          </div>
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
              <h3 className="font-semibold text-lg mb-2">Purchase Online</h3>
              <p className="text-[var(--gray)]">Select your amount and complete your purchase securely online.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Receive Your Gift Card</h3>
              <p className="text-[var(--gray)]">Get it via email, mail, or pick up at our facility.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Redeem Anytime</h3>
              <p className="text-[var(--gray)]">Apply toward swim lessons, swimwear, or retail purchases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Gift Cards?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us if you have any questions or need assistance with your purchase.
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
