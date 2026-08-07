 "use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  cardBaseClasses,
  CardDescriptionClasses,
  cardDividerClasses,
  cardHeadingClasses,
} from "@/lib/styles";

interface Category {
  slug: string;
  image: string;
  title: string;
  description: string;
}

interface CategoryTreatmentsGridProps {
  categories: Category[];
  ctaExplore: string;
}

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function CategoryTreatmentsGrid({ categories, ctaExplore }: CategoryTreatmentsGridProps) {
  return (
    <motion.div
      variants={gridContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:gap-x-6 sm:gap-y-6 sm:grid-cols-2"
    >
      {categories.map((category) => (
        <motion.div
          key={category.slug}
          variants={cardReveal}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className={`group ${cardBaseClasses} flex flex-col overflow-hidden shadow-soft transition-shadow duration-300 hover:shadow-hover sm:flex-row sm:min-h-[280px]`}
        >
          <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-32 md:w-36">
            <Image
              src={category.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:hidden" />
          </div>
          <div className="flex flex-col justify-center p-4 sm:p-5">
            <h3 className={`${cardHeadingClasses} transition-colors duration-300 group-hover:text-primary`}>
              {category.title}
            </h3>
            <div className={cardDividerClasses} />
            <p className={CardDescriptionClasses}>{category.description}</p>

           <a 
              href={`/treatments?category=${category.slug}#next-section`}
              className="group/link mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold uppercase text-primary sm:mt-4"
            >
              {ctaExplore}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}