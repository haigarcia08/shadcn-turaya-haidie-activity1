import {categories, templates} from "@/app/data";
import TemplateDetail from "@/app/[slug]/template-detail";
import CategoryDetail from "@/app/[slug]/category-detail";
import type {Metadata} from "next";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params

    const template = getTemplate(slug)
    const category = getCategory(slug)

    if(template){
        return {
            title: template.meta_title,
            /*openGraph: {
                images: ['/some-specific-page-image.jpg', ...previousImages],
            },*/
        }
    }

    if(category){
        return {
            title: category.meta_title,
        }
    }

    return {}
}

const getTemplate = (slug: string) => {
    return templates.find((template) => template.slug === slug)
}

const getCategory = (slug: string) => {
    return categories.find((category) => category.slug === slug)
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }>}) {
    const { slug } = await params

    const template = getTemplate(slug)
    const category = getCategory(slug)

    if(template) return <TemplateDetail template={template}/>
    if(category) return <CategoryDetail category={category}/>
}

