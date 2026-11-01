/*
|-----------------------------------------
| setting up home-navigation.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/
"use client";

import { useRef, useState } from "react";

import styles from "./home-navigation.module.css";

const banglaLabels: Record<string, string> = {
  "#home": "হোম",
  "#pricing": "মূল্য তালিকা",
  "#combo-offers": "কম্বো অফার",
  "#individual": "আলাদা সার্ভিস",
  "#about": "আমাদের সম্পর্কে",
};

export default function HomeNavigation({
  links,
  consultationUrl,
}: {
  links: readonly { label: string; href: string }[];
  consultationUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="lg:hidden"
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
        {links.map((link, index) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={styles.link}>
            <span className={styles.index}>0{index + 1}</span>
            <span className={styles.label}>
              {link.label}
              <span lang="bn">{banglaLabels[link.href]}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
        <a href={consultationUrl} className={styles.consultation} onClick={() => setOpen(false)}>
          <span lang="bn">ফ্রি পরামর্শ নিন</span>
          <span aria-hidden="true">/</span>Get Free Consultation
        </a>
      </nav>
    </div>
  );
}
