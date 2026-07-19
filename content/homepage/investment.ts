import type { InvestmentContent } from "@/types/homepage";

export const investmentContent: InvestmentContent = {
  eyebrow: "Investment",
  title: "Journeys built for where you are, right now.",
  description: "Every tier is a considered experience, not a package — details are shaped together with a steward.",
  tiers: [
    {
      name: "Legacy Journey",
      description: "A guided introduction to the Ghana Legacy Journey framework.",
      inclusions: ["Placeholder — confirm inclusions with Tarsha", "Guided group experience", "Foundations of Heritage coursework"],
      ctaLabel: "Inquire About This Journey",
    },
    {
      name: "Signature Return",
      description: "A deeper, more personalized path through the journey's four stages.",
      inclusions: ["Placeholder — confirm inclusions with Tarsha", "Small-group or family experience", "Dedicated steward guidance"],
      ctaLabel: "Inquire About This Journey",
    },
    {
      name: "Crown Legacy Experience",
      description: "The full, private Real Return™ experience.",
      inclusions: ["Placeholder — confirm inclusions with Tarsha", "Private, fully customized itinerary", "Ongoing legacy-building support"],
      ctaLabel: "Request Availability",
    },
  ],
};
