import {categories, Category, templates} from "@/app/data";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import TemplateCard from "@/components/template-card";

type Props = { category: Category }

export default function CategoryDetail({category}: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
                <div className="max-w-screen-sm space-y-4 py-14">
                    <h1 className="text-3xl font-bold">{category.meta_title}</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                        {category.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {
                        categories.map((c, key) => <Button variant="outline" key={key} asChild>
                            <Link href={`/${c.slug}`}>{c.name.replace('Templates', '')}</Link>
                        </Button>)
                    }
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        templates.filter(z => [...z.categories].includes(category.id)).map((template, key) => (
                        <TemplateCard key={key} template={template}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

