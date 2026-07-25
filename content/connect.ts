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
        title: "Send your inquiry",
        description: "Tell us a little about your family or organization and which journey you're drawn to.",
      },
      {
        step: "02",
        title: "Talk with a steward",
        description: "A steward will reach out within two business days to answer questions and shape the details with you.",
      },
      {
        step: "03",
        title: "Confirm your journey",
        description: "Once dates and tier are set, your steward guides you through documentation, preparation, and departure.",
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
