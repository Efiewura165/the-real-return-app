import type { ApproachPageContent } from "@/types/approach";

export const approachPageContent: ApproachPageContent = {
  hero: {
    eyebrow: "Approach",
    title: "Thoughtfully Curated. Deeply Connected. Intentionally Designed.",
    description: "Every journey we build rests on three commitments — to the people who guide it, the places that hold it, and the purpose it serves.",
    image: {
      src: "/images/stock/kente-cloth-attire.jpg",
      alt: "Vibrant traditional Ghanaian attire with beads and Kente cloth",
    },
  },
  intro: {
    eyebrow: "How we work",
    title: "Three commitments behind every journey.",
    description: "These aren't values on a wall — they're the filter every itinerary, lesson, and partnership passes through before it reaches a family.",
  },
  pillars: [
    {
      key: "people",
      title: "People",
      tagline: "The Stories That Connect Us",
      description: "Every journey is guided by cultural stewards, historians, and community partners in Ghana — never a script written from a distance.",
    },
    {
      key: "place",
      title: "Place",
      tagline: "The Places That Shape The Story",
      description: "Every experience is rooted in real, specific places — Cape Coast, Kakum, Kumasi — studied and honored, not staged for a photo.",
    },
    {
      key: "purpose",
      title: "Purpose",
      tagline: "Experiences That Create Connection",
      description: "Every detail serves the larger framework of Remember. Return. Rebuild.™ — nothing is included for spectacle's sake.",
    },
  ],
  values: [
    {
      title: "Dignity over spectacle",
      description: "We treat memory as something to be studied and honored, never marketed for quick attention.",
    },
    {
      title: "Rooted in place",
      description: "Every story, ritual, and framework is developed alongside Ghanaian historians and cultural stewards.",
    },
    {
      title: "Built for generations",
      description: "Our work is measured in the frameworks families carry forward, not a single visit or transaction.",
    },
  ],
  milestones: [
    {
      year: "Year one",
      title: "Foundations in Cape Coast",
      description: "The first curriculum was written alongside historians in Cape Coast to ground the work in place and record.",
    },
    {
      year: "Year two",
      title: "The Ghana Legacy Journey launches",
      description: "Guided visits to Cape Coast, Kakum, and Kumasi gave families a lived path from study to experience.",
    },
    {
      year: "Year three",
      title: "Remember. Return. Rebuild.™",
      description: "The master framework became the throughline for every family, steward, and venture we work with.",
    },
  ],
};
