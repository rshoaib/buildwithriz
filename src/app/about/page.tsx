import { Metadata } from 'next';
import { FileText, Shield, Globe, Zap, Heart, Code, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — BuildWithRiz | Free Developer Tools',
  description: 'BuildWithRiz provides free, privacy-friendly online tools for freelancers and small businesses. No signup, no data stored. Learn about our mission and the developer behind the project.',
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
        BuildWithRiz is a growing collection of free, privacy-first online tools designed
        for freelancers, developers, and small businesses around the world. We believe that
        essential business tools should be accessible to everyone — regardless of budget,
        location, or technical skill. That is why every tool on BuildWithRiz is completely
        free to use, requires no signup, and never collects or stores your data.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {[
          { icon: Shield, title: 'Privacy First', desc: 'All tools run 100% in your browser. Your data never leaves your device — no exceptions.' },
          { icon: Zap, title: 'Zero Cost', desc: 'Completely free to use forever. No premium tiers, no hidden charges, no paywalls.' },
          { icon: Globe, title: 'Works Everywhere', desc: 'Compatible with any modern browser on desktop, tablet, or mobile. No downloads required.' },
          { icon: FileText, title: 'Professional Output', desc: 'Generate high-quality, print-ready PDFs that look great for any business or client.' },
        ].map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <item.icon size={20} className="text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Heart size={18} className="text-blue-600" />
          Our Mission
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          We started BuildWithRiz because we noticed a frustrating pattern:
          many essential business tools require accounts, store sensitive data on remote
          servers, or lock basic features behind expensive paywalls. Freelancers and small
          business owners — especially those just starting out — should not have to choose
          between privacy and functionality, or between affordability and quality.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our mission is to build tools that respect user privacy and remain truly free.
          Instead of monetizing user data, we sustain the platform through non-intrusive
          advertising. Every tool is built to process data entirely in the browser, so your
          sensitive business information never leaves your device.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Code size={18} className="text-blue-600" />
          Technology
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Our tools are built with modern web technologies including Next.js, React, and TypeScript.
          All processing happens client-side using JavaScript, which means your data stays on your
          device at all times. PDF generation uses react-pdf for crisp, vector-quality output
          that looks professional whether viewed on screen or printed.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          We prioritize performance, accessibility, and responsive design. Every tool is optimized
          to work smoothly on any device — from high-end desktops to budget smartphones — and
          follows web accessibility best practices so everyone can use them effectively.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Rocket size={18} className="text-blue-600" />
          What&apos;s Next
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          We are actively expanding BuildWithRiz with new tools for freelancers and small
          businesses. Upcoming additions include receipt generators, estimate and quotation
          templates, and more document utilities — all following the same principles of
          privacy, quality, and zero cost. If you have a suggestion for a tool you would
          like to see, we would love to hear from you on our{' '}
          <a href="/contact" className="text-blue-600 hover:underline font-medium">contact page</a>.
        </p>
      </section>
    </main>
  );
}
