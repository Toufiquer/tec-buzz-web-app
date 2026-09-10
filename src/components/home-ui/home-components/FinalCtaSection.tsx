/*
|-----------------------------------------
| setting up FinalCtaSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { WHATSAPP_AUDIT_URL } from "./shared";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1736] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 5%, rgba(8,122,245,.55), transparent 30%), radial-gradient(circle at 86% 95%, rgba(0,201,211,.35), transparent 28%)",
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        aria-hidden
        className="absolute -right-36 top-1/2 size-[34rem] -translate-y-1/2 rounded-full border border-cyan-300/15"
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 22 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            ১০ মিনিটে জানুন সম্ভাব্য ক্রেতা কোথায় হারাচ্ছেন।
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            আপনার ওয়েবসাইট, যোগাযোগের পথ, ট্র্যাকিং ও পরবর্তী যোগাযোগের ধাপ থেকে কোনটি আগে ঠিক করা দরকার, তা জেনে নিন।
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-[#086fe5] shadow-[0_15px_34px_rgba(0,0,0,.16)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
              href={WHATSAPP_AUDIT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              বিনামূল্যে অডিট নিন <ArrowRight className="size-4" />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              href={WHATSAPP_AUDIT_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4" /> হোয়াটসঅ্যাপে কথা বলুন
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
