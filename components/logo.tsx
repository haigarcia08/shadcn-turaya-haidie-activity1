import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative size-6">
        <Image src={`${process.env.BASE_URL}/logo.png`} fill alt="..." />
      </div>
      <span className="hidden font-semibold md:inline">Shadcn Examples</span>
    </div>
  );
}
