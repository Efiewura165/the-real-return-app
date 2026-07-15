import type { JourneyPageContent } from "@/types/journey";

export const journeyPageContent: JourneyPageContent = {
  hero: {
    eyebrow: "The journey",
    title: "A coherent path from study to stewardship.",
    description:
      "Return is not a single trip. It is a sequence of learning, connection, experience, and building that deepens over time. Each stage below carries its own pace and its own work.",
  },
  stages: [
    {
      label: "Step 01",
      title: "Learn",
      description: "Begin with the stories, histories, and principles that shape a deeper understanding of heritage.",
      details: [
        "Foundations of Heritage coursework on lineage and memory",
        "Guided reading on Cape Coast, Kakum, and Kumasi",
        "A framework for asking better questions about inheritance",
      ],
    },
    {
      label: "Step 02",
      title: "Connect",
      description: "Bring that understanding into shared circles of family, culture, and guided practice.",
      details: [
        "Facilitated family sessions to surface shared history",
        "Introductions to cultural stewards in Ghana",
        "Practice translating study into shared language",
      ],
    },
    {
      label: "Step 03",
      title: "Experience",
      description: "Translate knowledge into lived experience through meaningful guided encounters and rituals.",
      details: [
        "Guided time at Cape Coast Castle, Kakum, and Kumasi",
        "Ritual and craft encounters with local stewards",
        "Space to sit with what the journey surfaces",
      ],
    },
    {
      label: "Step 04",
      title: "Build",
      description: "Move from inspiration to action, creating a lasting foundation for the generations ahead.",
      details: [
        "Legacy Mapping to document family story and intention",
        "A plan for what gets carried forward, and how",
        "Ongoing steward support as the work continues",
      ],
    },
  ],
  closing: {
    eyebrow: "Begin where you are",
    title: "Every family starts at a different stage.",
    description: "A steward will help you find the right entry point into the journey, whether that is a first course or a guided visit.",
    cta: { label: "Connect with a steward", href: "/connect" },
  },
};
