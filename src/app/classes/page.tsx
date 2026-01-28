import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Classes | Aqua Journey Swim School',
  description: 'Explore our swim class programs for infants, toddlers, preschoolers, and school-age children. Find the right level for your child.',
};

const classes = [
  {
    id: 'infant',
    name: 'Infant Swimming',
    ages: '6-18 months',
    emoji: '👶',
    description: 'Parent-child classes designed to introduce your baby to the water in a safe, nurturing environment.',
    features: [
      'Parent accompanies child in the water',
      'Focus on water comfort and basic safety',
      'Gentle introduction to floating and kicking',
      'Songs and play to create positive associations',
      'Foundation for future swim skills',
    ],
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'toddler',
    name: 'Toddler Swimming',
    ages: '18 months - 3 years',
    emoji: '🧒',
    description: 'Building water confidence through play-based learning and foundational swimming movements.',
    features: [
      'Transition from parent-assisted to independent skills',
      'Introduction to breath control',
      'Basic arm and leg movements',
      'Water safety awareness',
      'Fun, engaging activities',
    ],
    color: 'bg-green-50 border-green-200',
  },
  {
    id: 'preschool',
    name: 'Preschool Swimming',
    ages: '3-5 years',
    emoji: '🏊',
    description: 'Developing stroke technique and building confidence for independent swimming.',
    features: [
      'Front and back floating independently',
      'Introduction to freestyle and backstroke',
      'Treading water basics',
      'Diving and retrieving objects',
      'Swimming short distances unassisted',
    ],
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    id: 'school-age',
    name: 'School-Age Swimming',
    ages: '5+ years',
    emoji: '🏅',
    description: 'Refining strokes, building endurance, and developing confident, capable swimmers.',
    features: [
      'All four competitive strokes',
      'Flip turns and racing starts',
      'Endurance building',
      'Advanced water safety skills',
      'Preparation for swim team (optional)',
    ],
    color: 'bg-purple-50 border-purple-200',
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Classes</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Age-appropriate programs designed to meet your child where they are and help them grow into confident swimmers.
          </p>
        </div>
      </section>

      {/* Class Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {classes.map((classItem, index) => (
              <div
                key={classItem.id}
                id={classItem.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{classItem.emoji}</span>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">{classItem.name}</h2>
                        <p className="text-[var(--primary)] font-medium">{classItem.ages}</p>
                      </div>
                    </div>
                    <p className="text-lg text-[var(--gray)] mb-6">{classItem.description}</p>
                    <ul className="space-y-3">
                      {classItem.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[var(--gray)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className={`${classItem.color} border-2 rounded-2xl p-8 md:p-12 text-center`}>
                      <div className="text-8xl mb-4">{classItem.emoji}</div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)]">{classItem.name}</h3>
                      <p className="text-[var(--gray)]">{classItem.ages}</p>
                    </div>
                  </div>
                </div>
                {index < classes.length - 1 && (
                  <hr className="mt-16 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Info */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Class Information</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Class Duration</h3>
              <p className="text-[var(--gray)]">30-minute sessions designed to maintain focus and maximize learning.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Small Groups</h3>
              <p className="text-[var(--gray)]">Maximum 4 students per instructor for personalized attention.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-[var(--gray)]">Multiple class times available to fit your family's schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Enroll?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us to find the perfect class for your child or to schedule a trial lesson.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--secondary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us to Enroll
            </Link>
            <Link
              href="https://aquajourneyswimschool.com/gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--secondary)] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Give the Gift of Swimming
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
