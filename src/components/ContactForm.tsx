'use client';

import { useState, FormEvent } from 'react';

const interestOptions = [
  { value: '', label: 'Select an option' },
  { value: 'infant', label: 'Infant Survival Swimming (6 months+)' },
  { value: 'toddler', label: 'Toddler & Young Children (Walking - 4 years)' },
  { value: 'school-age', label: 'School-Age Swimming (5+ years)' },
  { value: 'stroke', label: 'Stroke Development (All ages)' },
  { value: 'gift-cards', label: 'Gift Cards' },
  { value: 'scholarships', label: 'Scholarships' },
  { value: 'general', label: 'General Information' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrekqlpz', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[var(--gray-light)] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Message Sent!</h2>
        <p className="text-[var(--gray)] mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--gray-light)] rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="_subject" value="New Contact Form Submission - Aqua Journey Website" />
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              required
              disabled={status === 'submitting'}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
            disabled={status === 'submitting'}
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            I'm interested in...
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all bg-white"
            disabled={status === 'submitting'}
          >
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none"
            required
            disabled={status === 'submitting'}
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:bg-[var(--primary)]/70 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        <p className="text-sm text-[var(--gray)] text-center">
          We'll get back to you within 24 hours.
        </p>
      </form>
    </div>
  );
}
