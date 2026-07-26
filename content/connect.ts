import type { ConnectContent } from "@/types/connect";

export const connectContent: ConnectContent = {
  hero: {
    eyebrow: "Reserve",
    title: "Begin Your Real Return™",
    description:
      "Whether you're exploring the Legacy Journey, the Signature Return, or the Crown Legacy Experience, a steward will help you find the right next step into The Real Return™.",
    image: {
      src: "/images/stock/cape-coast-aerial.jpg",
      alt: "Aerial view of Cape Coast, Ghana, showing its coastline and historic architecture",
    },
  },
  journeyOptions: {
    eyebrow: "Journey options",
    title: "Choose the tier that fits where you are.",
    description: "Every option below includes accommodation — nothing to price out separately.",
  },
  process: {
    eyebrow: "What happens next",
    title: "The reservation process.",
    steps: [
      {
        step: "01",
        title: "Choose Your Experience",
        description: "Explore the Legacy Journey, Signature Return, or Crown Legacy Experience and find the tier that fits where you are.",
      },
      {
        step: "02",
        title: "Reserve Your Place",
        description: "Send your inquiry and a steward will reach out within two business days to confirm dates and details.",
      },
      {
        step: "03",
        title: "Complete Preparation Experience™",
        description: "Before you depart, work through the Journey Preparation Experience™ — the Academy module built to prepare your mind and open your heart for what's ahead.",
      },
      {
        step: "04",
        title: "Experience Your Journey",
        description: "Travel to Ghana with your steward's guidance at every stage, from arrival through departure.",
      },
      {
        step: "05",
        title: "Continue The Connection",
        description: "Your return doesn't end at the airport — join the Community for ongoing conversation, events, and connection with others on the same path.",
      },
    ],
  },
  info: [
    { label: "Email", value: "hello@therealreturn.com", href: "mailto:hello@therealreturn.com" },
    { label: "Response time", value: "Within two business days" },
    { label: "For educators & stewards", value: "partners@therealreturn.com", href: "mailto:partners@therealreturn.com" },
  ],
  form: {
    eyebrow: "Reach out",
    title: "Tell us where you are in the journey.",
    description: "Share a little about your family or organization and what you're hoping to learn or build.",
  },
};
