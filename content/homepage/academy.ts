import type { CoursePreview } from "@/types/homepage";

export const academyPreview: CoursePreview = {
  eyebrow: "The Academy",
  title: "Arrive prepared. Learn before you land.",
  description:
    "Membership begins with Foundation & Orientation — grounded, practical modules that prepare you before you ever set foot in Ghana. From there, deeper phases unlock: Cultural Deep-Dive, Identity & Belonging, Practical Relocation, Economic Opportunity, and 1:1 Concierge guidance for those ready to go further.",
  facilitator: "Taught by Tarsha Lewis, Founder of The Real Return™",
  image: {
    src: "/images/stock/academy-heritage-lesson.jpg",
    alt: "An educator writing on a whiteboard during a heritage studies lesson",
  },
  courses: [
    {
      title: "Cultural Acclimatization",
      description: "Social hierarchy and respect norms, greetings and etiquette, Ghana Time, family structure, and the role of faith in daily life.",
      duration: "5 lessons",
    },
    {
      title: "Linguistic Basics",
      description: "Survival phrases in Twi, Ga, and Ewe, everyday expressions, non-verbal communication, and the Akan proverbs that shape how people speak.",
      duration: "5 lessons",
    },
    {
      title: "Documentation",
      description: "Visa types, Right of Abode eligibility, the Ghana Card, customs rules, and the health requirements to sort out before you travel.",
      duration: "5 lessons",
    },
  ],
  cta: { label: "Explore Academy Membership", href: "/reserve" },
};
