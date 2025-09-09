import data from "@/app/(site)/[slug]/data.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Categories() {
  return (
    <div className="mb-6 grid grid-cols-6 flex-wrap gap-3">
      {data.map((item, i) => (
        <Button key={i} variant="outline" asChild={!item?.isComing} disabled={!!item?.isComing}>
          <Link href={`/${item.href}`}>
            {item.meta.title}
            {item?.isComing ? <Badge className="ms-2 bg-orange-600">Soon</Badge> : false}
            {item?.isNew ? <Badge className="bg-green-600">New</Badge> : false}
          </Link>
        </Button>
      ))}
    </div>
  );
}
