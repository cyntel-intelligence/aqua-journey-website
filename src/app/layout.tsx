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
  keywords: "swim school, swimming lessons, kids swimming, water safety, learn to swim",
  metadataBase: new URL("https://aquajourneyswimschool.com"),
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
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
