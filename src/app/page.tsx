"use client";

import { useState, useEffect, useRef } from "react";

type Service = {
  id: number;
  icon: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  tag: string;
};

const services: Service[] = [
  {
    id: 1,
    icon: "⚡",
    titleBn: "দ্রুত লোডিং পারফরম্যান্স",
    titleEn: "Fast Loading Performance",
    descBn:
      "আমাদের ওয়েবসাইট সব ডিভাইসে দ্রুত লোড হওয়ার জন্য অপ্টিমাইজ করা। ব্যবহারকারীর অভিজ্ঞতা উন্নত করে এবং bounce rate কমায়।",
    descEn: "Optimized for speed across all devices.",
    tag: "Performance",
  },
  {
    id: 2,
    icon: "∞",
    titleBn: "আনলিমিটেড পেজ তৈরি",
    titleEn: "Unlimited Page Creation",
    descBn:
      "আপনার ব্যবসার প্রয়োজনে যতটা পেজ দরকার তৈরি করুন — কোনো সীমাবদ্ধতা নেই। কন্টেন্ট বা সার্ভিস বাড়ার সাথে সাথে সহজে স্কেল করুন।",
    descEn: "No restrictions. Scale as you grow.",
    tag: "Scalability",
  },
  {
    id: 3,
    icon: "☁",
    titleBn: "লাইফটাইম হোস্টিং",
    titleEn: "Lifetime Hosting",
    descBn:
      "দীর্ঘমেয়াদী হোস্টিং সমাধান — বারবার হোস্টিং নিয়ে চিন্তা করতে হবে না। নির্ভরযোগ্য এবং ঝামেলামুক্ত।",
    descEn: "Reliable, hassle-free long-term hosting.",
    tag: "Hosting",
  },
  {
    id: 4,
    icon: "🔐",
    titleBn: "নিরাপদ অথেন্টিকেশন",
    titleEn: "Secure Auth & Authorization",
    descBn:
      "রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোলসহ উন্নত লগইন সিস্টেম — শুধুমাত্র অনুমোদিত ব্যবহারকারীরা নির্দিষ্ট ডেটা অ্যাক্সেস করতে পারবে।",
    descEn: "Role-based access keeps your platform safe.",
    tag: "Security",
  },
  {
    id: 5,
    icon: "👥",
    titleBn: "এমপ্লয়ি ম্যানেজমেন্ট",
    titleEn: "Employee Management System",
    descBn:
      "আপনার টিম পরিচালনা করুন সহজে — কর্মীদের যোগ করা, আপডেট করা এবং তাদের কার্যক্রম পর্যবেক্ষণের জন্য বিল্ট-ইন টুল।",
    descEn: "Built-in tools for team management.",
    tag: "Management",
  },
  {
    id: 6,
    icon: "📱",
    titleBn: "প্রোগ্রেসিভ ওয়েব অ্যাপ",
    titleEn: "Progressive Web App (PWA)",
    descBn:
      "আপনার ওয়েবসাইট মোবাইল ও ডেস্কটপে অ্যাপের মতো কাজ করবে — দ্রুত, ইনস্টলযোগ্য এবং সীমিত ইন্টারনেটেও অ্যাক্সেসযোগ্য।",
    descEn: "Installable, offline-ready web experience.",
    tag: "PWA",
  },
  {
    id: 7,
    icon: "🚫",
    titleBn: "ইউজার ব্লকিং সিস্টেম",
    titleEn: "User Blocking System",
    descBn:
      "অ্যাডমিনরা প্রয়োজনে ব্যবহারকারীদের ব্লক বা সীমাবদ্ধ করতে পারবেন — প্ল্যাটফর্মের নিরাপত্তা নিশ্চিত করতে।",
    descEn: "Admin control to maintain platform integrity.",
    tag: "Control",
  },
  {
    id: 8,
    icon: "📊",
    titleBn: "Google Tag & Facebook Pixel",
    titleEn: "Analytics Integration",
    descBn:
      "Google Tag Manager ও Facebook Pixel সহজে ইন্টিগ্রেট করে ব্যবহারকারীর আচরণ ট্র্যাক করুন এবং মার্কেটিং পারফরম্যান্স পর্যবেক্ষণ করুন।",
    descEn: "Track behavior and ad performance seamlessly.",
    tag: "Analytics",
  },
  {
    id: 9,
    icon: "🔍",
    titleBn: "SEO অপ্টিমাইজেশন",
    titleEn: "SEO Optimization",
    descBn:
      "আপনার ওয়েবসাইটকে সার্চ ইঞ্জিনের জন্য উপযুক্তভাবে তৈরি করা হয় — Google-এ ভিজিবিলিটি বাড়ায় এবং অর্গানিক ট্র্যাফিক আনে।",
    descEn: "Search-engine structured for organic growth.",
    tag: "SEO",
  },
  {
    id: 10,
    icon: "📘",
    titleBn: "Facebook পেজ সেটআপ",
    titleEn: "Facebook Page Setup",
    descBn:
      "আপনার Facebook পেজ তৈরি ও অপ্টিমাইজ করে দেওয়া হবে এবং প্রথম সপ্তাহের জন্য রেডি-টু-ইউজ কন্টেন্ট প্রদান করা হবে।",
    descEn: "Page creation + first week content ready to go.",
    tag: "Social",
  },
  {
    id: 11,
    icon: "🚀",
    titleBn: "অ্যাড বুস্টিং সাপোর্ট",
    titleEn: "Ad Boosting Support",
    descBn:
      "পেইড অ্যাড পরিচালনা ও অপ্টিমাইজ করতে সাহায্য করা হবে — সঠিক দর্শকদের কাছে পৌঁছান এবং ভালো ফলাফল পান।",
    descEn: "Reach your audience, maximize ROI.",
    tag: "Marketing",
  },
];

