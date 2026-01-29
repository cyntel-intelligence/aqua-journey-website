import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Aqua Journey Swim School',
  description: 'Find answers to frequently asked questions about Aqua Journey Swim School, our classes, policies, and what to expect.',
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
        a: 'Class placement is based on age and skill level. When you contact us, we\'ll discuss your child\'s experience and comfort level in the water to recommend the best starting point. We can also arrange a brief assessment if needed.',
      },
      {
        q: 'Do you offer trial lessons?',
        a: 'Yes! We offer trial lessons so you and your child can experience our teaching style and facility before committing to a full session. Contact us to schedule a trial.',
      },
    ],
  },
  {
    category: 'Classes & Scheduling',
    questions: [
      {
        q: 'How long are the lessons?',
        a: 'Most of our lessons are 30 minutes long. This duration is optimal for maintaining children\'s attention and energy while providing enough time for meaningful instruction.',
      },
      {
        q: 'How many children are in each class?',
        a: 'We offer one-on-one private instruction. This ensures your child receives fully personalized attention and maximizes their progress in every lesson.',
      },
      {
        q: 'What days and times are classes offered?',
        a: 'We offer classes Monday through Thursday from 9am to 7pm, and Friday from 9am to 4pm. We are closed on weekends. Contact us for current availability.',
      },
      {
        q: 'How often should my child attend lessons?',
        a: 'We recommend at least one lesson per week for consistent progress. Many families choose twice-weekly lessons for faster skill development, especially for beginners.',
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
        a: 'Children should wear a comfortable swimsuit. For infants and toddlers not yet potty trained, a swim diaper is required (we recommend a reusable swim diaper with a snug fit). Goggles are optional but can be helpful.',
      },
      {
        q: 'Do parents need to get in the water?',
        a: 'No, all of our lessons are one-on-one with a certified instructor. Parents can watch from the viewing area while their child learns.',
      },
      {
        q: 'What if my child is afraid of the water?',
        a: 'Many children start with some water anxiety, and that\'s completely normal. Our instructors are trained to work gently with hesitant swimmers, building trust and confidence at each child\'s own pace. We never force children into situations that make them uncomfortable.',
      },
      {
        q: 'How long until my child learns to swim?',
        a: 'Every child progresses at their own pace, and many factors influence learning speed including age, comfort level, and lesson frequency. Most children show significant improvement within their first session of lessons, but mastering swimming is a gradual process that builds over time.',
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
        q: 'What is your cancellation policy?',
        a: 'We require 24 hours notice for cancellations to receive credit for a makeup lesson. Please contact us as soon as possible if you need to miss a class.',
      },
      {
        q: 'What happens if my child is sick?',
        a: 'Please keep your child home if they are ill, have a fever, or have had diarrhea in the past 24 hours. This protects your child and others in the pool. We\'ll gladly reschedule missed lessons due to illness.',
      },
    ],
  },
  {
    category: 'Payment & Registration',
    questions: [
      {
        q: 'How do I register for classes?',
        a: 'You can register online through our registration portal by clicking the "Register Now" button on our website. You can also contact us via phone at (386) 676-9555 or email to discuss class options.',
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Yes! Gift cards are available and make a wonderful gift for birthdays, holidays, or any occasion. Visit our gift card page or contact us to purchase.',
      },
      {
        q: 'What forms of payment do you accept?',
        a: 'We accept all major credit cards and debit cards. Payment is due at registration for the session.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
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
