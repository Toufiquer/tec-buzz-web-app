/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 14 August 2026
|-----------------------------------------
*/

export type FooterTwoData = {
  variant: "footer-2";
  isVisible: boolean;
  forceUpdate: boolean;
  background: string;
  foreground: string;
  accent: string;
  brand: string;
  tagline: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  showLogo: boolean;
  email: string;
  phone: string;
  disabledPaths: string[];
  columns: { title: string; links: { id: string; label: string; url: string; visible: boolean }[] }[];
  links: { id: string; label: string; url: string; visible: boolean }[];
  copyright: string;
  showLegalBar: boolean;
  legalBackground: string;
  legalLinks: { id: string; label: string; url: string; visible: boolean }[];
};
export const defaultData: FooterTwoData = {
  variant: "footer-2",
  isVisible: true,
  forceUpdate: true,
  background: "#ffffff",
  foreground: "#0b1736",
  accent: "#087af5",
  brand: "TecBuzz",
  tagline: "Growth systems for practical businesses.",
  description:
    "TecBuzz combines conversion-focused websites, lead management, tracking, WhatsApp, search foundations, and automation to help Bangladesh businesses grow with clarity.",
  logoUrl: "/Logo.png",
  logoAlt: "TecBuzz logo",
  showLogo: true,
  email: "tecbuzz@gmail.com",
  phone: "01607333369",
  disabledPaths: ["/dashboard", "/login", "/forgot-password", "/registration"],
  columns: [
    {
      title: "Services",
      links: [
        {
          id: "website-development",
          label: "Website Development",
          url: "/website-development",
          visible: true,
        },
        {
          id: "business-automation",
          label: "Business Automation",
          url: "/business-automation",
          visible: true,
        },
        {
          id: "content-social-media",
          label: "Content and Social",
          url: "/content-social-media",
          visible: true,
        },
        { id: "seo", label: "SEO Service", url: "/seo", visible: true },
        { id: "ads-management", label: "Ads Management", url: "/ads-management", visible: true },
      ],
    },
    {
      title: "Solutions",
      links: [
        {
          id: "education-coaching",
          label: "Education and Coaching",
          url: "/solutions/education-coaching",
          visible: true,
        },
        { id: "clinic-healthcare", label: "Clinic and Healthcare", url: "/solutions/clinic-healthcare", visible: true },
        { id: "sme-corporate", label: "SME and Corporate", url: "/solutions/sme-corporate", visible: true },
        { id: "ecommerce", label: "E-commerce", url: "/solutions/ecommerce", visible: true },
        {
          id: "professional-services",
          label: "Professional Services",
          url: "/solutions/professional-services",
          visible: true,
        },
      ],
    },
  ],
  links: [
    { id: "portfolio", label: "Portfolio", url: "/portfolio", visible: true },
    { id: "resources", label: "Resources", url: "/blog", visible: true },
    { id: "company", label: "Company", url: "/about", visible: true },
    { id: "contact", label: "Contact", url: "/contact", visible: true },
    {
      id: "whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/01607333369?text=I%20want%20a%2010%20minute%20audit.",
      visible: true,
    },
  ],
  copyright: `© ${new Date().getFullYear()} TecBuzz. All rights reserved.`,
  showLegalBar: true,
  legalBackground: "#fffaf0",
  legalLinks: [
    { id: "refund", label: "Refund Policy", url: "/refund-policy", visible: true },
    { id: "privacy", label: "Privacy Policy", url: "/privacy-policy", visible: true },
    { id: "terms", label: "Terms & Conditions", url: "/terms-and-condition", visible: true },
    { id: "security", label: "Security", url: "/security", visible: true },
    { id: "cookies", label: "Cookie Policy", url: "/cookie-policy", visible: true },
  ],
};
