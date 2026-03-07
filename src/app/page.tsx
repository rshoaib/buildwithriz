'use client';

import { useState } from 'react';
import InvoiceForm from '@/components/InvoiceForm';
import InvoicePreview from '@/components/InvoicePreview';
import dynamic from 'next/dynamic';
import { defaultInvoice } from '@/data/defaults';
import { InvoiceData } from '@/types/invoice';
import { Shield, Zap, Globe, Download, FileText, Eye } from 'lucide-react';

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
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base sm:text-lg">
            Fill in your details, preview instantly, and download as PDF. No signup,
            no login, no data stored — everything runs in your browser.
          </p>
        </div>
      </section>

      {/* Invoice Builder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 pb-12">
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

      {/* Features */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Use Our Free Invoice Generator?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'No Signup Required',
                desc: 'Start creating invoices immediately. No account, no email, no password.',
              },
              {
                icon: Zap,
                title: '100% Client-Side',
                desc: 'Your data never leaves your browser. Everything is processed locally.',
              },
              {
                icon: Globe,
                title: '30+ Currencies',
                desc: 'Support for USD, EUR, GBP, SAR, AED, INR, and 25+ more currencies.',
              },
              {
                icon: Download,
                title: 'Professional PDF',
                desc: 'Download crisp, professional invoices as vector-quality PDF files.',
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
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is this invoice generator really free?',
              a: 'Yes, 100% free. No hidden charges, no premium plans, no signup required. Create unlimited invoices.',
            },
            {
              q: 'Is my data safe?',
              a: 'Absolutely. All processing happens in your browser. We never receive, store, or transmit your invoice data. Your information stays on your device.',
            },
            {
              q: 'Can I use this for my business?',
              a: 'Yes! Our invoices are professional-grade PDFs suitable for freelancers, small businesses, and contractors.',
            },
            {
              q: 'What currencies are supported?',
              a: 'We support 30+ currencies including USD, EUR, GBP, SAR, AED, INR, PKR, CAD, AUD, JPY, and many more.',
            },
            {
              q: 'Do I need to install anything?',
              a: 'No. This is a web-based tool. Just open the website in any modern browser and start creating invoices.',
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
    </main>
  );
}
