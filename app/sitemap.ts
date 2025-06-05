import { MetadataRoute } from "next";
import data from "@/app/(site)/[slug]/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const routesList: MetadataRoute.Sitemap = data.map((item) => ({
    url: `${process.env.BASE_URL}/${item.href}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
    images: [`${process.env.BASE_URL}/${item.info.cover_image}`]
  }));

  return [...routesList];
}
