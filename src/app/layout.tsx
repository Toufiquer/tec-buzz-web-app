import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Tiro_Bangla } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["bengali", "latin"],
  variable: "--font-tiro-bangla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TecBuzz — আপনার ডিজিটাল সমাধান | Web Design & Development Bangladesh",
  description:
    "TecBuzz — বাংলাদেশের বিশ্বস্ত ওয়েব ডিজাইন ও ডেভেলপমেন্ট সংস্থা। দ্রুত লোডিং ওয়েবসাইট, SEO অপ্টিমাইজেশন, লাইফটাইম হোস্টিং এবং আরও অনেক কিছু। Build Smarter. Grow Faster.",
  keywords: [
    "TecBuzz",
    "web design Bangladesh",
    "ওয়েব ডিজাইন বাংলাদেশ",
    "website development",
    "SEO optimization",
    "lifetime hosting",
    "Next.js",
  ],
  openGraph: {
    title: "TecBuzz — আপনার ডিজিটাল সমাধান",
    description:
      "বাংলাদেশের বিশ্বস্ত ওয়েব ডিজাইন ও ডেভেলপমেন্ট সংস্থা। দ্রুত, নিরাপদ, SEO-অপ্টিমাইজড ওয়েবসাইট।",
    url: "https://tecbuzz.bd",
    siteName: "TecBuzz",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TecBuzz — Build Smarter. Grow Faster.",
    description:
      "Fast, SEO-optimized websites for Bangladesh businesses. Lifetime hosting included.",
  },
  alternates: {
    canonical: "https://tecbuzz.bd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} ${tiroBangla.variable} h-full antialiased`}
    >
      <meta name="google-site-verification" content="h777g2wjf5GrRnGzWsyf71CdemUhvYu3nXx2bPc8GgY" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
