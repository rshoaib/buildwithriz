export default function FAQSection() {
  const faqs = [
    {
      q: 'Is this invoice generator really free?',
      a: 'Yes, 100% free with no hidden charges, no premium plans, and no signup required. Create as many invoices as you need — there is no limit. We sustain the service through non-intrusive advertising.',
    },
    {
      q: 'Is my data safe?',
      a: 'Absolutely. All processing happens entirely in your browser using client-side JavaScript. We never receive, store, or transmit your invoice data to any server. When you close the tab, your data is gone permanently. This is by design — your privacy is our top priority.',
    },
    {
      q: 'Can I use this for my business?',
      a: 'Yes! Our invoices are professional-grade PDFs suitable for freelancers, small businesses, and contractors. They include all standard invoice fields — sender and recipient info, line items, subtotals, tax, discounts, notes, and payment terms.',
    },
    {
      q: 'What currencies are supported?',
      a: 'We support 30+ currencies including USD, EUR, GBP, SAR, AED, INR, PKR, CAD, AUD, JPY, and many more. Each currency displays its correct symbol and formatting so your invoices look professional no matter where your clients are.',
    },
    {
      q: 'Do I need to install anything?',
      a: 'No. This is a web-based tool that works in any modern browser — Chrome, Firefox, Safari, or Edge — on desktop, tablet, or mobile. No downloads, no plugins, no extensions.',
    },
    {
      q: 'How is the PDF generated?',
      a: 'The PDF is generated entirely in your browser using react-pdf, a library that creates vector-quality PDFs with JavaScript. The resulting file is crisp at any zoom level and can be printed on any paper size.',
    },
    {
      q: 'Can I customize the look of my invoice?',
      a: 'Yes! BuildWithRiz offers 5 professional themes — Modern (blue), Classic (dark), Minimal (clean white), Bold (purple), and Forest (green). Select a theme above the preview and it applies to both the live preview and the downloaded PDF.',
    },
    {
      q: 'Is this tool suitable for tax purposes?',
      a: 'Our generator includes standard invoice fields that satisfy most business requirements. However, tax regulations vary by jurisdiction, so we recommend consulting a qualified accountant or tax professional to ensure your invoices meet local legal requirements.',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8 max-w-lg mx-auto">
        Got questions? Here are the answers to the most common things people ask
        about our free invoice generator.
      </p>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden group"
          >
            <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 transition list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded-xl">
              {faq.q}
              <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">
                ▾
              </span>
            </summary>
            <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
