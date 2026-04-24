import Link from 'next/link';
import { ArrowRight, Check, FileText } from 'lucide-react';

export default function ProformaInvoiceGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Proforma Invoice Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description:
      'Generate a professional proforma invoice in your browser — free, no signup, instant PDF download.',
    url: 'https://www.buildwithriz.com/tools/proforma-invoice-generator',
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
        Free Proforma Invoice Generator
      </h1>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
        Generate a professional proforma invoice in minutes — for international
        quotes, advance payments, or customs paperwork. 100% free, no signup,
        nothing stored on our servers.
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white mb-10">
        <h2 className="text-xl font-bold mb-2">Build your proforma invoice</h2>
        <p className="text-blue-100 text-sm mb-4">
          Our PDF builder handles proforma invoices, commercial invoices, and
          quotes from the same form. Select the document type, fill in the
          details, and download instantly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-sm"
        >
          Open the generator <ArrowRight size={16} />
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What is a proforma invoice?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A proforma invoice is a preliminary bill of sale issued <em>before</em>{' '}
        goods or services are delivered. Think of it as a firm quote with
        all the line-item detail of an invoice — but without the legal
        obligation to pay. Customs authorities, purchasing departments, and
        international clients all use proforma invoices to understand exactly
        what they&apos;re about to receive and what it will cost.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        When should you send a proforma invoice?
      </h3>
      <ul className="space-y-2 mb-6">
        {[
          'International shipments — customs often require a proforma for clearance',
          'Advance-payment arrangements — when the client is paying before work starts',
          'Large B2B orders where procurement needs a formal document to raise a PO',
          'Enterprise quotes where a plain estimate isn&apos;t formal enough',
          'When the client asks for "a quote we can submit to accounting"',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-gray-700 text-sm sm:text-base">
            <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What every proforma invoice must include
      </h2>
      <ul className="space-y-2 mb-6">
        {[
          '"Proforma Invoice" clearly labeled at the top (not "Invoice")',
          'Your business details and the client\'s billing details',
          'A unique document number (e.g. PROF-2026-001)',
          'Issue date and an expiry/validity date',
          'Detailed line items with quantities and unit prices',
          'Subtotal, tax, shipping/handling, and final total',
          'Payment terms and accepted payment methods',
          'Estimated delivery date or lead time',
          'A statement that it is not a demand for payment',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-gray-700 text-sm sm:text-base">
            <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Proforma invoice vs commercial invoice
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-700 font-semibold text-xs uppercase">
            <tr>
              <th className="px-4 py-2.5 text-left">Feature</th>
              <th className="px-4 py-2.5 text-left">Proforma</th>
              <th className="px-4 py-2.5 text-left">Commercial</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">When issued</td>
              <td className="px-4 py-2.5">Before delivery</td>
              <td className="px-4 py-2.5">After delivery</td>
            </tr>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Legally binding?</td>
              <td className="px-4 py-2.5">No</td>
              <td className="px-4 py-2.5">Yes</td>
            </tr>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Demands payment?</td>
              <td className="px-4 py-2.5">No</td>
              <td className="px-4 py-2.5">Yes</td>
            </tr>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Used for accounting?</td>
              <td className="px-4 py-2.5">No</td>
              <td className="px-4 py-2.5">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a deeper look, see our guide on{' '}
        <Link href="/blog/proforma-invoice-vs-commercial-invoice" className="text-blue-600 hover:underline font-medium">
          proforma invoice vs commercial invoice
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        Can a client legally refuse to pay a proforma invoice?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. A proforma invoice isn&apos;t a demand for payment — it&apos;s a
        preview of what the commercial invoice will look like once the work
        is done. Once you deliver and issue a commercial invoice, payment
        becomes legally required under your agreed terms.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        Should the proforma total match the final invoice?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In most cases, yes — the whole point of a proforma is to lock in the
        price before work starts. If scope changes, issue a revised proforma
        before shipping the final invoice.
      </p>

      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related reading</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/blog/proforma-invoice-vs-commercial-invoice" className="text-blue-600 hover:underline">
              Proforma Invoice vs Commercial Invoice
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-create-professional-invoice" className="text-blue-600 hover:underline">
              How to Create a Professional Invoice (2026 Guide)
            </Link>
          </li>
          <li>
            <Link href="/blog/invoice-payment-terms-explained" className="text-blue-600 hover:underline">
              Invoice Payment Terms Explained
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
