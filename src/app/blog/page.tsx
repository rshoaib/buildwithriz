import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Blog — Free Invoicing Tips & Guides | BuildWithRiz',
  description:
    'Practical guides on invoicing, freelancing, and running a small business. Tips on creating professional invoices, getting paid faster, and managing your finances.',
  alternates: { canonical: 'https://buildwithriz.com/blog' },
  openGraph: {
    title: 'Blog — BuildWithRiz',
    description: 'Invoicing tips, freelancing guides, and small business resources.',
    url: 'https://buildwithriz.com/blog',
  },
};

export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-600 mb-8 text-base leading-relaxed">
        Practical guides on invoicing, freelancing, and running a small business.
        Learn how to create professional invoices, get paid faster, and grow your business.
      </p>

      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition"
          >
            <div className="sm:flex">
              <div className="sm:w-64 sm:flex-shrink-0">
                <div className="relative h-48 sm:h-full w-full">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
              <div className="p-5 flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