type StatItem = { value: string; labelBn: string; labelEn: string };

type PricingPlan = {
  titleBn: string;
  titleEn: string;
  offerPrice: number;
  realPrice: number;
  badge?: string;
  features: string[];
};

const WHATSAPP_NUMBER = "8801607333369";

const pricingPlans: PricingPlan[] = [
  {
    titleBn: "স্টার্টার প্যাকেজ",
    titleEn: "Starter",
    offerPrice: 5000,
    realPrice: 7000,
    features: [
      "দ্রুত লোডিং ওয়েবসাইট",
      "আনলিমিটেড পেজ",
      "SEO অপ্টিমাইজেশন",
      "Facebook পেজ সেটআপ",
      "লাইফটাইম হোস্টিং",
    ],
  },
  {
    titleBn: "গ্রোথ প্যাকেজ",
    titleEn: "Growth",
    offerPrice: 18000,
    realPrice: 25000,
    badge: "Most Popular",
    features: [
      "Starter-এর সব সুবিধা",
      "নিরাপদ Auth সিস্টেম",
      "এমপ্লয়ি ম্যানেজমেন্ট",
      "Google Tag & FB Pixel",
      "PWA সাপোর্ট",
      "Ad বুস্টিং সাপোর্ট",
    ],
  },
  {
    titleBn: "এন্টারপ্রাইজ প্যাকেজ",
    titleEn: "Enterprise",
    offerPrice: 80000,
    realPrice: 120000,
    features: [
      "Growth-এর সব সুবিধা",
      "কাস্টম ফিচার ডেভেলপমেন্ট",
      "ইউজার ব্লকিং সিস্টেম",
      "ডেডিকেটেড সাপোর্ট টিম",
      "প্রায়রিটি ডেলিভারি",
      "সম্পূর্ণ কাস্টম ডিজাইন",
    ],
  },
];

