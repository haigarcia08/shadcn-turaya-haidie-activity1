import Image from "next/image"
import {Button} from "@/components/ui/button"
import {categories, Category, Template, templates} from "@/app/data";
import Link from "next/link";
import {cn} from "@/lib/utils";
import PaddleCheckout from "@/components/paddle-checkout";
import {TimeAgo} from "@/components/time-ago";
import TemplateInfo from "@/app/[slug]/info";
import {GithubIcon} from "lucide-react";

type Props = { template: Template }

export default function TemplateDetail({template}: Props) {

    // @ts-ignore
    const variantTemplates = template.variants.length > 0 ? templates.filter(z => [...template.variants].includes(z.id)) : [];

    const current_categories: Category[] = []

    template.categories.map((id) => {
        const c = categories.find(e => e.id === id)
        current_categories.push(c as Category)
    })

    return (
        <div className="container mx-auto px-4 space-y-14 py-14">
            <div className="max-w-screen-lg mx-auto grid grid-cols-2">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">{template.name} — {template.title}</h1>
                        <p className="text-muted-foreground text-lg">{template.description}</p>
                    </div>
                    <div className="space-y-4">
                        {
                            variantTemplates.length > 1 && <div className="flex gap-4 mt-6">
                                {
                                    variantTemplates.map((item, key) =>
                                        <Button key={key} variant="outline"
                                                className={cn('border-2 bg-transparent! h-auto py-4')}
                                                asChild>
                                            <Link href={item.slug} className="flex items-end">
                                                <div className="text-2xl sm:text-3xl font-bold">{item.price ?? "Free"}</div>
                                                <div className="text-sm text-muted-foreground">{item.price_label}</div>
                                            </Link>
                                        </Button>
                                    )
                                }
                            </div>
                        }
                    </div>
                    <div className="flex gap-3">
                        {
                            template.price !== '' ? <PaddleCheckout template_name={template.name}>
                                <Button>
                                    Buy {template.name} for {template.price}
                                </Button>
                            </PaddleCheckout> : <Button asChild>
                                <Link href={template.github_url} target="_blank">
                                    <GithubIcon/> Github
                                </Link>
                            </Button>
                        }
                        <Button variant="outline" asChild>
                            <Link href={template.preview_url} target="_blank">Live Preview</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
                {
                    template.images.map((image, key) => <figure className="aspect-square overflow-hidden relative" key={key}>
                        <Image
                            src={image}
                            fill
                            className="object-cover object-top"
                            alt={template.title.toLowerCase()}
                        />
                    </figure>)
                }
            </div>

            <div className="max-w-screen-lg mx-auto space-y-14">

                <p className="text-black/70">{template.content}</p>

                <div
                    className="border grid grid-cols-3 divide-x *:flex *:flex-col *:items-center *:py-6 rounded-lg *:gap-2">
                    <div>
                        <span><TimeAgo date={template.last_updated}/></span>
                        <span className="text-muted-foreground text-sm">Last updated</span>
                    </div>
                    <div>
                        <span>{template.page_count}</span>
                        <span className="text-muted-foreground text-sm">Pages</span>
                    </div>
                    <Link href={`/${current_categories[0].slug}`} title={current_categories[0].meta_title}>
                        <span>{current_categories[0].name}</span>
                        <span className="text-muted-foreground text-sm">Category</span>
                    </Link>
                </div>

                <TemplateInfo template={template} categories={current_categories}/>
            </div>
        </div>
    )
}

