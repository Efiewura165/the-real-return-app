import type { ItineraryContent } from "@/types/homepage";

export const itineraryContent: ItineraryContent = {
  eyebrow: "Ghana Legacy Journey",
  title: "A journey held together by place, ritual, and memory.",
  description: "A preview of the experiences, locations, and cultural moments that shape the full itinerary.",
  highlights: [
    {
      day: "Day 1",
      title: "Arrival & Orientation",
      location: "Accra",
      description: "Placeholder — arrival rituals and an introduction to the journey ahead.",
    },
    {
      day: "Day 3",
      title: "Cape Coast Castle",
      location: "Cape Coast",
      description: "Placeholder — a guided reflection experience at Cape Coast Castle.",
    },
    {
      day: "Day 5",
      title: "Kakum Canopy Walk",
      location: "Kakum National Park",
      description: "Placeholder — the forest canopy and its place in the story of return.",
    },
    {
      day: "Day 7",
      title: "Kumasi Weaving Houses",
      location: "Kumasi",
      description: "Placeholder — Kente weaving traditions and artisan craft.",
    },
  ],
  cta: { label: "View the full journey", href: "/journey" },
};
