/*
|-----------------------------------------
| setting up data.ts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, 29 August, 2026
|-----------------------------------------
*/

export type AboutSection = {
  id: string;
  eyebrow: string;
  showEyebrow: boolean;
  title: string;
  description: string;
};

export const defaultSections: AboutSection[] = [
  {
    id: "believe",
    eyebrow: "Our purpose",
    showEyebrow: true,
    title: "Growth should be practical.",
    description:
      "Businesses need more than a good-looking website. They need a clear digital path that helps visitors become qualified conversations and customers.",
  },
  {
    id: "work",
    eyebrow: "Our method",
    showEyebrow: true,
    title: "We start with the real gap.",
    description:
      "Every project begins with the offer, customer journey, communication path, and follow-up process before design or development begins.",
  },
  {
    id: "people",
    eyebrow: "What we build",
    showEyebrow: true,
    title: "One connected growth system.",
    description:
      "TecBuzz brings together conversion-focused websites, lead management, tracking, WhatsApp, search foundations, and automation when the business needs it.",
  },
  {
    id: "next",
    eyebrow: "How we earn trust",
    showEyebrow: true,
    title: "Clear scope. Honest communication.",
    description:
      "We define the delivery conditions, responsibilities, revisions, ownership, and next steps in writing so every project starts with shared expectations.",
  },
];

export const defaultAboutSection: Omit<AboutSection, "id"> = {
  eyebrow: "New eyebrow",
  showEyebrow: true,
  title: "New section",
  description: "Add your section description.",
};

// Structured content remains serialized for compatibility with the existing page API.
export const defaultData = {
  eyebrow: "",
  showEyebrow: "false",
  title: "Growth systems for practical businesses.",
  intro:
    "TecBuzz helps Bangladesh businesses build a clearer path from first visit to qualified lead, live demo, proposal, and long-term growth.",
  image: "/images/all-pages-placeholder.png",
  sectionsJson: JSON.stringify(defaultSections),
  paddingX: "0",
  paddingY: "0",
};
