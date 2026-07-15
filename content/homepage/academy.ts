import type { CoursePreview } from "@/types/homepage";

export const academyPreview: CoursePreview = {
  eyebrow: "The Academy",
  title: "Learn the language of heritage with structure, dignity, and direction.",
  description:
    "A thoughtful learning experience designed for individuals and families who want depth, reflection, and next-step guidance on their return journey.",
  image: {
    src: "/images/placeholder/academy.svg",
    alt: "Illustration of a learning experience rooted in heritage",
  },
  courses: [
    {
      title: "Foundations of Heritage",
      description: "An introductory course on lineage, memory, and the ethical responsibilities of inheritance.",
      duration: "4 weeks",
    },
    {
      title: "Legacy Mapping",
      description: "A guided framework for documenting family stories, values, and future intentions.",
      duration: "6 weeks",
    },
    {
      title: "Meaningful Connection",
      description: "Practical tools for bringing knowledge into lived practice through community and ritual.",
      duration: "3 weeks",
    },
  ],
};
