import type { InvestPageContent } from "@/types/invest";

/**
 * Narrative/relationship-building copy only — no specific offering terms,
 * equity, or financial projections are stated here. Anyone who inquires is
 * routed to a steward for a real conversation, not a self-serve terms sheet.
 */
export const investPageContent: InvestPageContent = {
  hero: {
    eyebrow: "Invest",
    title: "Build The Vision With Us",
    description:
      "The Real Return™ is an education-first heritage and legacy platform for the African diaspora. We're inviting partners, sponsors, and investors who want to help build the infrastructure for a lifelong return.",
    image: {
      src: "/images/stock/cape-coast-aerial.jpg",
      alt: "Aerial view of Cape Coast, Ghana, showing its coastline and historic architecture",
    },
  },
  whyInvest: {
    eyebrow: "Why Invest",
    title: "A growing market, built on real demand.",
    description:
      "Heritage travel, diaspora education, and legacy-building are converging into a single, underserved category. The Real Return™ sits at that intersection — with a curriculum, a destination, and a community already in motion.",
    points: [
      {
        title: "Education-first model",
        description: "The Journey Academy™ curriculum creates a prepared, returning audience rather than a one-time transaction.",
      },
      {
        title: "Community, not just a trip",
        description: "Newsletter, events, and ongoing conversation keep families engaged well beyond a single journey.",
      },
      {
        title: "Ghana as a proof point",
        description: "The Ghana Experience is the working model this platform is built to expand from.",
      },
    ],
  },
  strategicPartnerships: {
    eyebrow: "Strategic Partnerships",
    title: "Partner with us on the ground and in the curriculum.",
    description:
      "We're building relationships with cultural institutions, educators, and hospitality partners who share a commitment to authentic, education-first heritage travel.",
    items: [
      {
        title: "Educational institutions",
        description: "Co-develop Academy content or offer The Real Return™ as part of a study-abroad or cultural studies program.",
      },
      {
        title: "Hospitality & ground partners",
        description: "Work with us in Ghana on accommodations, guiding, and logistics that meet our standard of care.",
      },
      {
        title: "Cultural organizations",
        description: "Bring historians, artisans, and community leaders into the curriculum and the journey itself.",
      },
    ],
  },
  sponsors: {
    eyebrow: "Sponsors",
    title: "Sponsor a journey, a module, or a returning family.",
    description:
      "Sponsorship makes The Real Return™ accessible to families and students who couldn't otherwise take part — and puts your organization's name behind an education-first return.",
    items: [
      {
        title: "Journey sponsorship",
        description: "Underwrite a seat on an upcoming Ghana Experience for a student or family.",
      },
      {
        title: "Program sponsorship",
        description: "Support the development or delivery of a Journey Academy™ curriculum module.",
      },
      {
        title: "Founding partner",
        description: "Align your organization with The Real Return™ from the ground up, across multiple journeys and cohorts.",
      },
    ],
  },
  investors: {
    eyebrow: "Investors",
    title: "For those ready to build the infrastructure.",
    description:
      "We're in conversation with investors who understand heritage travel and diaspora education as a long-term category, not a seasonal trend. Reach out and a member of our team will share where things stand and what a conversation with us looks like.",
    points: [
      {
        title: "Early-stage, relationship-first",
        description: "We're building this with people who want to understand the model deeply before any terms are discussed.",
      },
      {
        title: "No self-serve terms here",
        description: "Specifics are shared directly, in conversation — not published as a general offering on this page.",
      },
    ],
  },
  form: {
    eyebrow: "Inquire",
    title: "Tell us how you'd like to build with us.",
    description: "Share a little about your organization or interest, and a member of our team will follow up directly.",
  },
};
