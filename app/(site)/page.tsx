import data from "@/app/(site)/[slug]/data.json";
import ComponentIframe from "@/app/(site)/[slug]/components/component-iframe";
import Image from "next/image";
import Categories from "@/components/categories";

export default function Page() {
  return (
    <div className="container mx-auto space-y-8 px-4 py-10 lg:space-y-16 lg:py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold lg:text-4xl"> shadcn/ui Examples</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl lg:text-lg">
          Tailwind CSS and React compatible sample applications and components built with shadcn/ui
          support. Download or copy the code to your project with the registry. Open source.
        </p>
      </header>

      <Categories />

      <div className="block lg:hidden">
        <figure className="relative aspect-video w-full">
          <Image
            src={`${process.env.BASE_URL}/${data[0].info.cover_image}`}
            fill
            alt={`shadcn example ${data[0].meta.title}`}
          />
        </figure>
      </div>

      <div className="hidden lg:block">
        <ComponentIframe id={data[0].href} url={`/demo/${data[0].href}`} />
      </div>
    </div>
  );
}
