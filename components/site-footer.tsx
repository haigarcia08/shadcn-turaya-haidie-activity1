import Link from "next/link"
import {Logo} from "@/components/logo"
import {Github, Twitter, Instagram} from "lucide-react"
import {categories} from "@/app/data";

export function SiteFooter() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row gap-8 ">
                    <div className="flex flex-col gap-4 md:max-w-96">
                        <div className="flex items-center gap-2">
                            <Logo/>
                        </div>
                        <p className="text-sm text-muted-foreground">Shadcn UI examples for your project. Get the code and add it to your project.</p>
                        <div className="mt-2 flex items-center gap-3">
                            <Link href="https://x.com/ShadcnExamples" target="_blank"
                                  className="text-muted-foreground hover:text-foreground">
                                <Twitter className="size-4"/>
                                <span className="sr-only">Twitter (X)</span>
                            </Link>
                        </div>
                    </div>
                    <div className="md:ms-auto md:max-w-96">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-muted-foreground">
                                © {new Date().getFullYear()} Shadcn Examples. All rights reserved.
                            </p>
                        </div>
                    </div>
                    {/*<div className="flex flex-col gap-4 md:ms-auto md:max-w-96">
                        <h3 className="font-medium">Categories</h3>
                        <ul className="flex flex-wrap gap-4 text-sm">
                            {
                                categories.map((category, key) => <li key={key}>
                                    <Link href={category.slug} className="text-muted-foreground hover:text-foreground">
                                        {category.name}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div>*/}
                </div>

            </div>
        </footer>
    )
}

