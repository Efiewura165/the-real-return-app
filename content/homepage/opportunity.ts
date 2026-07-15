import type { OpportunityItem } from "@/types/homepage";

export const opportunityPreview = {
  eyebrow: "Opportunity",
  title: "Build with intention, not urgency.",
  description:
    "Every experience is designed to create a lasting contribution to culture, community, and personal growth.",
  items: [
    {
      title: "For families",
      description: "Create a shared language for inheritance, memory, and future planning.",
    },
    {
      title: "For educators",
      description: "Bring heritage into learning settings with depth and integrity.",
    },
    {
      title: "For stewards",
      description: "Support cultural preservation through thoughtful programming and community connection.",
    },
  ] satisfies OpportunityItem[],
};
