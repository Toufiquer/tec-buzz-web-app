/*
|-----------------------------------------
| setting up ProofSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { BarChart3, FileCheck2, LockKeyhole, type LucideIcon } from "lucide-react";

import { SectionIntro } from "./shared";

const proofCards: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "পরিষ্কার পরিসর",
    description: "কোন কাজ অন্তর্ভুক্ত এবং কোনটি আলাদা, তা আগে থেকেই লিখিত থাকে।",
    icon: FileCheck2,
  },
  {
    title: "স্বচ্ছ মালিকানা",
    description: "ডোমেইন, হোস্টিং ও সহায়তার দায়িত্ব পরিষ্কারভাবে নির্ধারিত থাকে।",
    icon: LockKeyhole,
  },
  { title: "পরিমিত পরামর্শ", description: "অডিটের পরে অগ্রাধিকারভিত্তিক পরবর্তী করণীয় দেওয়া হয়।", icon: BarChart3 },
];

export function ProofSection() {
  return (
    <section className="bg-[#eff7ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <SectionIntro
          description="যাচাই করা কাজের নমুনা, গ্রাহকের অনুমতি ও সঠিক কাজের পরিসর ছাড়া কোনো দাবি করা হয় না।"
          title="আস্থা তৈরি হয় ছোট ছোট বিষয় থেকে"
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {proofCards.map((proof) => {
            const ProofIcon = proof.icon;
            return (
              <motion.div
                className="rounded-2xl border border-white bg-white p-5 shadow-[0_12px_28px_rgba(20,89,170,0.06)]"
                initial={{ opacity: 0, y: 18 }}
                key={proof.title}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <ProofIcon className="size-5 text-[#087af5]" />
                <h3 className="mt-7 font-bold text-[#0b1736]">{proof.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{proof.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
