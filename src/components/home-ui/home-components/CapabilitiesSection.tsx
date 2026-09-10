/*
|-----------------------------------------
| setting up CapabilitiesSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  CirclePlay,
  Globe2,
  MessageCircle,
  ShieldCheck,
  TabletSmartphone,
  UsersRound,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import { SectionIntro } from "./shared";

const capabilities: { icon: LucideIcon; title: string; description: string; accent: string }[] = [
  {
    icon: Globe2,
    title: "Conversion Website",
    description: "দ্রুত ও মুঠোফোনে স্বাচ্ছন্দ্যের জন্য তৈরি পেজ, যেখানে পরের ধাপ একদম পরিষ্কার।",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: UsersRound,
    title: "Lead CRM",
    description: "প্রতিটি সম্ভাব্য ক্রেতার তথ্য এক জায়গায়, দায়িত্ব ও পরবর্তী করণীয়সহ।",
    accent: "from-violet-500 to-indigo-600",
  },
  {
    icon: Waypoints,
    title: "Team Workflow",
    description: "দলের সঠিক সদস্যকে দায়িত্ব দিন এবং পরবর্তী যোগাযোগের অবস্থা দেখুন।",
    accent: "from-cyan-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Clear Analytics",
    description: "কোন প্রচারণা বা পেজ থেকে সম্ভাব্য ক্রেতা আসছে তা বুঝুন।",
    accent: "from-blue-600 to-indigo-700",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Ready",
    description: "হোয়াটসঅ্যাপে কথা শুরু করা সহজ করুন, তথ্য হারানো ছাড়াই।",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: TabletSmartphone,
    title: "PWA Experience",
    description: "প্রয়োজন ও কাজের পরিসর অনুযায়ী অ্যাপের মতো ব্যবহারযোগ্য অভিজ্ঞতা।",
    accent: "from-fuchsia-500 to-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description: "যেখানে প্রয়োজন, সেখানে দায়িত্বভিত্তিক ও নিরাপদ প্রবেশাধিকার।",
    accent: "from-slate-600 to-slate-900",
  },
  {
    icon: CirclePlay,
    title: "Media That Sells",
    description: "কাজের নমুনা, আস্থার প্রমাণ ও প্রচারণার উপকরণের জন্য সুন্দর জায়গা।",
    accent: "from-orange-400 to-rose-500",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          centered
          description="প্রয়োজন ও কাজের পরিসর অনুযায়ী সুবিধা যোগ করা হয়, কারণ ব্যবহারযোগ্য ব্যবস্থাই সবচেয়ে কার্যকর।"
          title="ব্যবসার কাজে লাগবে এমন সুবিধা"
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => {
            const CapabilityIcon = capability.icon;
            return (
              <motion.article
                className="group relative overflow-hidden rounded-2xl border border-[#e2edfa] bg-[#fcfeff] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(17,94,178,0.12)]"
                initial={{ opacity: 0, y: 20 }}
                key={capability.title}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${capability.accent}`} />
                <span
                  className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${capability.accent} text-white shadow-lg`}
                >
                  <CapabilityIcon className="size-5" />
                </span>
                <h3 className="mt-5 font-bold text-[#0b1736]">{capability.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{capability.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
