/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 24 August, 2026
|-----------------------------------------
*/

export interface RefundPolicySection {
  id?: string;
  eyebrow?: string;
  showEyebrow: boolean;
  title: string;
  description?: string;
  items?: string[];
}
export interface IPage7Data {
  pageUid: string;
  pageName: string;
  title: string;
  eyebrow: string;
  showEyebrow: boolean;
  image: string;
  paddingX: number;
  paddingY: number;
  lastUpdatedLabel: string;
  highlightTitle: string;
  highlightDescription: string;
  sections: RefundPolicySection[];
  contactTitle: string;
  contactDescription: string;
  supportEmail: string;
}
export interface Page7Props {
  data?: IPage7Data | string;
}

export const defaultRefundPolicySection: RefundPolicySection = {
  eyebrow: "New section",
  showEyebrow: true,
  title: "New Policy Section",
  description: "Write the policy details for this section.",
  items: [],
};

export const defaultDataPage7: IPage7Data = {
  pageUid: "page-uid-refund-policy",
  pageName: "TecBuzz Refund and Cancellation Policy",
  title: "Refund and Cancellation Policy",
  eyebrow: "",
  showEyebrow: false,
  image: "/images/all-pages-placeholder.png",
  paddingX: 0,
  paddingY: 0,
  lastUpdatedLabel: "Last updated: 10 September 2026",
  highlightTitle: "A clear review process",
  highlightDescription:
    "Every request is reviewed against the relevant proposal, invoice, completed work, and service agreement. This policy should be reviewed by qualified legal counsel before publication.",
  sections: [
    {
      eyebrow: "Cancellation",
      showEyebrow: true,
      title: "Cancellation before work begins",
      description:
        "A cancellation request should be made as soon as possible. Eligibility depends on the agreed scope, payments received, work already completed, and the applicable proposal or invoice.",
    },
    {
      eyebrow: "Review criteria",
      showEyebrow: true,
      title: "When a refund may be considered",
      description:
        "TecBuzz may review a request when a paid service has not started, a duplicate payment was made, or an agreed service cannot be delivered for reasons within our control.",
      items: [
        "Send the request promptly with the invoice or payment reference",
        "Explain the issue and include relevant project details",
        "The agreed scope and payment terms are used for the review",
      ],
    },
    {
      eyebrow: "Non-refundable costs",
      showEyebrow: true,
      title: "Work and costs that are generally non-refundable",
      description:
        "Completed work, approved milestones, consumed subscriptions, third-party charges, and custom digital deliverables are generally non-refundable unless the applicable agreement states otherwise.",
      items: [
        "Work already completed, approved, or handed over",
        "Domain, hosting, payment gateway, advertising, licence, or platform costs",
        "Delays caused by missing client materials, approvals, or feedback",
      ],
    },
    {
      eyebrow: "Outcome",
      showEyebrow: true,
      title: "Review outcome and payment",
      description:
        "After receiving a complete request, we will share the decision and next steps. Approved refunds are returned through the original payment method or another reasonable method permitted in Bangladesh.",
      items: [
        "Processing time may depend on the payment provider or bank",
        "Approved amounts may exclude non-refundable third-party costs",
        "A partial refund may apply where only part of a service remains undelivered",
      ],
    },
  ],
  contactTitle: "Need help with a refund request?",
  contactDescription:
    "Contact TecBuzz on WhatsApp at 01607-333369 and include your invoice or payment reference so we can review your request.",
  supportEmail: "",
};
