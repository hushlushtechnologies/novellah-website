// import { Play } from "lucide-react";
// import { getTranslations } from "next-intl/server";

// export async function WatchGalleryButton() {
//   const t = await getTranslations("home");

//   return (
//  <button className="absolute bottom-10 end-18 hidden cursor-pointer items-center gap-3 rounded-full border border-secondary/60 bg-black/20 py-2 pe-5 ps-2 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-black/30 sm:flex">
//       <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
//         <Play size={14} fill="currentColor" />
//       </span>

//       <span className="text-start">
//         <span className="block font-body text-xs font-semibold text-white">
//           {t("watchGallery")}
//         </span>

//         <span className="block font-body text-[11px] text-white/80">
//           {t("discoverNovellah")}
//         </span>
//       </span>
//     </button>
//   );
// }

// components/sections/home/WatchGalleryButton.tsx
import { getTranslations } from "next-intl/server";
import { WatchGalleryButtonClient } from "../sections/home/WatchGalleryButtonClient";
 

export async function WatchGalleryButton() {
  const t = await getTranslations("home");

  return (
    <WatchGalleryButtonClient
      watchGalleryLabel={t("watchGallery")}
      discoverLabel={t("discoverNovellah")}
      closeLabel={t("closeVideo")}
    />
  );
}