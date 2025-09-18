import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemaMarkup?: object;
}

const SEO = ({
  title = "BioCellRx - Advanced Stem Cell Therapy & Regenerative Medicine | FDA-Approved Cellular Treatments",
  description = "Leading regenerative medicine clinic offering FDA-approved stem cell therapy, MSC exosomal lysate, and advanced cellular treatments. 95% success rate, 20+ years experience. Book your consultation today.",
  keywords = "stem cell therapy, regenerative medicine, MSC exosomal lysate, cellular therapy, anti-aging treatment, joint pain relief, arthritis treatment, cord blood stem cells, FDA approved stem cells, regenerative therapy, stem cell clinic, cellular healing, mesenchymal stem cells, exosome therapy, chronic pain treatment, wellness therapy, longevity medicine, tissue repair, inflammatory conditions, BioCellRx",
  canonical = "https://biocellrx.com",
  ogImage = "https://biocellrx.com/uploads/biocellrx-social-image.jpg",
  ogType = "website",
  schemaMarkup
}: SEOProps) => {
  const siteName = "BioCellRx";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://biocellrx.com/#medicalbusiness",
        "name": "BioCellRx",
        "url": "https://biocellrx.com",
        "image": {
          "@type": "ImageObject",
          "url": ogImage,
          "width": 1200,
          "height": 630
        },
        "description": description,
        "telephone": "+1-858-519-7305",
        "email": "info@biocellrx.com",
        "medicalSpecialty": [
          "Regenerative Medicine",
          "Stem Cell Therapy",
          "Cellular Therapy",
          "Anti-Aging Medicine"
        ],
        "serviceType": [
          "Stem Cell Therapy",
          "MSC Exosomal Lysate",
          "Regenerative Medicine",
          "Cellular Therapy",
          "Anti-Aging Treatment",
          "Joint Pain Relief",
          "Chronic Pain Treatment"
        ],
        "foundingDate": "2003",
        "slogan": "Unlock Your Body's Healing Potential",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "priceRange": "$$$$",
        "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
        "currenciesAccepted": "USD"
      },
      {
        "@type": "WebSite",
        "@id": "https://biocellrx.com/#website",
        "url": "https://biocellrx.com",
        "name": "BioCellRx",
        "description": description,
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://biocellrx.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BioCellRx" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@biocellrx" />
      <meta name="twitter:creator" content="@biocellrx" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Performance Hints */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://player.vimeo.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;