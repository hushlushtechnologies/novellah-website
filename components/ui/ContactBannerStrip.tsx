 import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactBannerStripProps {
  heading: string;
  subtext: string;
  ctaLabel: string;
}

export function ContactBannerStrip({ heading, subtext, ctaLabel }: ContactBannerStripProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-background-light p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-white sm:h-12 sm:w-12">
          <Image
            src="/images/icons/phone.svg"
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] object-contain sm:h-5 sm:w-5"
          />
        </span>
        <div>
          <p className="font-body text-xs text-muted-foreground sm:text-sm">{heading}</p>
          <p className="font-body text-sm font-semibold text-primary sm:text-base">{subtext}</p>
        </div>
      </div>

      <Button href="/contact-us" variant="solid" icon={<ArrowRight size={16} />} className="w-full justify-center sm:w-fit">
        {ctaLabel}
      </Button>
    </div>
  );
}