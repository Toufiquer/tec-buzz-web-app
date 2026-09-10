/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 19 August, 2026
|-----------------------------------------
*/

export const defaultQuestions = [
  {
    question: "How does the 24–48 hour delivery process work?",
    answer:
      "The delivery clock for a qualified standard build begins after advance payment, required assets, and approved scope are received. Custom systems receive a separate timeline.",
  },
  {
    question: "Who owns the domain and hosting?",
    answer:
      "Ownership, annual renewal, and managed-hosting responsibility are stated clearly in the proposal and terms. TecBuzz does not make an undefined lifetime-hosting promise.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The proposal states the included revision rounds. Revisions improve approved work; a new feature or page type is handled as a change request.",
  },
  {
    question: "Can TecBuzz write content for my website?",
    answer:
      "Content support can be scoped separately. Client business information, factual review, and approval are still required before publication.",
  },
  {
    question: "Does search optimisation guarantee rankings?",
    answer:
      "No. TecBuzz delivers the agreed technical and on-page search work. Rankings also depend on competition, content, authority, and search-engine factors.",
  },
  {
    question: "Is the advertising budget separate from the management fee?",
    answer: "Yes. Advertising-platform spend is separate from TecBuzz management and service fees.",
  },
  {
    question: "How does support work after launch?",
    answer:
      "The package or proposal defines the support channel, maintenance scope, response expectations, and any recurring fees.",
  },
  {
    question: "How are custom features priced and scheduled?",
    answer:
      "TecBuzz reviews the required workflow, confirms the written scope, and then provides a custom quote and delivery plan.",
  },
  {
    question: "What is reviewed in the free audit?",
    answer:
      "We review speed, mobile usability, calls to action, WhatsApp, forms, tracking, search basics, trust signals, and the follow-up path.",
  },
  {
    question: "Does the 24–48 hour promise apply to every package?",
    answer:
      "No. It applies only to qualified standard builds. Lead systems, automation, and enterprise work may require a longer scope-based timeline.",
  },
  {
    question: "What happens if client assets are delayed?",
    answer:
      "The delivery clock pauses until the required logo, copy, images, contact details, and approvals are received.",
  },
  {
    question: "Where can I read the payment, cancellation, and refund rules?",
    answer: "Please review the Pricing, Terms and Conditions, and Refund Policy before confirming a project.",
  },
];

export const defaultData = {
  title: "Frequently Asked Questions",
  intro: "Clear answers about delivery, ownership, revisions, support, and the audit process.",
  questionsJson: JSON.stringify(defaultQuestions),
};
