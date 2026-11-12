import React from "react";

export interface OrganizationSchemaProps {
  url?: string;
  logo?: string;
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://placevalue.in/#organization",
    name: "PlaceValue",
    url: "https://placevalue.in",
    logo: "https://placevalue.in/placevalue-logo.png",
    image: "https://placevalue.in/placevalue-logo.png",
    description:
      "PlaceValue combines education technology, consulting, software development and innovation to create meaningful impact.",
    email: "hello@placevalue.in",
    telephone: "+918317474679",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/placevalue-in",
      "https://www.instagram.com/placevalue.in/",
      "https://www.threads.net/@placevalue.in",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918317474679",
      contactType: "customer service",
      email: "hello@placevalue.in",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  };

  return <JsonLd data={organizationData} />;
}

export function WebSiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://placevalue.in/#website",
    name: "PlaceValue",
    url: "https://placevalue.in",
    description:
      "PlaceValue combines education technology, consulting, software development and innovation to create meaningful impact.",
    publisher: {
      "@id": "https://placevalue.in/#organization",
    },
    inLanguage: "en-US",
  };

  return <JsonLd data={websiteData} />;
}

