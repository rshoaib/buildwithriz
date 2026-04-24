import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — BuildWithRiz',
  description: 'Get in touch with BuildWithRiz. Report bugs, request features, or ask questions about our free invoice generator. We typically respond within 24–48 hours.',
  alternates: { canonical: 'https://www.buildwithriz.com/contact' },
  openGraph: {
    title: 'Contact — BuildWithRiz',
    description: 'Get in touch with BuildWithRiz for questions, bug reports, and feature requests.',
    url: 'https://www.buildwithriz.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
