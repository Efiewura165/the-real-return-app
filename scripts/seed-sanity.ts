/**
 * One-time seed: pushes the existing static content (content/*.ts) into
 * Sanity as the starting documents, so the Studio opens already populated
 * with what's live on the site instead of a blank slate.
 *
 * Usage: npm run seed
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and
 * SANITY_API_WRITE_TOKEN (a token with Editor/Administrator rights,
 * created at https://www.sanity.io/manage under your project's API tab)
 * in .env.local. Safe to re-run — every document is createOrReplace'd by
 * a fixed id, so re-running just overwrites the same 21 documents.
 */
import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { createClient, type SanityClient } from "@sanity/client";

// Load .env.local by hand (rather than `tsx --env-file`) since that flag
// hard-fails if the file doesn't exist yet — fine here, just a no-op.
const envLocalPath = path.join(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  process.loadEnvFile(envLocalPath);
}

import { heroContent } from "../content/homepage/hero";
import { whyContent } from "../content/homepage/why";
import { pillarsContent } from "../content/homepage/pillars";
import { founderContent } from "../content/homepage/founder";
import { experienceContent } from "../content/homepage/experience";
import { reflectionContent } from "../content/homepage/reflection";
import { legacyInnovationContent } from "../content/homepage/legacy-innovation";
import { academyPreview } from "../content/homepage/academy";
import { itineraryContent } from "../content/homepage/itinerary";
import { investmentContent } from "../content/shared/investment";
import { communityInvitationContent } from "../content/homepage/community-invitation";
import { investSectionContent } from "../content/homepage/invest";
import { ctaContent } from "../content/homepage/cta";
import { aboutContent } from "../content/about";
import { founderPageContent } from "../content/founder";
import { approachPageContent } from "../content/approach";
import { academyPageContent } from "../content/academy";
import { journeyPageContent } from "../content/journey";
import { communityPageContent } from "../content/community";
import { connectContent } from "../content/connect";
import { investPageContent } from "../content/invest";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in your environment.\n" +
      "Add both to .env.local (see .env.example) before running `npm run seed`.",
  );
  process.exit(1);
}

const client: SanityClient = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

type ImageInput = { src: string; alt: string; caption?: string; meta?: string } | undefined;

// Caches uploads by source path so the same placeholder image used across
// multiple sections (e.g. heritage.svg) is only uploaded to Sanity once.
const uploadedAssets = new Map<string, string>();

async function uploadImage(src: string): Promise<string | null> {
  if (uploadedAssets.has(src)) return uploadedAssets.get(src)!;

  const filePath = path.join(process.cwd(), "public", src);
  if (!fs.existsSync(filePath)) {
    console.warn(`  ! Image not found on disk, skipping: ${filePath}`);
    return null;
  }

  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  });
  uploadedAssets.set(src, asset._id);
  return asset._id;
}

async function imageWithMeta(image: ImageInput) {
  if (!image) return undefined;
  const assetId = await uploadImage(image.src);
  if (!assetId) return undefined;
  return {
    _type: "imageWithMeta",
    asset: { _type: "reference", _ref: assetId },
    alt: image.alt,
    caption: image.caption,
    meta: image.meta,
  };
}

// Sanity requires a unique _key on every array-of-object member.
function withKeys<T extends object>(items: T[]): (T & { _key: string })[] {
  return items.map((item) => ({ ...item, _key: randomUUID() }));
}

async function set(id: string, type: string, fields: Record<string, unknown>) {
  await client.createOrReplace({ _id: id, _type: type, ...fields });
  console.log(`  ✓ ${type}`);
}

