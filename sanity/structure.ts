import type { StructureResolver } from "sanity/structure";

import { homepageSingletonNames } from "./schemas/homepage";
import { pageSingletonNames } from "./schemas/pages";

const titleOverrides: Record<string, string> = {
  homepageHero: "Hero",
  homepageWhy: "Why",
  homepagePillars: "Pillars",
  homepageFounder: "Founder Story",
  homepageExperience: "Experience Gallery",
  homepageReflection: "No More Tears™ Reflection",
  homepageLegacyInnovation: "Legacy Innovation",
  homepageAcademy: "Academy Preview",
  homepageItinerary: "Itinerary Preview",
  homepageInvestment: "Investment Tiers",
  homepageCta: "Final CTA",
  aboutPage: "About Page",
  founderPage: "Founder Page",
  approachPage: "Approach Page",
  journeyAcademyPage: "Journey Academy Page",
  experiencesPage: "Experiences Page",
  communityPage: "Community Page",
  reservePage: "Reserve Page",
};

// Every content type here is a singleton — one fixed document per type,
// listed explicitly so editors can't accidentally create duplicates.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("The Real Return™ Content")
    .items([
      S.listItem()
        .title("Homepage")
        .child(
          S.list()
            .title("Homepage sections")
            .items(
              homepageSingletonNames.map((name) =>
                S.listItem()
                  .title(titleOverrides[name] ?? name)
                  .id(name)
                  .child(S.document().schemaType(name).documentId(name)),
              ),
            ),
        ),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items(
              pageSingletonNames.map((name) =>
                S.listItem()
                  .title(titleOverrides[name] ?? name)
                  .id(name)
                  .child(S.document().schemaType(name).documentId(name)),
              ),
            ),
        ),
    ]);
