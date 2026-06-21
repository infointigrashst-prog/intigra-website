
import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'; // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
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
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // If you have dynamic routes (e.g., blog posts, products), 
  // you would fetch them here and add them to the sitemap.
  // Example:
  // const posts = await fetch('https://.../api/posts').then((res) => res.json())
  // const postEntries = posts.map((post) => ({
  //   url: `${siteUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt).toISOString(),
  //   changeFrequency: 'weekly',
  //   priority: 0.6,
  // }))
  // return [...staticPages, ...postEntries];

  return staticPages;
}