const stats: StatItem[] = [
  { value: "৫০০+", labelBn: "সন্তুষ্ট ক্লায়েন্ট", labelEn: "Happy Clients" },
  { value: "৯৯.৯%", labelBn: "আপটাইম গ্যারান্টি", labelEn: "Uptime" },
  { value: "২৪/৭", labelBn: "সাপোর্ট সেবা", labelEn: "Support" },
  { value: "১১+", labelBn: "প্রিমিয়াম ফিচার", labelEn: "Features" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        transitionDelay: `${(index % 4) * 80}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
      }}
    >
      <span className="service-tag">{service.tag}</span>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title-bn">{service.titleBn}</h3>
      <p className="service-title-en">{service.titleEn}</p>
      <p className="service-desc">{service.descBn}</p>
      <div className="service-divider" />
      <p className="service-desc-en">{service.descEn}</p>
    </div>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className="stat-card"
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.9)",
      }}
    >
      <span className="stat-value">{stat.value}</span>
      <span className="stat-label-bn">{stat.labelBn}</span>
      <span className="stat-label-en">{stat.labelEn}</span>
    </div>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const { ref, inView } = useInView();
  const isPopular = !!plan.badge;
  const discount = Math.round(((plan.realPrice - plan.offerPrice) / plan.realPrice) * 100);
  const waMessage = encodeURIComponent(
    `হ্যালো TecBuzz! আমি ${plan.titleBn} (${plan.titleEn}) সম্পর্কে জানতে চাই।`
  );

  return (
    <div
      ref={ref}
      className={`pricing-card${isPopular ? " pricing-card--popular" : ""}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
      }}
    >
      {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
      <div className="pricing-header">
        <p className="pricing-title-bn">{plan.titleBn}</p>
        <p className="pricing-title-en">{plan.titleEn}</p>
      </div>
      <div className="pricing-prices">
        <div className="pricing-offer">
          <span className="price-currency">৳</span>
          <span className="price-amount">{plan.offerPrice.toLocaleString("bn-BD")}</span>
        </div>
        <div className="pricing-real-row">
          <span className="price-real">৳{plan.realPrice.toLocaleString("en-IN")}</span>
          <span className="price-save">{discount}% ছাড়</span>
        </div>
      </div>
      <ul className="pricing-features">
        {plan.features.map((f, i) => (
          <li key={i} className="pricing-feature-item">
            <span className="feature-check">✓</span>
            <span className="feature-text">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`pricing-cta${isPopular ? " pricing-cta--popular" : ""}`}
      >
        WhatsApp-এ অর্ডার করুন
      </a>
    </div>
  );
}

export default function TecBuzzPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0d0d0d;
          --paper: #f5f1ea;
          --cream: #ede8df;
          --accent: #c8440a;
          --accent2: #1a4f8a;
          --gold: #b8960c;
          --muted: #6b6355;
          --border: #d6cfc3;
          --card-bg: #faf7f2;
          --radius: 2px;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 18px 5%;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.3s ease;
          background: transparent;
        }
        .nav.scrolled {
          background: rgba(245,241,234,0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          padding: 12px 5%;
        }
        .nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.7rem;
          color: var(--ink);
          letter-spacing: -0.5px;
          text-decoration: none;
        }
        .nav-logo span { color: var(--accent); }
        .nav-tagline {
          font-family: 'Tiro Bangla', serif;
          font-size: 0.78rem;
          color: var(--muted);
          letter-spacing: 0.02em;
        }
        .nav-cta {
          background: var(--accent);
          color: #fff;
          font-size: 0.82rem;
          font-weight: 500;
          padding: 9px 22px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.04em;
          transition: background 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .nav-cta:hover { background: #a33508; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center;
          padding: 120px 5% 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-text {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'DM Serif Display', serif;
          font-size: clamp(120px, 22vw, 280px);
          color: rgba(200,68,10,0.04);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.05em;
        }
        .hero-rule {
          width: 60px; height: 3px;
          background: var(--accent);
          margin-bottom: 28px;
        }
        .hero-eyebrow {
          font-family: 'Tiro Bangla', serif;
          font-size: 1rem;
          color: var(--accent);
          margin-bottom: 12px;
          letter-spacing: 0.04em;
        }
        .hero-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.8rem, 7vw, 6rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          max-width: 820px;
          margin-bottom: 16px;
        }
        .hero-headline-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: clamp(1.4rem, 3.5vw, 2.8rem);
          color: var(--muted);
          line-height: 1.4;
          margin-bottom: 36px;
          font-weight: 400;
          max-width: 640px;
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary {
          background: var(--ink);
          color: var(--paper);
          padding: 14px 36px;
          font-size: 0.9rem;
          font-weight: 500;
          border: none; cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.04em;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover { background: var(--accent); }
        .btn-secondary {
          background: transparent;
          color: var(--ink);
          padding: 13px 36px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1.5px solid var(--border);
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.04em;
          text-decoration: none;
        }
        .btn-secondary:hover { border-color: var(--ink); }
        .hero-scroll-indicator {
          position: absolute; bottom: 40px; left: 5%;
          display: flex; align-items: center; gap: 10px;
          color: var(--muted); font-size: 0.78rem; letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 40px; height: 1px; background: var(--muted);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { width: 40px; opacity: 0.5; }
          50% { width: 70px; opacity: 1; }
        }

        /* STATS */
        .stats-section {
          background: var(--ink);
          padding: 60px 5%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1px;
          border-top: 3px solid var(--accent);
        }
        .stat-card {
          padding: 36px 28px;
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 4px;
          background: var(--ink);
          transition: all 0.5s cubic-bezier(0.34,1.56,0.64,1);
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .stat-card:last-child { border-right: none; }
        .stat-value {
          font-family: 'DM Serif Display', serif;
          font-size: 2.8rem;
          color: var(--accent);
          line-height: 1;
        }
        .stat-label-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
        }
        .stat-label-en {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* SERVICES */
        .services-section {
          padding: 100px 5%;
        }
        .section-header {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 60px; flex-wrap: wrap; gap: 20px;
        }
        .section-label {
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .section-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 3.4rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        .section-title-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          color: var(--muted);
          margin-top: 8px;
        }
        .section-count {
          font-family: 'DM Serif Display', serif;
          font-size: 5rem;
          color: rgba(200,68,10,0.08);
          line-height: 1;
          letter-spacing: -0.05em;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .service-card {
          background: var(--card-bg);
          padding: 36px 32px;
          position: relative;
          transition: all 0.5s ease;
          cursor: default;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute; bottom: 0; left: 0;
          height: 2px; width: 0;
          background: var(--accent);
          transition: width 0.35s ease;
        }
        .service-card:hover::before { width: 100%; }
        .service-card:hover { background: #fff; }
        .service-tag {
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent2);
          background: rgba(26,79,138,0.07);
          padding: 3px 10px;
          display: inline-block;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .service-icon {
          font-size: 2rem;
          margin-bottom: 14px;
          line-height: 1;
        }
        .service-title-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: 1.15rem;
          color: var(--ink);
          margin-bottom: 4px;
          line-height: 1.4;
        }
        .service-title-en {
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 14px;
          font-weight: 500;
        }
        .service-desc {
          font-family: 'Tiro Bangla', serif;
          font-size: 0.9rem;
          color: #4a4338;
          line-height: 1.75;
        }
        .service-divider {
          width: 24px; height: 1px;
          background: var(--border);
          margin: 14px 0;
        }
        .service-desc-en {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.5;
          font-style: italic;
        }

        /* CTA */
        .cta-section {
          background: var(--accent);
          padding: 90px 5%;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: 'TecBuzz';
          position: absolute;
          font-family: 'DM Serif Display', serif;
          font-size: 14vw;
          color: rgba(0,0,0,0.07);
          bottom: -20px;
          left: 50%; transform: translateX(-50%);
          white-space: nowrap;
          pointer-events: none;
        }
        .cta-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 4rem);
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }
        .cta-title-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: clamp(1rem, 2.5vw, 1.6rem);
          color: rgba(255,255,255,0.75);
          margin-bottom: 36px;
        }
        .btn-white {
          background: #fff;
          color: var(--accent);
          padding: 15px 44px;
          font-size: 0.9rem;
          font-weight: 600;
          border: none; cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-white:hover { background: var(--ink); color: #fff; }

        /* FOOTER */
        .footer {
          background: #0d0d0d;
          padding: 50px 5% 30px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 24px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-brand {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: #fff;
        }
        .footer-brand span { color: var(--accent); }
        .footer-tagline {
          font-family: 'Tiro Bangla', serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.4);
          margin-top: 6px;
        }
        .footer-links {
          display: flex; gap: 28px; flex-wrap: wrap;
          align-items: center;
        }
        .footer-link {
          color: rgba(255,255,255,0.45);
          font-size: 0.82rem;
          text-decoration: none;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--accent); }
        .footer-bottom {
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.04em;
        }
        .footer-copy-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.2);
        }

        /* ANIMATIONS */
        .fade-up { transition: opacity 0.6s ease, transform 0.6s ease; }

        /* PRICING */
        .pricing-section {
          padding: 100px 5%;
          background: var(--cream);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 60px;
        }
        .pricing-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          padding: 40px 32px;
          position: relative;
          transition: all 0.5s ease;
          display: flex; flex-direction: column; gap: 28px;
        }
        .pricing-card:hover {
          border-color: var(--accent);
          box-shadow: 0 12px 40px rgba(200,68,10,0.1);
          transform: translateY(-4px) !important;
        }
        .pricing-card--popular {
          background: var(--ink);
          border-color: var(--ink);
        }
        .pricing-card--popular:hover {
          border-color: var(--accent);
          box-shadow: 0 16px 48px rgba(0,0,0,0.25);
        }
        .pricing-badge {
          position: absolute; top: -13px; left: 32px;
          background: var(--accent);
          color: #fff;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 14px;
        }
        .pricing-header { display: flex; flex-direction: column; gap: 2px; }
        .pricing-title-bn {
          font-family: 'Tiro Bangla', serif;
          font-size: 1.15rem;
          color: var(--ink);
        }
        .pricing-card--popular .pricing-title-bn { color: #fff; }
        .pricing-title-en {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
        }
        .pricing-card--popular .pricing-title-en { color: rgba(255,255,255,0.45); }
        .pricing-prices { display: flex; flex-direction: column; gap: 6px; }
        .pricing-offer { display: flex; align-items: baseline; gap: 4px; }
        .price-currency {
          font-family: 'DM Serif Display', serif;
          font-size: 1.6rem;
          color: var(--accent);
          line-height: 1;
        }
        .price-amount {
          font-family: 'DM Serif Display', serif;
          font-size: 3.2rem;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .pricing-real-row { display: flex; align-items: center; gap: 10px; }
        .price-real {
          font-size: 0.88rem;
          color: var(--muted);
          text-decoration: line-through;
        }
        .pricing-card--popular .price-real { color: rgba(255,255,255,0.35); }
        .price-save {
          background: rgba(200,68,10,0.12);
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 2px 8px;
          letter-spacing: 0.04em;
        }
        .pricing-card--popular .price-save {
          background: rgba(200,68,10,0.25);
        }
        .pricing-features {
          list-style: none;
          display: flex; flex-direction: column; gap: 10px;
          flex: 1;
        }
        .pricing-feature-item {
          display: flex; align-items: flex-start; gap: 10px;
        }
        .feature-check {
          color: var(--accent);
          font-weight: 700;
          font-size: 0.8rem;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .feature-text {
          font-family: 'Tiro Bangla', serif;
          font-size: 0.88rem;
          color: #4a4338;
          line-height: 1.5;
        }
        .pricing-card--popular .feature-text { color: rgba(255,255,255,0.7); }
        .pricing-cta {
          display: block;
          text-align: center;
          padding: 13px 24px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          border: 1.5px solid var(--border);
          color: var(--ink);
          transition: all 0.2s;
          background: transparent;
        }
        .pricing-cta:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
        .pricing-cta--popular {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
        .pricing-cta--popular:hover {
          background: #a33508;
          border-color: #a33508;
        }

        /* WHATSAPP FAB */
        .whatsapp-fab {
          position: fixed;
          bottom: 28px; right: 28px;
          z-index: 200;
          display: flex; align-items: center; gap: 10px;
          background: #25d366;
          color: #fff;
          padding: 13px 20px 13px 16px;
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          box-shadow: 0 6px 24px rgba(37,211,102,0.4);
          transition: all 0.25s ease;
          animation: fabPulse 3s ease-in-out infinite;
        }
        .whatsapp-fab:hover {
          background: #1ebe5d;
          box-shadow: 0 8px 32px rgba(37,211,102,0.55);
          transform: translateY(-2px);
        }
        .whatsapp-fab svg { width: 20px; height: 20px; flex-shrink: 0; }
        @keyframes fabPulse {
          0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 6px 32px rgba(37,211,102,0.65); }
        }

        @media (max-width: 768px) {
          .hero { padding: 100px 5% 60px; }
          .section-header { flex-direction: column; align-items: flex-start; }
          .services-grid { grid-template-columns: 1fr; }
          .stats-section { grid-template-columns: repeat(2, 1fr); }
          .stat-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .pricing-grid { grid-template-columns: 1fr; }
          .whatsapp-fab span { display: none; }
          .whatsapp-fab { padding: 14px; border-radius: 50%; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div>
          <div className="nav-logo">
            Tec<span>Buzz</span>
          </div>
          <div className="nav-tagline">আপনার ডিজিটাল সমাধান</div>
        </div>
        <a href="#contact" className="nav-cta">
          যোগাযোগ করুন
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-text">TecBuzz</div>
        <div className="hero-rule" />
        <p className="hero-eyebrow">
          ডিজিটাল বাংলাদেশের বিশ্বস্ত প্রযুক্তি অংশীদার
        </p>
        <h1 className="hero-headline">
          Build Smarter.
          <br />
          Grow Faster.
        </h1>
        <p className="hero-headline-bn">
          আপনার ব্যবসাকে ডিজিটালে নিয়ে যান —<br />
          আমরা আছি প্রতিটি পদক্ষেপে।
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            আমাদের সেবা দেখুন →
          </a>
          <a href="#contact" className="btn-secondary">
            Get Started
          </a>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} index={i} />
        ))}
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="section-header">
          <div>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">
              Our Services
            </h2>
            <p className="section-title-bn">
              আমাদের সেবাসমূহ — আপনার সাফল্যের জন্য তৈরি
            </p>
          </div>
          <div className="section-count">১১</div>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="section-header">
          <div>
            <p className="section-label">Pricing Plans</p>
            <h2 className="section-title">সাশ্রয়ী মূল্যে<br />প্রিমিয়াম সেবা</h2>
            <p className="section-title-bn">
              সীমিত সময়ের অফার — আজই সিদ্ধান্ত নিন
            </p>
          </div>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <h2 className="cta-title">
          Ready to Launch
          <br />
          Your Vision?
        </h2>
        <p className="cta-title-bn">
          আজই শুরু করুন — আপনার স্বপ্নের ওয়েবসাইট মাত্র একটি কলের দূরত্বে
        </p>
        <a href="mailto:hello@tecbuzz.com" className="btn-white">
          আমাদের সাথে কথা বলুন
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 16, color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", textDecoration: "none", fontFamily: "'Tiro Bangla', serif" }}
        >
          অথবা WhatsApp করুন: 01607333369
        </a>
      </section>

      {/* WHATSAPP FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("হ্যালো TecBuzz! আমি আপনাদের সেবা সম্পর্কে জানতে চাই।")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp করুন</span>
      </a>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Tec<span>Buzz</span>
            </div>
            <div className="footer-tagline">
              আপনার ডিজিটাল সাফল্যের অংশীদার
            </div>
          </div>
          <div className="footer-links">
            {["Services", "About", "Portfolio", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} TecBuzz. All rights reserved.
          </span>
          <span className="footer-copy-bn">
            সর্বস্বত্ব সংরক্ষিত · TecBuzz Bangladesh
          </span>
        </div>
      </footer>
    </>
  );
}