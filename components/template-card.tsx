import Image from "next/image";
import Link from "next/link";
import {Template} from "@/app/data";

export default function TemplateCard({template}: {template: Template}) {
    return <Link href={`/${template.slug}`} className="block">
        <div className="rounded-lg border bg-white transition-colors hover:opacity-90 overflow-hidden">
            <figure className="aspect-4/3 overflow-hidden relative">
                <Image
                    src={template.images[0]}
                    fill
                    className="object-cover object-top"
                    alt={template.title.toLowerCase()}
                />
            </figure>
            <div className="p-4 border-t">
                <div className="flex items-start justify-between">
                    <div className='space-y-2'>
                        <h3 className="font-semibold">{template.name} - <span className="text-muted-foreground font-medium">{template.title}</span></h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {template.description}
                        </p>
                    </div>
                    <div className="text-right">
                        {template?.price ? <div className="font-medium">{template.price}</div> : <div className="font-medium">Free</div>}
                    </div>
                </div>
            </div>
        </div>
    </Link>
}