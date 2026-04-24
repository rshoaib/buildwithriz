import Link from 'next/link';
import { ArrowRight, Check, FileText } from 'lucide-react';

export default function PurchaseOrderGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Purchase Order Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description:
      'Create a professional purchase order in your browser. Free, no signup, instant PDF download.',
    url: 'https://www.buildwithriz.com/tools/purchase-order-generator',
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
        Free Purchase Order Generator
      </h1>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
        Create a professional purchase order in seconds — perfect for
        freelancers, small businesses, and anyone who needs to formally
        request goods or services from a supplier. 100% free, no signup,
        nothing stored on our servers.
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-white mb-10">
        <h2 className="text-xl font-bold mb-2">Build your purchase order</h2>
        <p className="text-blue-100 text-sm mb-4">
          Our PDF builder handles purchase orders, invoices, and receipts
          from the same clean form. Set the document type, add line items,
          and download — fully in your browser.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition text-sm"
        >
          Open the generator <ArrowRight size={16} />
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What is a purchase order?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A purchase order (PO) is a formal document a buyer sends to a supplier
        to request specific goods or services at an agreed price. Once the
        supplier accepts the PO, it becomes a legally binding contract. POs
        give both sides a clean paper trail, make procurement easier to audit,
        and prevent &quot;I thought we agreed on...&quot; disputes.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        When should you issue a purchase order?
      </h3>
      <ul className="space-y-2 mb-6">
        {[
          'Ordering materials, equipment, or stock from a supplier',
          'Engaging a subcontractor for defined scope (e.g. a designer hiring a copywriter)',
          'Buying services where your accounting team requires a PO reference',
          'Large one-off orders where a handshake isn\'t enough documentation',
          'Any purchase that needs manager approval before the vendor starts work',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-gray-700 text-sm sm:text-base">
            <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What every purchase order must include
      </h2>
      <ul className="space-y-2 mb-6">
        {[
          '"Purchase Order" clearly labeled at the top',
          'A unique PO number (e.g. PO-2026-001) — suppliers will quote this on their invoice',
          'Your (buyer) business name, address, and contact',
          'Supplier (vendor) business name and address',
          'Issue date and required delivery/completion date',
          'Itemized list — description, quantity, unit price, line total',
          'Subtotal, taxes, shipping, and grand total',
          'Payment terms (e.g. Net 30 after delivery)',
          'Shipping or delivery address if different from billing',
          'Authorized signature or approver name',
        ].map((item) => (
          <li key={item} className="flex gap-2 text-gray-700 text-sm sm:text-base">
            <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Purchase order vs invoice — who sends what?
      </h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-700 font-semibold text-xs uppercase">
            <tr>
              <th className="px-4 py-2.5 text-left">Document</th>
              <th className="px-4 py-2.5 text-left">Who sends it?</th>
              <th className="px-4 py-2.5 text-left">When</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Purchase order</td>
              <td className="px-4 py-2.5">Buyer → Supplier</td>
              <td className="px-4 py-2.5">Before work starts</td>
            </tr>
            <tr className="border-t border-gray-100">
              <td className="px-4 py-2.5 font-medium">Invoice</td>
              <td className="px-4 py-2.5">Supplier → Buyer</td>
              <td className="px-4 py-2.5">After work completes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        The invoice the supplier eventually sends should reference the PO
        number — that&apos;s how accounts payable matches the two documents.
        For more on invoice structure and payment terms, see{' '}
        <Link href="/blog/how-to-create-professional-invoice" className="text-blue-600 hover:underline font-medium">
          how to create a professional invoice
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        Is a purchase order legally binding?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once the supplier accepts it — yes. A PO is an offer; acceptance
        creates a contract. Both sides are then bound to the agreed terms,
        price, and delivery.
      </p>

      <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        What&apos;s the difference between a PO and a proforma invoice?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A PO is sent by the <em>buyer</em> to request something. A proforma
        invoice is sent by the <em>supplier</em> to preview what will be billed.
        If you need the supplier-side document, use our{' '}
        <Link href="/tools/proforma-invoice-generator" className="text-blue-600 hover:underline font-medium">
          proforma invoice generator
        </Link>{' '}
        instead.
      </p>

      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Related reading</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/blog/how-to-create-professional-invoice" className="text-blue-600 hover:underline">
              How to Create a Professional Invoice (2026 Guide)
            </Link>
          </li>
          <li>
            <Link href="/blog/quote-vs-estimate-vs-invoice" className="text-blue-600 hover:underline">
              Quote vs Estimate vs Invoice: What&apos;s the Difference?
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
