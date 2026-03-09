import { Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 dark:from-gray-900 to-white dark:to-gray-900 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full mb-4">
          <Shield size={12} />
          100% Free — No Signup Required
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Create Professional Invoices{' '}
          <span className="text-blue-600 dark:text-blue-400">in Seconds</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Fill in your details, preview instantly, and download as a polished PDF.
          No signup, no login, no data stored — everything runs securely in your browser.
          Whether you are a freelancer sending your first invoice or a small business
          managing dozens of clients, BuildWithRiz makes professional invoicing completely free.
        </p>
      </div>
    </section>
  );
}
