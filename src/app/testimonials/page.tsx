import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Aqua Journey Swim School',
  description: 'Read what parents are saying about Aqua Journey Swim School and how our swim lessons have helped their children.',
};

const testimonials = [
  {
    quote: "In my opinion Aqua Journeys is the best place, hands down, to teach your child to swim and build confidence. Frankly I was skeptical because the lessons cost more than what I was used to paying and also shorter, but the results speak for themselves.",
    author: "Local Parent",
    child: "Parent",
    highlight: true,
  },
  {
    quote: "My wife and I enrolled our daughter in swim lessons here when she started walking, at 9 months old. This place is great! All the instructors love what they do and couldn't have been better.",
    author: "Happy Dad",
    child: "Parent of infant swimmer",
    highlight: false,
  },
  {
    quote: "My child loves the pool and she's not afraid of the water. This has been great. It's a lively atmosphere.",
    author: "Brooke G.",
    child: "Ormond Beach Mom",
    highlight: false,
  },
  {
    quote: "It is such a bright and fun place to learn to swim! Warm water and year round swimming! The instructors are all certified and insured, pediatric referrals too!",
    author: "Satisfied Parent",
    child: "Parent",
    highlight: true,
  },
  {
    quote: "The one on one lessons definitely kept them motivated and paying close attention. The only competition my kids had was themselves and I loved how this makes for a more individualized experience.",
    author: "Local Mom",
    child: "Parent of multiple children",
    highlight: false,
  },
  {
    quote: "Last year I spent many weeks at a public pool and private lessons and saw zero progress. Both my girls started at Aqua Journeys still terrified of putting their head in the water — now they're confident swimmers!",
    author: "Grateful Parent",
    child: "Parent of two girls",
    highlight: true,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Parents Say</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Don't just take our word for it—hear from the families who've experienced Aqua Journey.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[var(--secondary)] mb-6">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-2xl md:text-3xl text-[var(--foreground)] mb-6 leading-relaxed font-medium">
            "{testimonials[0].quote}"
          </blockquote>
          <div>
            <cite className="text-lg font-semibold text-[var(--foreground)] not-italic">{testimonials[0].author}</cite>
            <p className="text-[var(--gray)]">{testimonials[0].child}</p>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm ${
                  testimonial.highlight ? 'ring-2 ring-[var(--secondary)]' : ''
                }`}
              >
                <div className="text-[var(--primary)] mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-[var(--foreground)] mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <cite className="font-semibold text-[var(--foreground)] not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-[var(--gray)]">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">500+</div>
              <p className="text-[var(--gray)]">Children Taught</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">98%</div>
              <p className="text-[var(--gray)]">Parent Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">5+</div>
              <p className="text-[var(--gray)]">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">4.9</div>
              <p className="text-[var(--gray)]">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Swimming Family
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            See for yourself why families love Aqua Journey. Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--secondary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/classes"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--secondary)] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Our Classes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
