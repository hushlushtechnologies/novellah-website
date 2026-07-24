// components/sections/home/FlowerDivider.tsx
import Image from "next/image";

export function FlowerDivider() {
  return (
    <div className="pointer-events-none relative z-0 -my-32 hidden h-80 overflow-hidden md:block">
      <div className="absolute end-0 h-full w-96 translate-x-3/4 rotate-180 lg:w-[36rem]">
        <Image
          src="/images/decorative/flower-full.svg"
          alt=""
          fill
          aria-hidden
          className="object-contain object-right opacity-70"
        />
      </div>
    </div>
  );
}