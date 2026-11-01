/*
|-----------------------------------------
| setting up Home for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Tecbuzz- Webapp, November, 2026
|-----------------------------------------
*/
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Globe2,
  GraduationCap,
  HeartPulse,
  ImageIcon,
  Layers3,
  LayoutDashboard,
  ListFilter,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MousePointer2,
  Package,
  PanelTop,
  PencilRuler,
  Scale,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
  Video,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import {
  demoProjects,
  faqs,
  featureGroups,
  formatPrice,
  individualServices,
  navigation,
  packages,
  realProjects,
  siteUrl,
  whatsappUrl,
  type FeatureValue,
} from "./home-data";
import HomeNavigation from "./home-navigation";
import HomeScroll from "./home-scroll";
import styles from "./home.module.css";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const consultation = whatsappUrl("Hello TecBuzz, I would like a free consultation for my business website.");

const sectionTranslations: Record<string, string> = {
  "02": "আপনার বাজেট অনুযায়ী বেছে নিন সম্পূর্ণ Website ও Content Package।",
  "03": "পুরো প্যাকেজের পাশাপাশি প্রয়োজনের সার্ভিসটি আলাদাও নিতে পারেন।",
  "04": "আপনার ব্যবসার প্রয়োজন বুঝে তৈরি করি কার্যকর Digital Solutions।",
  "05": "অভিজ্ঞতা, সাশ্রয়ী মূল্য ও সহজ ব্যবস্থাপনা—সব একসঙ্গে।",
  "06": "পণ্য সাজানো থেকে অর্ডার ও স্টক ম্যানেজমেন্ট—সব এক জায়গায়।",
  "07": "Website, Leads ও Team ম্যানেজ করুন নিজের Dashboard থেকেই।",
  "08": "আপনার আইডিয়া থেকে Website Launch—চারটি সহজ ধাপ।",
  "09": "ব্যবসার ধরন অনুযায়ী Website ও Automation-এর সমাধান।",
  "10": "আপনার পছন্দের ডিজাইন খুঁজে নিতে Live Demo দেখুন।",
  "11": "আমাদের পোর্টফোলিওর Website-গুলো সরাসরি ঘুরে দেখুন।",
  "12": "প্যাকেজ, মূল্য ও কাজের প্রক্রিয়া নিয়ে প্রয়োজনীয় উত্তর।",
};

