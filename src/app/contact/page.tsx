import { Metadata } from 'next';
import { Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — BuildWithRiz',
  description: 'Get in touch with BuildWithRiz. We are happy to hear your feedback.',
  alternates: { canonical: 'https://buildwithriz.com/contact' },
  openGraph: {
    title: 'Contact — BuildWithRiz',
    description: 'Get in touch with BuildWithRiz for questions and feedback.',
    url: 'https://buildwithriz.com/contact',
  },
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-base leading-relaxed">
        Have a question, feature request, or found a bug? We would love to hear from you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="mailto:contact@buildwithriz.com"
          className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition group"
        >
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition">
            <Mail size={18} className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
            <p className="text-blue-600 text-sm mt-0.5">contact@buildwithriz.com</p>
            <p className="text-gray-500 text-xs mt-1">We typically respond within 24 hours</p>
          </div>
        </a>

        <a
          href="https://buildwithriz.com"
          className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition group"
        >
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition">
            <Globe size={18} className="text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Website</h3>
            <p className="text-blue-600 text-sm mt-0.5">buildwithriz.com</p>
            <p className="text-gray-500 text-xs mt-1">Free tools for freelancers & businesses</p>
          </div>
        </a>
      </div>
    </main>
  );
}
