export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "SAMBALEAF",
  "image": "https://sambaleaf.com/images/chicken-biryani.jpg",
  "servesCuisine": "Dindigul Biryani, South Indian",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karur",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "priceRange": "â‚¹â‚¹",
  "paymentAccepted": "Cash, UPI, Online"
});
