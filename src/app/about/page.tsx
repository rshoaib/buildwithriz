import { Metadata } from 'next';
import { FileText, Shield, Globe, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — BuildWithRiz | Free Developer Tools',
  description: 'BuildWithRiz provides free, privacy-friendly online tools for freelancers and small businesses. No signup, no data stored.',
  alternates: { canonical: 'https://buildwithriz.com/about' },
  openGraph: {
    title: 'About — BuildWithRiz',
    description: 'Free, privacy-friendly online tools for freelancers and small businesses.',
    url: 'https://buildwithriz.com/about',
  },
};

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About BuildWithRiz</h1>
      <p className="text-gray-600 mb-8 text-base leading-relaxed">
        BuildWithRiz is a collection of free, privacy-first online tools designed for freelancers,
        developers, and small businesses. We believe essential business tools should be accessible
        to everyone — no signup, no subscriptions, no data collection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {[
          { icon: Shield, title: 'Privacy First', desc: 'All tools run 100% in your browser. Your data never leaves your device.' },
          { icon: Zap, title: 'Zero Cost', desc: 'Completely free to use. No premium tiers, no hidden charges.' },
          { icon: Globe, title: 'Works Everywhere', desc: 'Compatible with any modern browser on desktop, tablet, or mobile.' },
          { icon: FileText, title: 'Professional Output', desc: 'Generate high-quality PDFs that look great for any business.' },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <item.icon size={20} className="text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
            <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We started BuildWithRiz because we noticed that many essential business tools require
          accounts, store sensitive data on servers, or lock features behind paywalls. We wanted
          to create tools that respect user privacy and are truly free — supported by non-intrusive
          advertising instead of user data monetization.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Technology</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our tools are built with modern web technologies including Next.js, React, and TypeScript.
          All processing happens client-side using JavaScript, ensuring your data stays on your
          device. PDF generation uses react-pdf for crisp, vector-quality output.
        </p>
      </section>
    </main>
  );
}
