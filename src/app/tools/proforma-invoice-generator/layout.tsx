import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Proforma Invoice Generator (Online, No Signup) | BuildWithRiz',
  description:
    'Generate a professional proforma invoice in minutes. Free, private, no account needed. Works for international quotes, advance payments, and customs paperwork.',
  alternates: {
    canonical: 'https://www.buildwithriz.com/tools/proforma-invoice-generator',
  },
  openGraph: {
    title: 'Free Proforma Invoice Generator | BuildWithRiz',
    description:
      'Proforma invoices in minutes — free, private, no signup, instant PDF.',
    url: 'https://www.buildwithriz.com/tools/proforma-invoice-generator',
    type: 'website',
  },
};

export default function ProformaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
