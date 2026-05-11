import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FileText } from "lucide-react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import DarkModeToggle from "@/components/DarkModeToggle";
import MobileNav from "@/components/MobileNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.buildwithriz.com"),
  title: "Free Invoice Generator — No Signup, Download PDF | BuildWithRiz",
  description:
    "Create professional invoices for free. No signup, no login, no data stored. Download as PDF instantly — 100% client-side and privacy-friendly.",
  keywords: [
    "free invoice generator",
    "invoice maker",
    "invoice template",
    "pdf invoice",
    "create invoice online",
    "no signup invoice",
    "invoice generator free",
    "freelancer invoice",
  ],
  authors: [{ name: "BuildWithRiz" }],
  openGraph: {
    title: "Free Invoice Generator — Create & Download PDF Invoices",
    description:
      "Create professional invoices for free. No signup required. Download as PDF instantly.",
    url: "https://www.buildwithriz.com/",
    siteName: "BuildWithRiz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og?kind=home",
        width: 1200,
        height: 630,
        alt: "BuildWithRiz — Free Invoice Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator — BuildWithRiz",
    description: "Create professional invoices for free. No signup, download as PDF.",
    images: ["/og?kind=home"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.buildwithriz.com/",
  },
};

// Sitewide JSON-LD: only Organization is appropriate on every page.
// WebApplication + FAQPage are page-specific and live on `app/page.tsx`
// (homepage). Industry templates inject their own FAQPage; tool pages
// inject their own WebApplication / SoftwareApplication.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuildWithRiz",
    url: "https://www.buildwithriz.com",
    logo: "https://www.buildwithriz.com/logo.svg",
    // TODO: add verified social profile URLs to a `sameAs` array
    // (LinkedIn / X / GitHub) once available — must be live URLs.
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@buildwithriz.com",
      contactType: "customer service",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is required because the inline script
    // below sets `dark` on <html> from localStorage before React
    // hydrates — the documented Next.js pattern for theme libraries.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent browser from auto-applying dark scheme based on OS preference */}
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Search engine verification */}
        <meta name="google-site-verification" content="gd1HokZ0LOnSrmttQWVKSOi19cqAR_7pM2nRmYnUHxo" />
        <meta name="msvalidate.01" content="2CB41F3C9BFB4BC82DDE00AF8D97B0A6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent dark mode flash */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('buildwithriz-dark')==='true')document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {/* Header */}
        <header className="no-print sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <FileText size={16} className="text-white" />
                </div>
                <span className="font-bold text-gray-900 dark:text-white text-lg">
                  Build<span className="text-blue-600 dark:text-blue-400">WithRiz</span>
                </span>
              </Link>
              <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Invoice Generator</Link>
                <Link href="/receipt-generator" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Receipt Generator</Link>
                <Link href="/invoice-template" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Templates</Link>
                <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
                <DarkModeToggle />
              </nav>
              <MobileNav />
            </div>
          </div>
        </header>

        {/* Main */}
        {children}

        {/* Footer */}
        <footer className="no-print bg-gray-900 dark:bg-gray-950 text-gray-400 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FileText size={14} className="text-white" />
                  </div>
                  <span className="font-bold text-white text-base">
                    Build<span className="text-blue-400">WithRiz</span>
                  </span>
                </div>
                <p className="text-sm">
                  Free online tools for freelancers, developers, and small businesses. No signup required.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Tools</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white transition">Invoice Generator</Link></li>
                  <li><Link href="/receipt-generator" className="hover:text-white transition">Receipt Generator</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Templates</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/invoice-template/accountant" className="hover:text-white transition">Accountant Invoice</Link></li>
                  <li><Link href="/invoice-template/consultant" className="hover:text-white transition">Consultant Invoice</Link></li>
                  <li><Link href="/invoice-template/contractor" className="hover:text-white transition">Contractor Invoice</Link></li>
                  <li><Link href="/invoice-template/copywriter" className="hover:text-white transition">Copywriter Invoice</Link></li>
                  <li><Link href="/invoice-template/developer" className="hover:text-white transition">Developer Invoice</Link></li>
                  <li><Link href="/invoice-template/graphic-designer" className="hover:text-white transition">Graphic Designer Invoice</Link></li>
                  <li><Link href="/invoice-template/marketing-agency" className="hover:text-white transition">Marketing Agency Invoice</Link></li>
                  <li><Link href="/invoice-template/personal-trainer" className="hover:text-white transition">Personal Trainer Invoice</Link></li>
                  <li><Link href="/invoice-template/photographer" className="hover:text-white transition">Photographer Invoice</Link></li>
                  <li><Link href="/invoice-template/tutor" className="hover:text-white transition">Tutor Invoice</Link></li>
                  <li><Link href="/invoice-template/videographer" className="hover:text-white transition">Videographer Invoice</Link></li>
                  <li><Link href="/invoice-template/web-designer" className="hover:text-white transition">Web Designer Invoice</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
                  <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-6 pb-6 text-center text-xs">
              <p className="mb-3">&copy; {new Date().getFullYear()} BuildWithRiz. All rights reserved. No user data is collected or stored.</p>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                <a href="https://tinypdftools.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">PDF Tools</a>
                <a href="https://onlineimageshrinker.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Image Compressor</a>
                <a href="https://dailysmartcalc.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Smart Calculators</a>
                <a href="https://mycalcfinance.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Finance Calculators</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
