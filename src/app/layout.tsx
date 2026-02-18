import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aqua Journey Swim School | Learn to Swim with Confidence",
  description: "Professional swim lessons for children of all ages. Our certified instructors provide a safe, nurturing environment where kids learn water safety and swimming skills.",
  keywords: "swim school, swimming lessons, kids swimming, water safety, learn to swim, Ormond Beach, Daytona Beach, Florida",
  metadataBase: new URL("https://aquajourneyswimschool.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Aqua Journey Swim School",
    description: "Teaching Life-Saving Skills, One Swimmer at a Time. Professional one-on-one swim lessons in Ormond Beach, FL.",
    url: "https://aquajourneyswimschool.com",
    siteName: "Aqua Journey Swim School",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aqua Journey Swim School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Journey Swim School",
    description: "Teaching Life-Saving Skills, One Swimmer at a Time. Professional one-on-one swim lessons in Ormond Beach, FL.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNKQQQLFMV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZNKQQQLFMV');
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Aqua Journey Swim School",
              "alternateName": "Aqua Journeys Swim School",
              "description": "Professional swim lessons for children of all ages. Our certified instructors provide a safe, nurturing environment where kids learn water safety and swimming skills.",
              "url": "https://aquajourneyswimschool.com",
              "logo": "https://aquajourneyswimschool.com/logo.png",
              "image": "https://aquajourneyswimschool.com/images/facility.png",
              "telephone": "+1-386-676-9555",
              "email": "info@aquajourneyswimschool.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "721 S. Nova Rd.",
                "addressLocality": "Ormond Beach",
                "addressRegion": "FL",
                "postalCode": "32174",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.2858,
                "longitude": -81.0558
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/AquaJourneySwimSchool",
                "https://www.instagram.com/aquajourneyswimschool/",
                "https://www.tiktok.com/@aqua.journeys"
              ],
              "priceRange": "$$",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Indoor Heated Pool",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Private Lessons",
                  "value": true
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Swim Lessons",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Infant Survival Swimming",
                      "description": "Life-saving swim lessons for infants 6 months and older"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Toddler & Young Children Swimming",
                      "description": "Swim lessons for walking children up to 4 years old"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "School-Age Swimming",
                      "description": "Swim lessons for children 5 years and older"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Stroke Development",
                      "description": "Advanced technique and endurance training for all ages"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--primary)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
