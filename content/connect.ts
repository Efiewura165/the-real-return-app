import type { ConnectContent } from "@/types/connect";

export const connectContent: ConnectContent = {
  hero: {
    eyebrow: "Connect",
    title: "Begin a conversation with a steward.",
    description:
      "Whether you're exploring the Legacy Journey, the Signature Return, or the Crown Legacy Experience, a steward will help you find the right next step into The Real Return™.",
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
