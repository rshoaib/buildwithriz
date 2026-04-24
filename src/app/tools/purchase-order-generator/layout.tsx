import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Purchase Order Generator (Online PDF, No Signup) | BuildWithRiz',
  description:
    'Create a professional purchase order in seconds. Free, private, no signup required. Perfect for freelancers, small businesses, and procurement teams.',
  alternates: {
    canonical: 'https://www.buildwithriz.com/tools/purchase-order-generator',
  },
  openGraph: {
    title: 'Free Purchase Order Generator | BuildWithRiz',
    description:
      'Purchase orders in under 2 minutes — free, private, PDF download.',
    url: 'https://www.buildwithriz.com/tools/purchase-order-generator',
    type: 'website',
  },
};

export default function POLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
