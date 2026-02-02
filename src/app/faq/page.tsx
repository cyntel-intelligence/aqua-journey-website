import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Aqua Journey Swim School | Ormond Beach, FL',
  description: 'Find answers to frequently asked questions about swim lessons at Aqua Journey Swim School in Ormond Beach, FL. Learn about our classes, policies, and what to expect.',
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What age can my child start swim lessons?',
        a: 'We offer classes for children as young as 6 months old. Our infant classes are one-on-one with an instructor, teaching life-saving survival swimming skills from the start.',
      },
      {
        q: 'How do I know which class is right for my child?',
        a: 'Our programs are age-based: Infant Survival Swimming (6 months+), Toddler & Young Children (walking to 4 years), School-Age Swimming (5+ years), and Stroke Development for more advanced swimmers. Because our lessons are one-on-one, each lesson is individually geared toward your child\'s unique physical skill, temperament, and way of learning.',
      },
    ],
  },
  {
    category: 'Classes & Scheduling',
    questions: [
      {
        q: 'How long are the lessons?',
        a: 'We offer 10, 15, and 30 minute lessons depending on age and skill level. Shorter lessons are more effective for young children—our one-on-one instruction is intensive, and keeping sessions brief helps maintain focus, prevents fatigue, and leads to faster skill development. Quality over quantity is key to our proven results.',
      },
      {
        q: 'What days and times are classes offered?',
        a: 'We offer classes Monday through Thursday with various time slots throughout the day. Contact us for our current schedule and availability.',
      },
    ],
  },
  {
    category: 'What to Expect',
    questions: [
      {
        q: 'What is the pool temperature?',
        a: 'Our indoor heated pools are maintained at a comfortable 90°F year-round. This warm temperature helps children feel comfortable and relaxed during lessons.',
      },
      {
        q: 'What should my child wear to lessons?',
        a: 'All children who are not potty-trained MUST wear a snugly fitting reusable, cloth swim diaper (available for purchase at our facility). Disposable swim diapers are not allowed. Potty-trained children can wear swimsuits, trunks, or rash guards. If your child has long hair, please braid or tie it back. Goggles are optional.',
      },
      {
        q: 'Do parents need to get in the water?',
        a: 'No, all of our lessons are one-on-one with a certified instructor. Parents can watch from the side of the pool or sit in our lifeguard chairs!',
      },
      {
        q: 'What if my child cries during lessons?',
        a: 'Most children cry at some point during lessons—this is completely normal. They are NOT crying because they are hurt or in pain. They may be adjusting to a new environment or being challenged physically in new ways. Even children who cry throughout lessons learn to love swimming as they gain confidence. In our experience, crying does not mean your child will develop a fear of water.',
      },
      {
        q: 'How long until my child learns to swim?',
        a: 'Although most children learn survival swimming skills within 20-30 lessons, every child progresses at their own pace. Factors like consistency, illness, absences, teething, diet, and previous water experience can affect your child\'s rate of progress. Each skill is taught and mastered before the next is introduced.',
      },
    ],
  },
  {
    category: 'Safety & Policies',
    questions: [
      {
        q: 'What are your safety protocols?',
        a: 'Safety is our top priority. All instructors are certified and trained in water safety and CPR. We maintain strict supervision ratios, regularly check water quality, and follow comprehensive safety procedures.',
      },
      {
        q: 'What is your attendance and cancellation policy?',
        a: 'We reserve a specific time slot for your child—you are paying for your time slot, not individual lessons. We do not offer credits or make-ups for missed lessons. To change or stop lessons, please submit a withdrawal notice 7 days before your final lesson. If you have prepaid for multiple weeks and provide proper notice, we will credit any tuition beyond the 7-day notice period to your account, valid for one year.',
      },
      {
        q: 'What happens if my child is sick?',
        a: 'We hope your little one feels better! Please keep your child home if they are ill. Per our attendance policy, we do not offer credits or make-ups for missed lessons.',
      },
    ],
  },
  {
    category: 'Payment & Registration',
    questions: [
      {
        q: 'How do I register for lessons?',
        a: 'You can register online through our registration portal by clicking the "Register Now" button on our website. You can also contact us via phone at (386) 676-9555 or email to discuss class options.',
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Yes! Gift cards are available and make a wonderful gift for birthdays, holidays, or any occasion. Visit our gift card page or contact us to purchase.',
      },
      {
        q: 'What forms of payment do you accept?',
        a: 'We accept all major credit cards and debit cards, as well as cash and checks.',
      },
    ],
  },
];

// Generate FAQ schema for JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap(category =>
    category.questions.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  )
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Find answers to common questions about our swim school and programs.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6 pb-2 border-b-2 border-[var(--primary)]">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="bg-[var(--gray-light)] rounded-xl p-6">
                      <h3 className="font-semibold text-lg text-[var(--foreground)] mb-3 flex items-start gap-3">
                        <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                          Q
                        </span>
                        {faq.q}
                      </h3>
                      <p className="text-[var(--gray)] pl-9">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-[var(--gray-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-[var(--gray)] mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
