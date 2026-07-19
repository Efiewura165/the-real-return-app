import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "About The Real Return™",
    title: "A place where heritage is studied, preserved, and passed forward.",
    description:
      "The Real Return™ — The Future Africa Experience™ — exists for families, educators, and cultural stewards who want their relationship with Ghana to be considered rather than rushed. We build the frameworks, journeys, and language for a return rooted in dignity: Remember. Return. Rebuild.™",
  },
  mission: {
    eyebrow: "Why we began",
    title: "Return is a practice, not a single trip.",
    body: "We started The Real Return™ because the story of the African Diaspora deserved a home that felt like an institution of memory rather than a tour operator. Every framework we build — from the Ghana Legacy Journey to No More Tears™ — is meant to hold weight for generations, not a single itinerary. We work closely with historians, educators, and community stewards in Ghana to make sure what we teach is accurate, dignified, and rooted in place.",
    image: {
      src: "/images/placeholder/heritage.svg",
      alt: "A documentary-style study of Ghanaian heritage, craft, and landscape",
      caption: "Cape Coast Castle, the forest canopy of Kakum, and the weaving houses of Kumasi shape our curriculum.",
      meta: "Field notes • Ghanaian memory",
    },
  },
  founderNote: {
    eyebrow: "The person behind the platform",
    body: "The Real Return™ began with one educator's own journey back to Ghana — a return that became the blueprint for everything built here since.",
    cta: { label: "Read Tarsha's founder story", href: "/#founder" },
  },
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
  quote: {
    quote: "To return is not only to revisit a place. It is to meet the past with dignity and continue the work of meaning.",
    attribution: "The Real Return™",
  },
  stats: [
    {
      value: "3",
      label: "Regions studied",
      description: "Cape Coast, Kakum, and Kumasi anchor the current curriculum, with Volta in active development.",
    },
    {
      value: "3",
      label: "Pillars of return",
      description: "Remember, Return, and Rebuild form the master framework behind every journey we guide.",
    },
    {
      value: "1:1",
      label: "Steward guidance",
      description: "Every family is paired with a cultural steward for the duration of their journey.",
    },
  ],
};