async function seed() {
  console.log(`Seeding Sanity project "${projectId}" (dataset: ${dataset})...\n`);

  await set("homepageHero", "homepageHero", {
    brandStack: heroContent.brandStack,
    location: heroContent.location,
    eyebrow: heroContent.eyebrow,
    title: heroContent.title,
    subtitle: heroContent.subtitle,
    primaryCta: heroContent.primaryCta,
    secondaryCta: heroContent.secondaryCta,
    images: withKeys((await Promise.all(heroContent.images.map((image) => imageWithMeta(image)))).filter((image) => image !== undefined)),
  });

  await set("homepageWhy", "homepageWhy", {
    eyebrow: whyContent.eyebrow,
    title: whyContent.title,
    body: whyContent.body,
    focusAreas: whyContent.focusAreas,
    image: await imageWithMeta(whyContent.image),
  });

  await set("homepagePillars", "homepagePillars", {
    eyebrow: pillarsContent.eyebrow,
    title: pillarsContent.title,
    pillars: withKeys(pillarsContent.pillars),
  });

  await set("homepageFounder", "homepageFounder", {
    eyebrow: founderContent.eyebrow,
    title: founderContent.title,
    name: founderContent.name,
    role: founderContent.role,
    body: founderContent.body,
    pullQuote: founderContent.pullQuote,
    image: await imageWithMeta(founderContent.image),
  });

  const experienceImages = await Promise.all(experienceContent.images.map((image) => imageWithMeta(image)));
  await set("homepageExperience", "homepageExperience", {
    eyebrow: experienceContent.eyebrow,
    title: experienceContent.title,
    description: experienceContent.description,
    images: experienceImages
      .filter((image): image is NonNullable<typeof image> => Boolean(image))
      .map((image) => ({ ...image, _key: randomUUID() })),
  });

  await set("homepageReflection", "homepageReflection", {
    eyebrow: reflectionContent.eyebrow,
    title: reflectionContent.title,
    body: reflectionContent.body,
    closingLine: reflectionContent.closingLine,
  });

  await set("homepageLegacyInnovation", "homepageLegacyInnovation", {
    eyebrow: legacyInnovationContent.eyebrow,
    title: legacyInnovationContent.title,
    description: legacyInnovationContent.description,
    items: withKeys(legacyInnovationContent.items),
  });

  await set("homepageAcademy", "homepageAcademy", {
    eyebrow: academyPreview.eyebrow,
    title: academyPreview.title,
    description: academyPreview.description,
    facilitator: academyPreview.facilitator,
    image: await imageWithMeta(academyPreview.image),
    courses: withKeys(academyPreview.courses),
    cta: academyPreview.cta,
  });

  await set("homepageItinerary", "homepageItinerary", {
    eyebrow: itineraryContent.eyebrow,
    title: itineraryContent.title,
    description: itineraryContent.description,
    highlights: withKeys(itineraryContent.highlights),
    cta: itineraryContent.cta,
  });

  await set("homepageInvestment", "homepageInvestment", {
    eyebrow: investmentContent.eyebrow,
    title: investmentContent.title,
    description: investmentContent.description,
    tiers: withKeys(investmentContent.tiers),
  });

  await set("homepageCommunityInvitation", "homepageCommunityInvitation", {
    eyebrow: communityInvitationContent.eyebrow,
    title: communityInvitationContent.title,
    description: communityInvitationContent.description,
    buttons: withKeys(communityInvitationContent.buttons),
  });

  await set("homepageInvest", "homepageInvest", {
    eyebrow: investSectionContent.eyebrow,
    title: investSectionContent.title,
    description: investSectionContent.description,
    buttons: withKeys(investSectionContent.buttons),
  });

  await set("homepageCta", "homepageCta", {
    eyebrow: ctaContent.eyebrow,
    title: ctaContent.title,
    description: ctaContent.description,
    buttons: withKeys(ctaContent.buttons),
  });

  await set("aboutPage", "aboutPage", {
    hero: { ...aboutContent.hero, image: await imageWithMeta(aboutContent.hero.image) },
    question: aboutContent.question,
    story: aboutContent.story,
    mission: { ...aboutContent.mission, image: await imageWithMeta(aboutContent.mission.image) },
    vision: aboutContent.vision,
    philosophy: aboutContent.philosophy,
    quote: aboutContent.quote,
    stats: withKeys(aboutContent.stats),
  });

  await set("founderPage", "founderPage", {
    hero: { ...founderPageContent.hero, image: await imageWithMeta(founderPageContent.hero.image) },
    name: founderPageContent.name,
    role: founderPageContent.role,
    story: founderPageContent.story,
    educationBackground: founderPageContent.educationBackground,
    passion: founderPageContent.passion,
    vision: founderPageContent.vision,
    pullQuote: founderPageContent.pullQuote,
    cta: founderPageContent.cta,
  });

  await set("approachPage", "approachPage", {
    hero: { ...approachPageContent.hero, image: await imageWithMeta(approachPageContent.hero.image) },
    intro: approachPageContent.intro,
    pillars: withKeys(approachPageContent.pillars),
    values: withKeys(approachPageContent.values),
    milestones: withKeys(approachPageContent.milestones),
  });

  await set("journeyAcademyPage", "journeyAcademyPage", {
    hero: { ...academyPageContent.hero, image: await imageWithMeta(academyPageContent.hero.image) },
    intro: academyPageContent.intro,
    programs: withKeys(academyPageContent.programs),
    phases: withKeys(
      academyPageContent.phases.map((phase) => ({
        ...phase,
        modules: withKeys(phase.modules.map((module) => ({ ...module, topics: withKeys(module.topics) }))),
      })),
    ),
    resources: withKeys(academyPageContent.resources),
    closing: academyPageContent.closing,
  });

  const experienceCarouselSlides = await Promise.all(journeyPageContent.carousel.slides.map((slide) => imageWithMeta(slide)));
  await set("experiencesPage", "experiencesPage", {
    hero: { ...journeyPageContent.hero, image: await imageWithMeta(journeyPageContent.hero.image) },
    carousel: {
      eyebrow: journeyPageContent.carousel.eyebrow,
      title: journeyPageContent.carousel.title,
      description: journeyPageContent.carousel.description,
      slides: experienceCarouselSlides
        .filter((slide): slide is NonNullable<typeof slide> => Boolean(slide))
        .map((slide) => ({ ...slide, _key: randomUUID() })),
    },
    stages: withKeys(journeyPageContent.stages),
    experienceHighlights: {
      eyebrow: journeyPageContent.experienceHighlights.eyebrow,
      title: journeyPageContent.experienceHighlights.title,
      items: withKeys(journeyPageContent.experienceHighlights.items),
    },
    futureJourneys: journeyPageContent.futureJourneys,
    closing: journeyPageContent.closing,
  });

  await set("communityPage", "communityPage", {
    hero: { ...communityPageContent.hero, image: await imageWithMeta(communityPageContent.hero.image) },
    stories: {
      eyebrow: communityPageContent.stories.eyebrow,
      title: communityPageContent.stories.title,
      description: communityPageContent.stories.description,
      testimonials: withKeys(communityPageContent.stories.testimonials),
    },
    newsletter: communityPageContent.newsletter,
    events: communityPageContent.events,
    culturalConversations: communityPageContent.culturalConversations,
    globalConnections: communityPageContent.globalConnections,
  });

  await set("reservePage", "reservePage", {
    hero: { ...connectContent.hero, image: await imageWithMeta(connectContent.hero.image) },
    journeyOptions: connectContent.journeyOptions,
    process: { ...connectContent.process, steps: withKeys(connectContent.process.steps) },
    info: withKeys(connectContent.info),
    form: connectContent.form,
  });

  await set("investPage", "investPage", {
    hero: { ...investPageContent.hero, image: await imageWithMeta(investPageContent.hero.image) },
    whyInvest: { ...investPageContent.whyInvest, points: withKeys(investPageContent.whyInvest.points) },
    strategicPartnerships: {
      ...investPageContent.strategicPartnerships,
      items: withKeys(investPageContent.strategicPartnerships.items),
    },
    sponsors: { ...investPageContent.sponsors, items: withKeys(investPageContent.sponsors.items) },
    investors: { ...investPageContent.investors, points: withKeys(investPageContent.investors.points) },
    form: investPageContent.form,
  });

  console.log("\nDone — the Studio at /studio should now show all 21 documents populated.");
}

seed().catch((error) => {
  console.error("\nSeed failed:", error);
  process.exit(1);
});
