import type { CommunityPageContent } from "@/types/community";

/**
 * Stories, Newsletter, and Events are new sections with no real backend or
 * confirmed content yet — see comments below on what's scaffolding vs. real.
 */
export const communityPageContent: CommunityPageContent = {
  hero: {
    eyebrow: "Community",
    title: "Join The Real Return™ Community",
    description: "This is a return no one makes alone. Stay connected to the families, stewards, and stories walking this path alongside you.",
    image: {
      src: "/images/stock/cape-coast-aerial.jpg",
      alt: "Aerial view of Cape Coast, Ghana, showing its coastline and historic architecture",
    },
  },
  stories: {
    eyebrow: "Stories",
    title: "People are learning to see legacy not as a memory, but as a living practice.",
    description: "The experience is shaped by those who want to reclaim, preserve, and build with deeper intention.",
    // NOTE: these two quotes are drafted placeholders, not yet confirmed real client testimonials.
    testimonials: [
      {
        quote: "This feels like a place where history becomes meaningful, rather than ornamental.",
        name: "Aisha M.",
        role: "Family historian",
      },
      {
        quote: "The structure is grounded, thoughtful, and deeply human. It honors the work of memory.",
        name: "Darius K.",
        role: "Educator",
      },
    ],
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "Stay close to the work.",
    description: "Occasional notes on new journeys, Academy modules, and community gatherings — no spam, unsubscribe anytime.",
  },
  events: {
    eyebrow: "Events",
    title: "Gatherings for the community.",
    description: "From virtual info sessions to in-person meetups before a journey departs.",
    emptyStateMessage: "No events are scheduled right now — join the newsletter to hear about the next one first.",
  },
  connections: {
    eyebrow: "Connections",
    title: "Find others on the same path.",
    description: "Whether you're planning your first visit or already deep into the Academy curriculum, you don't have to do this alone.",
    cta: { label: "Connect with a steward", href: "/reserve" },
  },
};
