import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Category, Template} from "@/app/data";
import Link from "next/link";
import {FileText, FolderOpen} from "lucide-react";
import {TimeAgo} from "@/components/time-ago";
import {Badge} from "@/components/ui/badge";

const fileTree = [
    {name: "app", type: "folder"},
    {
        name: "components",
        type: "folder",
        children: [{name: "ui", type: "folder"}],
    },
    {name: "hooks", type: "folder"},
    {name: "lib", type: "folder", children: [{name: "utils.ts", type: "file"}]},
    {name: "public", type: "folder"},
    {name: "store", type: "folder"},
    {name: ".env", type: "file"},
    {name: ".gitignore", type: "file"},
    {name: "components.json", type: "file"},
    {name: "eslint.config.mjs", type: "file"},
    {name: "next.config.ts", type: "file"},
    {name: "next-env.d.ts", type: "file"},
    {name: "package.json", type: "file"},
    {name: "package-lock.json", type: "file"},
    {name: "postcss.config.mjs", type: "file"},
    {name: "README.md", type: "file"},
    {name: "tsconfig.json", type: "file"},
] as const;

export type FileTree = {
    name: string;
    type: "folder" | "file";
    children?: FileTree[];
};

const FileItem = ({item}: { item: FileTree }) => (
    <li>
        <div className='flex items-center gap-2'>
            {item.type === "folder" ? (
                <FolderOpen className="size-4 text-yellow-500"/>
            ) : (
                <FileText className="size-4 text-blue-400"/>
            )}
            <span className="font-mono text-muted-foreground">{item.name}</span>
        </div>
        {item.children && (
            <ul className="ml-6">
                {item.children.map((child: FileTree, index: number) => (
                    <FileItem key={index} item={child}/>
                ))}
            </ul>
        )}
    </li>
);

export default function TemplateInfo({template, categories}: { template: Template, categories: Category[] }) {
    return <div>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Features</AccordionTrigger>
                <AccordionContent>
                    <dl className="bg-white p-4 grid grid-cols-2 gap-y-12 lg:gap-x-6 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2"><p className="text-base font-medium mb-3">
                                Release
                            </p>
                                <ul className="space-y-1 text-sm font-medium list-none text-base-600">
                                    <li><TimeAgo date={template.release_date}/></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2"><p className="text-base font-medium">
                                Version:
                            </p>
                                <ul className="text-sm font-medium list-none text-base-600">
                                    <li>Next.js 15 / Tailwind v4</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2"><p className="text-base font-medium mb-3">
                            Compatibility
                        </p>
                            <ul className="space-y-1 text-sm font-medium list-none text-base-600">
                                <li>Edge</li>
                                <li>Safari</li>
                                <li>Firefox</li>
                                <li>Chrome</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2"><p className="text-base font-medium mb-3">
                            Packages
                        </p>
                            <ul className="space-y-1 text-sm font-medium list-none text-base-600">
                                <li>Astro RSS</li>
                            </ul>
                        </div>
                        <div>
                            <dt><p className="text-base font-medium mb-3">
                                Tags
                            </p></dt>
                            <dd>
                                <ul className="flex flex-col gap-2 mr-1 capitalize">
                                    <ul className="flex flex-col gap-2 list-none ">
                                        {
                                            categories.map((item, key) => <li key={key}
                                                                              className="flex flex-wrap gap-2 text-sm font-medium hover:underline">
                                                <Link href={`/${item.slug}`}>{item.name}</Link>
                                            </li>)
                                        }
                                    </ul>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Components, Sections & Blocks</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-wrap gap-3">
                        {
                            template.componentsTree.map((item, key) => <Badge key={key}>{item}</Badge>)
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">File Structure</AccordionTrigger>
                <AccordionContent>
                    <div className="bg-white p-4 flex flex-col gap-2 pb-4">
                        <p className="text-xs  font-medium text-black">
                        Tailwind v4
                    </p>
                        <ul className="flex flex-col space-y-1 text-sm ">
                            {fileTree.map((item, index) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                return <FileItem key={index} item={item}/>
                            })}
                        </ul>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
}