/*
|-----------------------------------------
| setting up ClaritySection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SectionIntro } from "./shared";

const clarityPoints = [
  ["কাজের আগে পরিষ্কারতা", "কাজের পরিসর, মালিকানা ও সময়ের শর্ত আগে থেকেই পরিষ্কার করি।"],
  ["প্রয়োজন আগে", "দেখতে সুন্দর হলেও মূল লক্ষ্য আগ্রহী মানুষকে সহজে যোগাযোগের পথ দেখানো।"],
  ["বাস্তব তথ্য", "যাচাই ছাড়া আয় বা লিডের কোনো ফল প্রকাশ করা হয় না।"],
];

export function ClaritySection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <div>
          <SectionIntro
            description="দীর্ঘ সুবিধার তালিকা নয়, আপনার দল ও গ্রাহকের জন্য কী ফল দরকার, আলোচনার শুরু সেখান থেকেই।"
            title="পরিষ্কার পরিকল্পনায় সিদ্ধান্ত সহজ হয়"
          />
          <div className="mt-8 space-y-4">
            {clarityPoints.map(([title, text], index) => (
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0, x: -18 }}
                key={title}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e7f5ff] text-[#087af5]">
                  <Check className="size-3.5" />
                </span>
                <div>
                  <h3 className="font-bold text-[#0b1736]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#0b1736] p-6 shadow-[0_25px_60px_rgba(11,23,54,0.2)] sm:p-8"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div aria-hidden className="absolute -right-16 -top-20 size-72 rounded-full bg-[#087af5]/35 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -left-16 size-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="max-w-md text-2xl font-bold tracking-tight text-white sm:text-3xl">
              A growth website should make the next customer action obvious.
            </h3>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Clear offer"],
                ["02", "Easy action"],
                ["03", "Visible follow-up"],
              ].map(([number, label]) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4" key={number}>
                  <span className="text-xs font-bold text-cyan-300">{number}</span>
                  <p className="mt-6 text-sm font-bold text-white">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-300">
              অডিট থেকে চালু হওয়া পর্যন্ত এই তিনটি বিষয় একসাথে রাখা হয়।
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
