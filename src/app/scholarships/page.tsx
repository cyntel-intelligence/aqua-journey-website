import Link from 'next/link';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Scholarships | Aqua Journey Swim School | Ormond Beach, FL',
  description: 'Scholarship opportunities for swim lessons in Ormond Beach at Aqua Journey Swim School. Download the Volusia County Water Safety Scholarship application, plus partners including Step Up for Students, Down Syndrome Foundation, and Make A Splash Foundation.',
  keywords: 'swim lesson scholarships, Volusia County water safety scholarship, CFAB scholarship, Step Up for Students swimming, affordable swim lessons Florida, swim scholarship Ormond Beach, Down Syndrome swimming',
};

const partners = [
  {
    name: 'Step Up for Students',
    description: 'Step Up for Students is a nonprofit organization that helps administer scholarships for Florida students. Families may be eligible to use scholarship funds for swim lessons as part of their approved educational expenses.',
    link: 'https://www.stepupforstudents.org/',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    name: 'Down Syndrome Foundation',
    description: 'We proudly partner with the Down Syndrome Foundation to provide swim lesson opportunities for children with Down syndrome. Swimming offers incredible benefits for motor skills, confidence, and safety.',
    link: 'https://www.dsaflorida.org/',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'Make A Splash Foundation',
    description: 'The Make A Splash Foundation is dedicated to providing water safety education and swim lessons to children who might not otherwise have access. Through this partnership, we help ensure every child has the opportunity to learn this life-saving skill.',
    link: 'https://makeasplashfoundation.co/',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <HeroSection
        title="Scholarship Opportunities"
        description="We believe every child deserves the chance to learn water safety. Through our partnership programs, swim lessons may be more accessible than you think."
      />

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              Making Swim Lessons Accessible
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              Aqua Journey Swim School is proud to partner with several organizations that help make swim lessons accessible to more families. If cost is a barrier, these scholarship programs may be able to help.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Our Partners</h2>
            <p className="text-lg text-[var(--gray)]">
              We work with these organizations to provide scholarship opportunities for swim lessons.
            </p>
          </div>

          {/* Volusia County — featured, applications handled by us */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 mb-12 border-t-4 border-[var(--secondary)]">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="w-20 h-20 bg-[var(--secondary)] rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                  Volusia County Water Safety Scholarship
                </h3>
                <p className="text-[var(--gray)] mb-6">
                  We&apos;re proud to partner with Volusia County, through its Children and Families Advisory Board (CFAB), to offer need-based scholarships for Volusia County families.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <a
                    href="/volusia-county-scholarship-application.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Application (PDF)
                  </a>
                  <span className="text-sm text-[var(--gray)]">
                    Complete the application and bring it to our front desk with the required documents (listed on the application).
                  </span>
                </div>

                <p className="text-[var(--gray)]">
                  Questions? Call{' '}
                  <a href={BUSINESS_INFO.phoneLink} className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{partner.name}</h3>
                <p className="text-[var(--gray)] mb-6">{partner.description}</p>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold transition-colors"
                  aria-label={`Learn more about ${partner.name} (opens in new tab)`}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">How to Get Started</h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12 bg-[var(--gray-light)] border-l-4 border-[var(--secondary)] rounded-lg p-6">
            <p className="text-[var(--foreground)]">
              <span className="font-semibold">Applying for the Volusia County scholarship?</span>{' '}
              These steps apply to our partner organizations. Volusia County Water Safety Scholarship applications go through Aqua Journeys directly &mdash; download the application above, then bring it to our front desk with your required documents. No separate partner application is needed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Check Eligibility</h3>
              <p className="text-[var(--gray)]">Visit our partner websites to see if you qualify for their scholarship programs.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Apply for Funding</h3>
              <p className="text-[var(--gray)]">Complete the application process directly through the scholarship organization &mdash; except for the Volusia County scholarship, which you apply for through us.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
              <p className="text-[var(--gray)]">Once approved, reach out to us to enroll in swim lessons using your scholarship funds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Scholarships?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're here to help you navigate the scholarship process. Contact us with any questions.
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
