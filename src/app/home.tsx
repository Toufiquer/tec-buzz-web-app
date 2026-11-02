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
import type { CSSProperties, ReactNode } from "react";

import HomeAnimations from "./home-animations";
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
  "03": "সম্পূর্ণ প্যাকেজ নয়, আপনার ব্যবসার প্রয়োজন অনুযায়ী বেছে নিন শুধু দরকারি সার্ভিসগুলো—আলাদাভাবে, সাশ্রয়ী মূল্যে।",
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
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-none border px-5 py-3 text-sm font-semibold transition-colors duration-200 ${light ? "border-[#dfc78f] bg-white text-[#78530e] hover:bg-[#fff7df]" : secondary ? "border-slate-300 bg-transparent text-[#49352b] hover:border-[#0755EA] hover:text-[#0755EA]" : "border-[#0755EA] bg-[#0755EA] text-white hover:border-[#0645c0] hover:bg-[#0645c0]"} ${className}`}
    >
      {children}
    </a>
  );
}

function AnimatedText({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <span className={`${styles.textReveal} ${accent ? styles.textAccent : ""}`} data-aos="text-reveal">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(/\s+/).map((word, index) => (
          <span key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            <span className={styles.textWord} style={{ "--word-index": index } as CSSProperties}>
              {word}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

function SectionHeading({
  number,
  label,
  title,
  description,
  dark = false,
  showEyebrow = true,
  showTranslation = true,
}: {
  number?: string;
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
  showEyebrow?: boolean;
  showTranslation?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {showEyebrow && number && label && (
        <p
          data-aos="fade-up"
          className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-blue-200" : "text-[#0755EA]"}`}
        >
          <span className={dark ? "text-blue-200" : "text-slate-500"}>{number} /</span> {label}
        </p>
      )}
      <h2
        className={`text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] ${dark ? "text-white" : "text-[#49352b]"}`}
      >
        <AnimatedText text={title} accent />
      </h2>
      {showTranslation && number && sectionTranslations[number] && (
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          lang="bn"
          className={`mt-3 text-base leading-8 ${dark ? "text-blue-100" : "text-slate-600"}`}
        >
          {sectionTranslations[number]}
        </p>
      )}
      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className={`mt-5 max-w-xl text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function IconTile({ icon: Icon, dark = false }: { icon: LucideIcon; dark?: boolean }) {
  return (
    <span
      className={`${styles.iconTile} inline-flex size-11 shrink-0 items-center justify-center ${dark ? "bg-white/10 text-blue-200" : "bg-[#f7eed9] text-[#9a6b18]"}`}
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

function LiveDesignPreview({ name, url, previewImage }: { name: string; url: string; previewImage?: string }) {
  const domain = new URL(url).hostname.replace(/^www\./, "");

  return (
    <div className="relative aspect-video overflow-hidden border-b border-slate-200 bg-slate-100">
      <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-2 border-b border-slate-200 bg-white px-3">
        <span className="flex shrink-0 gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-[#fb7185]" />
          <span className="size-1.5 rounded-full bg-[#fbbf24]" />
          <span className="size-1.5 rounded-full bg-[#34d399]" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-sm bg-slate-100 px-2 py-1 text-center font-mono text-[9px] text-slate-500">
          {domain}
        </span>
        <span className="shrink-0 text-[8px] font-semibold tracking-[0.12em] text-[#0755EA]">
          {previewImage ? "SNAPSHOT" : "LIVE"}
        </span>
      </div>
      <div className="absolute inset-x-0 top-8 bottom-0 overflow-hidden bg-white">
        {previewImage ? (
          <Image
            alt={`${name} homepage design`}
            className="object-cover object-top"
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={previewImage}
          />
        ) : (
          <iframe
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 h-[200%] w-[200%] origin-top-left scale-50 border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin"
            src={url}
            tabIndex={-1}
            title={`${name} live website preview`}
          />
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-[#fffaf0]/95 via-[#fffaf0]/75 to-transparent px-3 pb-3 pt-10 text-[#49352b]">
        <span className="text-[10px] font-semibold tracking-wide">
          {previewImage ? "Homepage screenshot" : "Website design preview"}
        </span>
        <span className="text-[9px] text-[#765f50]">Open live site below ↗</span>
      </div>
    </div>
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
    <header className={`${styles.header} sticky top-0 z-50 border-b border-[#eadfca] bg-[#fffdf8]/95 backdrop-blur-md`}>
      <div className={`${container} flex h-20 items-center justify-between gap-6`}>
        <Brand />
        <HomeNavigation links={navigation} consultationUrl={consultation} />
        <div className="hidden xl:block">
          <ActionLink href={consultation}>
            Get Free Consultation <ArrowUpRight size={17} aria-hidden="true" />
          </ActionLink>
        </div>
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
    <div className={styles.motionStage} data-aos="zoom-in" data-aos-delay="150" aria-hidden="true">
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
      className={`${styles.hero} relative overflow-hidden border-b border-[#e5d5b5]`}
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
            className="text-[2.65rem] leading-[1.4] font-semibold tracking-tight text-[#49352b] sm:text-[3.5rem] lg:text-[3.85rem]"
          >
            <span className={styles.heroWord}>আপনার</span> <span className={styles.heroWord}>স্বপ্ন,</span>
            <br />
            <span className={styles.heroWord}>
              <span className={styles.shimmerText}>আমাদের</span>
            </span>{" "}
            <span className={styles.heroWord}>
              <span className={styles.shimmerText}>প্রযুক্তি!</span>
            </span>
          </h1>
          <p className="mt-5 text-base tracking-wide text-[#765f50] sm:text-lg">Website. E-commerce. CRM.</p>
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
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#765f50]">
            <p>
              <strong className="text-xl font-semibold text-[#8e6418]">৳12,300</strong> <span lang="bn">থেকে</span>
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#a77a22]" aria-hidden="true" />
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
        <h2
          id="pricing-title"
          lang="bn"
          className="text-3xl leading-snug font-semibold tracking-tight text-[#172232] sm:text-4xl"
        >
          <AnimatedText text="আমাদের প্যাকেজ সমূহ" accent />
        </h2>
        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((item, index) => {
            const popular = item.name === "Express";
            const TierIcon = item.name === "Starter" ? Package : popular ? Zap : Building2;
            return (
              <article
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`${styles.liftCard} group relative flex flex-col overflow-hidden border p-6 pt-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0755EA]/60 hover:shadow-[0_24px_50px_-20px_rgba(7,85,234,0.35)] focus-within:-translate-y-1 focus-within:border-[#0755EA] focus-within:shadow-[0_20px_44px_-20px_rgba(7,85,234,0.3)] motion-reduce:transform-none motion-reduce:transition-none ${popular ? "border-[#0755EA] bg-[#fcf6e8] shadow-[0_12px_32px_-16px_rgba(7,85,234,0.25)]" : "border-slate-200 bg-white shadow-[0_8px_24px_-20px_rgba(15,23,42,0.25)]"}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 transition-colors duration-300 ${popular ? "bg-[#0755EA]" : "bg-slate-200 group-hover:bg-[#0755EA]"}`}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`grid size-12 place-items-center transition-colors duration-300 ${popular ? "bg-[#0755EA] text-white" : "bg-[#0755EA]/[0.07] text-[#0755EA] group-hover:bg-[#0755EA] group-hover:text-white"}`}
                  >
                    <TierIcon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600">
                    <Clock3 size={14} className="text-[#0755EA]" aria-hidden="true" />
                    <span className="sr-only">Delivery:</span>
                    {item.delivery}
                  </span>
                </div>
                {popular && (
                  <span className="mt-5 w-fit border border-[#0755EA]/20 bg-blue-50 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#0755EA] uppercase">
                    Most Popular
                  </span>
                )}
                <h3 className={`${popular ? "mt-3" : "mt-5"} text-2xl font-semibold tracking-tight text-[#172232]`}>
                  {item.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{item.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <s className="text-sm text-slate-500">{formatPrice(item.regularPrice)}</s>
                  <span className="border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[#0755EA]">
                    Save {item.discount}
                  </span>
                </div>
                <p className="mt-1 text-[2.75rem] leading-tight font-semibold tracking-tight text-[#172232]">
                  {formatPrice(item.price)}
                </p>
                <div className="my-5 border-t border-slate-200 transition-colors duration-300 group-hover:border-blue-200" />
                <div className="border border-slate-200 bg-white/70 p-4">
                  <CheckList
                    items={[
                      "E-commerce + CMS + CRM",
                      "Admin panel + SEO + PWA",
                      item.posts ? `${item.posts} Posts + ${item.reels} Reels` : "Posts / Reels নেই",
                    ]}
                  />
                </div>
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
        <section className="mt-10 border border-slate-200 bg-white" aria-labelledby="comparison-title">
          <div className="flex min-h-16 items-center gap-3 border-b border-[#eadfca] bg-[#fcf6e8] px-5 py-5 sm:px-7">
            <ListFilter size={20} className="shrink-0 text-[#0755EA]" aria-hidden="true" />
            <h3 id="comparison-title" className="text-lg font-semibold text-[#0755EA] sm:text-xl">
              <AnimatedText text="কোন প্যাকেজে কী পাচ্ছেন?" />
            </h3>
          </div>
          <div
            role="region"
            aria-label="Full package feature comparison, scroll horizontally on small screens"
            tabIndex={0}
            data-aos="fade-up"
            className="overflow-x-auto"
          >
            <table className="w-full min-w-160 border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#f1e4c6] text-[#49352b]">
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
                  <tr className="bg-[#fcf6e8]">
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
                        <td key={index} className={`px-5 py-3.5 text-center ${index === 1 ? "bg-[#fffaf0]" : ""}`}>
                          <ComparisonValue value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </section>
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
      className={`${sectionSpace} border-y border-[#eadfca] bg-[#fcf6e8]`}
    >
      <div className={container}>
        <div id="individual-title">
          <SectionHeading number="03" title="প্যাকেজ নয়, পছন্দ আপনার!" showEyebrow={false} />
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {individualServices.map((item, index) => (
            <article
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${styles.liftCard} flex flex-col border border-slate-200 bg-white p-6 sm:p-7`}
            >
              <div className="flex items-center justify-between">
                <IconTile icon={icons[index]} />
                <span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">
                  Individual service
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {formatPrice(item.price)}
                {item.unit && <span className="text-sm font-normal text-slate-500">{item.unit}</span>}
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
        <p data-aos="fade-up" className="mt-5 text-xs leading-5 font-medium text-red-600">
          Business Webapp pricing excludes domain registration and hosting.
        </p>
      </div>
    </section>
  );
}

const aboutDescription =
  "TecBuzz বাংলাদেশের ব্যবসাগুলোর জন্য আধুনিক ওয়েবসাইট, ওয়েব অ্যাপ্লিকেশন ও কার্যকর ডিজিটাল সমাধান তৈরি করে। পাঁচ বছরের বেশি অভিজ্ঞতাসম্পন্ন আমাদের ডেভেলপাররা যুক্তরাজ্য থেকে রিমোটলি কাজ করে Next.js প্রযুক্তিতে দ্রুতগতির ও ব্যবহারবান্ধব ওয়েবসাইট তৈরি করেন। ই-কমার্স, বিজনেস অটোমেশন ও ডিজিটাল মার্কেটিংয়ের মাধ্যমে ব্যবসা পরিচালনা সহজ করা এবং দীর্ঘমেয়াদি প্রবৃদ্ধিতে সহায়তা করাই আমাদের লক্ষ্য।";

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className={sectionSpace}>
      <div className={`${container} grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
        <div
          data-aos="zoom-in"
          className={`${styles.experienceCard} relative border border-[#eadfca] bg-[#fffaf0] p-8 text-[#49352b] shadow-[0_18px_50px_-30px_rgba(138,100,24,0.24)] sm:p-10`}
        >
          <p className="mt-5 bg-linear-to-br from-[#8e6418] to-[#b78627] bg-clip-text text-[7rem] leading-none font-semibold tracking-tighter text-transparent sm:text-[9rem]">
            5<span className="text-6xl">+</span>
          </p>
          <p className="mt-4 max-w-60 text-lg leading-7 text-[#765f50]">years of real-world development experience.</p>
          <div className="mt-9 space-y-4 border-t border-[#eadfca] pt-6">
            <p className="flex items-center gap-3 text-sm text-[#765f50]">
              <MapPin size={17} className="shrink-0 text-[#a77a22]" aria-hidden="true" />
              Serving businesses across Bangladesh
            </p>
            <p className="flex items-center gap-3 text-sm text-[#765f50]">
              <Globe2 size={17} className="shrink-0 text-[#a77a22]" aria-hidden="true" />
              Developers working remotely in the UK
            </p>
          </div>
          <div
            className="absolute top-0 right-0 h-1 w-24 bg-linear-to-r from-[#b78627] to-[#e4c875]"
            aria-hidden="true"
          />
        </div>
        <div id="about-title">
          <SectionHeading title="প্রযুক্তি নয়, ফলাফলই আসল!" showEyebrow={false} showTranslation={false} />
          <p data-aos="fade-up" data-aos-delay="100" lang="bn" className="mt-6 text-base leading-8 text-slate-600">
            {aboutDescription}
          </p>
          <div data-aos="fade-up" data-aos-delay="150" className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
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
      className={`${sectionSpace} border-y border-[#eadfca] bg-[#fcf6e8]`}
    >
      <div className={container}>
        <div id="why-title">
          <SectionHeading number="05" title="আপনার চাহিদায়, আমাদের উদ্ভাবন!" showEyebrow={false} />
        </div>
        <div className="mt-10 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
              className={`${styles.liftCard} bg-white p-6 transition-colors hover:bg-blue-50/50 sm:p-7`}
            >
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
            title="অর্ডার ম্যানেজমেন্ট এখন আরও সহজ!"
            description="E-commerce website development that connects your storefront with the daily work behind it. Included in every combo package."
            showEyebrow={false}
          />
          <div data-aos="fade-up" data-aos-delay="100" className="mt-7">
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
            data-aos="fade-up"
            className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#0755EA]"
          >
            Explore our demo websites <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className={`${styles.storeVisual} border border-[#eadfca] bg-[#fcf6e8] p-4 sm:p-7`}
        >
          <div className="border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Store size={18} className="text-[#0755EA]" aria-hidden="true" />
                Your online store
              </span>
              <span className="text-[9px] tracking-wider text-slate-500 uppercase">Illustration</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 border border-[#eadfca] bg-[#fcf6e8] px-3 py-3 text-xs text-slate-500">
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
          <div className="mt-4 flex items-center gap-3 bg-[#f1e4c6] px-5 py-4 text-[#49352b]">
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
    <section
      id="automation"
      aria-labelledby="automation-title"
      className={`${sectionSpace} border-y border-[#eadfca] bg-[#fffaf0]`}
    >
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div id="automation-title">
            <SectionHeading number="07" title="প্রযুক্তি সামলাবে, ব্যবসা এগোবে!" showEyebrow={false} />
          </div>
          <p data-aos="fade-left" className="max-w-md text-base leading-7 text-[#765f50]">
            Update your content without a developer for routine changes. Keep your leads, team, and website organized
            with CRM software built for businesses in Bangladesh.
          </p>
        </div>
        <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className={`${styles.liftCard} flex gap-4 border-t border-[#eadfca] py-6`}
            >
              <IconTile icon={item.icon} />
              <div>
                <h3 className="text-sm font-semibold text-[#49352b]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#765f50]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p data-aos="fade-up" className="mt-4 border-l-2 border-[#b78627] pl-4 text-xs leading-6 text-[#765f50]">
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
            title="আইডিয়া দিন, বাকিটা আমাদের!"
            description="Clear conversations and a practical plan, from your first message to your live website."
            showEyebrow={false}
          />
        </div>
        <ol className="mt-10 grid gap-0 lg:grid-cols-4">
          {steps.map((item, index) => (
            <li
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${styles.processStep} relative border-l border-slate-200 pb-8 pl-7 last:pb-0 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-7 lg:pb-0 lg:pl-0`}
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
      className={`${sectionSpace} border-y border-[#eadfca] bg-[#fcf6e8]`}
    >
      <div className={container}>
        <div id="industries-title">
          <SectionHeading
            number="09"
            title="যেমন ব্যবসা, তেমন সমাধান!"
            description="Practical website and automation use cases for businesses across Bangladesh. Discuss your exact requirements with us."
            showEyebrow={false}
          />
        </div>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <article
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
              className={`${styles.liftCard} border-t border-slate-300 py-6`}
            >
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
            <SectionHeading number="10" title="আইডিয়া থেকে অসীম সম্ভাবনা!" showEyebrow={false} />
          </div>
          <a
            href="#real-portfolio"
            data-aos="fade-up"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-[#0755EA]"
          >
            See real websites <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((item, index) => (
            <article
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className={`${styles.liftCard} ${styles.portfolioCard} group overflow-hidden border border-slate-200 bg-white`}
            >
              <LiveDesignPreview name={item.name} url={item.url} previewImage={item.previewImage} />
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
        <p data-aos="fade-up" className="mt-5 text-xs leading-5 text-slate-500">
          Each preview shows the live demo website. Open a demo to explore it in full.
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
      className={`${sectionSpace} border-y border-[#eadfca] bg-[#fcf6e8]`}
    >
      <div className={container}>
        <div id="real-title">
          <SectionHeading number="11" title="কাজই বলুক আমাদের পরিচয়!" showEyebrow={false} />
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {realProjects.map((item, index) => (
            <article
              key={item.url}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100}
              className={`${styles.liftCard} ${styles.portfolioCard} group flex flex-col overflow-hidden border border-slate-200 bg-white`}
            >
              <LiveDesignPreview
                name={item.name}
                url={item.url}
                previewImage={"previewImage" in item ? item.previewImage : undefined}
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
                  <Globe2 size={15} className="text-[#0755EA]" aria-hidden="true" />
                  Client website 0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.name} website (opens in a new tab)`}
                  className="mt-auto flex min-h-12 items-center justify-between gap-2 border-t border-slate-200 pt-4 text-sm font-medium text-[#0755EA]"
                >
                  <span className="break-all">{item.domain}</span>
                  <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
                </a>
              </div>
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
      <div className={`${container} grid gap-8`}>
        <div id="faq-title">
          <SectionHeading number="12" title="Good questions. Clear answers." showEyebrow={false} />
          <a
            href={consultation}
            data-aos="fade-up"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0755EA]"
          >
            Ask us on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="border-t border-slate-200">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 50}
              className={`${styles.faqItem} group border-b border-slate-200`}
            >
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
      className="bg-linear-to-br from-[#fffaf0] via-[#f8f0df] to-[#f1e4c6] py-16 text-[#49352b] sm:py-20"
    >
      <div className={`${container} grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20`}>
        <div>
          <h2 id="contact-title" className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            <AnimatedText text="এবার আপনার ব্যবসার পালা!" accent />
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            lang="bn"
            className="mt-3 max-w-lg text-base leading-8 text-[#765f50]"
          >
            আপনার ব্যবসার জন্য সঠিক Website ও Package বেছে নিতে আমাদের সঙ্গে কথা বলুন।
          </p>
          <div data-aos="fade-up" data-aos-delay="150" className="mt-7">
            <ActionLink href={consultation} light>
              <MessageCircle size={18} aria-hidden="true" />
              Get Free Consultation
              <ArrowUpRight size={17} aria-hidden="true" />
            </ActionLink>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a
              href="https://wa.me/8801607333369"
              className="flex items-center gap-2 text-[#60471e] underline-offset-4 hover:underline"
            >
              <MessageCircle size={16} aria-hidden="true" />
              01607333369
            </a>
            <a
              href="mailto:tecbuzz@gmail.com"
              className="flex items-center gap-2 text-[#60471e] underline-offset-4 hover:underline"
            >
              <Mail size={16} aria-hidden="true" />
              tecbuzz@gmail.com
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className={`${styles.liftCard} border border-[#e6d7b9] bg-white/75 p-6 shadow-[0_18px_50px_-30px_rgba(138,100,24,0.22)] sm:p-8`}
        >
          <h3 className="text-lg font-semibold">
            <AnimatedText text="Have a package in mind?" />
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#765f50]">Start a conversation with your preferred option.</p>
          <div className="mt-5 divide-y divide-[#eadfca]">
            {packages.map((item) => (
              <a
                key={item.name}
                href={whatsappUrl(
                  `Hello TecBuzz, I would like to discuss the ${item.name} package at ${formatPrice(item.price)} for my business.`,
                )}
                className="flex min-h-16 items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-[#9a6b18]"
              >
                <span>
                  {item.name} <span className="ml-2 text-xs text-[#765f50]">{formatPrice(item.price)}</span>
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-[#765f50]">
            Domain and hosting are separate. Content inclusions are one-time.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#eadfca] bg-[#fffaf0]">
      <div className={`${container} grid gap-9 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]`}>
        <div data-aos="fade-up">
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
          <h2 className="mb-5 text-xs font-semibold tracking-wider uppercase">
            <AnimatedText text="Explore" />
          </h2>
          <nav data-aos="fade-up" data-aos-delay="100" aria-label="Footer navigation" className="flex flex-col gap-3">
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
          <h2 className="mb-5 text-xs font-semibold tracking-wider uppercase">
            <AnimatedText text="Our services" />
          </h2>
          <nav data-aos="fade-up" data-aos-delay="150" aria-label="Services" className="flex flex-col gap-3">
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
          <h2 className="mb-5 text-xs font-semibold tracking-wider uppercase">
            <AnimatedText text="Selected projects" />
          </h2>
          <nav data-aos="fade-up" data-aos-delay="200" aria-label="Portfolio websites" className="flex flex-col gap-3">
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
    <div data-home-animations className={`${styles.page} bg-[#fffaf0] text-[#49352b]`}>
      <HomeAnimations />
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
