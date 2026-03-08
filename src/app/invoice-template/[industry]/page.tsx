import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { industries, getIndustry } from '@/data/industries';
import { ArrowRight, Lightbulb, HelpCircle, FileText, ChevronRight } from 'lucide-react';

interface PageProps {
    params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
    return industries.map((ind) => ({ industry: ind.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { industry: slug } = await params;
    const ind = getIndustry(slug);
    if (!ind) return {};

    return {
        title: `${ind.title} | BuildWithRiz`,
        description: ind.metaDescription,
        keywords: [
            `${ind.name.toLowerCase()} invoice template`,
            `free ${ind.name.toLowerCase()} invoice`,
            `${ind.name.toLowerCase()} invoice generator`,
            'invoice template free',
            'free invoice generator',
        ],
        openGraph: {
            title: ind.title,
            description: ind.metaDescription,
            url: `https://buildwithriz.com/invoice-template/${ind.slug}`,
            siteName: 'BuildWithRiz',
            type: 'website',
        },
        alternates: {
            canonical: `https://buildwithriz.com/invoice-template/${ind.slug}`,
        },
    };
}

export default async function IndustryTemplatePage({ params }: PageProps) {
    const { industry: slug } = await params;
    const ind = getIndustry(slug);
    if (!ind) notFound();

    // Build sample items for display
    const sampleItems = ind.sampleInvoice.items || [];
    const subtotal = sampleItems.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const taxRate = ind.sampleInvoice.taxRate || 0;
    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: ind.title,
            description: ind.metaDescription,
            url: `https://buildwithriz.com/invoice-template/${ind.slug}`,
            isPartOf: {
                '@type': 'WebSite',
                name: 'BuildWithRiz',
                url: 'https://buildwithriz.com',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: ind.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.a,
                },
            })),
        },
    ];

    const otherIndustries = industries.filter((i) => i.slug !== ind.slug);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                {/* Hero */}
                <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="text-5xl mb-4">{ind.heroEmoji}</div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                            {ind.title}
                        </h1>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base leading-relaxed">
                            {ind.metaDescription}
                        </p>
                        <Link
                            href={`/?template=${ind.slug}`}
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                        >
                            Use This Template
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* Sample Invoice Preview */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        Sample {ind.name} Invoice
                    </h2>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-white">
                                        {ind.sampleInvoice.fromName}
                                    </h3>
                                    <p className="text-blue-100 text-xs mt-0.5">
                                        {ind.sampleInvoice.fromEmail}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-white tracking-wide">INVOICE</p>
                                    <p className="text-blue-100 text-xs mt-0.5">#INV-001</p>
                                </div>
                            </div>
                        </div>
                        {/* Details */}
                        <div className="p-6 space-y-5">
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                    <p className="font-semibold text-gray-500 uppercase tracking-wider mb-1">Bill To</p>
                                    <p className="font-medium text-gray-900">{ind.sampleInvoice.toName}</p>
                                    <p className="text-gray-500 mt-0.5">{ind.sampleInvoice.toEmail}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-gray-500 uppercase tracking-wider mb-1">Payment Terms</p>
                                    <p className="text-gray-900">{ind.sampleInvoice.paymentTerms}</p>
                                </div>
                            </div>
                            {/* Items */}
                            <div className="border border-gray-100 rounded-lg overflow-hidden">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="bg-gray-50 text-gray-500 uppercase tracking-wider">
                                            <th className="text-left py-2 px-3 font-semibold">Description</th>
                                            <th className="text-center py-2 px-3 font-semibold w-14">Qty</th>
                                            <th className="text-right py-2 px-3 font-semibold w-20">Rate</th>
                                            <th className="text-right py-2 px-3 font-semibold w-24">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sampleItems.map((item, i) => (
                                            <tr key={item.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                                <td className="py-2 px-3 text-gray-800">{item.description}</td>
                                                <td className="py-2 px-3 text-center text-gray-600">{item.quantity}</td>
                                                <td className="py-2 px-3 text-right text-gray-600">${item.rate.toLocaleString()}</td>
                                                <td className="py-2 px-3 text-right font-medium text-gray-900">
                                                    ${(item.quantity * item.rate).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Totals */}
                            <div className="flex justify-end">
                                <div className="w-56 space-y-1.5 text-xs">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toLocaleString()}</span>
                                    </div>
                                    {taxRate > 0 && (
                                        <div className="flex justify-between text-gray-600">
                                            <span>Tax ({taxRate}%)</span>
                                            <span>+${tax.toLocaleString()}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-gray-200 pt-1.5 flex justify-between font-bold text-sm text-gray-900">
                                        <span>Total</span>
                                        <span>${total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Notes */}
                            {ind.sampleInvoice.notes && (
                                <div className="border-t border-gray-100 pt-3">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Notes</p>
                                    <p className="text-xs text-gray-600">{ind.sampleInvoice.notes}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* CTA under preview */}
                    <div className="mt-6 text-center">
                        <Link
                            href={`/?template=${ind.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                        >
                            <FileText size={18} />
                            Customize & Download This Invoice
                        </Link>
                        <p className="text-xs text-gray-400 mt-2">Free — no signup required</p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        How to Create a {ind.name} Invoice
                    </h2>
                    <div className="space-y-4">
                        {ind.content.map((para, i) => (
                            <p key={i} className="text-gray-600 text-sm leading-relaxed">
                                {para}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Tips Section */}
                <section className="bg-gradient-to-b from-white to-blue-50 py-10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Lightbulb size={20} className="text-amber-500" />
                            {ind.name} Invoicing Tips
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {ind.tips.map((tip, i) => (
                                <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition">
                                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center mb-3 text-amber-600 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-sm">{tip.title}</h3>
                                    <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{tip.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <HelpCircle size={20} className="text-blue-500" />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-3">
                        {ind.faqs.map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-gray-900 hover:bg-gray-50 transition list-none flex items-center justify-between">
                                    {faq.q}
                                    <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">▾</span>
                                </summary>
                                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Browse Other Templates */}
                <section className="bg-gray-50 py-10">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            Browse More Invoice Templates
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {otherIndustries.map((other) => (
                                <Link
                                    key={other.slug}
                                    href={`/invoice-template/${other.slug}`}
                                    className="flex items-center gap-2 bg-white rounded-lg border border-gray-100 px-3 py-2.5 hover:shadow-md hover:border-blue-200 transition group"
                                >
                                    <span className="text-lg">{other.heroEmoji}</span>
                                    <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition">
                                        {other.name}
                                    </span>
                                    <ChevronRight size={12} className="ml-auto text-gray-300 group-hover:text-blue-500 transition" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Ready to Send Your {ind.name} Invoice?
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
                        Start with our pre-filled {ind.name.toLowerCase()} template, customize it with your details, and download a professional PDF in under 2 minutes.
                    </p>
                    <Link
                        href={`/?template=${ind.slug}`}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all text-base"
                    >
                        Create Free {ind.name} Invoice
                        <ArrowRight size={20} />
                    </Link>
                </section>
            </main>
        </>
    );
}
