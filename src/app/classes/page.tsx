import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const classImages: Record<string, string> = {
  infant: '/images/icon-infant.png',
  toddler: '/images/icon-toddler.png',
  swimming: '/images/icon-swimmer.png',
  trophy: '/images/icon-swimmer.png',
};

const classPhotos: Record<string, string> = {
  infant: '/images/infant-lesson.jpg',
  toddler: '/images/toddler-swim.jpg',
  swimming: '/images/school-age-swim.jpg',
  trophy: '/images/stroke-development.jpg',
};

const ClassIcon = ({ icon, size = 'md' }: { icon: string; size?: 'md' | 'lg' }) => {
  const sizeClasses = size === 'lg' ? 'w-20 h-20' : 'w-12 h-12';
  const containerClasses = size === 'lg'
    ? 'w-32 h-32 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto'
    : 'w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center';

  const icons: Record<string, ReactNode> = {
    infant: (
      <svg className={`${sizeClasses} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    toddler: (
      <svg className={`${sizeClasses} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    swimming: (
      <svg className={`${sizeClasses} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    trophy: (
      <svg className={`${sizeClasses} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  };

  return <div className={containerClasses}>{icons[icon]}</div>;
};

const ClassTitleIcon = ({ icon, size = 'md' }: { icon: string; size?: 'md' | 'lg' }) => {
  const imageSrc = classImages[icon];
  const sizeClasses = size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';

  if (imageSrc) {
    return (
      <div className={`${sizeClasses} flex items-center justify-center`}>
        <Image
          src={imageSrc}
          alt=""
          width={size === 'lg' ? 64 : 48}
          height={size === 'lg' ? 64 : 48}
          className="object-contain"
        />
      </div>
    );
  }

  return <ClassIcon icon={icon} size={size} />;
};

const ClassPhotoBox = ({ icon, color }: { icon: string; color: string }) => {
  const photoSrc = classPhotos[icon];

  return (
    <div className={`${color} border-2 rounded-2xl overflow-hidden`}>
      <div className="relative aspect-[4/3]">
        <Image
          src={photoSrc}
          alt="Swimming lesson"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Our Classes | Aqua Journey Swim School',
  description: 'Explore our swim class programs for infants, toddlers, preschoolers, and school-age children. Find the right level for your child.',
};

const classes = [
  {
    id: 'infant',
    name: 'Infant Survival Swimming',
    ages: '6 months+',
    icon: 'infant',
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
    icon: 'toddler',
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
    icon: 'swimming',
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
    icon: 'trophy',
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
                    <div className="flex items-center gap-4 mb-4">
                      <ClassTitleIcon icon={classItem.icon} size="md" />
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
                    <ClassPhotoBox icon={classItem.icon} color={classItem.color} />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Results in Weeks</h3>
              <p className="text-[var(--gray)]">Our proven method delivers real progress fast—most children see results within weeks.</p>
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
              <h3 className="font-semibold text-lg mb-2">Heated Indoor Pools</h3>
              <p className="text-[var(--gray)]">Our pools stay at a comfortable 90°F year-round, rain or shine.</p>
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
              href="/gift-cards"
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
