import type { InvestmentContent } from "@/types/homepage";

/**
 * Shared across the homepage, Experiences ("Private/group journeys"), and
 * Reserve ("Journey options") — one source of truth for pricing tiers so
 * they never drift out of sync between pages.
 */
export const investmentContent: InvestmentContent = {
  eyebrow: "Investment",
  title: "Journeys built for where you are, right now.",
  description: "Every tier is a considered experience, not a package — accommodation is included at every level, not sold as an add-on.",
  tiers: [
    {
      name: "Legacy Journey",
      description: "A guided introduction to the Ghana Legacy Journey framework.",
      price: "Price on request",
      priceNote: "per person",
      accommodation: "Boutique guesthouse, shared-group lodging for the full 7-day itinerary.",
      inclusions: [
        "Accommodation for the full 7-day guided group itinerary",
        "Foundations of Heritage coursework",
        "Airport transfers and in-country transportation",
        "A dedicated steward throughout the journey",
      ],
      ctaLabel: "Inquire About This Journey",
    },
    {
      name: "Signature Return",
      description: "A deeper, more personalized path through the journey's four stages.",
      price: "Price on request",
      priceNote: "per person",
      accommodation: "4-star hotel, private room, for small-group or private family dates.",
      inclusions: [
        "Everything in Legacy Journey",
        "Small-group or private family departure dates",
        "Extended time at Cape Coast Castle and Kumasi's weaving houses",
        "One-on-one legacy mapping session with a steward",
      ],
      ctaLabel: "Inquire About This Journey",
    },
    {
      name: "Crown Legacy Experience",
      description: "The full, private Real Return™ experience.",
      price: "Price on request",
      priceNote: "custom quote",
      accommodation: "Private villa or 5-star suite, fully private for your family or group.",
      inclusions: [
        "Everything in Signature Return",
        "A fully private, custom-built itinerary",
        "Priority access to Academy coursework for your full family",
        "Ongoing legacy-building support after you return home",
      ],
      ctaLabel: "Request Availability",
    },
  ],
};
