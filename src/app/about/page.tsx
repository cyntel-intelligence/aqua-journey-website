import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Aqua Journey Swim School',
  description: 'Learn about Aqua Journey Swim School, our mission, our experienced instructors, and our commitment to teaching children water safety.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Aqua Journey</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Dedicated to teaching children the life-saving skill of swimming in a safe, nurturing environment.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">Our Story</h2>
              <p className="text-[var(--gray)] mb-4 leading-relaxed">
                For over 15 years, Aqua Journeys Swim School has been helping children in Ormond Beach and the surrounding areas discover the joy of swimming. As a family-owned business, we understand that swimming is an essential life skill that everyone should have the opportunity to learn.
              </p>
              <p className="text-[var(--gray)] mb-4 leading-relaxed">
                What started as a passion for water safety has grown into one of the most trusted swim schools in the Daytona Beach area. We've helped thousands of children—from infants as young as 6 months to school-age swimmers—develop confidence and skills in the water.
              </p>
              <p className="text-[var(--gray)] leading-relaxed">
                Our indoor, heated facility maintains a comfortable 90°F year-round, so lessons never get cancelled due to weather. Every day, we're reminded why we do what we do: seeing a child's face light up when they learn to float independently, watching nervous beginners transform into confident swimmers, and knowing we're equipping families with skills that could one day save a life.
              </p>
            </div>
            <div className="bg-[var(--gray-light)] rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏊‍♂️</div>
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">Our Mission</h3>
              <p className="text-[var(--gray)]">
                To provide exceptional swim instruction that builds water safety awareness, develops swimming skills, and instills a lifelong love of the water—all in a supportive, family-friendly environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Our Values</h2>
            <p className="text-lg text-[var(--gray)]">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Safety</h3>
              <p className="text-sm text-[var(--gray)]">Water safety is at the core of every lesson we teach.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Care</h3>
              <p className="text-sm text-[var(--gray)]">Every child is treated with patience, kindness, and respect.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm text-[var(--gray)]">We strive for the highest standards in instruction.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Joy</h3>
              <p className="text-sm text-[var(--gray)]">Learning should be fun and create positive memories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Why Choose Aqua Journey?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[var(--secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Highly Trained Instructors</h3>
                <p className="text-[var(--gray)]">Each instructor has over 100 hours of in-water training, plus education in child development and behavior. All are certified, insured, and CPR/First Aid certified.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[var(--secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">One-on-One Attention</h3>
                <p className="text-[var(--gray)]">Our private and semi-private lessons ensure your child gets individualized instruction tailored to their unique needs and learning pace.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[var(--secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Progressive Curriculum</h3>
                <p className="text-[var(--gray)]">Our structured program builds skills progressively, ensuring children develop strong fundamentals before advancing.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[var(--secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Year-Round Indoor Pool</h3>
                <p className="text-[var(--gray)]">Our indoor heated pool stays at a comfortable 90°F all year—rain or shine. No cancelled lessons due to weather!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Aqua Journey Family
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to give your child the gift of swimming? We'd love to meet you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--primary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
