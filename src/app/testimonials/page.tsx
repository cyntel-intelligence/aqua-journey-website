import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | Aqua Journey Swim School',
  description: 'Read what parents are saying about Aqua Journey Swim School and how our swim lessons have helped their children.',
};

const testimonials = [
  {
    quote: "Our daughter was terrified of the water. After just a few months at Aqua Journey, she's swimming laps and asking to go to the pool every day! The patience and skill of the instructors made all the difference.",
    author: "Sarah M.",
    child: "Parent of Emma, age 5",
    highlight: true,
  },
  {
    quote: "The small class sizes mean my son gets real attention. He's progressed faster than I ever expected, and more importantly, he LOVES going to his lessons.",
    author: "Michael T.",
    child: "Parent of James, age 4",
    highlight: false,
  },
  {
    quote: "As a first-time mom, I was nervous about swim lessons for my baby. The instructors at Aqua Journey made us both feel so comfortable. My daughter is now 2 and completely at ease in the water.",
    author: "Jennifer L.",
    child: "Parent of Lily, age 2",
    highlight: false,
  },
  {
    quote: "We've tried other swim schools, but none compare to Aqua Journey. The instructors truly care about each child's progress and safety. Worth every penny.",
    author: "David & Maria K.",
    child: "Parents of Sofia, age 6",
    highlight: true,
  },
  {
    quote: "My twin boys have completely different personalities—one cautious, one fearless. Aqua Journey adapted their teaching to each child's needs. Both are now confident swimmers!",
    author: "Amanda R.",
    child: "Parent of Noah & Ethan, age 4",
    highlight: false,
  },
  {
    quote: "The water safety skills they teach give me such peace of mind. Knowing my kids can handle themselves in the water is priceless.",
    author: "Robert P.",
    child: "Parent of multiple children",
    highlight: false,
  },
  {
    quote: "My daughter went from crying at bath time to diving in the pool. The transformation has been incredible. Thank you, Aqua Journey!",
    author: "Christine H.",
    child: "Parent of Mia, age 3",
    highlight: true,
  },
  {
    quote: "Professional, caring, and effective. The instructors make learning to swim fun while never compromising on safety. Highly recommend!",
    author: "Kevin & Susan W.",
    child: "Parents of Tyler, age 5",
    highlight: false,
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
