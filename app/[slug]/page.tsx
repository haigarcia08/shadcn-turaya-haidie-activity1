import TemplateDetail from "@/app/[slug]/template-detail";
import type {Metadata} from "next";
import {routes} from "@/lib/routes";
import {Product, products} from "@/app/data";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params

    const route = getRoute(slug)

    if(route){
        const product = products.find((item) => item.key === route.key) as Product
        return {
            title: product.meta.title,
            description: product.meta.description,
            /*openGraph: {
                images: ['/some-specific-page-image.jpg', ...previousImages],
            },*/
        }
    }

    return {}
}

const getRoute = (slug: string) => {
    return routes.find((item) => item.key === slug)
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }>}) {
    const { slug } = await params

    const route = getRoute(slug)

    if(route) return <TemplateDetail route={route}/>
}

