// components/sections/home/WatchGalleryButtonClient.tsx
"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";

interface WatchGalleryButtonClientProps {
  watchGalleryLabel: string;
  discoverLabel: string;
  closeLabel: string;
}

export function WatchGalleryButtonClient({
  watchGalleryLabel,
  discoverLabel,
  closeLabel,
}: WatchGalleryButtonClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-10 end-18 hidden cursor-pointer items-center gap-3 rounded-full border border-secondary/60 bg-black/20 py-2 pe-5 ps-2 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-black/30 sm:flex"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
          <Play size={14} fill="currentColor" />
        </span>

        <span className="text-start">
          <span className="block font-body text-xs font-semibold text-white">
            {watchGalleryLabel}
          </span>
          <span className="block font-body text-[11px] text-white/80">{discoverLabel}</span>
        </span>
      </button>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoSrc="/videos/hero-treatments.mp4"
        closeLabel={closeLabel}
      />
    </>
  );
}