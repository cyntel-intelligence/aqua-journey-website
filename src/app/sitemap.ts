import type { MetadataRoute } from 'next';

// Use a fixed date for sitemap to prevent unnecessary changes on each build
// Update this date when actual content changes are made
const LAST_CONTENT_UPDATE = '2026-02-23';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aquajourneyswimschool.com';
  const lastModified = new Date(LAST_CONTENT_UPDATE);

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/classes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gift-cards`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/scholarships`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/water-safety`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
