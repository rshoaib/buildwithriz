import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Shield, Zap, FileText } from 'lucide-react';
import { industries } from '@/data/industries';

export const metadata: Metadata = {
  title: 'Free Invoice Templates for Freelancers (12 Industries) | BuildWithRiz',
  description:
    'Browse 12 free, profession-specific invoice templates — web designer, photographer, consultant, contractor, and more. Pre-filled, customizable, no signup.',
  alternates: { canonical: 'https://www.buildwithriz.com/invoice-template' },
  openGraph: {
    title: 'Free Invoice Templates by Profession — BuildWithRiz',
    description:
      'Browse 12 profession-specific invoice templates. Pre-filled, customizable, no signup.',
    url: 'https://www.buildwithriz.com/invoice-template',
    siteName: 'BuildWithRiz',
    type: 'website',
    images: [
      {
        url: '/og?kind=template&title=Free%20Invoice%20Templates%20by%20Profession',
        width: 1200,
        height: 630,
        alt: 'Free Invoice Templates by Profession — BuildWithRiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Templates by Profession — BuildWithRiz',
    description:
      'Browse 12 profession-specific invoice templates. Pre-filled, customizable, no signup.',
    images: ['/og?kind=template&title=Free%20Invoice%20Templates%20by%20Profession'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Free Invoice Templates by Profession',
    description:
      '12 free, profession-specific invoice templates for freelancers and small businesses.',
    url: 'https://www.buildwithriz.com/invoice-template',
    isPartOf: {
      '@type': 'WebSite',
      name: 'BuildWithRiz',
      url: 'https://www.buildwithriz.com',
    },
    hasPart: industries.map((ind) => ({
      '@type': 'WebPage',
      name: ind.title,
      url: `https://www.buildwithriz.com/invoice-template/${ind.slug}`,
      description: ind.metaDescription,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.buildwithriz.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Invoice Templates',
        item: 'https://www.buildwithriz.com/invoice-template',
      },
    ],
  },
];

export default function InvoiceTemplateHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Free Invoice Templates by Profession
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto text-base leading-relaxed">
              Pick the template that matches your trade. Each one is pre-filled
              with sample line items, payment terms, and notes tailored to that
              profession — load it, customize it, download as PDF in seconds.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              Skip templates — start blank
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Industry grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="sr-only">Browse all invoice templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/invoice-template/${ind.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{ind.heroEmoji}</div>
                  <ChevronRight
                    size={16}
                    className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {ind.name} Invoice
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {ind.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why use a template */}
        <section className="bg-gray-50 dark:bg-gray-900 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Why use a profession-specific template?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
                <Zap size={20} className="text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  Faster setup
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  Skip the blank-page problem. Each template ships with sample
                  line items you can tweak in seconds.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
                <FileText size={20} className="text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  Industry-appropriate fields
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  Photographers price differently than developers. Each template
                  uses payment terms and notes that fit the trade.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700">
                <Shield size={20} className="text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  Free &amp; private
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  No signup, no data stored, no watermark. Everything runs in
                  your browser.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to send your first invoice?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Pick a template above, or start from a blank invoice and customize
            it from scratch.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all text-base"
          >
            Open the invoice generator
            <ArrowRight size={20} />
          </Link>
        </section>
      </main>
    </>
  );
}
