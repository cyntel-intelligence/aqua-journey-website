'use client';

import { useState, FormEvent } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface EmailSignupProps {
  variant?: 'inline' | 'card' | 'footer';
  heading?: string;
  description?: string;
  onSuccess?: () => void;
}

export default function EmailSignup({
  variant = 'card',
  heading = 'Get Water Safety Tips',
  description = 'Get our free Water Safety Checklist + weekly tips to keep your family safe.',
  onSuccess,
}: EmailSignupProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset();

        // Track signup in Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'newsletter_signup', {
            signup_location: variant,
          });
        }

        onSuccess?.();
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  // Success state
  if (status === 'success') {
    if (variant === 'footer') {
      return (
        <div className="text-center">
          <p className="text-green-400 text-sm flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Thanks for subscribing!
          </p>
          <a
            href="/water-safety-checklist.pdf"
            download
            className="text-[var(--primary)] hover:text-[var(--primary-light)] text-sm underline"
          >
            Download Your Checklist
          </a>
        </div>
      );
    }

    return (
      <div className={`text-center ${variant === 'card' ? 'bg-[var(--gray-light)] rounded-2xl p-8' : ''}`}>
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">You're Subscribed!</h3>
        <p className="text-[var(--gray)] mb-4">
          Check your inbox for water safety tips and updates.
        </p>
        <a
          href="/water-safety-checklist.pdf"
          download
          className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Your Water Safety Checklist
        </a>
      </div>
    );
  }

  // Footer variant - minimal, dark theme
  if (variant === 'footer') {
    return (
      <div>
        <h3 className="font-semibold mb-4 text-white">{heading}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="footer-email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={status === 'submitting'}
              className="w-full px-4 py-2 rounded-lg bg-[#2a3543] border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-sm"
            />
          </div>
          {status === 'error' && (
            <p className="text-red-400 text-xs">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:bg-[var(--primary)]/70 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      </div>
    );
  }

  // Inline variant - horizontal layout
  if (variant === 'inline') {
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label htmlFor="inline-email" className="sr-only">Email address</label>
            <input
              type="email"
              id="inline-email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={status === 'submitting'}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:bg-[var(--primary)]/70 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Card variant (default) - full featured card
  return (
    <div className="bg-[var(--gray-light)] rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{heading}</h3>
        <p className="text-[var(--gray)]">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="card-email" className="sr-only">Email address</label>
          <input
            type="email"
            id="card-email"
            name="email"
            placeholder="Enter your email address"
            required
            disabled={status === 'submitting'}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
          />
        </div>
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
            {errorMessage}
          </div>
        )}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:bg-[var(--primary)]/70 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </>
          ) : (
            <>
              Get Water Safety Tips
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
        <p className="text-xs text-center text-[var(--gray)]">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
