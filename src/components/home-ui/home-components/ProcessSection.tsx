/*
|-----------------------------------------
| setting up ProcessSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3, Code2, FileCheck2, Rocket, ScanSearch, Sparkles, type LucideIcon } from "lucide-react";

import { ArrowLink, SectionIntro } from "./shared";

const processSteps: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "প্রাথমিক অডিট", description: "বর্তমান পথের ঘাটতি ও অগ্রাধিকার দেখি।", icon: ScanSearch },
  { number: "02", title: "কাজের পরিসর", description: "পেজ, কাজের ধাপ ও সময় লিখিতভাবে ঠিক করি।", icon: FileCheck2 },
  { number: "03", title: "উপকরণ সংগ্রহ", description: "লোগো, তথ্য ও অনুমোদন প্রস্তুত হলে কাজ শুরু হয়।", icon: Code2 },
  { number: "04", title: "তৈরি ও যাচাই", description: "মুঠোফোন, যোগাযোগের পথ ও গতি যাচাই করি।", icon: Sparkles },
  {
    number: "05",
    title: "চালুর প্রস্তুতি",
    description: "আপনার দলের জন্য হস্তান্তর ও পরবর্তী পরিকল্পনা।",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          centered
          description="কাজের পরিসর, উপকরণ ও অনুমোদনের দায়িত্ব আগে থেকে পরিষ্কার থাকলে ফল ভালো হয়।"
          title="শুরু থেকে চালু হওয়া পর্যন্ত স্বচ্ছ পথ"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => {
            const ProcessIcon = step.icon;
            return (
              <motion.article
                className="relative rounded-2xl border border-[#e2edfa] bg-[#fcfeff] p-5"
                initial={{ opacity: 0, y: 20 }}
                key={step.number}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-extrabold tracking-[0.13em] text-[#087af5]">{step.number}</span>
                  <span className="flex size-9 items-center justify-center rounded-xl bg-[#eaf4ff] text-[#087af5]">
                    <ProcessIcon className="size-4" />
                  </span>
                </div>
                <h3 className="mt-8 font-bold text-[#0b1736]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-11 z-10 hidden size-5 text-[#87bbed] md:block" />
                )}
              </motion.article>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 rounded-2xl bg-[#f0f8ff] px-5 py-4 text-sm text-slate-600 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <Clock3 className="size-4 shrink-0 text-[#087af5]" />
            <strong className="text-[#0b1736]">কাজ শুরুর শর্ত:</strong> অগ্রিম অর্থ, প্রয়োজনীয় উপকরণ ও অনুমোদিত কাজের
            তালিকা পাওয়ার পর সময় গণনা শুরু হয়।
          </span>
          <ArrowLink>কীভাবে কাজ করি</ArrowLink>
        </div>
      </div>
    </section>
  );
}
