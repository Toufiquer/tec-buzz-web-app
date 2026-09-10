/*
|-----------------------------------------
| setting up AdCreativeSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 11 September, 2026
|-----------------------------------------
*/

/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  Loader2,
  MessageCircle,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  ZoomIn,
  type LucideIcon,
} from "lucide-react";
import { Noto_Sans_Bengali } from "next/font/google";
import { useEffect, useRef, useState } from "react";

import {
  AD_CREATIVE_CONCEPTS,
  AD_CREATIVE_FAQS,
  AD_CREATIVE_WHATSAPP_URL,
  AD_FORMATS,
  CREATIVE_STEPS,
  DEFAULT_WHATSAPP_MESSAGE,
  MONTHLY_CONTENT_PLANS,
  RESEARCH_CARDS,
  TESTING_ITEMS,
  type AdCreativeConcept,
  type AdCreativeFormat,
} from "./ad-creative-data";

const researchIcons: Record<(typeof RESEARCH_CARDS)[number]["icon"], LucideIcon> = {
  message: MessageCircle,
  search: Search,
  shield: ShieldCheck,
  route: Route,
};

const bengaliFont = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "500", "600", "700", "800"] });

function whatsappLink(service?: string) {
  const message = service
    ? `আসসালামু আলাইকুম, আমার ব্যবসার জন্য TecBuzz ${service} সম্পর্কে জানতে চাই।`
    : DEFAULT_WHATSAPP_MESSAGE;
  return `${AD_CREATIVE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function FormatControls({
  format,
  onFormatChange,
  label = "অ্যাডের format বাছাই করুন",
}: {
  format: AdCreativeFormat;
  label?: string;
  onFormatChange: (format: AdCreativeFormat) => void;
}) {
  return (
    <div
      aria-label={label}
      className="inline-flex max-w-full flex-wrap gap-1 rounded-sm border border-[#cfe2fb] bg-white p-1 shadow-sm"
      role="group"
    >
      {AD_FORMATS.map((item) => {
        const selected = item.key === format;
        return (
          <button
            aria-pressed={selected}
            className={`min-h-9 rounded-sm px-3 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087af5] sm:px-4 sm:text-sm ${
              selected ? "bg-[#087af5] text-white shadow-sm" : "text-[#155caf] hover:bg-[#edf7ff] hover:text-[#086fe5]"
            }`}
            key={item.key}
            onClick={() => onFormatChange(item.key)}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function CreativeImage({
  concept,
  format,
  onError,
  failed,
}: {
  concept: AdCreativeConcept;
  failed: boolean;
  format: AdCreativeFormat;
  onError: () => void;
}) {
  const formatLabel = AD_FORMATS.find((item) => item.key === format)?.label;
  const source = concept.images[format];
  const [loadedSource, setLoadedSource] = useState<string | null>(null);
  const isLoading = loadedSource !== source;

  if (failed) {
    return (
      <div className="grid min-h-52 w-full place-items-center px-5 text-center text-sm font-semibold text-slate-500">
        ছবিটি এখন দেখা যাচ্ছে না
      </div>
    );
  }

  return (
    <div className="relative grid w-full place-items-center">
      {isLoading && (
        <div
          aria-live="polite"
          className="absolute inset-0 z-10 grid min-h-52 place-items-center bg-[#f8fbff] p-5 text-center"
          role="status"
        >
          <span className="inline-flex items-center gap-2 rounded-sm border border-[#cfe2fb] bg-white px-3 py-2 text-xs font-bold text-[#155caf] shadow-sm">
            <Loader2 aria-hidden className="size-4 animate-spin motion-reduce:animate-none" />
            অ্যাডের layout লোড হচ্ছে…
          </span>
        </div>
      )}
      <img
        alt={`${concept.audience} — ${concept.title}; ${formatLabel} layout-এর TecBuzz অ্যাডের উদাহরণ`}
        className={`block h-auto max-h-[31rem] w-auto max-w-full object-contain transition-opacity duration-200 motion-reduce:transition-none ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        decoding="async"
        loading="lazy"
        onError={onError}
        onLoad={() => setLoadedSource(source)}
        src={source}
      />
    </div>
  );
}

