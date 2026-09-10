/*
|-----------------------------------------
| setting up FlowSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { ArrowRight, BellRing, MessageCircle, MousePointer2, Rocket, UsersRound, type LucideIcon } from "lucide-react";

import { ArrowLink, SectionIntro } from "./shared";

const flowSteps: { label: string; description: string; icon: LucideIcon }[] = [
  { label: "Visitor", description: "প্রচার, সার্চ বা পরিচিতির মাধ্যমে আসে", icon: MousePointer2 },
  { label: "Lead", description: "ফর্ম, কল বা বার্তার আগ্রহ ধরা হয়", icon: BellRing },
  { label: "Assigned", description: "সঠিক সদস্যের কাছে দায়িত্ব যায়", icon: UsersRound },
  { label: "Follow-up", description: "পরবর্তী করণীয় ও নোট দেখা যায়", icon: MessageCircle },
  { label: "Won", description: "প্রস্তাবনা থেকে গ্রাহক হওয়ার পথ", icon: Rocket },
];

export function FlowSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1736] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 18%, rgba(0,183,215,.38), transparent 28%), radial-gradient(circle at 82% 76%, rgba(8,122,245,.38), transparent 28%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          description="প্রতিটি ধাপে কাজটি কে করবেন, কী করবেন এবং কোথায় থেমে আছে তা জানা থাকলে ব্যবসার পরিকল্পনা বাস্তবসম্মত হয়।"
          light
          title="ক্লিক থেকে গ্রাহক পর্যন্ত একটিই সংযুক্ত পথ"
        />
        <div className="relative mt-14 grid gap-3 sm:grid-cols-5 sm:gap-2">
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-cyan-400/20 via-cyan-300 to-cyan-400/20 sm:block"
          />
          {flowSteps.map((step, index) => {
            const FlowIcon = step.icon;
            return (
              <motion.div
                className="relative rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm sm:border-0 sm:bg-transparent sm:p-3"
                initial={{ opacity: 0, y: 22 }}
                key={step.label}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-[#123464] text-cyan-200 shadow-[0_0_0_7px_rgba(11,23,54,0.92)]">
                  <FlowIcon className="size-5" />
                </div>
                <p className="mt-5 font-bold">{step.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{step.description}</p>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="absolute right-2 top-[3.35rem] hidden size-4 text-cyan-300 sm:block" />
                )}
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:flex-row sm:items-center sm:px-6"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <p className="max-w-2xl text-sm leading-6 text-slate-200">
            <strong className="text-white">লক্ষ্য:</strong> প্রতিটি সম্ভাব্য ক্রেতার দায়িত্ব, প্রেক্ষাপট ও পরবর্তী করণীয়
            যেন দেখা যায়।
          </p>
          <ArrowLink light>কাজের ধাপ দেখুন</ArrowLink>
        </motion.div>
      </div>
    </section>
  );
}
