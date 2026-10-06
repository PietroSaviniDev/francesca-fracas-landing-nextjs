import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Necessario con output: "export" per generare il file in build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
