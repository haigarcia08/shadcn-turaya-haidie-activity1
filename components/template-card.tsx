import Image from "next/image";
import Link from "next/link";
import {Product} from "@/app/data";

export default function TemplateCard({product}: {product: Product}) {
    return <Link href={`/${product.key}`} className="block">
        <div className="rounded-lg border bg-white transition-colors hover:opacity-90 overflow-hidden">
            <figure className="aspect-4/3 overflow-hidden relative">
                <Image
                    src={product.images[0]}
                    fill
                    className="object-cover object-top"
                    alt={product.title.toLowerCase()}
                />
            </figure>
            <div className="p-4 border-t">
                <div className="flex items-start justify-between">
                    <div className='space-y-2'>
                        <h3 className="font-semibold">{product.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {product.description}
                        </p>
                    </div>
                    <div className="text-right">
                        {product?.price ? <div className="font-medium">{product.price}</div> : <div className="font-medium">Free</div>}
                    </div>
                </div>
            </div>
        </div>
    </Link>
}