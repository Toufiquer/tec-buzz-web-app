/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

import type { PageTemplateData, PageTemplateProps, PageTemplateSection } from "../shared/page-types";

export type TermsSection = PageTemplateSection & { id?: string; showEyebrow: boolean };
export type ISection5Data = Omit<PageTemplateData, "sections"> & {
  showEyebrow: boolean;
  image: string;
  paddingX: number;
  paddingY: number;
  sections: TermsSection[];
};
export type Section5Props = PageTemplateProps<ISection5Data>;

export const defaultTermsSection: TermsSection = {
  id: "",
  eyebrow: "New section",
  showEyebrow: true,
  title: "New terms section",
  description: "Add the terms for this section.",
  items: ["Add a key point"],
};

export const defaultDataPage5: ISection5Data = {
  pageUid: "page-uid-terms-and-conditions",
  pageName: "TecBuzz Terms and Conditions",
  eyebrow: "",
  showEyebrow: false,
  image: "/images/all-pages-placeholder.png",
  paddingX: 0,
  paddingY: 0,
  title: "Terms and Conditions",
  subtitle:
    "These Terms and Conditions govern your use of TecBuzz websites, products, and services. Review them with qualified legal counsel before publishing.",
  primaryAction: "",
  secondaryAction: "",
  highlightTitle: "Clear working agreements",
  highlightDescription:
    "TecBuzz aims to keep every digital engagement clear, fair, secure, and practical for clients, partners, and visitors.",
  sections: [
    {
      eyebrow: "Acceptance",
      showEyebrow: true,
      title: "Using TecBuzz services",
      description:
        "By accessing this website, requesting a quotation, or using a TecBuzz product or service, you agree to these Terms and Conditions. If you do not agree, please do not use the services.",
      items: [
        "Use TecBuzz services lawfully and responsibly",
        "Provide complete and accurate information",
        "Keep account credentials private and secure",
      ],
    },
    {
      eyebrow: "Services",
      showEyebrow: true,
      title: "Scope, delivery, revisions, and support",
      description:
        "The scope, timeline, deliverables, revision rounds, and support period are confirmed in the relevant proposal, order, or service agreement. A request outside the agreed scope may require a revised timeline and fee.",
      items: [
        "Standard delivery begins after advance payment, required materials, and approved scope are received",
        "Clients should review deliverables and provide timely feedback",
        "Third-party services remain subject to their own availability and terms",
      ],
    },
    {
      eyebrow: "Payments",
      showEyebrow: true,
      title: "Fees, payments, and third-party costs",
      description:
        "All fees, deposits, and payment milestones are communicated in Bangladeshi Taka unless otherwise stated. TecBuzz may pause work, delivery, access, or support when an invoice remains overdue.",
      items: [
        "A deposit may be required before a project starts",
        "Payments are due according to the applicable invoice or agreement",
        "Taxes, bank charges, advertising spend, and approved third-party costs may apply",
      ],
    },
    {
      eyebrow: "Rights and responsibility",
      showEyebrow: true,
      title: "Client responsibilities, content, and ownership",
      description:
        "You remain responsible for the content, data, and permissions you provide to TecBuzz. Ownership of final project deliverables transfers only as stated in the applicable agreement and after full payment is received.",
      items: [
        "You must have permission to use supplied content and brand assets",
        "TecBuzz pre-existing tools, code, methods, and templates remain TecBuzz property",
        "Open-source and third-party software are governed by their respective licenses",
      ],
    },
    {
      eyebrow: "Legal",
      showEyebrow: true,
      title: "Liability, changes, and governing law",
      description:
        "To the extent permitted by law, TecBuzz is not liable for indirect losses, loss of profits, or interruptions caused by third-party systems, networks, or events beyond reasonable control. We may update these terms when services or legal obligations change.",
      items: [
        "Material updates apply from the revised date shown on this page",
        "These terms are governed by the applicable laws of Bangladesh",
        "Questions about these terms can be sent through our official support channel",
      ],
    },
  ],
};
