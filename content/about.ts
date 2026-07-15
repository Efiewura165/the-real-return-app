import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "About the platform",
    title: "A place where heritage is studied, preserved, and passed forward.",
    description:
      "The Real Return exists for families, educators, and cultural stewards who want their relationship with Ghana to be considered rather than rushed. We build the frameworks, journeys, and language for a return rooted in dignity.",
  },
  mission: {
    eyebrow: "Why we began",
    title: "Return is a practice, not a single trip.",
    body: "We started The Real Return because the story of the African Diaspora deserved a home that felt like an institution of memory rather than a tour operator. Every framework we build is meant to hold weight for generations, not a single itinerary. We work closely with historians, educators, and community stewards in Ghana to make sure what we teach is accurate, dignified, and rooted in place.",
    image: {
      src: "/images/placeholder/heritage.svg",
      alt: "A documentary-style study of Ghanaian heritage, craft, and landscape",
      caption: "Cape Coast Castle, the forest canopy of Kakum, and the weaving houses of Kumasi shape our curriculum.",
      meta: "Field notes • Ghanaian memory",
    },
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
      title: "Foundations of Heritage",
      description: "The first course was written alongside historians in Cape Coast to ground the curriculum in place and record.",
    },
    {
      year: "Year two",
      title: "The Academy opens",
      description: "Legacy Mapping and Meaningful Connection joined the curriculum, giving families a full path from study to practice.",
    },
    {
      year: "Year three",
      title: "The Journey framework",
      description: "Learn, Connect, Experience, and Build became the throughline for every family and steward we work with.",
    },
  ],
  quote: {
    quote: "To return is not only to revisit a place. It is to meet the past with dignity and continue the work of meaning.",
    attribution: "The Real Return Studio",
  },
  stats: [
    {
      value: "3",
      label: "Regions studied",
      description: "Cape Coast, Kakum, and Kumasi anchor the current curriculum, with Volta in active development.",
    },
    {
      value: "4",
      label: "Stages of return",
      description: "Learn, connect, experience, and build form a coherent path rather than a single event.",
    },
    {
      value: "1:1",
      label: "Steward guidance",
      description: "Every family is paired with a cultural steward for the duration of their journey.",
    },
  ],
};
