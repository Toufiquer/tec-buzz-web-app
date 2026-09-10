/*
|-----------------------------------------
| setting up ad-creative-data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 11 September, 2026
|-----------------------------------------
*/

export const AD_CREATIVE_WHATSAPP_URL = "https://wa.me/8801607333369";

export const DEFAULT_WHATSAPP_MESSAGE =
  "আসসালামু আলাইকুম, আমার ব্যবসার জন্য TecBuzz Ad Creative সার্ভিস সম্পর্কে জানতে চাই।";

export const AD_FORMATS = [
  { key: "all", label: "All Device" },
  { key: "desktop", label: "Desktop" },
  { key: "mobile", label: "Mobile" },
] as const;

export type AdCreativeFormat = (typeof AD_FORMATS)[number]["key"];

type AdCreativeImages = Record<AdCreativeFormat, string>;

export type AdCreativeConcept = {
  audience: string;
  depictedOffer: string;
  id: number;
  images: AdCreativeImages;
  problem: string;
  title: string;
};

export const AD_CREATIVE_CONCEPTS: AdCreativeConcept[] = [
  {
    id: 1,
    audience: "ফ্যাশন ও অনলাইন শপ",
    title: "ইনবক্সের তথ্য এক জায়গায়",
    problem: "ছড়িয়ে থাকা product enquiry থেকে সাজানো online presence",
    depictedOffer: "Lead Express ৳24,900",
    images: {
      all: "https://i.ibb.co.com/zhwDv2np/1-All-Device.png",
      desktop: "https://i.ibb.co.com/y1Pw1G9/1-Desktop.png",
      mobile: "https://i.ibb.co.com/5hhjNNBs/1-Mobile.png",
    },
  },
  {
    id: 2,
    audience: "প্রফেশনাল কনসালট্যান্ট",
    title: "সেবার পরিচয় পরিষ্কারভাবে",
    problem: "services, identity ও contact এক জায়গায়",
    depictedOffer: "Starter ৳14,900",
    images: {
      all: "https://i.ibb.co.com/XZdzsBG8/2-All-Device.png",
      desktop: "https://i.ibb.co.com/XZppv3XW/2-Desktop.png",
      mobile: "https://i.ibb.co.com/tPhrmkTJ/2-Mobile.png",
    },
  },
  {
    id: 3,
    audience: "ক্লিনিক ও ডায়াগনস্টিক",
    title: "সেবা, লোকেশন ও যোগাযোগ",
    problem: "প্রয়োজনীয় তথ্য সহজে খুঁজে পাওয়ার দিকনির্দেশ",
    depictedOffer: "Starter ৳14,900",
    images: {
      all: "https://i.ibb.co.com/twFk21TJ/3-All-Device.png",
      desktop: "https://i.ibb.co.com/DPjkGrK7/3-Desktop.png",
      mobile: "https://i.ibb.co.com/XfNXhQfx/3-Mobile.png",
    },
  },
  {
    id: 4,
    audience: "কোচিং ও ট্রেনিং",
    title: "কোর্সের তথ্য এক জায়গায়",
    problem: "বারবার course-information reply কমানোর একটি দিকনির্দেশ",
    depictedOffer: "Lead Express ৳24,900",
    images: {
      all: "https://i.ibb.co.com/1GpfKhT0/4-All-Device.png",
      desktop: "https://i.ibb.co.com/HptcgbZJ/4-Desktop.png",
      mobile: "https://i.ibb.co.com/Xr8G2wRp/4-Mobile.png",
    },
  },
  {
    id: 5,
    audience: "রিয়েল এস্টেট",
    title: "প্রপার্টি ইনকোয়ারির পরিষ্কার পরের ধাপ",
    problem: "property information ও contact flow গুছিয়ে দেখানো",
    depictedOffer: "Enterprise ৳79,900",
    images: {
      all: "https://i.ibb.co.com/RkbHqKkq/5-All-Device.png",
      desktop: "https://i.ibb.co.com/RGf2zjG6/5-Desktop.png",
      mobile: "https://i.ibb.co.com/qFNjgNbp/5-Mobile.png",
    },
  },
  {
    id: 6,
    audience: "রেস্টুরেন্ট ও ক্যাফে",
    title: "মেনু, লোকেশন ও কনট্যাক্ট একসাথে",
    problem: "visitor-এর দরকারি তথ্য সহজে পৌঁছানোর দিকনির্দেশ",
    depictedOffer: "Starter ৳14,900",
    images: {
      all: "https://i.ibb.co.com/8ndJSJ7G/6-All-Device.png",
      desktop: "https://i.ibb.co.com/Txt6qZFB/6-Desktop.png",
      mobile: "https://i.ibb.co.com/NdJkJ7rp/6-Mobile.png",
    },
  },
  {
    id: 7,
    audience: "বিউটি স্যালন",
    title: "নিয়মিত কনটেন্টের পরিকল্পনা",
    problem: "planned content support-এর দিকনির্দেশ",
    depictedOffer: "Content Growth ৳7,500/মাস",
    images: {
      all: "https://i.ibb.co.com/r21PFRgn/7-All-Device.png",
      desktop: "https://i.ibb.co.com/cSg5xnTd/7-Desktop.png",
      mobile: "https://i.ibb.co.com/bjycmG8v/7-Mobile.png",
    },
  },
];

