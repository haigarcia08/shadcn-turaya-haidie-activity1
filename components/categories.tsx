import data from "@/app/(site)/[slug]/data.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {data.map((item) => (
        <Button
          variant="outline"
          className="rounded-full"
          asChild={!item?.isComing}
          disabled={!!item?.isComing}>
          <Link href={`/${item.href}`}>
            {item.meta.title} {item?.isComing ? "(Soon)" : true}
          </Link>
        </Button>
      ))}
    </div>
  );
}
