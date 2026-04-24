import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Estimate Maker for Freelancers & Small Businesses | BuildWithRiz',
  description:
    'Create clean, professional project estimates in minutes. Free, no signup, works in your browser. Perfect for freelancers quoting web, design, and consulting work.',
  alternates: {
    canonical: 'https://www.buildwithriz.com/tools/estimate-maker',
  },
  openGraph: {
    title: 'Free Estimate Maker | BuildWithRiz',
    description:
      'Build professional project estimates in minutes — free, private, no signup.',
    url: 'https://www.buildwithriz.com/tools/estimate-maker',
    type: 'website',
  },
};

export default function EstimateMakerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
