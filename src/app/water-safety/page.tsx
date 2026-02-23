import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import EmailSignup from '@/components/EmailSignup';

export const metadata: Metadata = {
  title: 'Water Safety Resources | Aqua Journey Swim School',
  description: 'Essential water safety tips and drowning prevention information for parents. Learn how to keep your children safe around water.',
  keywords: 'water safety, drowning prevention, pool safety, swim safety tips, child water safety, Ormond Beach',
};

const safetyTips = [
  {
    title: 'Never Leave Children Unattended',
    description: 'Designate a responsible adult as a "Water Watcher" who actively supervises children in and around water. No phone, no book—just watching.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Learn CPR',
    description: 'Every parent and caregiver should know CPR. In a drowning emergency, immediate CPR can be the difference between life and death.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Teach Your Children to Swim',
    description: 'Swimming lessons significantly reduce the risk of drowning. Children as young as 6 months can begin learning water survival skills.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Use Layers of Protection',
    description: 'Combine multiple safety measures: pool fences, door alarms, pool covers, and constant supervision. No single barrier is enough.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Know the Signs of Drowning',
    description: 'Drowning is often silent—no splashing or screaming. Look for: head low in water, eyes glassy, hyperventilating, or trying to swim but not moving.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Establish Pool Rules',
    description: 'No running, no diving in shallow water, no pushing, and always swim with a buddy. Consistent rules prevent accidents.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const ageGuidelines = [
  {
    age: 'Infants (6+ months)',
    skills: 'Roll back to float, breath control',
    tips: 'Never use flotation devices as a substitute for supervision. Infants can learn survival skills.',
  },
  {
    age: 'Toddlers (1-3 years)',
    skills: 'Swim-float-swim sequence, self-rescue',
    tips: 'This age group is at highest risk. Constant supervision and swim lessons are critical.',
  },
  {
    age: 'Preschool (3-5 years)',
    skills: 'Basic strokes, treading water, getting to safety',
    tips: 'Can understand and follow pool rules. Still need constant adult supervision.',
  },
  {
    age: 'School-Age (5+ years)',
    skills: 'All strokes, diving, endurance swimming',
    tips: 'Can be more independent but should never swim alone. Teach them to help others safely.',
  },
];

export default function WaterSafetyPage() {
  return (
    <>
      <HeroSection
        title="Water Safety Resources"
        description="Essential information to keep your family safe around water. Drowning is preventable—knowledge is your best protection."
      />

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">#1</div>
              <p className="text-[var(--gray)]">Cause of death for children ages 1-4 (CDC)</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">88%</div>
              <p className="text-[var(--gray)]">Of drownings occur with a supervisor present</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">10 sec</div>
              <p className="text-[var(--gray)]">Average time for a child to drown—silently</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Essential Water Safety Tips
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              Follow these guidelines to protect your family around pools, lakes, beaches, and bathtubs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center text-white mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-[var(--gray)]">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Appropriate Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Swimming Milestones by Age
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              Understanding what your child can learn at each age helps set realistic expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGuidelines.map((guideline, index) => (
              <div key={index} className="bg-[var(--gray-light)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--primary)] mb-2">
                  {guideline.age}
                </h3>
                <p className="text-sm font-medium text-[var(--foreground)] mb-2">
                  Skills: {guideline.skills}
                </p>
                <p className="text-sm text-[var(--gray)]">{guideline.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
                Get More Water Safety Tips
              </h2>
              <p className="text-[var(--gray)]">
                Subscribe to receive seasonal safety guides, emergency preparedness tips, and updates about our programs.
              </p>
            </div>
            <EmailSignup
              variant="inline"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Give Your Child Life-Saving Skills
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Swimming lessons are one of the most effective ways to prevent drowning. Start your child's water safety journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.jackrabbitclass.com/regv2.asp?id=529327"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--secondary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Register for Lessons
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--secondary)] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Water Safety Resources for Parents',
            description: 'Essential water safety tips and drowning prevention information for parents.',
            author: {
              '@type': 'Organization',
              name: 'Aqua Journey Swim School',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Aqua Journey Swim School',
            },
          }),
        }}
      />
    </>
  );
}
