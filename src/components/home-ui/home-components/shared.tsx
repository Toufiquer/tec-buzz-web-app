/*
|-----------------------------------------
| setting up shared.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const WHATSAPP_AUDIT_URL = "https://wa.me/01607333369?text=I%20want%20a%2010%20minute%20audit.";

export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function SectionIntro({
  title,
  description,
  centered = false,
  light = false,
}: {
  title: string;
  description: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
      initial="hidden"
      variants={reveal}
      viewport={{ once: true, amount: 0.35 }}
      whileInView="visible"
    >
      <h2
        className={`text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05] ${light ? "text-white" : "text-[#0b1736]"}`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </motion.div>
  );
}

export function ArrowLink({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <a
      className={`group inline-flex items-center gap-2 text-sm font-bold transition-colors ${light ? "text-white hover:text-cyan-200" : "text-[#086fe5] hover:text-[#0b1736]"}`}
      href={WHATSAPP_AUDIT_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
