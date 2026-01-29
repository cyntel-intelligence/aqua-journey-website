import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Every Child Learns to Swim with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional swim lessons in a safe, nurturing environment. Building water safety skills that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.jackrabbitclass.com/regv2.asp?id=529327"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--primary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                Register Now
              </a>
              <Link
                href="/classes"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                View Our Classes
              </Link>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Why Families Choose Aqua Journey
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              We combine expert instruction with a caring approach to help every child succeed in the water.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-[var(--gray-light)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Indoor Heated Pools</h3>
              <p className="text-[var(--gray)]">
                Our pools stay at a comfortable 90°F year-round. No cancelled lessons due to weather.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-[var(--gray-light)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Instructors</h3>
              <p className="text-[var(--gray)]">
                Each instructor has 100+ hours of in-water training plus CPR/First Aid certification.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-[var(--gray-light)] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">One-on-One Attention</h3>
              <p className="text-[var(--gray)]">
                Private and semi-private lessons ensure personalized instruction at your child's pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Programs for Every Age
            </h2>
            <p className="text-lg text-[var(--gray)] max-w-2xl mx-auto">
              From infants to school-age children, we have the right program to meet your child where they are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Infant Survival */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-lg font-semibold mb-2">Infant Survival</h3>
              <p className="text-sm text-[var(--gray)] mb-4">6 months+</p>
              <p className="text-[var(--gray)] text-sm">
                Life-saving back float skills for our youngest swimmers.
              </p>
            </div>

            {/* Toddler & Young Children */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🧒</div>
              <h3 className="text-lg font-semibold mb-2">Toddler</h3>
              <p className="text-sm text-[var(--gray)] mb-4">Walking - 4 years</p>
              <p className="text-[var(--gray)] text-sm">
                Swim-float-swim sequence to reach safety independently.
              </p>
            </div>

            {/* School-Age */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏊</div>
              <h3 className="text-lg font-semibold mb-2">School-Age</h3>
              <p className="text-sm text-[var(--gray)] mb-4">5+ years</p>
              <p className="text-[var(--gray)] text-sm">
                Survival skills plus stroke development for confident swimming.
              </p>
            </div>

            {/* Stroke Development */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-lg font-semibold mb-2">Stroke Development</h3>
              <p className="text-sm text-[var(--gray)] mb-4">All ages</p>
              <p className="text-[var(--gray)] text-sm">
                Refine technique, increase speed, and build endurance.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/classes"
              className="inline-flex items-center bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View All Classes
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[var(--secondary)] mb-6">
              <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-2xl md:text-3xl text-[var(--foreground)] mb-6 leading-relaxed">
              "Last year I spent many weeks at a public pool and private lessons and saw zero progress. Both my girls started at Aqua Journeys still terrified of putting their head in the water — now they're confident swimmers!"
            </blockquote>
            <cite className="text-[var(--gray)] not-italic">
              — Grateful Parent
            </cite>
            <div className="mt-8">
              <Link
                href="/testimonials"
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold inline-flex items-center"
              >
                Read More Testimonials
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Child's Swim Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our programs and find the perfect class for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--secondary)] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="https://aquajourneyswimschool.com/gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--secondary)] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Buy a Gift Card
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
