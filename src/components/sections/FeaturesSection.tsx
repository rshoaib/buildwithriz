import { Shield, Zap, Globe, Download } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
          Why Use Our Free Invoice Generator?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8 max-w-xl mx-auto">
          BuildWithRiz combines privacy, speed, and professional quality into a tool that
          rivals paid invoice software — completely free of charge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: 'No Signup Required',
              desc: 'Start creating invoices immediately. No account, no email, no password. Your data stays on your device at all times.',
            },
            {
              icon: Zap,
              title: '100% Client-Side',
              desc: 'Your data never leaves your browser. Everything is processed locally using JavaScript — no server requests, no cloud storage.',
            },
            {
              icon: Globe,
              title: '30+ Currencies',
              desc: 'Full support for USD, EUR, GBP, SAR, AED, INR, PKR, CAD, AUD, JPY, and 25+ more currencies for global invoicing.',
            },
            {
              icon: Download,
              title: 'Professional PDF',
              desc: 'Download crisp, vector-quality PDF invoices perfect for emailing to clients, printing, or attaching to accounting records.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5 hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <feature.icon size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
