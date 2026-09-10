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
  text: "বিনামূল্যে ১০ মিনিটের অডিট নিন • ২৪–৪৮ ঘণ্টায় স্ট্যান্ডার্ড ওয়েবসাইট চালুর পরিকল্পনা করুন",
  direction: "left",
  speed: 18,
  background: "#0b1736",
  foreground: "#e0f5ff",
  fontSize: "base",
  icons: [
    { id: "facebook", title: "Facebook", icon: "CiFacebook", url: "https://facebook.com", visible: false },
    { id: "youtube", title: "YouTube", icon: "AiOutlineYoutube", url: "https://youtube.com", visible: false },
    {
      id: "whatsapp",
      title: "WhatsApp",
      icon: "FaWhatsapp",
      url: "https://wa.me/01607333369?text=I%20want%20a%2010%20minute%20audit.",
      visible: true,
    },
    { id: "messenger", title: "Messenger", icon: "FaFacebookMessenger", url: "https://m.me", visible: false },
    { id: "call", title: "Call", icon: "Phone", url: "tel:+8801607333369", visible: false },
  ],
  authLabel: "Free Audit",
  buttonVisible: false,
  position: "sticky",
  excludedPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
};
