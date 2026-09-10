/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface CookiePolicySection {
  title: string;
  description?: string;
  items?: string[];
}

export interface ICookiePolicyData {
  pageUid: string;
  pageName: string;
  title: string;
  lastUpdatedLabel: string;
  sections: CookiePolicySection[];
  contactTitle: string;
  contactDescription: string;
  supportEmail: string;
}

export interface CookiePolicyPayload extends ICookiePolicyData {
  paddingX: number;
  paddingY: number;
}

export interface CookiePolicyProps {
  data?: ICookiePolicyData | CookiePolicyPayload | string;
}

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataCookiePolicy: ICookiePolicyData = {
  pageUid: "cookie-policy-uid",
  pageName: "Cookie Policy",
  title: "Cookie Policy",
  lastUpdatedLabel: "Last updated: 10 September 2026",
  sections: [
    {
      title: "1. What cookies are",
      description:
        "Cookies are small text files placed on your device when you visit a website. They help websites remember information about your visit and provide essential functions.",
    },
    {
      title: "2. How TecBuzz uses cookies",
      description:
        "TecBuzz may use essential cookies and, where consent is collected, measurement or advertising cookies to:",
      items: [
        "Keep essential website features and security controls working.",
        "Measure website activity through tools such as GA4, GTM, Meta Pixel, or TikTok Pixel when enabled.",
        "Understand campaign performance and remember relevant preferences where available.",
      ],
    },
    {
      title: "3. Managing your choices",
      description:
        "You can manage non-essential cookies through the consent controls offered on the website where available. Most browsers also let you control or delete cookies through their settings. Blocking some cookies may affect how parts of the website work.",
    },
    {
      title: "4. Updates to this policy",
      description:
        "TecBuzz may update this Cookie Policy when its cookie practices, measurement tools, or legal obligations change. Please revisit this page for the latest information.",
    },
  ],
  contactTitle: "Cookie questions",
  contactDescription: "For questions about TecBuzz's use of cookies, contact us on WhatsApp at 01607-333369.",
  supportEmail: "",
};

export const defaultCookiePolicySection: CookiePolicySection = {
  title: "New Cookie Policy Section",
  description: "Write the cookie policy details for this section.",
  items: [],
};
