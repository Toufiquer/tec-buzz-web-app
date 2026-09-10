/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 14 August 2026
|-----------------------------------------
*/

export type TopBannerTwoIcon = { id: string; title: string; icon: string; url: string; visible: boolean };
export type TopBannerTwoData = {
  variant: "topbanner-2";
  isVisible: boolean;
  text: string;
  direction: "left" | "right";
  speed: number;
  loop: boolean;
  background: string;
  foreground: string;
  fontSize: "sm" | "base" | "lg";
  icons: TopBannerTwoIcon[];
  authLabel: string;
  /** Omitted legacy values remain visible. */
  buttonVisible?: boolean;
  position: "fixed" | "sticky" | "hide";
  excludedPaths: string[];
};
export const defaultData: TopBannerTwoData = {
  variant: "topbanner-2",
  isVisible: true,
  text: "TecBuzz Starter — ৳14,900 • Lead Express — ৳24,900 • Enterprise — ৳79,900 • Content Lite — ৳5,000/মাস • Content Growth — ৳7,500/মাস • Content Scale — ৳13,500/মাস • Reels — ৳250 • Static — ৳50 • Ad Creatives — ৳150",
  direction: "left",
  speed: 20,
  loop: true,
  background: "#0b1736",
  foreground: "#e0f5ff",
  fontSize: "base",
  icons: [
    {
      id: "facebook",
      title: "Facebook",
      icon: "CiFacebook",
      url: "https://www.facebook.com/tecbuzzbd/",
      visible: true,
    },
    { id: "youtube", title: "YouTube", icon: "AiOutlineYoutube", url: "", visible: false },
    {
      id: "whatsapp",
      title: "WhatsApp",
      icon: "FaWhatsapp",
      url: "https://wa.me/01607333369",
      visible: true,
    },
    {
      id: "messenger",
      title: "Messenger",
      icon: "FaFacebookMessenger",
      url: "https://www.facebook.com/tecbuzzbd/",
      visible: true,
    },
    { id: "call", title: "Call", icon: "Phone", url: "tel:+8801607333369", visible: true },
  ],
  authLabel: "Free Audit",
  buttonVisible: false,
  position: "sticky",
  excludedPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
};
