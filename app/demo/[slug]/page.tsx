import { Suspense } from "react";
import DemoPageGenerator from "@/app/demo/[slug]/demo-page-generator";
import data from "@/app/(site)/[slug]/data.json";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const example = data.find((item) => item.href === slug);

  if (!example) return {};

  return (
    <Suspense>
      <DemoPageGenerator name={example.href} />
    </Suspense>
  );
}
