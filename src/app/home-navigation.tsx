/*
|-----------------------------------------
| setting up home-navigation.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/
"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./home-navigation.module.css";

const banglaLabels: Record<string, string> = {
  "#home": "হোম",
  "#pricing": "মূল্য তালিকা",
  "#individual": "সার্ভিস",
  "#about": "আমাদের সম্পর্কে",
  "#demo-portfolio": "ওয়েবসাইট ডেমো",
  "#real-portfolio": "বাস্তব প্রজেক্ট",
  "#contact": "যোগাযোগ",
};

export default function HomeNavigation({
  links,
  consultationUrl,
}: {
  links: readonly { label: string; href: string }[];
  consultationUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeHref = activeSection === "combo-offers" ? "#pricing" : `#${activeSection}`;

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    if (sections.length === 0) return;

    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
      const scrollPadding = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const scrollMargin = Number.parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || 0;
      const guideY = Math.max(headerHeight + 16, scrollPadding + scrollMargin + 1);
      const current =
        sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= guideY && bounds.bottom > guideY;
        }) ??
        [...sections].reverse().find((section) => section.getBoundingClientRect().top <= guideY) ??
        sections[0];

      setActiveSection((previous) => (previous === current.id ? previous : current.id));
    };
    const scheduleUpdate = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const navigateToSection = (href: string) => {
    setActiveSection(href === "#pricing" ? "combo-offers" : href.slice(1));
  };

  return (
    <>
      <nav aria-label="Main navigation" className="hidden items-center gap-4 xl:flex">
        {links.map((link) => {
          const isActive = activeHref === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "location" : undefined}
              onClick={() => navigateToSection(link.href)}
              className={`border-b-2 py-3 text-sm font-medium transition-colors ${isActive ? "border-[#0755EA] text-[#0755EA]" : "border-transparent text-slate-600 hover:text-[#0755EA]"}`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <div
        className="xl:hidden"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            toggleRef.current?.focus();
          }
        }}
      >
        <button
          type="button"
          ref={toggleRef}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="home-mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={styles.toggle}
        >
          <span className={styles.bar} aria-hidden="true" />
          <span className={styles.bar} aria-hidden="true" />
          <span className={styles.bar} aria-hidden="true" />
        </button>
        <nav
          id="home-mobile-menu"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
          data-open={open}
          className={styles.panel}
        >
          <p className={styles.menuHeading}>
            Explore TecBuzz <span lang="bn">/ আপনার পরবর্তী পদক্ষেপ</span>
          </p>
          {links.map((link, index) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                data-active={isActive}
                onClick={() => {
                  navigateToSection(link.href);
                  setOpen(false);
                }}
                className={styles.link}
              >
                <span className={styles.index}>0{index + 1}</span>
                <span className={styles.label}>
                  {link.label}
                  <span lang="bn">{banglaLabels[link.href]}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            );
          })}
          <a href={consultationUrl} className={styles.consultation} onClick={() => setOpen(false)}>
            <span lang="bn">ফ্রি পরামর্শ নিন</span>
            <span aria-hidden="true">/</span>Get Free Consultation
          </a>
        </nav>
      </div>
    </>
  );
}
