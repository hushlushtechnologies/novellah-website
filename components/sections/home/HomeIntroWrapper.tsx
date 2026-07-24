// components/sections/home/HomeIntroWrapper.tsx
import Image from "next/image";

export function HomeIntroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {/* Swirl — anchored to the TOP, spans roughly Welcome + WhyChoose */}
      <Image
        src="/images/decorative/swirl.svg"
        alt=""
        width={707}
        height={1692}
        aria-hidden
        className="pointer-events-none absolute start-0 top-0 -z-10 hidden w-auto -translate-x-1/2 opacity-25 md:block"
        style={{ height: "1692px" }}
      />
      {/* Flower — anchored to the BOTTOM, spans roughly WhyChoose/Category seam */}
    
      {children}
    </div>
  );
}