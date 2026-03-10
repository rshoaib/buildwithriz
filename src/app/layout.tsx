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
  title: "Free Invoice Generator — Create & Download PDF Invoices | BuildWithRiz",
  description:
    "Create professional invoices for free. No signup, no login, no data stored. Fill your details, preview instantly, and download as PDF. 100% client-side and privacy-friendly.",
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
    url: "https://buildwithriz.com",
    siteName: "BuildWithRiz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator — BuildWithRiz",
    description: "Create professional invoices for free. No signup, download as PDF.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://buildwithriz.com",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BuildWithRiz Free Invoice Generator",
    url: "https://buildwithriz.com",
    description: "Create professional invoices for free. No signup, no data stored.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Free PDF invoice generation",
      "No signup required",
      "Multiple currency support",
      "Professional templates",
      "Client-side processing",
      "Privacy-friendly",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuildWithRiz",
    url: "https://buildwithriz.com",
    logo: "https://buildwithriz.com/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@buildwithriz.com",
      contactType: "customer service",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this invoice generator really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100% free. No hidden charges, no premium plans, no signup required. Create unlimited invoices.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. All processing happens in your browser. We never receive, store, or transmit your invoice data. Your information stays on your device.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use this for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our invoices are professional-grade PDFs suitable for freelancers, small businesses, and contractors.",
        },
      },
      {
        "@type": "Question",
        name: "What currencies are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support 30+ currencies including USD, EUR, GBP, SAR, AED, INR, PKR, CAD, AUD, JPY, and many more.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to install anything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This is a web-based tool that works in any modern browser — Chrome, Firefox, Safari, or Edge — on desktop, tablet, or mobile. No downloads, no plugins, no extensions.",
        },
      },
      {
        "@type": "Question",
        name: "How is the PDF generated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The PDF is generated entirely in your browser using react-pdf, a library that creates vector-quality PDFs with JavaScript. The resulting file is crisp at any zoom level and can be printed on any paper size.",
        },
      },
      {
        "@type": "Question",
        name: "Can I include my company logo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You can upload your company logo (PNG, JPG, or SVG, up to 2MB) directly in the invoice generator. It will appear on both the live preview and the downloaded PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Is this tool suitable for tax purposes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our generator includes standard invoice fields that satisfy most business requirements. However, tax regulations vary by jurisdiction, so we recommend consulting a qualified accountant or tax professional to ensure your invoices meet local legal requirements.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
                <Link href="/invoice-template/web-designer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Templates</Link>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
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
                  <li><Link href="/invoice-template/web-designer" className="hover:text-white transition">Invoice Templates</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
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
            <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-6 text-center text-xs">
              <p>&copy; {new Date().getFullYear()} BuildWithRiz. All rights reserved. No user data is collected or stored.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
