
import type { MetadataRoute } from 'next';
import { PRODUCTS_DATA, INDUSTRIES_DATA, COMPANY_DETAILS } from '@/lib/staticData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_DETAILS.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/products`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/business-profile`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic Product Category Routes
  const productEntries = PRODUCTS_DATA.map((product) => {
    const slug = product.category.toLowerCase().replace(/\s+/g, "-");
    return {
      url: `${siteUrl}/products/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  // Dynamic Industry Routes
  const industryEntries = INDUSTRIES_DATA.map((industry) => {
    return {
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...productEntries, ...industryEntries];
}
