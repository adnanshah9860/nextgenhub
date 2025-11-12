export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Next Generation Hub",
    "alternateName": "NGH",
    "description": "Professional website development, digital marketing, and branding services for small & medium businesses in India",
    "url": "https://ngh.in",
    "telephone": "+919876543210",
    "email": "info@ngh.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 10:00-19:00",
    "sameAs": [
      "https://facebook.com/ngh",
      "https://twitter.com/ngh",
      "https://linkedin.com/company/ngh",
      "https://instagram.com/ngh"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "100"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Website Development & Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Next Generation Hub"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Modern, responsive websites for businesses"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "4999",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO and social media marketing services"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "8999",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding & Logo Design",
            "description": "Professional brand identity design"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "6999",
            "priceCurrency": "INR"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
