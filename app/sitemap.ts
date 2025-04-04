import { MetadataRoute } from "next";
import {templates, categories} from "@/app/data";

export default function sitemap(): MetadataRoute.Sitemap {

    const templatesData: MetadataRoute.Sitemap = templates
        .map((product) => ({
            url: `${process.env.BASE_URL}/${product.slug}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        }));

    const categoriesData: MetadataRoute.Sitemap = categories
        .map((category) => ({
            url: `${process.env.BASE_URL}/${category.slug}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        }));

    return [
        {
            url: `${process.env.BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        },
        ...templatesData,
        ...categoriesData,
    ];
}