 import Image from "next/image";

interface DecorativeFlowerProps {
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-left"
    | "center-right"
    | "top-right-half"
    ;
  size?: "sm" | "md" | "lg";
  opacity?: number;
  className?: string;
}

const positionClasses = {
  "top-left": "start-[-10%] top-20 ",
  "top-right": "top-0 -end-48 rotate-180",
  "bottom-left": "bottom-0 start-0",
  "bottom-right": "bottom-0 end-0",
  "center-left": "top-1/2 start-0 -translate-y-1/2",
  "center-right": " top-48 -end-60 -translate-y-1/2 rotate-180",
  "top-right-half": "-top-1/4  -end-1/5 translate-y-1/2 rotate-180",
};

const sizeClasses = {
  sm: "w-48 lg:w-64",
  md: "w-64 lg:w-80",
  lg: "w-80 lg:w-[28rem]",
};

export function DecorativeFlower({
  position = "top-left",
  size = "md",
  opacity = 0.7,
  className = "translate-y-8",
}: DecorativeFlowerProps) {
  return (
    <div
      className={`pointer-events-none absolute hidden md:block -z-10 ${positionClasses[position]} ${sizeClasses[size]} ${className}`}
      style={{ opacity }}
    >
      <Image
        src="/images/decorative/flower-full.svg"
        alt=""
        width={707}
        height={1692}
        aria-hidden
        className="h-auto w-full"
      />
    </div>
  );
}