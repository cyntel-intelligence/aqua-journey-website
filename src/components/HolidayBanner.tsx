'use client';

import { useState, FormEvent } from 'react';

export default function HolidayBanner() {
  const [showForm, setShowForm] = useState(false);
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
        body: JSON.stringify({
          email,
          source: 'holiday_packages'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-white font-semibold">
            You&apos;re on the list! We&apos;ll notify you when holiday packages are available.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-dark)] py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {!showForm ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <span className="text-2xl">🎄</span>
            <div>
              <span className="text-white font-bold">Holiday Packages Coming Soon!</span>
              <span className="text-white/90 hidden sm:inline"> — </span>
              <span className="text-white/90 block sm:inline">Our only discount of the year.</span>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="mt-2 sm:mt-0 bg-white text-[var(--secondary)] hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Notify Me
            </button>
            <span className="text-2xl hidden sm:inline">🎁</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-white font-semibold hidden sm:inline">Get notified:</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={status === 'submitting'}
              className="w-full sm:w-64 px-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto bg-white text-[var(--secondary)] hover:bg-gray-100 disabled:bg-gray-200 px-6 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Notify Me'
              )}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-white/80 hover:text-white text-sm underline"
            >
              Cancel
            </button>
            {status === 'error' && (
              <span className="text-red-200 text-sm">{errorMessage}</span>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
