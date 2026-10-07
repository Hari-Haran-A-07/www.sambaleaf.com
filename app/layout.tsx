import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono, Noto_Serif_Tamil } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '../lib/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import AdminDrawer from '../components/AdminDrawer';
import StickyOrderBar from '../components/StickyOrderBar';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const notoTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['300', '400', '600'],
  variable: '--font-tamil',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SAMBALEAF | Dindigul-Style Seeraga Samba Biryani in Karur',
  description:
    'SAMBALEAF serves authentic Dindigul-style Seeraga Samba Chicken and Mutton Biryani in Karur, Tamil Nadu, with traditional accompaniments including Onion Raitha and Thalcha. 100% Halal.',
  keywords: [
    'Dindigul biryani in Karur',
    'Seeraga Samba biryani Karur',
    'Chicken biryani Karur',
    'Mutton biryani Karur',
    'Tamil Nadu biryani',
    'Halal biryani Karur',
    'SAMBALEAF Karur',
    'Authentic Dindigul Dum Biryani',
  ],
  authors: [{ name: 'SAMBALEAF' }],
  creator: 'SAMBALEAF',
  publisher: 'SAMBALEAF',
  metadataBase: new URL('https://sambaleaf.com'),
  openGraph: {
    title: 'SAMBALEAF | Dindigul-Style Seeraga Samba Biryani in Karur',
    description:
      'Four dishes. One uncompromising tradition. Authentic Dindigul Seeraga Samba Chicken & Mutton Biryani in Karur, Tamil Nadu. 100% Halal.',
    url: 'https://sambaleaf.com',
    siteName: 'SAMBALEAF',
    images: [
      {
        url: '/images/chicken-biryani.jpg',
        width: 1200,
        height: 675,
        alt: 'SAMBALEAF Authentic Dindigul Seeraga Samba Biryani',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMBALEAF | Dindigul-Style Seeraga Samba Biryani in Karur',
    description:
      'Four dishes. One tradition. Authentic Dindigul-style Seeraga Samba Biryani in Karur, Tamil Nadu. 100% Halal.',
    images: ['/images/chicken-biryani.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0A08',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'SAMBALEAF',
    image: 'https://sambaleaf.com/images/chicken-biryani.jpg',
    description:
      'Authentic Dindigul-style Seeraga Samba Biryani Cloud Kitchen in Karur, Tamil Nadu. Serving Chicken Biryani, Mutton Biryani, Onion Raitha, and Thalcha. 100% Halal.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karur',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    servesCuisine: ['Dindigul Biryani', 'South Indian', 'Tamil Nadu'],
    priceRange: '₹₹',
    hasMenu: 'https://sambaleaf.com#menu',
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${notoTamil.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-charcoal-near text-cream font-body antialiased selection:bg-gold-soft selection:text-charcoal-near min-h-screen flex flex-col">
        <StoreProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CartDrawer />
          <AdminDrawer />
          <StickyOrderBar />
        </StoreProvider>
      </body>
    </html>
  );
}
