export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  locale: string;
}

export const DEFAULT_SEO: SeoConfig = {
  title: 'SAMBALEAF | Authentic Dindigul-Style Seeraga Samba Biryani in Karur',
  description: 'Hand-crafted Dindigul Seeraga Samba Chicken and Mutton Biryani in Karur, Tamil Nadu. Sealed in woodfire copper handis, 100% Halal certified.',
  canonicalUrl: 'https://sambaleaf.com',
  ogImage: 'https://sambaleaf.com/images/chicken-biryani.jpg',
  locale: 'en_IN'
};

export function generateStructuredRestaurantJson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'SAMBALEAF',
    image: [
      'https://sambaleaf.com/images/chicken-biryani.jpg',
      'https://sambaleaf.com/images/mutton-biryani.jpg'
    ],
    '@id': 'https://sambaleaf.com/#restaurant',
    url: 'https://sambaleaf.com',
    telephone: '+919442188320',
    priceRange: '₹₹',
    menu: 'https://sambaleaf.com/#menu',
    servesCuisine: ['Dindigul Biryani', 'South Indian', 'Tamil Traditional'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '42/1 Kovai Road, Near Light House Corner',
      addressLocality: 'Karur',
      postalCode: '639002',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.9574,
      longitude: 78.0805
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:30',
        closes: '15:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '18:30',
        closes: '22:30'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1280',
      bestRating: '5',
      worstRating: '1'
    }
  };
}
