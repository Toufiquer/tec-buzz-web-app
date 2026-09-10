/*
|-----------------------------------------
| setting up DemosSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ArrowLink, SectionIntro, WHATSAPP_AUDIT_URL } from "./shared";

const demos = [
  {
    name: "EduFlow Academy",
    type: "Education / Coaching",
    accent: "from-[#5727d8] via-[#7c3aed] to-[#a78bfa]",
    icon: "E",
  },
  {
    name: "CarePoint Clinic",
    type: "Clinic / Healthcare",
    accent: "from-[#007f91] via-[#06a4b5] to-[#67d9da]",
    icon: "+",
  },
  { name: "Vertex Trading", type: "SME / Corporate", accent: "from-[#0f2c59] via-[#155eaa] to-[#32a5e7]", icon: "V" },
  { name: "NoboMart", type: "E-commerce / Retail", accent: "from-[#ef653c] via-[#ff8c49] to-[#ffc36b]", icon: "N" },
  { name: "CounselPro", type: "Professional Services", accent: "from-[#263c83] via-[#485ac2] to-[#8798ef]", icon: "C" },
  {
    name: "LeadBoard CRM",
    type: "Business Automation",
    accent: "from-[#0b496e] via-[#087da5] to-[#33c2d3]",
    icon: "L",
  },
];

export function DemosSection() {
  return (
    <section className="bg-[#eff7ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0" id="demos">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionIntro
            description="ভিন্ন ধরনের ব্যবসার জন্য পেজ, লিডের পথ এবং যোগাযোগের ধাপ কেমন হওয়া উচিত, তা এখানে দেখুন।"
            title="আপনার ব্যবসার উপযোগী নকশা"
          />
          <ArrowLink>সব নমুনা দেখুন</ArrowLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <motion.a
              className="group relative min-h-[18rem] overflow-hidden rounded-2xl bg-[#0b1736] p-5 shadow-[0_18px_35px_rgba(13,61,121,0.13)]"
              href={WHATSAPP_AUDIT_URL}
              initial={{ opacity: 0, y: 24 }}
              key={demo.name}
              rel="noopener noreferrer"
              target="_blank"
              transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${demo.accent} opacity-95 transition duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-lg font-extrabold text-white backdrop-blur">
                    {demo.icon}
                  </span>
                </div>
                <div className="relative mt-8 flex-1 overflow-hidden rounded-xl border border-white/20 bg-[#f7fbff] p-3 shadow-2xl transition duration-500 group-hover:-translate-y-2">
                  <div className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-rose-300" />
                    <span className="size-1.5 rounded-full bg-amber-300" />
                    <span className="size-1.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="mt-3 h-2 w-16 rounded bg-slate-200" />
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div className="col-span-2 h-16 rounded-lg bg-slate-100" />
                    <div className="rounded-lg bg-blue-100" />
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    {[1, 2, 3].map((dot) => (
                      <div className={`h-7 rounded-md ${dot === 2 ? "bg-blue-500" : "bg-slate-100"}`} key={dot} />
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-2/3 rounded-full bg-[#087af5]" />
                  </div>
                </div>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-white/70">{demo.type}</p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-white">{demo.name}</h3>
                  </div>
                  <ArrowRight className="mb-1 size-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
