'use client';

import { useState, useEffect } from 'react';
import EmailSignup from './EmailSignup';

const POPUP_DELAY_MS = 20000; // 20 seconds
const STORAGE_KEY = 'aqua-journey-popup-dismissed';

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsOpen(false);
    // Remember that user dismissed the popup (for 7 days)
    const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, expiresAt.toString());
  }

  function handleSuccess() {
    // On successful signup, close and remember permanently
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem(STORAGE_KEY, 'subscribed');
    }, 2000);
  }

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] px-8 py-6 text-white text-center">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 id="popup-title" className="text-2xl font-bold mb-2">
            Can You Spot Your Child?
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-5">
            <p className="text-[var(--foreground)]">
              Certain swimsuit colors can make your child <strong>nearly invisible</strong> in the water. Get water safety tips sent to your inbox—including which colors to avoid.
            </p>
          </div>
          <EmailSignup
            variant="inline"
            heading=""
            description=""
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
}
