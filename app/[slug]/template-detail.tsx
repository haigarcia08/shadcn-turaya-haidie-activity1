import {Button} from "@/components/ui/button"
import {Product, products} from "@/app/data";
import Link from "next/link";
import PaddleCheckout from "@/components/paddle-checkout";
import {GithubIcon} from "lucide-react";
import {Route} from "@/lib/routes";
import {TimeAgo} from "@/components/time-ago";
import {Skeleton} from "@/components/ui/skeleton";

type Props = { route: Route }

export default function TemplateDetail({route}: Props) {
    
    const product = products.find((item) => item.key === route.key) as Product

    return (
        <div className="container mx-auto px-4 space-y-14 py-14">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-4">
                <div className="space-y-6 lg:pe-16">
                    <div className="space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-bold">{product.title}</h1>
                        <p className="text-muted-foreground text-lg">{product.description}</p>
                    </div>

                    <div className="flex gap-3">
                        {
                            product.price !== '' ? <PaddleCheckout product_key={product.key}>
                                <Button>
                                     {`Buy for ${product.price}`}
                                </Button>
                            </PaddleCheckout> : <Button asChild>
                                <Link href={product.github_url} target="_blank">
                                    <GithubIcon/> Github
                                </Link>
                            </Button>
                        }
                        <Button variant="outline" asChild>
                            <Link href={product.preview_url} target="_blank">Live Preview</Link>
                        </Button>
                    </div>
                    {/*<div className="space-y-4">
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
                    </div>*/}


                </div>
                <div className="space-y-4">
                    <Skeleton className="w-full aspect-4/3" />
                    <Skeleton className="w-full aspect-4/3" />

                    {/*{
                        product.images.map((image, key) => <figure className="aspect-square overflow-hidden relative" key={key}>
                            <Image
                                src={image}
                                fill
                                className="object-cover object-top"
                                alt={product.title.toLowerCase()}
                            />
                            <Skeleton className="w-full aspect-4/3" />
                        </figure>)
                    }*/}
                    <time className="text-muted-foreground text-xs">Last updated: <TimeAgo date={product.last_updated}/></time>
                </div>
            </div>

            {/*<div className="max-w-screen-lg mx-auto space-y-14">

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
            </div>*/}
        </div>
    )
}

