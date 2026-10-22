import type { MetadataRoute } from "next";
import { siteUrl, ventures, ventureHref } from "@/lib/portfolio";
import { businesses, businessHref } from "@/lib/businesses";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/contact",
    "/support",
    "/ventures",
    ...ventures.map(ventureHref),
    ...businesses.map(businessHref),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
