/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

import type { PageTemplateData, PageTemplateProps } from "../shared/page-types";

export type ISecurityData = PageTemplateData;
export interface SecurityPayload extends ISecurityData {
  paddingX: number;
  paddingY: number;
}
export type SecurityProps = PageTemplateProps<ISecurityData | SecurityPayload>;

export const defaultLayout = {
  paddingX: 0,
  paddingY: 0,
};

export const defaultDataSecurity: ISecurityData = {
  pageUid: "security-uid",
  pageName: "Security",
  eyebrow: "Security",
  title: "Practical safeguards for TecBuzz services and visitor information.",
  subtitle:
    "This page describes the practical controls TecBuzz uses to reduce risk across its website, business systems, and service delivery. It does not guarantee that any system is completely risk-free.",
  primaryAction: "Review safeguards",
  secondaryAction: "Report a concern",
  sections: [
    {
      eyebrow: "Access management",
      title: "Protecting access to services",
      description:
        "TecBuzz uses appropriate controls to help protect access to website tools, customer accounts, and administrative systems.",
      items: [
        "Role-based access to sensitive systems where practical",
        "Account and password practices appropriate to the service",
        "Access reviews when roles, projects, or responsibilities change",
      ],
    },
    {
      eyebrow: "Technical safeguards",
      title: "Keeping systems secure",
      description:
        "Reasonable technical measures are maintained to reduce the risk of unauthorised access, alteration, or disruption of services.",
      items: [
        "Secure connections where available and appropriate",
        "Routine software and security updates",
        "Monitoring and review of suspicious activity where available",
      ],
    },
    {
      eyebrow: "Incident response",
      title: "Responding to security concerns",
      description:
        "If a security concern is identified, TecBuzz investigates it promptly and takes reasonable action to contain and address the issue.",
      items: [
        "Report and assess the concern",
        "Apply appropriate corrective measures",
        "Communicate when notification is required",
      ],
    },
    {
      eyebrow: "Report a concern",
      title: "Help us keep TecBuzz secure",
      description: "If you believe you have found a security issue, contact TecBuzz using the details below.",
      items: [
        "WhatsApp: 01607-333369",
        "Describe the affected page, feature, account, or action",
        "Do not send passwords, payment details, or other sensitive credentials in a message",
      ],
    },
  ],
};

export const defaultSecuritySection = {
  eyebrow: "New security area",
  title: "Add a security section title",
  description: "Explain this security practice in clear, visitor-friendly language.",
  items: ["Add the first security point"],
};