function ActionLink({
  href,
  children,
  secondary = false,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-none border px-5 py-3 text-sm font-semibold transition-colors duration-200 ${light ? "border-white bg-white text-[#0755EA] hover:bg-blue-50" : secondary ? "border-slate-300 bg-transparent text-[#172232] hover:border-[#0755EA] hover:text-[#0755EA]" : "border-[#0755EA] bg-[#0755EA] text-white hover:border-[#0645c0] hover:bg-[#0645c0]"} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  number,
  label,
  title,
  description,
  dark = false,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-blue-200" : "text-[#0755EA]"}`}
      >
        <span className={dark ? "text-blue-200" : "text-slate-500"}>{number} /</span> {label}
      </p>
      <h2
        className={`text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] ${dark ? "text-white" : "text-[#172232]"}`}
      >
        {title}
      </h2>
      <p lang="bn" className={`mt-3 text-base leading-8 ${dark ? "text-blue-100" : "text-slate-600"}`}>
        {sectionTranslations[number]}
      </p>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

function IconTile({ icon: Icon, dark = false }: { icon: LucideIcon; dark?: boolean }) {
  return (
    <span
      className={`inline-flex size-11 shrink-0 items-center justify-center ${dark ? "bg-white/10 text-blue-200" : "bg-[#0755EA]/[0.07] text-[#0755EA]"}`}
    >
      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
    </span>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <Check size={17} className="mt-1 shrink-0 text-[#0755EA]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#home" aria-label="TecBuzz home" className="flex w-fit items-center gap-2">
      <Image
        src="/Logo.png"
        width={64}
        height={64}
        alt="TecBuzz logo"
        className="size-14 bg-white object-contain"
        preload={!footer}
      />
      <span>
        <span className="block text-2xl font-bold tracking-tight text-[#172232]">
          Tec<span className="text-[#0755EA]">Buzz</span>
        </span>
        <span className="block text-[9px] font-medium tracking-[0.14em] text-slate-500 uppercase">
          Ideas. Innovation. Impact.
        </span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className={`${container} flex h-20 items-center justify-between gap-6`}>
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#0755EA]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ActionLink href={consultation}>
            Get Free Consultation <ArrowUpRight size={17} aria-hidden="true" />
          </ActionLink>
        </div>
        <HomeNavigation links={navigation} consultationUrl={consultation} />
      </div>
    </header>
  );
}

function HeroVisual() {
  const nodes = [
    { icon: Code2, label: "Web" },
    { icon: ShoppingBag, label: "Shop" },
    { icon: Users, label: "CRM" },
    { icon: PanelTop, label: "CMS" },
  ];
  return (
    <div className={styles.motionStage} aria-hidden="true">
      <div className={styles.motionHalo} />
      <div className={styles.orbitFrame} />
      <div className={styles.orbitFrameInner} />
      <svg className={styles.connectionLines} viewBox="0 0 480 480" fill="none">
        <path className={styles.connectionBase} d="M240 72V408M72 240H408" />
        <path className={styles.connectionPulse} d="M240 72V408M72 240H408" />
      </svg>
      <div className={styles.coreFloat}>
        <div className={styles.brandCore}>
          <Image src="/Logo.png" width={144} height={144} alt="" className="h-full w-full object-contain" />
        </div>
      </div>
      {nodes.map(({ icon: Icon, label }, index) => (
        <div key={label} className={styles.orbitNode} data-position={index}>
          <Icon size={25} strokeWidth={1.6} />
          <span>{label}</span>
        </div>
      ))}
      <span className={styles.motionSpark} />
      <span className={styles.motionSparkSecondary} />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className={`${styles.hero} relative overflow-hidden border-b border-[#203453]`}
    >
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGrid} aria-hidden="true" />
      <div
        className={`${container} relative z-10 grid items-center gap-5 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-16`}
      >
        <div className={styles.heroCopy}>
          <h1
            id="hero-title"
            lang="bn"
            className="text-[2.65rem] leading-[1.4] font-semibold tracking-tight text-white sm:text-[3.5rem] lg:text-[3.85rem]"
          >
            আপনার ব্যবসা,
            <br />
            <span className={styles.shimmerText}>এবার ডিজিটাল।</span>
          </h1>
          <p className="mt-5 text-base tracking-wide text-blue-100 sm:text-lg">Website. E-commerce. CRM.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ActionLink href="#pricing" light>
              <span lang="bn">প্যাকেজ দেখুন</span>
              <ArrowRight size={17} aria-hidden="true" />
            </ActionLink>
            <ActionLink href={consultation} className={styles.heroChat}>
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </ActionLink>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <p>
              <strong className="text-xl font-semibold text-white">৳12,300</strong> <span lang="bn">থেকে</span>
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-300" aria-hidden="true" />
              5+ years experience
            </p>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function ComparisonValue({ value }: { value: FeatureValue }) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1.5 text-[#0755EA]">
        <Check size={16} aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  if (value === false)
    return (
      <span className="text-slate-400">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not included</span>
      </span>
    );
  return <span>{value}</span>;
}

function Pricing() {
  return (
    <section id="combo-offers" aria-labelledby="pricing-title" className="py-14 sm:py-16 lg:py-20">
      <div id="pricing" className={`${container} scroll-mt-28`}>
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#0755EA] uppercase">Combo Packages</p>
        <h2
          id="pricing-title"
          lang="bn"
          className="text-3xl leading-snug font-semibold tracking-tight text-[#172232] sm:text-4xl"
        >
          সহজ প্যাকেজ। পরিষ্কার মূল্য।
        </h2>
        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((item) => {
            const popular = item.name === "Express";
            return (
              <article
                key={item.name}
                className={`relative flex flex-col border p-6 pt-8 ${popular ? "border-[#0755EA] bg-[#F5F8FC] shadow-[0_12px_32px_-16px_rgba(7,85,234,0.25)]" : "border-slate-200 bg-white"}`}
              >
                {popular && (
                  <span className="absolute -top-px right-5 bg-[#0755EA] px-3 py-1 text-[10px] font-semibold tracking-wider text-white uppercase">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock3 size={14} aria-hidden="true" />
                    <span className="sr-only">Delivery:</span>
                    {item.delivery}
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <s className="text-sm text-slate-500">{formatPrice(item.regularPrice)}</s>
                  <span className="bg-blue-100 px-2 py-1 text-[11px] font-semibold text-[#0755EA]">
                    Save {item.discount}
                  </span>
                </div>
                <p className="mt-1 text-[2.5rem] leading-tight font-semibold tracking-tight">
                  {formatPrice(item.price)}
                </p>
                <div className="my-5 border-t border-slate-200" />
                <CheckList
                  items={[
                    "E-commerce + CMS + CRM",
                    "Admin panel + SEO + PWA",
                    item.posts ? `${item.posts} Posts + ${item.reels} Reels` : "Posts / Reels নেই",
                  ]}
                />
                <div className="mt-auto pt-6">
                  <ActionLink
                    href={whatsappUrl(
                      `Hello TecBuzz, I would like to order the ${item.name} combo package at ${formatPrice(item.price)}. Please share the next steps.`,
                    )}
                    secondary={!popular}
                    className="w-full"
                  >
                    Choose {item.name}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </ActionLink>
                </div>
              </article>
            );
          })}
        </div>
        <p lang="bn" className="mt-5 text-xs leading-6 text-slate-500">
          Content একবারের জন্য · Reels 30 সেকেন্ড · Domain ও Hosting আলাদা।
        </p>
        <details className="group mt-7 border border-slate-200">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 bg-white px-5 py-5 text-sm font-semibold sm:px-7">
            <span className="flex items-center gap-3">
              <ListFilter size={19} className="text-[#0755EA]" aria-hidden="true" />
              Compare every feature
            </span>
            <ChevronDown size={19} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div
            role="region"
            aria-label="Full package feature comparison, scroll horizontally on small screens"
            tabIndex={0}
            className="overflow-x-auto border-t border-slate-200"
          >
            <table className="w-full min-w-160 border-collapse text-left text-sm">
              <caption className="bg-[#F5F8FC] px-6 py-4 text-left text-xs leading-5 text-slate-500">
                Full package comparison. Scroll horizontally on smaller screens. A check means included; a dash means
                not included. Content quantities are one-time inclusions.
              </caption>
              <thead>
                <tr className="bg-[#172232] text-white">
                  <th scope="col" className="w-2/5 px-6 py-4 font-medium">
                    Features
                  </th>
                  {packages.map((item) => (
                    <th key={item.name} scope="col" className="px-5 py-4 text-center font-medium">
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              {featureGroups.map((group) => (
                <tbody key={group.name}>
                  <tr className="bg-[#F5F8FC]">
                    <th
                      colSpan={4}
                      scope="colgroup"
                      className="border-y border-slate-200 px-6 py-3 text-xs font-semibold tracking-wider text-[#0755EA] uppercase"
                    >
                      {group.name}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.name} className="border-b border-slate-100 last:border-b-0">
                      <th scope="row" className="px-6 py-3.5 font-normal text-slate-600">
                        {row.name}
                      </th>
                      {row.values.map((value, index) => (
                        <td key={index} className={`px-5 py-3.5 text-center ${index === 1 ? "bg-blue-50/40" : ""}`}>
                          <ComparisonValue value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}

function IndividualServices() {
  const icons = [ImageIcon, Video, Code2];
  return (
    <section
      id="individual"
      aria-labelledby="individual-title"
      className={`${sectionSpace} border-y border-slate-200 bg-[#F5F8FC]`}
    >
      <div className={container}>
        <div id="individual-title">
          <SectionHeading
            number="03"
            label="Individual services"
            title="Just what you need. Nothing extra."
            description="Start with a single service, or add content to your existing business presence."
          />
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {individualServices.map((item, index) => (
            <article key={item.name} className="flex flex-col border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <IconTile icon={icons[index]} />
                <span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                  Individual service
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {formatPrice(item.price)}
                <span className="text-sm font-normal text-slate-500">{item.unit}</span>
              </p>
              <p className="mt-3 mb-5 text-sm leading-6 text-slate-500">{item.description}</p>
              <p lang="bn" className="mb-5 text-sm leading-7 text-slate-600">
                {item.descriptionBn}
              </p>
              <div lang="bn">
                <CheckList items={item.featuresBn} />
              </div>
              <a
                href={whatsappUrl(
                  `Hello TecBuzz, I am interested in ${item.name} at ${formatPrice(item.price)}${item.unit}. Please share the order details.`,
                )}
                className="mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-slate-200 pt-5 text-sm font-semibold text-[#0755EA] hover:text-[#0645c0]"
              >
                Order {item.name}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">
          Business Webapp pricing excludes domain registration and hosting.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={sectionSpace}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
        <div className="relative bg-[#172232] p-8 text-white sm:p-10">
          <p className="text-xs tracking-[0.18em] text-blue-200 uppercase">Experience that builds confidence</p>
          <p className="mt-5 bg-linear-to-br from-white to-blue-300 bg-clip-text text-[7rem] leading-none font-semibold tracking-tighter text-transparent sm:text-[9rem]">
            5<span className="text-6xl">+</span>
          </p>
          <p className="mt-4 max-w-60 text-lg leading-7 text-slate-200">years of real-world development experience.</p>
          <div className="mt-9 space-y-4 border-t border-white/15 pt-6">
            <p className="flex items-center gap-3 text-sm text-slate-300">
              <MapPin size={17} className="shrink-0 text-blue-300" aria-hidden="true" />
              Serving businesses across Bangladesh
            </p>
            <p className="flex items-center gap-3 text-sm text-slate-300">
              <Globe2 size={17} className="shrink-0 text-blue-300" aria-hidden="true" />
              Developers working remotely in the UK
            </p>
          </div>
          <div
            className="absolute top-0 right-0 h-1 w-24 bg-linear-to-r from-[#0755EA] to-[#009FF5]"
            aria-hidden="true"
          />
        </div>
        <div id="about-title">
          <SectionHeading number="04" label="About TecBuzz" title="Technology with a business purpose." />
          <p className="mt-6 text-base leading-8 text-slate-600">
            TecBuzz is a website development company in Bangladesh focused on making professional digital tools
            accessible to local businesses. We bring more than five years of real-world development experience to every
            conversation.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our developers work remotely in the UK, building Next.js websites and web applications for businesses across
            Bangladesh. We connect software development, business automation, e-commerce, and digital marketing in a
            practical way of working.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
            <a href="mailto:tecbuzz@gmail.com" className="flex items-center gap-2 text-sm font-medium text-[#0755EA]">
              <Mail size={17} aria-hidden="true" />
              tecbuzz@gmail.com
            </a>
            <a href={consultation} className="flex items-center gap-2 text-sm font-medium text-[#0755EA]">
              <MessageCircle size={17} aria-hidden="true" />
              01607333369
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: Code2, title: "Experienced developers", copy: "More than five years of hands-on development experience." },
  { icon: Package, title: "Affordable solutions", copy: "Clear packages designed around everyday business needs." },
  { icon: Zap, title: "Fast delivery", copy: "Published delivery times to help you plan your launch." },
  { icon: Smartphone, title: "Mobile-friendly", copy: "Applications that fit the way your customers browse." },
  {
    icon: Search,
    title: "SEO-focused architecture",
    copy: "A considered foundation for search-friendly business content.",
  },
  { icon: Settings2, title: "Customizable tools", copy: "Discuss the workflows that matter to your business." },
  { icon: MousePointer2, title: "Easy management", copy: "Manage routine website updates through your own CMS." },
  { icon: MessageCircle, title: "Clear communication", copy: "Talk through your requirements directly with TecBuzz." },
];

function WhyTecBuzz() {
  return (
    <section
      id="why-tecbuzz"
      aria-labelledby="why-title"
      className={`${sectionSpace} border-y border-slate-200 bg-[#F5F8FC]`}
    >
      <div className={container}>
        <div id="why-title">
          <SectionHeading number="05" label="Why choose us" title="Built well. Priced clearly. Made for you." />
        </div>
        <div className="mt-10 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="bg-white p-6 transition-colors hover:bg-blue-50/50 sm:p-7">
              <IconTile icon={item.icon} />
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecommerce() {
  return (
    <section id="ecommerce" aria-labelledby="ecommerce-title" className={sectionSpace}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <div id="ecommerce-title">
          <SectionHeading
            number="06"
            label="E-commerce solutions"
            title="From first click to fulfilled order."
            description="E-commerce website development that connects your storefront with the daily work behind it. Included in every combo package."
          />
          <div className="mt-7">
            <CheckList
              items={[
                "Product catalog and categories",
                "Product search and filtering",
                "Shopping cart and guest or registered checkout",
                "Coupon and discount management",
                "Order tracking and invoices",
                "Inventory and stock management",
                "Mobile-friendly, installable PWA",
              ]}
            />
          </div>
          <a
            href="#demo-portfolio"
            className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#0755EA]"
          >
            Explore our demo websites <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="border border-slate-200 bg-[#F5F8FC] p-4 sm:p-7">
          <div className="border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Store size={18} className="text-[#0755EA]" aria-hidden="true" />
                Your online store
              </span>
              <span className="text-[9px] tracking-wider text-slate-500 uppercase">Illustration</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 border border-slate-200 bg-[#F5F8FC] px-3 py-3 text-xs text-slate-500">
                <Search size={15} aria-hidden="true" />
                Product search & filtering
              </div>
              <div className="my-5 grid grid-cols-3 gap-3">
                {[ShoppingBag, Package, Layers3].map((Icon, i) => (
                  <div key={i} className="border border-slate-200">
                    <div className="flex aspect-square items-center justify-center bg-blue-50">
                      <Icon size={30} strokeWidth={1.3} className="text-[#0755EA]" aria-hidden="true" />
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="h-1.5 w-3/4 bg-slate-200" />
                      <div className="h-1.5 w-1/2 bg-blue-200" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 border border-slate-200 text-xs">
                <div className="flex items-center gap-2 border-r border-slate-200 p-3 text-slate-600">
                  <ShoppingCart size={16} className="text-[#0755EA]" aria-hidden="true" />
                  Checkout
                </div>
                <div className="flex items-center gap-2 p-3 text-slate-600">
                  <Package size={16} className="text-[#0755EA]" aria-hidden="true" />
                  Order tracking
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 bg-[#0755EA] px-5 py-4 text-white">
            <Smartphone size={22} aria-hidden="true" />
            <p className="text-xs leading-5">
              A storefront for every screen.
              <br />
              <strong className="text-sm font-medium">Mobile-friendly. Installable. Manageable.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessAutomation() {
  const tools = [
    { icon: LayoutDashboard, title: "Admin dashboard", text: "Your business tools in one workspace." },
    { icon: PanelTop, title: "Unlimited pages & sections", text: "Build and update your website as it grows." },
    { icon: ImageIcon, title: "Content & media", text: "Manage forms, menus, banners, and media." },
    { icon: Workflow, title: "Leads & sales funnels", text: "Organize inquiries, assignments, and notes." },
    { icon: ShieldCheck, title: "Roles & permissions", text: "Manage who can access your business tools." },
    { icon: Users, title: "Team activity & reports", text: "Keep everyday team work visible." },
    { icon: ArrowDownToLine, title: "Excel import & export", text: "Move business records in and out of Excel." },
    { icon: MessageCircle, title: "WhatsApp integration", text: "Connect website interest with a conversation." },
    { icon: Search, title: "SEO management", text: "Manage your website's search essentials." },
  ];
  return (
    <section id="automation" aria-labelledby="automation-title" className={`${sectionSpace} bg-[#172232]`}>
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div id="automation-title">
            <SectionHeading number="07" label="CMS, CRM & automation" title="Less busywork. More business." dark />
          </div>
          <p className="max-w-md text-base leading-7 text-slate-300">
            Update your content without a developer for routine changes. Keep your leads, team, and website organized
            with CRM software built for businesses in Bangladesh.
          </p>
        </div>
        <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((item) => (
            <article key={item.title} className="flex gap-4 border-t border-white/15 py-6">
              <IconTile icon={item.icon} dark />
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 border-l-2 border-[#009FF5] pl-4 text-xs leading-6 text-slate-300">
          All tools listed above are included in Starter, Express, and Enterprise. Ask about your business workflow
          during a free consultation.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Discuss Business Requirements",
      copy: "Tell us about your business, audience, and what you need your website to do.",
      icon: MessageCircle,
    },
    {
      title: "Choose Package & Plan",
      copy: "Compare the packages and confirm your content, scope, and delivery details.",
      icon: PencilRuler,
    },
    {
      title: "Design, Develop & Test",
      copy: "We build your agreed solution and check the experience across screen sizes.",
      icon: Code2,
    },
    {
      title: "Deliver & Launch",
      copy: "Review the website together and prepare your business for its online launch.",
      icon: ArrowUpRight,
    },
  ];
  return (
    <section id="process" aria-labelledby="process-title" className={sectionSpace}>
      <div className={container}>
        <div id="process-title">
          <SectionHeading
            number="08"
            label="How we work"
            title="A straightforward path to launch."
            description="Clear conversations and a practical plan, from your first message to your live website."
          />
        </div>
        <ol className="mt-10 grid gap-0 lg:grid-cols-4">
          {steps.map((item, index) => (
            <li
              key={item.title}
              className="relative border-l border-slate-200 pb-8 pl-7 last:pb-0 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-7 lg:pb-0 lg:pl-0"
            >
              <span
                className="absolute -left-[5px] top-0 size-[9px] bg-[#0755EA] lg:top-[-5px] lg:left-0"
                aria-hidden="true"
              />
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-sm text-slate-500">0{index + 1}</span>
                <item.icon size={20} strokeWidth={1.5} className="text-[#0755EA]" aria-hidden="true" />
              </div>
              <h3 className="max-w-48 text-lg leading-6 font-semibold">{item.title}</h3>
              <p className="mt-3 max-w-60 text-sm leading-6 text-slate-500">{item.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    {
      icon: ShoppingBag,
      name: "E-commerce businesses",
      copy: "Present products, organize orders, and manage your online storefront.",
    },
    {
      icon: Building2,
      name: "Real estate agencies",
      copy: "Present properties and organize inquiries from prospective buyers.",
    },
    {
      icon: GraduationCap,
      name: "Educational institutions",
      copy: "Share courses and admissions information, and manage student inquiries.",
    },
    {
      icon: Users,
      name: "Professional services",
      copy: "Explain your expertise and keep service inquiries organized.",
    },
    {
      icon: Scale,
      name: "Law firms",
      copy: "Present practice areas and guide prospective clients to contact your firm.",
    },
    {
      icon: HeartPulse,
      name: "Healthcare businesses",
      copy: "Make service information accessible and help people get in touch.",
    },
    {
      icon: Megaphone,
      name: "Digital marketing agencies",
      copy: "Showcase your services and organize business leads in a CRM.",
    },
    {
      icon: Store,
      name: "Local businesses",
      copy: "Build a clear online presence and make it easy for customers to reach you.",
    },
  ];
  return (
    <section
      id="industries"
      aria-labelledby="industries-title"
      className={`${sectionSpace} border-y border-slate-200 bg-[#F5F8FC]`}
    >
      <div className={container}>
        <div id="industries-title">
          <SectionHeading
            number="09"
            label="Industries we serve"
            title="Your industry. Your way of working."
            description="Practical website and automation use cases for businesses across Bangladesh. Discuss your exact requirements with us."
          />
        </div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <article key={item.name} className="border-t border-slate-300 py-6">
              <item.icon size={25} className="text-[#0755EA]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoPortfolio() {
  return (
    <section id="demo-portfolio" aria-labelledby="demo-title" className={sectionSpace}>
      <div className={container}>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div id="demo-title">
            <SectionHeading
              number="10"
              label="Demo website portfolio"
              title="Explore the possibilities."
              description="Six live demo websites to help you find a direction. Open a demo to explore its current design and content."
            />
          </div>
          <a
            href="#real-portfolio"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-[#0755EA]"
          >
            See real websites <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((item, index) => (
            <article key={item.name} className="group overflow-hidden border border-slate-200 bg-white">
              <div
                className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden ${index % 3 === 0 ? "bg-[#172232] text-white" : index % 3 === 1 ? "bg-[#0755EA] text-white" : "bg-[#E9F2FF] text-[#0755EA]"}`}
              >
                <span className="absolute top-4 left-5 text-[9px] font-medium tracking-[0.18em] uppercase">
                  TecBuzz / Demo 0{index + 1}
                </span>
                <span
                  className="text-7xl font-medium tracking-[-0.08em] transition-transform duration-300 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  {item.code}
                  <span className="text-3xl">↗</span>
                </span>
                <span className="absolute right-5 bottom-4 text-[9px] tracking-widest uppercase">
                  {new URL(item.url).hostname}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.name} live demo (opens in a new tab)`}
                  className="mt-5 flex min-h-11 items-center justify-between border-t border-slate-200 pt-4 text-sm font-semibold text-[#0755EA]"
                >
                  View Live Demo <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-5 text-slate-500">
          Project tiles are graphic identifiers, not website screenshots. Demo links open in a new tab.
        </p>
      </div>
    </section>
  );
}

function RealPortfolio() {
  return (
    <section
      id="real-portfolio"
      aria-labelledby="real-title"
      className={`${sectionSpace} border-y border-slate-200 bg-[#F5F8FC]`}
    >
      <div className={container}>
        <div id="real-title">
          <SectionHeading
            number="11"
            label="Real website portfolio"
            title="Real websites. Open for a closer look."
            description="Visit the websites in our project portfolio and explore their current public pages."
          />
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {realProjects.map((item, index) => (
            <article
              key={item.url}
              className="flex flex-col border border-slate-200 border-l-[3px] border-l-[#0755EA] bg-white p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-medium tracking-wider text-slate-500">0{index + 1} / LIVE WEBSITE</span>
                <Globe2 size={19} className="text-[#0755EA]" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.name} website (opens in a new tab)`}
                className="mt-auto flex min-h-12 items-center justify-between gap-2 pt-5 text-sm font-medium text-[#0755EA]"
              >
                <span className="break-all">{item.domain}</span>
                <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className={sectionSpace}>
      <div className={`${container} grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20`}>
        <div id="faq-title">
          <SectionHeading
            number="12"
            label="Frequently asked questions"
            title="Good questions. Clear answers."
            description="The details that help you choose your next step with confidence."
          />
          <a
            href={consultation}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0755EA]"
          >
            Ask us on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="border-t border-slate-200">
          {faqs.map((item) => (
            <details key={item.question} className="group border-b border-slate-200">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm leading-6 font-semibold">
                <h3 className="text-sm leading-6 font-semibold">
                  <span lang="bn" className="block leading-7">
                    {item.questionBn}
                  </span>
                  <span className="mt-1 block text-xs font-normal text-slate-500">{item.question}</span>
                </h3>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#0755EA] transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="space-y-3 pr-5 pb-6 text-sm leading-7 text-slate-600">
                <p lang="bn">{item.answerBn}</p>
                <p className="border-l-2 border-blue-100 pl-4 text-xs leading-6 text-slate-500">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-linear-to-br from-[#0755EA] to-[#063ba9] py-16 text-white sm:py-20"
    >
      <div className={`${container} grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20`}>
        <div>
          <p className="mb-5 text-xs font-medium tracking-[0.16em] text-blue-100 uppercase">
            13 / Let&apos;s build your next chapter
          </p>
          <h2 id="contact-title" className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Ready to Build Your Business Website?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-blue-100">
            From your first website to e-commerce, CRM, and digital marketing — let&apos;s find the right fit for your
            business.
          </p>
          <p lang="bn" className="mt-3 max-w-lg text-base leading-8 text-blue-100">
            আপনার ব্যবসার জন্য সঠিক Website ও Package বেছে নিতে আমাদের সঙ্গে কথা বলুন।
          </p>
          <div className="mt-7">
            <ActionLink href={consultation} light>
              <MessageCircle size={18} aria-hidden="true" />
              Get Free Consultation
              <ArrowUpRight size={17} aria-hidden="true" />
            </ActionLink>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://wa.me/8801607333369"
              className="flex items-center gap-2 text-white underline-offset-4 hover:underline"
            >
              <MessageCircle size={16} aria-hidden="true" />
              01607333369
            </a>
            <a
              href="mailto:tecbuzz@gmail.com"
              className="flex items-center gap-2 text-white underline-offset-4 hover:underline"
            >
              <Mail size={16} aria-hidden="true" />
              tecbuzz@gmail.com
            </a>
          </div>
        </div>
        <div className="border border-white/25 bg-white/[0.06] p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Have a package in mind?</h3>
          <p className="mt-2 text-sm leading-6 text-blue-100">Start a conversation with your preferred option.</p>
          <div className="mt-5 divide-y divide-white/20">
            {packages.map((item) => (
              <a
                key={item.name}
                href={whatsappUrl(
                  `Hello TecBuzz, I would like to discuss the ${item.name} package at ${formatPrice(item.price)} for my business.`,
                )}
                className="flex min-h-16 items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-blue-200"
              >
                <span>
                  {item.name} <span className="ml-2 text-xs text-blue-100">{formatPrice(item.price)}</span>
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-blue-100">
            Domain and hosting are separate. Content inclusions are one-time.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className={`${container} grid gap-9 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]`}>
        <div>
          <Brand footer />
          <p className="mt-4 max-w-64 text-sm leading-6 text-slate-500">
            Web development, business automation, and digital marketing for businesses across Bangladesh.
          </p>
          <a href="mailto:tecbuzz@gmail.com" className="mt-4 block text-sm text-[#0755EA]">
            tecbuzz@gmail.com
          </a>
          <a href="https://wa.me/8801607333369" className="mt-2 block text-sm text-slate-600">
            WhatsApp: 01607333369
          </a>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-semibold tracking-wider uppercase">Explore</h2>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="w-fit text-sm text-slate-500 hover:text-[#0755EA]">
                {item.label}
              </a>
            ))}
            <a href="#faq" className="w-fit text-sm text-slate-500 hover:text-[#0755EA]">
              FAQs
            </a>
          </nav>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-semibold tracking-wider uppercase">Our services</h2>
          <nav aria-label="Services" className="flex flex-col gap-3">
            {[
              { label: "Business websites", href: "#pricing" },
              { label: "E-commerce development", href: "#ecommerce" },
              { label: "CMS & CRM", href: "#automation" },
              { label: "Content & marketing", href: "#individual" },
              { label: "Free consultation", href: "#contact" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="w-fit text-sm text-slate-500 hover:text-[#0755EA]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="mb-5 text-xs font-semibold tracking-wider uppercase">Selected projects</h2>
          <nav aria-label="Portfolio websites" className="flex flex-col gap-3">
            {demoProjects.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 text-sm text-slate-500 hover:text-[#0755EA]"
              >
                {item.name}
                <ArrowUpRight size={12} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className={`${container} flex flex-col justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row`}>
          <p>© {new Date().getFullYear()} TecBuzz. All rights reserved.</p>
          <p>Ideas. Innovation. Impact.</p>
          <a href="#home" className="flex w-fit items-center gap-2 hover:text-[#0755EA]">
            Back to top <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppContact() {
  return (
    <>
      <div className="fixed right-6 bottom-6 z-40 hidden md:block">
        <a
          href={consultation}
          aria-label="Chat with TecBuzz on WhatsApp"
          className={`${styles.whatsappFloat} flex min-h-14 items-center gap-3 border border-[#168451] bg-[#087443] px-5 py-3 text-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] transition-colors hover:bg-[#065d35]`}
        >
          <MessageCircle size={25} strokeWidth={1.8} aria-hidden="true" />
          <span>
            <span className="block text-sm font-semibold">WhatsApp</span>
            <span lang="bn" className="block text-[11px] leading-5 text-green-100">
              সরাসরি কথা বলুন
            </span>
          </span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <footer
        aria-label="Mobile quick contact"
        className={`${styles.mobileContact} fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3">
          <a href="#pricing" className="min-w-0 py-1">
            <span lang="bn" className="block text-sm font-semibold text-[#172232]">
              শুরু হোক নতুন যাত্রা
            </span>
            <span className="mt-0.5 block text-[10px] text-slate-500">Website from ৳12,300</span>
          </a>
          <a
            href={consultation}
            aria-label="WhatsApp-এ TecBuzz-এর সঙ্গে কথা বলুন"
            className="flex min-h-12 shrink-0 items-center justify-center gap-2 border border-[#087443] bg-[#087443] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065d35]"
          >
            <MessageCircle size={21} aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </footer>
    </>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "TecBuzz",
      url: siteUrl,
      logo: `${siteUrl}/Logo.png`,
      email: "tecbuzz@gmail.com",
      telephone: "+8801607333369",
      areaServed: { "@type": "Country", name: "Bangladesh" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801607333369",
        contactType: "sales",
        url: "https://wa.me/8801607333369",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "TecBuzz",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: ["en", "bn"],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#website-development`,
      name: "Business Website Development Bangladesh",
      serviceType: "Website development, e-commerce, CMS and CRM",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Bangladesh" },
      url: `${siteUrl}/#pricing`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "TecBuzz combo packages",
        itemListElement: packages.map((item) => ({
          "@type": "Offer",
          name: `${item.name} combo package`,
          price: item.price,
          priceCurrency: "BDT",
          url: `${siteUrl}/#combo-offers`,
          description: `${item.name}: e-commerce, CMS, CRM and admin panel. Delivery: ${item.delivery}. ${item.posts ? `${item.posts} static posts and ${item.reels} 30-second reels, included once.` : "No static posts or reels included."} Domain and hosting purchased separately.`,
          seller: { "@id": `${siteUrl}/#organization` },
          itemOffered: { "@type": "Service", name: `${item.name} business website package` },
        })),
      },
    },
    ...individualServices.map((item) => ({
      "@type": "Service",
      name: item.name,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Bangladesh" },
      description: item.features.join(", "),
      offers: {
        "@type": "Offer",
        name: `${item.name}${item.unit ? ` ${item.unit}` : ""}`,
        price: item.price,
        priceCurrency: "BDT",
        url: `${siteUrl}/#individual`,
        itemOffered: { "@type": "Service", name: item.name },
      },
    })),
  ],
};

export default function Home() {
  return (
    <div className={`${styles.page} bg-white text-[#172232]`}>
      <HomeScroll />
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[100] -translate-y-24 bg-[#0755EA] px-5 py-3 text-sm font-semibold text-white focus:translate-y-0"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Pricing />
        <IndividualServices />
        <About />
        <WhyTecBuzz />
        <Ecommerce />
        <BusinessAutomation />
        <Process />
        <Industries />
        <DemoPortfolio />
        <RealPortfolio />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppContact />
    </div>
  );
}
