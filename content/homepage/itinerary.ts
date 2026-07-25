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
      description: "A welcome grounded in intention. Settle into Accra, meet your fellow travelers, and take part in an opening ritual that names why each person has come — the first step of a journey measured in meaning, not miles.",
    },
    {
      day: "Day 3",
      title: "Cape Coast Castle",
      location: "Cape Coast",
      description: "A guided walk through the castle's dungeons and the Door of No Return, held with a steward trained to make space for grief, anger, and pride alike. Reflection here is unhurried, and never asked to be resolved by sundown.",
    },
    {
      day: "Day 5",
      title: "Kakum Canopy Walk",
      location: "Kakum National Park",
      description: "A walk above the rainforest canopy that once bordered the routes families were taken from. Here the journey turns toward what endures — the land itself, still standing, still growing, long after the history it witnessed.",
    },
    {
      day: "Day 7",
      title: "Kumasi Weaving Houses",
      location: "Kumasi",
      description: "Time with master weavers in the workshops where kente is still made by hand, thread by thread. Learn the meaning held in pattern and color, and leave with a length of cloth chosen — not assigned — for what it says about your own story.",
    },
  ],
  cta: { label: "View the full journey", href: "/experiences" },
};
