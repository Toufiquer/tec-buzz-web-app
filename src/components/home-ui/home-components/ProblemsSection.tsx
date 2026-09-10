/*
|-----------------------------------------
| setting up ProblemsSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { BarChart3, BellRing, MousePointer2, UsersRound, type LucideIcon } from "lucide-react";

import { SectionIntro } from "./shared";

const problems: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "বার্তার ভিড়",
    description: "ফেসবুক, হোয়াটসঅ্যাপ ও কলের তথ্য একসাথে থাকলে উত্তর বাদ পড়ে যায়।",
    icon: BellRing,
  },
  {
    title: "অস্পষ্ট দায়িত্ব",
    description: "কার সঙ্গে কে যোগাযোগ করবেন তা বোঝা না গেলে দায়বদ্ধতা হারিয়ে যায়।",
    icon: UsersRound,
  },
  {
    title: "অজানা উৎস",
    description: "কোন প্রচারণা কাজ করছে না জানলে বাজেটের সিদ্ধান্ত অনুমানের ওপর হয়।",
    icon: BarChart3,
  },
  {
    title: "কম সাড়া পাওয়া পেজ",
    description: "আস্থা ও সহজ যোগাযোগের পথ না পেলে আগ্রহী মানুষ চলে যায়।",
    icon: MousePointer2,
  },
];

export function ProblemsSection() {
  return (
    <section className="bg-[#f8fbff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <SectionIntro
          description="একটি সুন্দর ওয়েবসাইট যথেষ্ট নয়, যদি দলের পরবর্তী করণীয় পরিষ্কার না থাকে। আমরা আগ্রহ দেখানোর পরের পথটিও গুছিয়ে দিই।"
          title="সম্ভাব্য ক্রেতা কোথায় হারিয়ে যায়?"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((problem, index) => {
            const ProblemIcon = problem.icon;
            return (
              <motion.article
                className="group rounded-sm border border-[#dceafb] bg-white p-5 shadow-[0_10px_28px_rgba(20,89,170,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_18px_38px_rgba(20,89,170,0.12)]"
                initial={{ opacity: 0, y: 24 }}
                key={problem.title}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="flex size-10 items-center justify-center rounded-sm bg-[#eaf4ff] text-[#087af5]">
                  <ProblemIcon className="size-5" />
                </span>
                <h3 className="mt-5 font-bold text-[#0b1736]">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{problem.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
