export const SITE_URL = "https://hs-smartglass.lovable.app";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "product";
};

/** Builds consistent, per-page head metadata: title, description, Open Graph, Twitter and canonical. */
export function pageSeo({ title, description, path, type = "website" }: SeoInput) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: "HS smartglass" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
