'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Classes', href: '/classes' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Aqua Journey Swim School"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://app.jackrabbitclass.com/regv2.asp?id=529327"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Register Now
            </a>
            <Link
              href="https://aquajourneyswimschool.com/gift-cards"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Gift Cards
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[var(--gray)] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://app.jackrabbitclass.com/regv2.asp?id=529327"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register Now
              </a>
              <Link
                href="https://aquajourneyswimschool.com/gift-cards"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gift Cards
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
