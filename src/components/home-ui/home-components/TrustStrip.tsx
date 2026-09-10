/*
|-----------------------------------------
| setting up TrustStrip.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const proofPoints = ["Responsive", "Lead-ready", "GA4 / Pixel", "PWA option", "Secure access", "24–48h standard"];

export function TrustStrip() {
  return (
    <section className="relative z-10 border-b border-[#dceafb] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#e5f0fc] sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
        {proofPoints.map((item, index) => (
          <motion.div
            className="flex min-h-20 items-center justify-center gap-2 px-3 text-center text-xs font-bold text-[#40506c]"
            initial={{ opacity: 0, y: 12 }}
            key={item}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <CheckCircle2 className="size-4 shrink-0 text-[#087af5]" /> {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
