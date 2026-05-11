import { HOME_FAQS } from '@/data/faqs';

export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8 max-w-lg mx-auto">
        Got questions? Here are the answers to the most common things people ask
        about our free invoice generator.
      </p>
      <div className="space-y-4">
        {HOME_FAQS.map((faq) => (
          <details
            key={faq.q}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden group"
          >
            <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 transition list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded-xl">
              {faq.q}
              <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">
                ▾
              </span>
            </summary>
            <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
