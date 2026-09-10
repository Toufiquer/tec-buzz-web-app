/*
|-----------------------------------------
| setting up HeroSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CheckCircle2,
  CirclePlay,
  LayoutDashboard,
  UsersRound,
  Zap,
} from "lucide-react";

import { WHATSAPP_AUDIT_URL } from "./shared";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#dceafb] bg-[#f8fbff]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14, 104, 220, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 104, 220, 0.045) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div aria-hidden className="absolute -left-44 top-8 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
      <motion.div
        animate={{ x: [0, 34, 0], y: [0, -24, 0], scale: [1, 1.1, 1] }}
        aria-hidden
        className="absolute -right-28 top-[-5rem] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-20 xl:px-0">
        <div className="relative z-10 max-w-2xl">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.06em] text-[#0b1736] sm:text-6xl lg:text-[4.25rem]"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            ২৪–৪৮ ঘণ্টায়{" "}
            <span className="bg-gradient-to-r from-[#086fe5] via-[#0289f6] to-[#08b7d7] bg-clip-text text-transparent">
              ওয়েবসাইট চালু করুন
            </span>
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            ওয়েবসাইট, লিড ব্যবস্থাপনা ও ট্র্যাকিং—সবকিছু এক জায়গায়।
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            <a
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#087af5] px-5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(8,122,245,0.27)] transition duration-300 hover:-translate-y-1 hover:bg-[#0065d7] hover:shadow-[0_20px_40px_rgba(8,122,245,0.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087af5]"
              href={WHATSAPP_AUDIT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              বিনামূল্যে অডিট নিন{" "}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#cfe2fb] bg-white/80 px-5 text-sm font-bold text-[#155caf] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#087af5] hover:bg-white hover:text-[#086fe5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087af5]"
              href={WHATSAPP_AUDIT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CirclePlay className="size-4" /> ডেমো দেখুন
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#11a7cc]" /> শুরু ৳14,900 থেকে
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#11a7cc]" /> কাজের পরিসর আগে থেকেই স্পষ্ট
            </span>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative mx-auto w-full max-w-[35rem] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden
            className="absolute -inset-5 rounded-[2.3rem] bg-gradient-to-br from-blue-400/30 via-cyan-300/10 to-violet-400/25 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(16,78,158,0.2)] sm:p-4">
            <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-3 sm:px-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-rose-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-[4.3rem_1fr] gap-3 sm:grid-cols-[5.6rem_1fr] sm:gap-4">
              <aside className="rounded-xl bg-[#0b1736] p-2.5 text-white sm:p-3">
                <div className="mb-6 flex size-7 items-center justify-center rounded-lg bg-white/10">
                  <LayoutDashboard className="size-3.5" />
                </div>
                <div className="space-y-3">
                  {[LayoutDashboard, UsersRound, BarChart3, Bot].map((DashboardIcon, index) => (
                    <div
                      className={`flex h-7 items-center gap-2 rounded-md px-1.5 ${index === 0 ? "bg-white/12" : "text-slate-400"}`}
                      key={index}
                    >
                      <DashboardIcon className="size-3.5" />
                      <span className="hidden text-[0.58rem] font-semibold sm:inline">
                        {["Overview", "Leads", "Reports", "Flows"][index]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 hidden rounded-lg border border-white/10 bg-white/5 p-2 text-[0.55rem] leading-3 text-slate-400 sm:block">
                  Your team knows
                  <br />
                  what comes next.
                </div>
              </aside>
              <div className="min-w-0 py-1 pr-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.65rem] font-semibold text-slate-400">Good morning, team</p>
                    <h2 className="mt-1 text-base font-extrabold tracking-tight text-[#0b1736] sm:text-lg">
                      Lead overview
                    </h2>
                  </div>
                  <span className="rounded-lg bg-[#e8f3ff] px-2 py-1 text-[0.58rem] font-bold text-[#087af5]">
                    September
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {[
                    ["New leads", "24", "text-[#087af5]"],
                    ["Follow-up", "08", "text-violet-600"],
                    ["Ready for demo", "05", "text-emerald-600"],
                  ].map(([label, value, color]) => (
                    <div className="rounded-xl border border-slate-100 bg-[#fbfdff] p-2.5 shadow-sm" key={label}>
                      <p className="text-[0.56rem] font-semibold text-slate-400">{label}</p>
                      <p className={`mt-1 text-lg font-extrabold ${color}`}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-xl border border-slate-100 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.62rem] font-bold text-slate-500">Lead source</p>
                      <BarChart3 className="size-3.5 text-[#087af5]" />
                    </div>
                    <div className="mt-4 flex h-16 items-end gap-1.5">
                      {[34, 58, 43, 78, 51, 88, 64, 94, 72].map((height, index) => (
                        <motion.span
                          animate={{ height: `${height}%` }}
                          className={`w-full rounded-t-sm ${index === 7 ? "bg-[#087af5]" : "bg-blue-100"}`}
                          initial={{ height: 0 }}
                          key={index}
                          transition={{ delay: 0.55 + index * 0.06, duration: 0.55 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#eff9ff] p-3">
                    <p className="text-[0.62rem] font-bold text-[#1764be]">Next action</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-white text-[0.58rem] font-extrabold text-[#087af5]">
                        SR
                      </div>
                      <div>
                        <p className="text-[0.6rem] font-bold text-[#0b1736]">Send demo link</p>
                        <p className="text-[0.52rem] text-slate-500">CarePoint enquiry · 2:30 PM</p>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-blue-100">
                      <motion.div
                        animate={{ width: ["24%", "72%", "52%"] }}
                        className="h-full rounded-full bg-[#08b7d7]"
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    <span className="text-[0.62rem] font-bold text-slate-600">WhatsApp lead connected</span>
                  </div>
                  <Check className="size-3.5 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -7, 0] }}
            className="absolute -bottom-5 -left-4 rounded-2xl border border-white bg-white px-3.5 py-3 shadow-[0_14px_35px_rgba(10,72,150,0.16)] sm:-left-9"
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#e8f8fb] text-[#08a6c2]">
                <Zap className="size-4" />
              </span>
              <span>
                <span className="block text-[0.6rem] font-semibold text-slate-400">One clear system</span>
                <span className="block text-xs font-extrabold text-[#0b1736]">from click to customer</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
