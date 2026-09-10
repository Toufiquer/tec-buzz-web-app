/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

import type { PageTemplateData, PageTemplateProps, PageTemplateSection } from "../shared/page-types";

export type PrivacySection = PageTemplateSection & { id?: string; showEyebrow: boolean };
export type ISection4Data = Omit<PageTemplateData, "sections"> & {
  showEyebrow: boolean;
  image: string;
  paddingX: number;
  paddingY: number;
  sections: PrivacySection[];
};
export type Section4Props = PageTemplateProps<ISection4Data>;

export const defaultDataPage4: ISection4Data = {
  pageUid: "page-uid-privacy-policy",
  pageName: "TecBuzz Privacy Policy",
  eyebrow: "",
  showEyebrow: false,
  image: "/images/all-pages-placeholder.png",
  paddingX: 0,
  paddingY: 0,
  title: "How TecBuzz handles your information",
  subtitle:
    "This policy explains how TecBuzz collects, uses, stores, and protects information shared through our website, audit requests, enquiries, and services. Review it with qualified legal counsel before publishing.",
  primaryAction: "",
  secondaryAction: "",
  highlightTitle: "Our privacy commitment",
  highlightDescription:
    "We collect only the information needed to respond to enquiries, deliver agreed services, protect our systems, and improve our website. We do not sell personal information.",
  sections: [
    {
      eyebrow: "Collection",
      showEyebrow: true,
      title: "Information we collect",
      description:
        "We may collect information you provide directly and limited technical information generated when you use our website, audit form, contact channels, or services.",
      items: [
        "Name, WhatsApp number, business name, category, website, and project goal",
        "Project requirements, messages, support requests, and approved materials",
        "Basic device, browser, landing-page, referral, and campaign information where tracking is enabled",
      ],
    },
    {
      eyebrow: "Use",
      showEyebrow: true,
      title: "How we use information",
      description:
        "We use information to respond to requests, qualify leads, deliver agreed services, manage payments, improve our website, and protect TecBuzz from misuse or security incidents.",
      items: [
        "Respond to audit, demo, proposal, and support requests",
        "Send essential service, project, and account communications",
        "Understand website performance and improve reliability, security, and usability",
      ],
    },
    {
      eyebrow: "Protection",
      showEyebrow: true,
      title: "How information is protected",
      description:
        "We use reasonable organisational and technical safeguards to protect information. Access is limited to people and service providers who need it for authorised work.",
      items: [
        "Role-based access where practical and appropriate",
        "Reasonable security controls, monitoring, and access reviews",
        "Retention only for as long as needed for service, legal, accounting, or operational purposes",
      ],
    },
    {
      eyebrow: "Sharing and rights",
      showEyebrow: true,
      title: "Your choices and requests",
      description:
        "We do not sell personal information. We may share limited information with trusted service providers when needed to operate our services, measure website activity with consent, or comply with law. You may request access, correction, or deletion of information you have provided.",
      items: [
        "Analytics and advertising tools are used only where disclosed and consent is handled as required",
        "Some records may need to be retained for legal or accounting reasons",
        "Contact TecBuzz through the official support channel for privacy requests",
      ],
    },
  ],
};
