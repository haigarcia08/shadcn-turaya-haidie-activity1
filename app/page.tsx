import {templates} from "@/app/data";
import TemplateCard from "@/components/template-card";
import {Skeleton} from "@/components/ui/skeleton";

export default function Home() {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
                <div className="space-y-2 py-14">
                    <h1 className="text-3xl font-bold sm:text-4xl mb-4">
                        Shadcn UI Examples
                    </h1>
                    <p className="text-muted-foreground max-w-lg text-xl">
                        Shadcn UI examples for your project. Get the code and add it to your project.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Skeleton className="w-full aspect-4/3" />
                    <Skeleton className="w-full aspect-4/3" />
                </div>
            </div>
        </div>
    )
}

