import Link from 'next/link';
import { ArrowRight, Check, FileText } from 'lucide-react';

export default function EstimateMakerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Estimate Maker',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description:
      'Create clean, professional project estimates in your browser. Free, no signup, no data stored.',
    url: 'https://www.buildwithriz.com/tools/estimate-maker',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4">
        <FileText size={14} /> Free tool
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
        Free Estimate Maker for Freelancers
      </h1>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
        Build clean, itemized project estimates in minutes — then turn them
        into quotes and invoices as the work firms up. 100% free, no signup,
        everything runs in your browser.
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white mb-10">
        <h2 className="text-xl font-bold mb-2">Start with a professional invoice template</h2>
        <p className="text-blue-100 text-sm mb-4">
          Our PDF builder handles estimates, quotes, and invoices from the same
          clean form. Set the document type, add line items, and download — no
          account, no data stored on our servers.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-sm"
        >
          Open the generator <ArrowRight size={16} />
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What makes a professional estimate?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An estimate is an approximate cost for work that hasn&apos;t been
        fully scoped yet. It&apos;s <em>not</em> legally binding like a quote —
        but it still needs to look professional and include the same core
        fields so clients can compare apples to apples.
      </p>
      <ul className="space-y-2 mb-6">
        {[
          'Your business name, address, and contact details',
          'Client name and billing address',
          'A unique estimate number (sequential, e.g. EST-2026-001)',
          'Issue date and an expiry date (most estimates are valid 15–30 days)',
          'Itemized line items — break work into specific deliverables',
          'Subtotal, tax, and total',
          'A clear "this is an estimate" disclaimer noting the scope may change',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-gray-700 text-sm sm:text-base">
            <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Estimate vs quote vs invoice
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These three documents are often confused, but each plays a distinct
        role in the billing workflow:
      </p>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-700 font-semibold text-xs uppercase">
            <tr>
              <th className="px-4 py-2.5 text-left">Document</th>
              <th className="px-4 py-2.5 text-left">When</th>
              <th className="px-4 py-2.5 text-left">Legally binding?</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Estimate</td>
              <td className="px-4 py-2.5">Scope still forming</td>
              <td className="px-4 py-2.5">No</td>
            </tr>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Quote</td>
              <td className="px-4 py-2.5">Scope locked in</td>
              <td className="px-4 py-2.5">Yes, once accepted</td>
            </tr>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Invoice</td>
              <td className="px-4 py-2.5">Work completed</td>
              <td className="px-4 py-2.5">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        For the full walkthrough of how they differ and when to send each,
        read our guide on{' '}
        <Link href="/blog/quote-vs-estimate-vs-invoice" className="text-blue-600 hover:underline font-medium">
          quote vs estimate vs invoice
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        FAQ
      </h2>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        Is an estimate legally binding?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        No. An estimate is a good-faith projection, not a contract. The final
        cost can change as the scope firms up. A quote, on the other hand,
        <em> is</em> binding once the client accepts it.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        How long should an estimate stay valid?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most freelancers and agencies make estimates valid for 15 to 30 days.
        Any longer than that and your own costs (materials, time, rates) may
        have drifted.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        Do I need different software for estimates and invoices?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        No — the{' '}
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          BuildWithRiz generator
        </Link>{' '}
        handles both from the same form. Label the document appropriately and
        download as PDF.
      </p>

      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related reading</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/blog/quote-vs-estimate-vs-invoice" className="text-blue-600 hover:underline">
              Quote vs Estimate vs Invoice: What&apos;s the Difference?
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-write-invoice-freelance-work" className="text-blue-600 hover:underline">
              How to Write an Invoice for Freelance Work (2026 Guide)
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-set-freelance-rates-2026" className="text-blue-600 hover:underline">
              How to Set Your Freelance Rates in 2026
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
