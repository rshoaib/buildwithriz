/**
 * Canonical FAQ source for the homepage.
 *
 * Both the visible `<FAQSection />` and the homepage `FAQPage` JSON-LD
 * consume this array, so schema and visible content can never drift.
 * Google's structured-data guidelines require the two to match exactly.
 */
export interface Faq {
  q: string;
  a: string;
}

export const HOME_FAQS: Faq[] = [
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
