/*
|-----------------------------------------
| setting up page.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 14 August 2026
|-----------------------------------------
*/

import type { Metadata } from "next";

import Home from "./home";

export const dynamic = "force-dynamic";

const title = "TecBuzz | Website Development Company in Bangladesh";
const description =
  "Grow your business with TecBuzz: affordable Next.js websites, e-commerce, CMS, CRM and digital marketing in Bangladesh. Website packages from ৳12,300.";
const socialImage = {
  url: "https://tecbuzz.bd/opengraph-image",
  width: 1200,
  height: 630,
  alt: "TecBuzz — smart digital solutions for businesses in Bangladesh",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tecbuzz.bd"),
  title,
  description,
  alternates: { canonical: "https://tecbuzz.bd" },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://tecbuzz.bd",
    siteName: "TecBuzz",
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Page() {
  return <Home />;
}
