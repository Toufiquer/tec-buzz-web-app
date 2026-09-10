/*
|-----------------------------------------
| setting up PricingSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { SectionIntro, WHATSAPP_AUDIT_URL } from "./shared";

const packages = [
  {
    name: "TecBuzz Starter",
    price: "14,900",
    details: ["Conversion website", "SEO foundation", "WhatsApp-ready CTA"],
    label: "Start with clarity",
  },
  {
    name: "Lead Express",
    price: "24,900",
    details: ["Website + SEO", "1 month content", "Marketing support"],
    label: "Most practical",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "79,900",
    details: ["Business requirement updates", "SEO + marketing support", "2 months content"],
    label: "For broader systems",
  },
];

export function PricingSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f8fbff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0"
      id="pricing"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#deefff] to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          centered
          description="প্রতিটি প্যাকেজ একটি শুরুর জায়গা। বিশেষ কাজ, সংযোগ বা সুবিধার জন্য লিখিত পরিসর ও আলাদা মূল্য জানানো হবে।"
          title="সঠিক পরিসরে যুক্তিসঙ্গত বিনিয়োগ"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.article
              className={`relative rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${pkg.featured ? "border-[#087af5] bg-[#0b1736] text-white shadow-[0_22px_50px_rgba(8,111,229,0.25)]" : "border-[#dceafb] bg-white shadow-[0_12px_30px_rgba(20,89,170,0.06)]"}`}
              initial={{ opacity: 0, y: 24 }}
              key={pkg.name}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p
                className={`text-xs font-bold tracking-[0.15em] uppercase ${pkg.featured ? "text-cyan-200" : "text-[#087af5]"}`}
              >
                {pkg.label}
              </p>
              <h3 className="mt-4 text-xl font-bold">{pkg.name}</h3>
              <p className={`mt-1 text-sm ${pkg.featured ? "text-slate-300" : "text-slate-500"}`}>
                Website / Growth System
              </p>
              <div className="mt-6 flex items-end gap-1">
                <span className="mb-1 text-sm font-bold">৳</span>
                <span className="text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                <span className={`mb-1 text-sm ${pkg.featured ? "text-slate-300" : "text-slate-400"}`}> থেকে</span>
              </div>
              <ul className="mt-7 space-y-3">
                {pkg.details.map((detail) => (
                  <li
                    className={`flex items-center gap-2 text-sm ${pkg.featured ? "text-slate-200" : "text-slate-600"}`}
                    key={detail}
                  >
                    <Check className={`size-4 ${pkg.featured ? "text-cyan-300" : "text-[#087af5]"}`} />
                    {detail}
                  </li>
                ))}
              </ul>
              <a
                className={`mt-8 flex min-h-11 items-center justify-center gap-2 rounded-xl border text-sm font-bold transition ${pkg.featured ? "border-white/20 bg-white text-[#0b1736] hover:bg-cyan-50" : "border-[#cfe2fb] text-[#086fe5] hover:border-[#087af5] hover:bg-[#eff7ff]"}`}
                href={WHATSAPP_AUDIT_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                প্যাকেজ সম্পর্কে জানুন <ArrowRight className="size-4" />
              </a>
            </motion.article>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-5 text-slate-500">
          হোস্টিং নবায়ন, সংশোধনের ধাপ, অন্তর্ভুক্ত ও আলাদা কাজের বিবরণ প্রস্তাবনায় লিখিতভাবে নিশ্চিত করা হবে। বিজ্ঞাপনের
          ব্যয় আলাদা।
        </p>
      </div>
    </section>
  );
}