export const RESEARCH_CARDS = [
  {
    icon: "message",
    title: "কাস্টমারের ভাষা",
    description:
      "anonymized inbox questions, reviews এবং sales notes থেকে recurring pain, desire, objection ও ব্যবহৃত শব্দ খুঁজি।",
  },
  {
    icon: "search",
    title: "বাজার ও বিকল্প",
    description:
      "public ads, reviews ও landing pages দেখে common promises, unanswered questions ও original angle খুঁজি; কারও copy/design নকল করি না।",
  },
  {
    icon: "shield",
    title: "অফার ও প্রমাণ",
    description:
      "customer কী পাবেন, কেন বিশ্বাস করবেন এবং পরের step কী—এই তিনটি পরিষ্কার করি। শুধু যাচাই করা claim ব্যবহার করি।",
  },
  {
    icon: "route",
    title: "ক্লিকের পরের অভিজ্ঞতা",
    description: "ad, landing page, WhatsApp flow ও follow-up-এর message match দেখি।",
  },
] as const;

export const CREATIVE_STEPS = [
  { title: "লক্ষ্য ও অফার", description: "audience, desired action, real offer এবং available proof ঠিক করা।" },
  { title: "Angle", description: "customer কেন আগ্রহী হবেন তার আলাদা কারণ তৈরি করা।" },
  {
    title: "Hook ও Copy",
    description:
      "Angle হলো কেন আগ্রহী হবেন; Hook হলো সেই কথার শুরু। Structure: Hook → Problem/Benefit → Offer/Proof → CTA.",
  },
  { title: "Visual ও Format", description: "একই concept-কে All Device, Desktop ও Mobile layout-এ readable করা।" },
  {
    title: "Test",
    description:
      "contrasting concept, clear goal ও relevant metric দিয়ে test করা; শুধু color বদলকে নতুন angle বলা যাবে না।",
  },
  {
    title: "Learn & Improve",
    description:
      "lead quality, acquisition cost ও sales outcome পাওয়া গেলে সেগুলোসহ result দেখে controlled variation তৈরি করা।",
  },
];

export const TESTING_ITEMS = [
  { title: "মানুষ থামছে না", description: "audience relevance, angle, hook ও opening visual review।" },
  { title: "ক্লিক হচ্ছে, page-এ পৌঁছানো কম", description: "link, loading speed ও mobile experience review।" },
  { title: "page-এ আসছে, যোগাযোগ করছে না", description: "message match, offer, proof ও CTA review।" },
  { title: "inquiry হচ্ছে, sale এগোচ্ছে না", description: "lead quality, follow-up ও business fit review।" },
];

export const MONTHLY_CONTENT_PLANS = [
  {
    name: "Content Lite",
    regularPrice: "৳7,650",
    offerPrice: "৳5,000/মাস",
    scope: "12 Reels + 30 Static Posts + 21 Ad Creatives",
  },
  {
    name: "Content Growth",
    regularPrice: "৳12,150",
    offerPrice: "৳7,500/মাস",
    scope: "30 Reels + 30 Static Posts + 21 Ad Creatives",
  },
  {
    name: "Content Scale",
    regularPrice: "৳24,300",
    offerPrice: "৳13,500/মাস",
    scope: "60 Reels + 60 Static Posts + 42 Ad Creatives",
  },
];

export const AD_CREATIVE_FAQS = [
  {
    question: "Winning ad কি আগে থেকেই নিশ্চিত করা যায়?",
    answer: "না। Research থেকে ধারণা তৈরি হয়; বাস্তব test-এ বোঝা যায় কোন creative আপনার লক্ষ্যের জন্য ভালো কাজ করছে।",
  },
  {
    question: "All Device, Desktop ও Mobile-এ কী বদলায়?",
    answer: "মূল message ও offer একই রেখে image ratio, text and visual placement বদলায়।",
  },
  {
    question: "Ad Creative আর campaign চালানো কি একই service?",
    answer:
      "Creative service-এ message ও design তৈরি হয়। Campaign setup, media budget and optimization আলাদা scope হিসেবে আলোচনা করতে হবে।",
  },
];
