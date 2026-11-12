import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sambaleaf.com';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/heritage`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/halal`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/catering`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85
    },
    {
      url: `${baseUrl}/sustainability`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/track`,
      lastModified,
      changeFrequency: 'always',
      priority: 0.75
    },
    {
      url: `${baseUrl}#menu`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}#delivery`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}#order-builder`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9
    }
  ];
}
