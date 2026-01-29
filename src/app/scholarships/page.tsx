import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scholarships | Aqua Journey Swim School',
  description: 'Learn about scholarship opportunities for swim lessons at Aqua Journey Swim School through our partners: Step Up for Students, Down Syndrome Foundation, and Make A Splash Foundation.',
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarship Opportunities</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We believe every child deserves the chance to learn water safety. Through our partnership programs, swim lessons may be more accessible than you think.
          </p>
        </div>
      </section>

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
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <p className="text-[var(--gray)]">Complete the application process directly through the scholarship organization.</p>
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
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
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
