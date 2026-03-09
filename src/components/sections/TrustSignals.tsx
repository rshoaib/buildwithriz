import { FileText, Shield, Clock, Sparkles } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { icon: FileText, value: '30+', label: 'Currencies Supported' },
            { icon: Shield, value: '100%', label: 'Client-Side Processing' },
            { icon: Clock, value: '<2 min', label: 'Average Creation Time' },
            { icon: Sparkles, value: '$0', label: 'Forever Free' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <stat.icon size={18} className="text-blue-600 dark:text-blue-400 mx-auto mb-1.5" />
              <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
