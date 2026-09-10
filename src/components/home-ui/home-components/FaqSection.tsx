/*
|-----------------------------------------
| setting up FaqSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { ArrowLink, SectionIntro } from "./shared";

const faqs = [
  {
    question: "২৪–৪৮ ঘণ্টার কাজ কীভাবে হয়?",
    answer:
      "নির্ধারিত মানের ওয়েবসাইটের কাজ অগ্রিম অর্থ, প্রয়োজনীয় উপকরণ ও অনুমোদিত কাজের তালিকা পাওয়ার পর শুরু হয়। বিশেষ সুবিধার জন্য সময় আলাদা করে নির্ধারণ করা হয়।",
  },
  {
    question: "সার্চ ইঞ্জিনে প্রথম স্থানের নিশ্চয়তা আছে কি?",
    answer:
      "না। প্রয়োজনীয় প্রযুক্তিগত ও পেজভিত্তিক প্রস্তুতি দেওয়া হয়; ফলাফল প্রতিযোগিতা, তথ্যের মান এবং সার্চ ইঞ্জিনের অন্যান্য বিষয়ের ওপর নির্ভর করে।",
  },
  {
    question: "ডোমেইন ও হোস্টিংয়ের মালিকানা কার থাকবে?",
    answer: "মালিকানা, নবায়ন এবং ব্যবস্থাপনার দায়িত্ব প্রস্তাবনা ও শর্তে স্পষ্ট করে দেওয়া হবে।",
  },
  {
    question: "বিনামূল্যের অডিটে কী দেখা হবে?",
    answer:
      "গতি, মুঠোফোনে ব্যবহারযোগ্যতা, যোগাযোগের পথ, ফর্ম, ট্র্যাকিং, সার্চ ইঞ্জিনের প্রাথমিক প্রস্তুতি ও পরবর্তী যোগাযোগের ধাপ দেখা হবে।",
  },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr]">
        <SectionIntro
          description="সোজা উত্তর পেলে ভালো কাজ শুরু করা সহজ হয়। আরও প্রশ্ন থাকলে অডিটে আলোচনা করা যাবে।"
          title="সিদ্ধান্তের আগে জরুরি প্রশ্ন"
        />
        <div className="divide-y divide-[#e2edfa] rounded-sm border border-[#dceafb] bg-[#fcfeff] px-5 shadow-[0_12px_28px_rgba(20,89,170,0.05)] sm:px-6">
          {faqs.map((faq, index) => {
            const isOpen = index === openFaq;
            return (
              <div key={faq.question}>
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  type="button"
                >
                  <span className="font-bold text-[#0b1736]">{faq.question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[#087af5] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="max-w-2xl pb-5 text-sm leading-6 text-slate-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className="py-5">
            <ArrowLink>সব প্রশ্ন দেখুন</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
