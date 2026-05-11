import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { industries } from '@/data/industries';

// Stable lastModified dates for truly static pages — avoids re-bumping
// every Vercel build, which would falsely signal freshness to Google.
// Bump the constant manually only when a page's content meaningfully
// changes. Dynamic pages (blog posts, templates) use their content date.
const STATIC_LAST_MODIFIED = '2026-05-11';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.buildwithriz.com';

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/invoice-template`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/receipt-generator`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/estimate-maker`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/proforma-invoice-generator`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/purchase-order-generator`,
            lastModified: STATIC_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    const posts = getAllPosts();

    // Blog posts use their content date (updated_at if present, else date).
    // This is the one place we *want* lastModified to track real changes.
    const blogPages: MetadataRoute.Sitemap = posts.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(article.updatedAt ?? article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const templatePages: MetadataRoute.Sitemap = industries.map((ind) => ({
        url: `${baseUrl}/invoice-template/${ind.slug}`,
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...blogPages, ...templatePages];
}
