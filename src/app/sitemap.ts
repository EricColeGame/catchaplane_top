import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_TYPES } from "@/config/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://catchaplane.top").replace(/\/+$/, "");

  // Static paths that always exist
  const staticPaths = ["/", ...CONTENT_TYPES.map((contentType) => `/${contentType}`), "/privacy-policy", "/terms-of-service", "/copyright", "/about"];

  const localizedEntries = await Promise.all(
    routing.locales.map(async (locale) => {
      // Dynamic paths: scan the actual MDX files for this locale
      const contentPaths = await getAllContentPaths(locale);
      const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);
      const paths = [...new Set([...staticPaths, ...dynamicPaths])];

      return paths.map((path) => ({
        url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
        priority: path === "/" ? 1 : path === "/guide" ? 0.8 : 0.6,
      }));
    }),
  );

  return localizedEntries.flat();
}
