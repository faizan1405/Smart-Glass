import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";

const PAGES: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.7" },
  { path: "/services", priority: "0.9" },
  { path: "/services/architectural", priority: "0.8" },
  { path: "/services/automotive-specialty", priority: "0.8" },
  { path: "/services/smart-glass", priority: "0.8" },
  { path: "/process", priority: "0.6" },
  { path: "/contact", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
).join("\n")}
</urlset>`;

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
