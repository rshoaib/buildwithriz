import { TrendingUp, CheckCircle, Users } from 'lucide-react';

export default function WhyInvoicing() {
  return (
    <section className="bg-gradient-to-b from-white dark:from-gray-900 to-blue-50 dark:to-gray-800 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
          Why Professional Invoicing Matters
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you are a solo freelancer or a growing agency, well-crafted invoices are
          the backbone of healthy cash flow and professional client relationships.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Get Paid Faster',
              desc: 'Studies show that professional, clearly formatted invoices are paid up to 2× faster than informal emails or messages. A polished invoice signals credibility and makes it easy for clients to process payment.',
            },
            {
              icon: CheckCircle,
              title: 'Stay Legally Compliant',
              desc: 'Proper invoices serve as legal documents that record transactions. Many tax authorities require invoices to include specific fields like business name, tax ID, dates, and itemized descriptions. Our generator covers all the essentials.',
            },
            {
              icon: Users,
              title: 'Build Client Trust',
              desc: 'A branded, professional invoice reflects the quality of your work. It shows clients that you take your business seriously, leading to stronger relationships, repeat projects, and referrals.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-5 hover:shadow-md transition">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <item.icon size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
