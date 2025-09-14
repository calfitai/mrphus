export const seoConfig = {
  siteName: 'MRPHUS AI',
  siteUrl: 'https://mrphus.ai',
  defaultTitle: 'MRPHUS AI - Professional AI Image Processing & Generation',
  defaultDescription: 'Transform your photos with professional AI technology. Age progression, style transfer, background changes, blur photo fix, and much more. Create stunning AI images in seconds.',
  defaultKeywords: [
    'AI image processing',
    'AI image generation',
    'photo editing',
    'blur photo fix',
    'age progression',
    'style transfer',
    'background change',
    'AI photo enhancement',
    'image transformation',
    'artificial intelligence',
    'photo restoration',
    'AI art generator',
    'image upscaling',
    'photo enhancement',
    'AI photo editor'
  ],
  author: 'MRPHUS AI Team',
  twitterHandle: '@mrphusai',
  ogImage: '/MRPHUS-web-logo.png',
  favicon: '/favicon.ico',
  themeColor: '#ff5757',
  locale: 'en_US',
  type: 'website'
};

export const generateMetadata = (pageTitle?: string, pageDescription?: string, pageKeywords?: string[], pageImage?: string) => {
  const title = pageTitle ? `${pageTitle} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const description = pageDescription || seoConfig.defaultDescription;
  const keywords = pageKeywords ? [...seoConfig.defaultKeywords, ...pageKeywords] : seoConfig.defaultKeywords;
  const image = pageImage || seoConfig.ogImage;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: seoConfig.type,
      locale: seoConfig.locale,
      url: seoConfig.siteUrl,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
      yandex: 'your-yandex-verification-code', // Replace with actual verification code
      yahoo: 'your-yahoo-verification-code', // Replace with actual verification code
    },
  };
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MRPHUS AI",
    "url": "https://mrphus.ai",
    "logo": "https://mrphus.ai/MRPHUS-web-logo.png",
    "description": "Professional AI image processing and generation platform",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/mrphusai",
      "https://instagram.com/mrphusai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@mrphus.ai"
    }
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MRPHUS AI",
    "url": "https://mrphus.ai",
    "description": "Transform your photos with professional AI technology",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mrphus.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MRPHUS AI",
    "applicationCategory": "PhotoEditingApplication",
    "operatingSystem": "Web Browser",
    "description": "AI-powered image processing and generation platform",
    "url": "https://mrphus.ai",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  }
};
