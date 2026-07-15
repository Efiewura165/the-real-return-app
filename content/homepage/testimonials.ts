import type { Testimonial } from "@/types/homepage";

export const testimonialContent = {
  eyebrow: "Voices of return",
  title: "People are learning to see legacy not as a memory, but as a living practice.",
  description:
    "The experience is shaped by those who want to reclaim, preserve, and build with deeper intention.",
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
  ] satisfies Testimonial[],
};
