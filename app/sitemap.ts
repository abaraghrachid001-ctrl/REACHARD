import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://structura-maroc.ma";
  const routes = ["", "/services", "/blog", "/resources", "/membership", "/store", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
