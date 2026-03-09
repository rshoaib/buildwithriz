import { ClipboardList, Eye, Download } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
        How It Works
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-8 max-w-xl mx-auto">
        Creating a professional invoice takes less than two minutes. Follow these three simple steps
        and download your invoice as a crisp, print-ready PDF.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            step: '1',
            icon: ClipboardList,
            title: 'Fill in Your Details',
            desc: 'Enter your business name, client information, line items, tax rate, and payment terms. Choose from over 30 currencies to match your market.',
          },
          {
            step: '2',
            icon: Eye,
            title: 'Preview Instantly',
            desc: 'See a live preview of your invoice as you type. Adjust details on the fly until it looks perfect — no waiting, no page reloads.',
          },
          {
            step: '3',
            icon: Download,
            title: 'Download as PDF',
            desc: 'Hit the download button to generate a high-quality, vector PDF. The file is created entirely in your browser — your data never touches a server.',
          },
        ].map((item) => (
          <div
            key={item.step}
            className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 text-center hover:shadow-md transition"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
              {item.step}
            </div>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3 mt-2">
              <item.icon size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
