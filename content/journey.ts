import type { JourneyPageContent } from "@/types/journey";

export const journeyPageContent: JourneyPageContent = {
  hero: {
    eyebrow: "Ghana Legacy Journey",
    title: "A journey held together by place, ritual, and memory.",
    description:
      "The full itinerary behind The Real Return™ — a sequence of arrival, reflection, craft, and legacy-building across Ghana. Each stop carries its own pace and its own work.",
    image: {
      src: "/images/stock/kente-weaving-loom.jpg",
      alt: "A craftsman weaves colorful Kente cloth on a traditional loom in Accra, Ghana",
    },
  },
  carousel: {
    eyebrow: "Moments of return",
    title: "What the journey actually feels like.",
    description: "From arrival at Kotoka to the pride of the Year of Return and the energy of December in Accra, this is the arc every pilgrim moves through.",
    slides: [
      {
        src: "/images/journey/kotoka-airport-accra.jpg",
        alt: "Traffic and street life in Accra near Kotoka International Airport, where diasporans arrive",
        caption: "Kotoka International Airport — the first steps of the return.",
      },
      {
        src: "/images/journey/year-of-return-celebration.jpg",
        alt: "A Ghanaian celebration with kente cloth and flags, in the spirit of the Year of Return",
        caption: "Year of Return — pride made visible.",
      },
      {
        src: "/images/journey/dirty-december-accra.jpg",
        alt: "A vibrant street crowd in Accra during the December festive season",
        caption: "Detty December — the energy of homecoming.",
      },
    ],
  },
  stages: [
    {
      label: "Day 1",
      location: "Accra",
      title: "Arrival & Orientation",
      description: "Placeholder — arrival rituals and an introduction to the journey ahead.",
      details: [
        "Welcome circle with your steward",
        "Orientation to the Remember. Return. Rebuild.™ framework",
        "Rest and acclimation",
      ],
    },
    {
      label: "Day 3",
      location: "Cape Coast",
      title: "Cape Coast Castle",
      description: "Placeholder — a guided reflection experience at Cape Coast Castle, held in the spirit of No More Tears™.",
      details: [
        "Guided castle tour with a cultural historian",
        "No More Tears™ reflection experience",
        "Time for private processing and journaling",
      ],
    },
    {
      label: "Day 5",
      location: "Kakum National Park",
      title: "Kakum Canopy Walk",
      description: "Placeholder — the forest canopy and its place in the story of return.",
      details: [
        "Canopy walk through the forest reserve",
        "Conversation on land, stewardship, and the Legacy Innovation work",
        "Guided rest stop with local artisans",
      ],
    },
    {
      label: "Day 7",
      location: "Kumasi",
      title: "Kumasi Weaving Houses",
      description: "Placeholder — Kente weaving traditions and artisan craft.",
      details: [
        "Kente weaving demonstration and workshop",
        "Visit with artisan cooperatives",
        "Time in the Manhyia Palace grounds",
      ],
    },
    {
      label: "Day 9",
      location: "Volta Region",
      title: "Volta — in active development",
      description: "Placeholder — Volta is being added to the Ghana Legacy Journey; details to follow.",
      details: [
        "Placeholder — confirm itinerary once Volta programming is finalized",
      ],
    },
    {
      label: "Day 10",
      location: "Accra",
      title: "Legacy Building & Departure",
      description: "Placeholder — closing session translating the journey into a family or venture plan.",
      details: [
        "Legacy Mapping closing session with your steward",
        "A plan for what gets carried forward, and how",
        "Departure and ongoing steward support",
      ],
    },
  ],
  futureJourneys: {
    eyebrow: "What's next",
    title: "Future African journeys.",
    description: "Ghana is where The Real Return™ began — not where it ends. We're in early development on experiences beyond Ghana; join the newsletter to hear where we go next.",
  },
  closing: {
    eyebrow: "Begin where you are",
    title: "Every family starts at a different stage.",
    description: "A steward will help you find the right entry point into the journey, whether that is the full itinerary or a single guided visit.",
    cta: { label: "Connect with a steward", href: "/reserve" },
  },
};
