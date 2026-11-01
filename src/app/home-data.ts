/*
|-----------------------------------------
| setting up home-data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/

// Source: Marketing/Marketing-Content-AI/pricing.txt and resource.txt.
// Content quantities are one-time inclusions. Domain and hosting are separate.
export const siteUrl = "https://tecbuzz.bd";
export const whatsappUrl = (message: string) => `https://wa.me/8801607333369?text=${encodeURIComponent(message)}`;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Combo Offer", href: "#combo-offers" },
  { label: "Individual", href: "#individual" },
  { label: "About", href: "#about" },
] as const;

export const packages = [
  {
    name: "Starter",
    regularPrice: 14900,
    price: 12300,
    discount: "17.4%",
    delivery: "1 Day",
    posts: 0,
    reels: 0,
    description: "Your business, ready for the web.",
  },
  {
    name: "Express",
    regularPrice: 34900,
    price: 25300,
    discount: "27.5%",
    delivery: "2 Days",
    posts: 30,
    reels: 30,
    description: "A complete website. Content to go with it.",
  },
  {
    name: "Enterprise",
    regularPrice: 69900,
    price: 35300,
    discount: "49.5%",
    delivery: "7 Days",
    posts: 60,
    reels: 60,
    description: "More content for your next business chapter.",
  },
] as const;

export const formatPrice = (price: number) => `৳${price.toLocaleString("en-BD")}`;

export type FeatureValue = boolean | string | number;
export type FeatureGroup = {
  name: string;
  rows: { name: string; values: readonly FeatureValue[] }[];
};

const included = (names: string[]): FeatureGroup["rows"] => names.map((name) => ({ name, values: [true, true, true] }));

export const featureGroups: FeatureGroup[] = [
  {
    name: "Package overview",
    rows: [
      { name: "Regular Price", values: packages.map((item) => formatPrice(item.regularPrice)) },
      { name: "Offer Price", values: packages.map((item) => formatPrice(item.price)) },
      { name: "Discount", values: packages.map((item) => item.discount) },
      { name: "Delivery", values: packages.map((item) => item.delivery) },
    ],
  },
  {
    name: "E-commerce Features",
    rows: included([
      "Product Catalog & Categories",
      "Product Search & Filtering",
      "Shopping Cart",
      "Guest & Registered Checkout",
      "Coupon & Discount Management",
      "Order Tracking & Invoices",
      "Inventory & Stock Management",
    ]),
  },
  {
    name: "Website Management",
    rows: included([
      "Admin Dashboard",
      "Unlimited Page Creation",
      "Unlimited Section Creation",
      "Forms & Content Management",
      "Menu, Banner & Media Management",
      "SEO Management",
      "Mobile-Friendly Webapp",
      "Installable PWA",
    ]),
  },
  {
    name: "CRM & Business Management",
    rows: included([
      "Lead Management",
      "Sales Funnel Management",
      "Lead Assignment & Notes",
      "Excel Import & Export",
      "User & Role Management",
      "Permission Management",
      "Team Activity & Reports",
      "WhatsApp Integration",
    ]),
  },
  {
    name: "Marketing & Content",
    rows: [
      { name: "Static Posts", values: [false, 30, 60] },
      { name: "30-second Reels", values: [false, 30, 60] },
      { name: "Total Content", values: [false, 60, 120] },
      { name: "SEO-Optimized Captions", values: [false, true, true] },
      { name: "Marketing Services", values: [false, true, true] },
      { name: "Final Package Price", values: packages.map((item) => formatPrice(item.price)) },
    ],
  },
];

export const individualServices = [
  {
    name: "Static Post",
    price: 40,
    unit: "/Post",
    description: "Give your next business update a clear, professional visual.",
    descriptionBn: "আপনার ব্যবসার পরবর্তী আপডেট তুলে ধরুন পরিষ্কার ও পেশাদার ডিজাইনে।",
    features: ["SEO-optimized content", "Individual post pricing", "Order the quantity you need"],
    featuresBn: ["SEO-উপযোগী কনটেন্ট", "প্রতি পোস্টের আলাদা মূল্য", "আপনার প্রয়োজন অনুযায়ী পোস্ট অর্ডার করুন"],
  },
  {
    name: "Reels",
    price: 400,
    unit: "/Reel",
    description: "Make your message easy to watch, share, and discover.",
    descriptionBn: "আপনার বার্তা সহজে দেখা, শেয়ার করা ও খুঁজে পাওয়ার উপযোগী করুন।",
    features: ["30-second reel", "SEO optimization", "Individual reel pricing"],
    featuresBn: ["৩০ সেকেন্ডের Reel", "SEO optimization", "প্রতি Reel-এর আলাদা মূল্য"],
  },
  {
    name: "Business Webapp",
    price: 12300,
    unit: "",
    description: "Bring your storefront, content, and business operations together.",
    descriptionBn: "আপনার অনলাইন স্টোর, কনটেন্ট ও ব্যবসার দৈনন্দিন কাজ এক জায়গায় আনুন।",
    features: ["E-commerce storefront", "CMS + CRM", "Admin panel"],
    featuresBn: ["E-commerce অনলাইন স্টোর", "কনটেন্ট ও লিড ব্যবস্থাপনায় CMS + CRM", "পরিচালনার জন্য Admin panel"],
  },
] as const;

// These are linked demos, not screenshots or claims about completed functionality.
export const demoProjects = [
  {
    name: "NexaMart",
    url: "https://nexamart.tecbuzz.app",
    code: "NM",
    description: "An online shopping storefront demo.",
  },
  {
    name: "AdsRova",
    url: "https://adsrova.tecbuzz.app",
    code: "AR",
    description: "A digital advertising agency website demo.",
  },
  {
    name: "Speakora",
    url: "https://speakora.tecbuzz.app",
    code: "SP",
    description: "A language learning and communication website demo.",
  },
  {
    name: "DocNova",
    url: "https://docnova.tecbuzz.app",
    code: "DN",
    description: "A healthcare services website demo.",
  },
  {
    name: "LawDex",
    url: "https://lawdex.tecbuzz.app",
    code: "LD",
    description: "A legal practice and professional services website demo.",
  },
  {
    name: "Landora",
    url: "https://landora.tecbuzz.app",
    code: "LA",
    description: "A property and real estate website demo.",
  },
] as const;

export const realProjects = [
  {
    name: "TestPrep Center",
    url: "http://tpc-eng.com",
    domain: "tpc-eng.com",
    description: "An English learning and IELTS classes website.",
  },
  {
    name: "WES Associates",
    url: "https://www.wesassociates.com",
    domain: "wesassociates.com",
    description: "A study abroad consultancy website.",
  },
  {
    name: "TecBuzz",
    url: "https://tecbuzz.bd",
    domain: "tecbuzz.bd",
    description: "Our digital services and business solutions website.",
  },
  {
    name: "FutureNest Abroad",
    url: "https://www.futurenestabroad.com",
    domain: "futurenestabroad.com",
    description: "A live website from our project portfolio.",
  },
] as const;

export const faqs = [
  {
    question: "How much does website development cost in Bangladesh?",
    questionBn: "বাংলাদেশে ওয়েবসাইট তৈরি করতে কত খরচ হয়?",
    answer:
      "TecBuzz website packages start at ৳12,300 for Starter. Express is ৳25,300 and Enterprise is ৳35,300. The individual Business Webapp service is ৳12,300. Domain registration and hosting are purchased separately. Discuss any additional requirements before ordering.",
    answerBn:
      "TecBuzz-এর Starter প্যাকেজ ৳12,300, Express ৳25,300 এবং Enterprise ৳35,300। আলাদা Business Webapp সেবার মূল্য ৳12,300। Domain registration ও hosting আলাদাভাবে কিনতে হবে। অতিরিক্ত প্রয়োজন থাকলে অর্ডারের আগে আলোচনা করুন।",
  },
  {
    question: "What is the difference between the three combo packages?",
    questionBn: "তিনটি Combo Package-এর মধ্যে পার্থক্য কী?",
    answer:
      "All three include the e-commerce, website management, and CRM features shown in our comparison table. Starter has no included static posts or reels. Express includes 30 static posts and 30 reels; Enterprise includes 60 static posts and 60 reels. Express and Enterprise also include SEO-optimized captions and marketing services.",
    answerBn:
      "তিনটি প্যাকেজেই তুলনামূলক টেবিলের e-commerce, website management ও CRM ফিচার আছে। Starter-এ কোনো Static Post বা Reel নেই। Express-এ ৩০টি পোস্ট ও ৩০টি Reel, Enterprise-এ ৬০টি পোস্ট ও ৬০টি Reel আছে। Express ও Enterprise-এ SEO-উপযোগী caption এবং marketing services-ও অন্তর্ভুক্ত।",
  },
  {
    question: "How long will my website take to deliver?",
    questionBn: "ওয়েবসাইট ডেলিভারি পেতে কত সময় লাগবে?",
    answer:
      "The listed delivery times are 1 day for Starter, 2 days for Express, and 7 days for Enterprise. Contact TecBuzz to confirm the requirements, content, and delivery arrangements for your project before placing an order.",
    answerBn:
      "তালিকাভুক্ত ডেলিভারি সময় Starter-এর জন্য ১ দিন, Express-এর জন্য ২ দিন এবং Enterprise-এর জন্য ৭ দিন। অর্ডারের আগে আপনার প্রয়োজন, কনটেন্ট ও ডেলিভারির বিষয়গুলো TecBuzz-এর সঙ্গে নিশ্চিত করে নিন।",
  },
  {
    question: "Do the packages include e-commerce functionality?",
    questionBn: "প্যাকেজে কি E-commerce ফিচার আছে?",
    answer:
      "Yes. All three combo packages include product catalogs and categories, search and filtering, a shopping cart, guest and registered checkout, coupons and discounts, order tracking and invoices, and inventory management.",
    answerBn:
      "হ্যাঁ। তিনটি Combo Package-এই product catalog ও category, search ও filtering, shopping cart, guest ও registered checkout, coupon ও discount, order tracking ও invoice এবং inventory management আছে।",
  },
  {
    question: "Will I get an admin panel and CMS?",
    questionBn: "আমি কি Admin Panel ও CMS পাব?",
    answer:
      "Yes. Every combo package includes an admin dashboard, unlimited page and section creation, forms and content management, and tools to manage menus, banners, and media. User roles and permissions help control access.",
    answerBn:
      "হ্যাঁ। প্রতিটি Combo Package-এ admin dashboard, সীমাহীন page ও section তৈরি, form ও content management এবং menu, banner ও media পরিচালনার সুবিধা আছে। User role ও permission দিয়ে কে কী ব্যবহার করতে পারবে তা নিয়ন্ত্রণ করা যায়।",
  },
  {
    question: "Is SEO management included?",
    questionBn: "SEO Management কি অন্তর্ভুক্ত?",
    answer:
      "SEO management is included in every combo package. TecBuzz uses SEO-focused architecture for business websites. Search rankings depend on content, competition, and search engines; a specific position is not guaranteed.",
    answerBn:
      "প্রতিটি Combo Package-এ SEO management আছে। TecBuzz ব্যবসার ওয়েবসাইটে SEO-উপযোগী কাঠামো ব্যবহার করে। Search ranking নির্ভর করে কনটেন্ট, প্রতিযোগিতা ও search engine-এর ওপর; নির্দিষ্ট অবস্থানের নিশ্চয়তা দেওয়া হয় না।",
  },
  {
    question: "Are domain registration and hosting included in the price?",
    questionBn: "মূল্যের মধ্যে Domain ও Hosting কি আছে?",
    answer:
      "No. Domain registration and hosting are not included in the package or individual webapp price. They must be purchased separately. Ask TecBuzz to discuss suitable options and their costs before launch.",
    answerBn:
      "না। প্যাকেজ বা আলাদা Business Webapp-এর মূল্যে domain registration ও hosting অন্তর্ভুক্ত নয়; এগুলো আলাদাভাবে কিনতে হবে। চালু করার আগে উপযুক্ত বিকল্প ও খরচ নিয়ে TecBuzz-এর সঙ্গে আলোচনা করুন।",
  },
  {
    question: "Are the included posts and reels a monthly subscription?",
    questionBn: "পোস্ট ও Reel কি প্রতি মাসে দেওয়া হবে?",
    answer:
      "No. The 30 posts and 30 reels in Express, and the 60 posts and 60 reels in Enterprise, are one-time package inclusions. They are not recurring monthly services. Reels are 30 seconds. Starter has no included posts or reels.",
    answerBn:
      "না। Express-এর ৩০টি পোস্ট ও ৩০টি Reel এবং Enterprise-এর ৬০টি পোস্ট ও ৬০টি Reel প্যাকেজে একবারই দেওয়া হয়। এগুলো মাসিক সেবা নয়। প্রতিটি Reel ৩০ সেকেন্ডের। Starter-এ কোনো পোস্ট বা Reel অন্তর্ভুক্ত নেই।",
  },
  {
    question: "Can I update the website without a developer?",
    questionBn: "Developer ছাড়া কি ওয়েবসাইট আপডেট করতে পারব?",
    answer:
      "Yes. Use the CMS and admin dashboard for routine page, section, content, media, menu, and banner updates. The CRM provides lead and sales funnel management, notes, team access, and Excel import and export.",
    answerBn:
      "হ্যাঁ। নিয়মিত page, section, content, media, menu ও banner আপডেট করতে CMS ও admin dashboard ব্যবহার করুন। CRM-এ lead ও sales funnel management, notes, team access এবং Excel import ও export-এর সুবিধা আছে।",
  },
  {
    question: "How do I order a website or an individual service?",
    questionBn: "ওয়েবসাইট বা আলাদা সেবা কীভাবে অর্ডার করব?",
    answer:
      "Choose a package or service and use its WhatsApp button to send TecBuzz a prefilled inquiry. You can also contact 01607333369 on WhatsApp or email tecbuzz@gmail.com to discuss your business requirements and confirm your order.",
    answerBn:
      "প্যাকেজ বা সেবা বেছে নিয়ে তার WhatsApp বাটনে চাপুন; আপনার জন্য তৈরি করা inquiry message খুলবে। ব্যবসার প্রয়োজন আলোচনা ও অর্ডার নিশ্চিত করতে WhatsApp-এ 01607333369 নম্বরে বা tecbuzz@gmail.com ঠিকানায়ও যোগাযোগ করতে পারেন।",
  },
] as const;
