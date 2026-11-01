/*
|-----------------------------------------
| setting up layout.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 14 August 2026
|-----------------------------------------
*/

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ConfirmDeleteProvider } from "@/components/confirm-delete-provider";
import { PublicMobileNavigationSpacing } from "@/components/PublicMobileNavigationSpacing";
import { ScrollTransition } from "@/components/ScrollTransition";
import { GlobalToast } from "@/components/ui/global-toast";
import { ReduxProvider } from "@/redux/app/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://tecbuzz.bd"),
    title: "TecBuzz",
    description: "TecBuzz progressive web application",
    applicationName: "TecBuzz",
    icons: { icon: "/Logo.png" },
    appleWebApp: { capable: true, statusBarStyle: "default", title: "TecBuzz" },
    formatDetection: { telephone: false },
  };
}

export default function RootLayout({
  children,
  siteHeader,
  siteFooter,
}: Readonly<{
  children: React.ReactNode;
  siteHeader: React.ReactNode;
  siteFooter: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <ScrollTransition />
        <GlobalToast />
        <ReduxProvider>
          <ConfirmDeleteProvider>
            {siteHeader}
            <PublicMobileNavigationSpacing>
              <>
                {children}
                {siteFooter}
              </>
            </PublicMobileNavigationSpacing>
          </ConfirmDeleteProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
