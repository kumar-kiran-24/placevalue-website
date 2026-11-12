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

/**
 * Determines whether the current environment is staging (e.g. new.placevalue.in).
 * When running on staging, pages automatically emit "noindex, nofollow" to prevent
 * accidental indexing by Google and other search engines, while preserving the canonical
 * production URLs pointing to https://placevalue.in.
 */
export function isStagingEnvironment(): boolean {
  if (typeof window !== "undefined") {
    const host = window.location.hostname.toLowerCase();
    if (host.includes("new.placevalue.in") || host.includes("staging")) {
      return true;
    }
  }

  try {
    // Vite client-side environment variable check
    if (typeof import.meta !== "undefined" && import.meta.env) {
      const env = import.meta.env as Record<string, unknown>;
      if (env.VITE_IS_STAGING === "true" || env.MODE === "staging") {
        return true;
      }
    }
  } catch {
    // Fallback if import.meta is not evaluated
  }

  if (typeof process !== "undefined" && process.env) {
    if (
      process.env.APP_ENV === "staging" ||
      process.env.VITE_IS_STAGING === "true" ||
      process.env.NODE_ENV === "staging"
    ) {
      return true;
    }
  }

  return false;
}

export function createSeoMeta({
  title,
  description,
  canonicalPath = "",
  image = DEFAULT_IMAGE,
  noIndex = false,
}: PageSeoConfig) {
  const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  const isStaging = isStagingEnvironment();
  const shouldNoIndex = noIndex || isStaging;

  const metaList: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content: shouldNoIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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

