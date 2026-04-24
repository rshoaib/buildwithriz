import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import HeroSvg from '@/components/blog/HeroSvg';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) return {};

  // SEO fields: prefer the SEO-only overrides (metaTitle / metaDescription),
  // fall back to the visible article title / description. Lets the weekly
  // GSC audit tune the SERP snippet without changing the on-page heading.
  const seoTitle = article.metaTitle ?? article.title;
  const seoDescription = article.metaDescription ?? article.description;

  return {
    title: `${seoTitle} | BuildWithRiz`,
    description: seoDescription,
    keywords: article.keywords,
    alternates: { canonical: `https://www.buildwithriz.com/blog/${article.slug}` },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://www.buildwithriz.com/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.updatedAt ?? article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const article = getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.updatedAt ?? article.date,
      author: {
        '@type': 'Organization',
        name: 'BuildWithRiz',
        url: 'https://www.buildwithriz.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'BuildWithRiz',
        url: 'https://www.buildwithriz.com',
      },
      mainEntityOfPage: `https://www.buildwithriz.com/blog/${article.slug}`,
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition mb-6"
      >
        <ArrowLeft size={14} />
        Back to Blog
      </Link>

      {/* Hero Illustration (inline SVG — no external assets) */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-6">
        <HeroSvg slug={article.heroKey} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
          {article.description}
        </p>
      </header>

      {/* Article Content */}
      <article className="prose prose-gray prose-sm sm:prose-base max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5 space-y-1.5 mb-4 text-gray-700 text-sm sm:text-base">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-5 space-y-1.5 mb-4 text-gray-700 text-sm sm:text-base">
                {children}
              </ol>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                <table className="min-w-full text-sm">{children}</table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-50 text-gray-700 font-semibold">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2.5 border-t border-gray-100 text-gray-600">
                {children}
              </td>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-3 pr-4 my-6 rounded-r-lg text-sm text-blue-900">
                {children}
              </blockquote>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-gray-900">{children}</strong>
            ),
            a: ({ href, children }) => (
              <Link
                href={href || '/'}
                className="text-blue-600 hover:underline font-medium"
              >
                {children}
              </Link>
            ),
            code: ({ children }) => (
              <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-xs font-mono">
                {children}
              </code>
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-center text-white">
        <h2 className="text-xl font-bold mb-2">Ready to Create Your Invoice?</h2>
        <p className="text-blue-100 text-sm mb-4">
          No signup, no data stored. Create a professional PDF invoice in under 2 minutes.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition text-sm"
        >
          Create Free Invoice →
        </Link>
      </div>
    </main>
  );
}
