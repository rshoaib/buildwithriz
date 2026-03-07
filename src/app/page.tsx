'use client';

import { useState } from 'react';
import InvoiceForm from '@/components/InvoiceForm';
import InvoicePreview from '@/components/InvoicePreview';
import dynamic from 'next/dynamic';
import { defaultInvoice } from '@/data/defaults';
import { InvoiceData } from '@/types/invoice';
import {
  Shield,
  Zap,
  Globe,
  Download,
  FileText,
  Eye,
  ClipboardList,
  Sparkles,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
} from 'lucide-react';

const PdfGenerator = dynamic(() => import('@/components/PdfGenerator'), {
  ssr: false,
  loading: () => (
    <button className="w-full py-3 bg-gray-200 rounded-xl text-gray-500 font-medium cursor-wait">
      Loading PDF engine...
    </button>
  ),
});

export default function Home() {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            <Shield size={12} />
            100% Free — No Signup Required
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Create Professional Invoices{' '}
            <span className="text-blue-600">in Seconds</span>
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Fill in your details, preview instantly, and download as a polished PDF.
            No signup, no login, no data stored — everything runs securely in your browser.
            Whether you are a freelancer sending your first invoice or a small business
            managing dozens of clients, BuildWithRiz makes professional invoicing completely free.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          How It Works
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8 max-w-xl mx-auto">
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
              className="relative bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {item.step}
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 mt-2">
                <item.icon size={22} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Invoice Builder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Mobile tabs */}
        <div className="flex lg:hidden mb-4 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium transition ${
              activeTab === 'form'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500'
            }`}
          >
            <FileText size={14} />
            Edit
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium transition ${
              activeTab === 'preview'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500'
            }`}
          >
            <Eye size={14} />
            Preview
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className={`${activeTab === 'preview' ? 'hidden lg:block' : ''}`}>
            <InvoiceForm data={invoice} onChange={setInvoice} />
          </div>

          {/* Preview + Download */}
          <div className={`space-y-4 ${activeTab === 'form' ? 'hidden lg:block' : ''}`}>
            <div className="sticky top-20">
              <InvoicePreview data={invoice} />
              <div className="mt-4">
                <PdfGenerator data={invoice} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Proper Invoicing Matters */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Why Professional Invoicing Matters
          </h2>
          <p className="text-gray-600 text-sm text-center max-w-2xl mx-auto mb-8 leading-relaxed">
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
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
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
                className="bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <stat.icon size={18} className="text-blue-600 mx-auto mb-1.5" />
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Why Use Our Free Invoice Generator?
          </h2>
          <p className="text-gray-500 text-sm text-center mb-8 max-w-xl mx-auto">
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
                className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8 max-w-lg mx-auto">
          Got questions? Here are the answers to the most common things people ask
          about our free invoice generator.
        </p>
        <div className="space-y-4">
          {[
            {
              q: 'Is this invoice generator really free?',
              a: 'Yes, 100% free with no hidden charges, no premium plans, and no signup required. Create as many invoices as you need — there is no limit. We sustain the service through non-intrusive advertising.',
            },
            {
              q: 'Is my data safe?',
              a: 'Absolutely. All processing happens entirely in your browser using client-side JavaScript. We never receive, store, or transmit your invoice data to any server. When you close the tab, your data is gone permanently. This is by design — your privacy is our top priority.',
            },
            {
              q: 'Can I use this for my business?',
              a: 'Yes! Our invoices are professional-grade PDFs suitable for freelancers, small businesses, and contractors. They include all standard invoice fields — sender and recipient info, line items, subtotals, tax, discounts, notes, and payment terms.',
            },
            {
              q: 'What currencies are supported?',
              a: 'We support 30+ currencies including USD, EUR, GBP, SAR, AED, INR, PKR, CAD, AUD, JPY, and many more. Each currency displays its correct symbol and formatting so your invoices look professional no matter where your clients are.',
            },
            {
              q: 'Do I need to install anything?',
              a: 'No. This is a web-based tool that works in any modern browser — Chrome, Firefox, Safari, or Edge — on desktop, tablet, or mobile. No downloads, no plugins, no extensions.',
            },
            {
              q: 'How is the PDF generated?',
              a: 'The PDF is generated entirely in your browser using react-pdf, a library that creates vector-quality PDFs with JavaScript. The resulting file is crisp at any zoom level and can be printed on any paper size.',
            },
            {
              q: 'Can I include my company logo?',
              a: 'Logo support is on our roadmap and will be available in a future update. Currently you can include your business name, address, and contact information in the invoice header.',
            },
            {
              q: 'Is this tool suitable for tax purposes?',
              a: 'Our generator includes standard invoice fields that satisfy most business requirements. However, tax regulations vary by jurisdiction, so we recommend consulting a qualified accountant or tax professional to ensure your invoices meet local legal requirements.',
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
            >
              <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-gray-900 hover:bg-gray-50 transition list-none flex items-center justify-between">
                {faq.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-xs text-amber-800 leading-relaxed">
          <strong>Disclaimer:</strong> Invoices generated by BuildWithRiz are for informational and
          business documentation purposes. They do not constitute legal, tax, or financial advice.
          Please consult a qualified accountant or legal professional for compliance with your local
          invoicing and taxation regulations.
        </div>
      </section>
    </main>
  );
}
