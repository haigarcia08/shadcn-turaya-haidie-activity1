import { MetadataRoute } from "next";
import {routes} from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {

    const routesList: MetadataRoute.Sitemap = routes
        .map((route) => ({
            url: route.url,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        }));

    return [
        ...routesList,
    ];
}