function GalleryCard({
  concept,
  format,
  imageFailed,
  onImageError,
  onOpen,
}: {
  concept: AdCreativeConcept;
  format: AdCreativeFormat;
  imageFailed: boolean;
  onImageError: () => void;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="group flex min-w-0 flex-col overflow-hidden rounded-sm border border-[#cfe2fb] bg-white p-3 shadow-[0_12px_30px_rgba(20,89,170,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#8bc8fa] hover:shadow-[0_20px_44px_rgba(20,89,170,0.14)]"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.12 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="grid min-h-56 place-items-center overflow-hidden rounded-sm border border-[#e1edf9] bg-[#f8fbff]">
        <CreativeImage concept={concept} failed={imageFailed} format={format} onError={onImageError} />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold tracking-[0.12em] text-[#087af5] uppercase">{concept.audience}</p>
          <span className="rounded-sm bg-[#e8f6ff] px-2 py-1 text-[11px] font-bold text-[#1764be]">
            {concept.depictedOffer}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-extrabold tracking-[-0.025em] text-[#0b1736]">{concept.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{concept.problem}</p>
        <button
          aria-label={`${concept.audience} অ্যাডটি বড় করে দেখুন`}
          className="mt-5 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-bold text-[#086fe5] transition hover:text-[#0b1736] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087af5]"
          onClick={onOpen}
          type="button"
        >
          বড় করে দেখুন <ZoomIn className="size-4" />
        </button>
      </div>
    </motion.article>
  );
}

export function AdCreativeSection() {
  const [format, setFormat] = useState<AdCreativeFormat>("all");
  const [openTestingItem, setOpenTestingItem] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedConceptIndex, setSelectedConceptIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const selectedConcept = selectedConceptIndex === null ? null : AD_CREATIVE_CONCEPTS[selectedConceptIndex];
  const imageKey = (conceptId: number, selectedFormat: AdCreativeFormat) => `${conceptId}-${selectedFormat}`;

  const markImageFailed = (conceptId: number, selectedFormat: AdCreativeFormat) => {
    setFailedImages((current) => ({ ...current, [imageKey(conceptId, selectedFormat)]: true }));
  };

  const openDialog = (index: number) => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedConceptIndex(index);
  };

  const closeDialog = () => {
    setSelectedConceptIndex(null);
    window.setTimeout(() => returnFocusRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (selectedConceptIndex === null) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusFirstElement = () => {
      const focusableElements = dialog?.querySelectorAll<HTMLElement>(focusableSelector);
      (focusableElements?.[0] ?? dialog)?.focus();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;

      const focusableElements = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusableElements.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    window.setTimeout(focusFirstElement, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedConceptIndex]);

  return (
    <section className={`${bengaliFont.className} overflow-hidden bg-[#f8fbff] text-[#0b1736]`} id="ad-creative">
      <div className="relative border-y border-[#dceafb] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_10%_0%,rgba(14,184,203,.18),transparent_40%),radial-gradient(circle_at_90%_25%,rgba(8,122,245,.13),transparent_35%)]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 22 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.055em] text-[#0b1736] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]">
              রিসার্চ থেকে ক্রিয়েটিভ—টেস্ট করে খুঁজুন কার্যকর অ্যাড
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              কাস্টমারের সমস্যা, আপনার অফার আর কেনার সিদ্ধান্ত বুঝে তৈরি করি অ্যাডের বার্তা ও ডিজাইন। এরপর টেস্টের ফল
              থেকে ঠিক করি পরের ক্রিয়েটিভে কী বদলানো দরকার।
            </p>
            <p className="mt-6 border-l-2 border-[#11a7cc] pl-4 text-sm font-bold leading-6 text-[#16477f] sm:text-base">
              Customer Research <span aria-hidden>→</span> Clear Offer <span aria-hidden>→</span> Creative{" "}
              <span aria-hidden>→</span> Test & Learn
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#087af5] px-5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(8,122,245,0.27)] transition hover:-translate-y-1 hover:bg-[#0065d7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087af5]"
                href={whatsappLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                আমার ব্যবসার অ্যাড নিয়ে কথা বলি <ArrowRight className="size-4" />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-[#cfe2fb] bg-white px-5 text-sm font-bold text-[#155caf] shadow-sm transition hover:-translate-y-1 hover:border-[#087af5] hover:text-[#086fe5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087af5]"
                href="#ad-creative-examples"
              >
                অ্যাডের উদাহরণ দেখুন <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
          >
            <div aria-hidden className="absolute -inset-5 rounded-sm bg-cyan-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-sm border border-[#b9dcfb] bg-white p-3 shadow-[0_24px_60px_rgba(20,89,170,0.16)] sm:p-4">
              <div className="grid min-h-64 place-items-center rounded-sm bg-[#f8fbff]">
                <CreativeImage
                  concept={AD_CREATIVE_CONCEPTS[0]}
                  failed={Boolean(failedImages[imageKey(1, "all")])}
                  format="all"
                  onError={() => markImageFailed(1, "all")}
                />
              </div>
              <p className="mt-4 rounded-sm bg-[#eef8ff] px-3 py-3 text-xs leading-5 text-[#16477f] sm:text-sm">
                Winning ad আগে থেকে নিশ্চিত করা যায় না। কোন creative ব্যবসার লক্ষ্য পূরণ করছে, তা বাস্তব campaign test-এ
                বোঝা যায়।
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.18em] text-[#087af5] uppercase">01 / Research</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              ডিজাইনের আগে, কাস্টমারকে বুঝি
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              কাস্টমার কী বলছেন, কোথায় আটকে যাচ্ছেন আর কেন সিদ্ধান্ত নিচ্ছেন না—এসব থেকেই শুরু হয় অ্যাডের রিসার্চ।
            </p>
          </div>
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESEARCH_CARDS.map((card) => {
              const Icon = researchIcons[card.icon];
              return (
                <article
                  className="rounded-sm border border-[#dceafb] bg-[#fcfeff] p-5 shadow-[0_10px_25px_rgba(20,89,170,0.05)]"
                  key={card.title}
                >
                  <span className="grid size-10 place-items-center rounded-sm bg-[#e8f6ff] text-[#087af5]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-extrabold text-[#0b1736]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>
          <aside className="mt-6 rounded-sm border border-[#a8dcec] bg-[#eefbff] p-5 text-sm leading-7 text-[#16477f] sm:p-6">
            <p className="font-extrabold text-[#0b5279]">Illustrative research brief</p>
            <p className="mt-2">
              উদাহরণ: Online fashion seller-এর buyer বারবার inbox-এ product details জানতে চান। সম্ভাব্য angle—পণ্য, অফার
              ও যোগাযোগের তথ্য এক জায়গায় দেখানো। এটি একটি research hypothesis; বাস্তব customer quote বা proven result
              নয়।
            </p>
          </aside>
        </div>
      </div>

      <div className="border-y border-[#dceafb] bg-[#edf7ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.18em] text-[#087af5] uppercase">02 / Creative process</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              কার্যকর অ্যাড খোঁজার ৬টি ধাপ
            </h2>
          </div>
          <ol className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CREATIVE_STEPS.map((step, index) => (
              <li
                className="rounded-sm border border-[#cfe2fb] bg-white p-5 shadow-[0_10px_24px_rgba(20,89,170,0.06)]"
                key={step.title}
              >
                <span className="text-sm font-extrabold text-[#08a6c2]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 grid overflow-hidden rounded-sm border border-[#b9dcfb] bg-white md:grid-cols-2">
            <div className="border-b border-[#dceafb] p-5 md:border-r md:border-b-0 sm:p-6">
              <p className="text-xs font-bold tracking-[0.14em] text-slate-500 uppercase">Generic</p>
              <p className="mt-3 text-lg font-bold text-slate-700">“আপনার ব্যবসার জন্য সেরা ওয়েবসাইট।”</p>
            </div>
            <div className="bg-[#f2fbff] p-5 sm:p-6">
              <p className="text-xs font-bold tracking-[0.14em] text-[#087af5] uppercase">Specific direction</p>
              <p className="mt-3 text-lg font-extrabold text-[#0b1736]">
                “ইনবক্সে একই তথ্য বারবার পাঠাতে হচ্ছে? পণ্য, অফার ও যোগাযোগ এক জায়গায় দেখান।”
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            কোন বার্তাটি ভালো কাজ করবে, তা test-এ যাচাই করতে হবে।
          </p>
        </div>
      </div>

      <div className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0" id="ad-creative-examples">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
                ৭ ধরনের ব্যবসার জন্য অ্যাডের উদাহরণ
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                একই বার্তা, placement অনুযায়ী আলাদা layout। Format বদলে দেখুন, তারপর ছবিটি বড় করে পড়ুন।
              </p>
            </div>
            <FormatControls format={format} onFormatChange={setFormat} />
          </div>
          <p className="mt-5 rounded-sm border border-[#d6e8fb] bg-[#f8fbff] px-4 py-3 text-sm leading-6 text-slate-600">
            এগুলো TecBuzz-এর নিজস্ব service promotion-এর creative example। এখানে campaign performance result দেখানো
            হয়নি।
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AD_CREATIVE_CONCEPTS.map((concept, index) => (
              <GalleryCard
                concept={concept}
                format={format}
                imageFailed={Boolean(failedImages[imageKey(concept.id, format)])}
                key={concept.id}
                onImageError={() => markImageFailed(concept.id, format)}
                onOpen={() => openDialog(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-y border-[#dceafb] bg-[#edf7ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-[#087af5] uppercase">04 / Test & learn</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              শুধু ক্লিক নয়, পরের ধাপও দেখি
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              কোন জায়গায় মানুষ থামছেন, আগ্রহী হচ্ছেন বা আটকে যাচ্ছেন—সেটা দেখে পরের প্রশ্ন ঠিক করি।
            </p>
          </div>
          <div className="overflow-hidden rounded-sm border border-[#cfe2fb] bg-white shadow-[0_12px_28px_rgba(20,89,170,0.06)]">
            {TESTING_ITEMS.map((item, index) => {
              const isOpen = openTestingItem === index;
              const panelId = `ad-creative-testing-${index}`;
              return (
                <div className="border-b border-[#e1edf9] last:border-b-0" key={item.title}>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex min-h-15 w-full items-center justify-between gap-5 px-5 py-4 text-left font-extrabold text-[#0b1736] transition hover:bg-[#f8fbff] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#087af5] sm:px-6"
                    onClick={() => setOpenTestingItem(isOpen ? -1 : index)}
                    type="button"
                  >
                    {item.title}
                    <ChevronDown
                      className={`size-5 shrink-0 text-[#087af5] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                        exit={{ height: 0, opacity: 0 }}
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-6">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <p className="border-t border-[#e1edf9] bg-[#f8fbff] px-5 py-4 text-xs leading-5 text-slate-500 sm:px-6">
              এগুলো investigation শুরু করার জায়গা, স্বয়ংক্রিয় diagnosis নয়।
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold tracking-[0.18em] text-[#087af5] uppercase">05 / Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              আপনার প্রয়োজন অনুযায়ী শুরু করুন
            </h2>
          </div>
          <div className="mt-11 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <article className="rounded-sm bg-[#0b1736] p-6 text-white shadow-[0_22px_50px_rgba(11,23,54,0.22)] sm:p-7">
              <p className="text-xs font-extrabold tracking-[0.16em] text-cyan-200 uppercase">Primary offer</p>
              <h3 className="mt-5 text-3xl font-extrabold tracking-[-0.04em]">Ad Creative — ৳150 /টি</h3>
              <p className="mt-5 text-sm leading-6 text-slate-300">
                ফরম্যাট, কাজের পরিধি ও ডেলিভারি WhatsApp-এ আলোচনা করে ঠিক করুন।
              </p>
              <a
                className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-white px-4 text-sm font-bold text-[#086fe5] transition hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                href={whatsappLink()}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ad Creative নিয়ে কথা বলি <ArrowRight className="size-4" />
              </a>
            </article>
            <div className="grid gap-4 sm:grid-cols-3">
              {MONTHLY_CONTENT_PLANS.map((plan) => (
                <article
                  className="flex flex-col rounded-sm border border-[#dceafb] bg-[#fcfeff] p-5 shadow-[0_10px_24px_rgba(20,89,170,0.05)]"
                  key={plan.name}
                >
                  <h3 className="font-extrabold text-[#0b1736]">{plan.name}</h3>
                  <p className="mt-4 text-sm text-slate-500 line-through">{plan.regularPrice}</p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#087af5]">{plan.offerPrice}</p>
                  <p className="mt-5 text-sm leading-6 text-slate-600">{plan.scope}</p>
                  <a
                    className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-[#086fe5] transition hover:text-[#0b1736] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087af5]"
                    href={whatsappLink(`${plan.name} প্যাকেজ`)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    প্যাকেজ নিয়ে কথা বলুন <ArrowRight className="size-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-4 rounded-sm border border-[#dceafb] bg-[#f8fbff] p-5 text-sm leading-6 text-slate-600 lg:grid-cols-[0.9fr_1.1fr] sm:p-6">
            <p>
              <span className="font-extrabold text-[#0b1736]">Single items:</span> Reel ৳250 <span aria-hidden>│</span>{" "}
              Static Post ৳50 <span aria-hidden>│</span> Ad Creative ৳150.
            </p>
            <p>Campaign setup, media budget, tracking ও optimization scope আলাদা করে আলোচনা করতে হবে।</p>
          </div>
          <div className="mt-8 rounded-sm border border-[#a8dcec] bg-[#eefbff] p-5 sm:p-6">
            <h3 className="flex items-center gap-2 font-extrabold text-[#0b5279]">
              <CircleHelp className="size-5" /> আলোচনা শুরু করতে যা জানাবেন
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#16477f]">
              Business/product, target customer, offer, main customer question, available brand/product photos এবং
              desired format/action।
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#dceafb] bg-[#edf7ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-[#087af5] uppercase">06 / FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              প্রশ্ন থাকলে, আগে পরিষ্কার করি
            </h2>
          </div>
          <div className="overflow-hidden rounded-sm border border-[#cfe2fb] bg-white shadow-[0_12px_28px_rgba(20,89,170,0.06)]">
            {AD_CREATIVE_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const panelId = `ad-creative-faq-${index}`;
              return (
                <div className="border-b border-[#e1edf9] last:border-b-0" key={faq.question}>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex min-h-15 w-full items-center justify-between gap-5 px-5 py-4 text-left font-extrabold text-[#0b1736] transition hover:bg-[#f8fbff] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#087af5] sm:px-6"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    type="button"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`size-5 shrink-0 text-[#087af5] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden"
                        exit={{ height: 0, opacity: 0 }}
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-6">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#0b1736] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28 xl:px-0">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(8,122,245,.54),transparent_34%),radial-gradient(circle_at_88%_85%,rgba(0,201,211,.28),transparent_28%)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Sparkles aria-hidden className="mx-auto size-7 text-cyan-200" />
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
            আপনার ব্যবসার জন্য কোন বার্তা দিয়ে শুরু করব?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            আপনার অফার আর কাস্টমারের প্রশ্নগুলো জানান। সেখান থেকে অ্যাডের পরের ধাপ নিয়ে কথা বলি।
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-bold text-[#086fe5] shadow-[0_15px_34px_rgba(0,0,0,.16)] transition hover:-translate-y-1 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={whatsappLink()}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4" /> WhatsApp-এ কথা বলুন
            </a>
            <p className="inline-flex min-h-12 select-text items-center rounded-sm border border-white/20 bg-white/5 px-5 font-mono text-sm font-bold text-white">
              01607333369
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedConcept && selectedConceptIndex !== null && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-[#06112ad9] p-4 backdrop-blur-sm"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.currentTarget === event.target) closeDialog();
            }}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              aria-describedby="ad-creative-dialog-description"
              aria-labelledby="ad-creative-dialog-title"
              aria-modal="true"
              className="max-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-y-auto rounded-sm border border-[#cfe2fb] bg-white shadow-2xl"
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              ref={dialogRef}
              role="dialog"
              tabIndex={-1}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e1edf9] bg-[#f8fbff] px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-[#087af5] uppercase">
                    {selectedConcept.audience}
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-[#0b1736]" id="ad-creative-dialog-title">
                    {selectedConcept.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600" id="ad-creative-dialog-description">
                    একই concept-এর {AD_FORMATS.find((item) => item.key === format)?.label} layout
                  </p>
                </div>
                <button
                  aria-label="ছবির dialog বন্ধ করুন"
                  className="grid size-10 place-items-center rounded-sm border border-[#cfe2fb] bg-white text-[#155caf] transition hover:border-[#087af5] hover:text-[#086fe5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087af5]"
                  onClick={closeDialog}
                  type="button"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="p-5 sm:p-6">
                <FormatControls format={format} label="বড় ছবির format বাছাই করুন" onFormatChange={setFormat} />
                <div className="mt-5 grid min-h-72 place-items-center rounded-sm border border-[#e1edf9] bg-[#f8fbff] p-2 sm:min-h-96 sm:p-4">
                  <CreativeImage
                    concept={selectedConcept}
                    failed={Boolean(failedImages[imageKey(selectedConcept.id, format)])}
                    format={format}
                    onError={() => markImageFailed(selectedConcept.id, format)}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
