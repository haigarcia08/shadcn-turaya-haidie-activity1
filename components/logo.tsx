import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative size-6">
        <Image
          className="dark:invert"
          src={`${process.env.BASE_URL}/logo.png`}
          fill
          alt="shadcn examples logo"
        />
      </div>
      <span className="hidden font-medium md:inline">Haidie Turaya</span>
    </div>
  );
}
