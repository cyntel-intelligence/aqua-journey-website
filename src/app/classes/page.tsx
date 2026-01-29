import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Classes | Aqua Journey Swim School',
  description: 'Explore our swim class programs for infants, toddlers, preschoolers, and school-age children. Find the right level for your child.',
};

const classes = [
  {
    id: 'infant',
    name: 'Infant Survival Swimming',
    ages: '6 months+',
    emoji: '👶',
    description: 'Our youngest swimmers learn the crucial, life-saving skill of rolling to an independent back float to rest and breathe.',
    features: [
      'Learn to roll over to back float position',
      'Maintain float position until help arrives',
      'Build water comfort and confidence',
      'One-on-one instruction with certified instructors',
      'Foundation for all future water safety skills',
    ],
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'toddler',
    name: 'Toddler & Young Children',
    ages: 'Walking - 4 years',
    emoji: '🧒',
    description: 'As children develop physical skills and begin walking, they learn the swim-float-swim sequence to reach safety.',
    features: [
      'Swim a short distance independently',
      'Roll to back float to rest and breathe',
      'Return to swimming until reaching safety',
      'Build endurance and water confidence',
      'Progress at their own pace',
    ],
    color: 'bg-green-50 border-green-200',
  },
  {
    id: 'school-age',
    name: 'School-Age Swimming',
    ages: '5+ years',
    emoji: '🏊',
    description: 'Older children and beginners learn survival skills plus stroke development for confident, capable swimming.',
    features: [
      'Survival swimming fundamentals',
      'Proper stroke technique development',
      'Increased swimming distances',
      'Water safety awareness',
      'Building confidence and independence',
    ],
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    id: 'stroke',
    name: 'Stroke Development',
    ages: 'All ages',
    emoji: '🏅',
    description: 'For swimmers ready to refine their technique, increase speed, and build endurance in the water.',
    features: [
      'Refine freestyle, backstroke, breaststroke, butterfly',
      'Improve speed and efficiency',
      'Build swimming endurance',
      'Work with experienced swim coaches',
      'Personalized feedback and instruction',
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">One-on-One Instruction</h3>
              <p className="text-[var(--gray)]">Private lessons with dedicated instructor attention for faster progress.</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Heated Indoor Pool</h3>
              <p className="text-[var(--gray)]">Our pool stays at a comfortable 90°F year-round, rain or shine.</p>
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
            Register online today or contact us to learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.jackrabbitclass.com/regv2.asp?id=529327"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--secondary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Register Now
            </a>
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
