export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_IMAGE = "https://placevalue.in/placevalue-logo.png";
const SITE_NAME = "PlaceValue";
const BASE_URL = "https://placevalue.in";

export function createSeoMeta({
  title,
  description,
  canonicalPath = "",
  image = DEFAULT_IMAGE,
  noIndex = false,
}: PageSeoConfig) {
  const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  const metaList: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    // Open Graph
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl || BASE_URL },
    { property: "og:image", content: fullImageUrl },
    { property: "og:locale", content: "en_US" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImageUrl },
  ];

  return metaList;
}

export function createCanonicalLink(canonicalPath: string = "") {
  const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  return [{ rel: "canonical", href: canonicalUrl || BASE_URL }];
}

