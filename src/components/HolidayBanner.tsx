'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HOLIDAY_PACKAGES } from '@/lib/constants';

export default function HolidayBanner() {
  const pathname = usePathname();

  // Shown site-wide, except on the holiday packages pages themselves
  if (!HOLIDAY_PACKAGES.enabled || pathname.startsWith('/holiday-packages')) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-dark)] py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="text-2xl">🎄</span>
        <div>
          <span className="text-white font-bold">Holiday Packages Are Here!</span>
          <span className="text-white/90 hidden sm:inline"> — </span>
          <span className="text-white/90 block sm:inline">Our only discount of the year. Limited packages available.</span>
        </div>
        <Link
          href="/holiday-packages"
          className="mt-2 sm:mt-0 bg-white text-[var(--secondary)] hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
        >
          Shop Packages
        </Link>
        <span className="text-2xl hidden sm:inline">🎁</span>
      </div>
    </div>
  );
}
