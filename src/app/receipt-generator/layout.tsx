import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Receipt Maker & Generator (No Sign-up) | BuildWithRiz',
  description: 'Create professional PDF receipts in seconds. 100% free receipt maker, no login required, completely private. Supports 30+ currencies.',
  alternates: {
    canonical: 'https://buildwithriz.com/receipt-generator',
  },
};

export default function ReceiptLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
