import { defineArrayMember, defineField, defineType } from "sanity";

export const homepageHero = defineType({
  name: "homepageHero",
  title: "Homepage — Hero",
  type: "document",
  fields: [
    defineField({
      name: "brandStack",
      title: "Brand stack (stacked lines above the eyebrow)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "location", title: "Location line", type: "string" }),
    defineField({ name: "eyebrow", title: "Eyebrow (tagline line)", type: "string" }),
    defineField({ name: "title", title: "Headline", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "subtitle", title: "Supporting text", type: "text" }),
    defineField({ name: "primaryCta", title: "Primary button", type: "linkObject" }),
    defineField({ name: "secondaryCta", title: "Secondary button", type: "linkObject" }),
    defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
  ],
});

export const homepageWhy = defineType({
  name: "homepageWhy",
  title: "Homepage — Why",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({ name: "focusAreas", title: "Focus areas", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "image", title: "Image", type: "imageWithMeta" }),
  ],
});

export const homepagePillars = defineType({
  name: "homepagePillars",
  title: "Homepage — Pillars",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      validation: (rule) => rule.length(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "pillar",
          fields: [
            defineField({
              name: "key",
              title: "Key",
              type: "string",
              options: { list: ["remember", "return", "rebuild"] },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const homepageFounder = defineType({
  name: "homepageFounder",
  title: "Homepage — Founder Story",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "name", title: "Founder name", type: "string" }),
    defineField({ name: "role", title: "Founder role", type: "string" }),
    defineField({ name: "body", title: "Body paragraphs", type: "array", of: [defineArrayMember({ type: "text" })] }),
    defineField({ name: "pullQuote", title: "Pull quote", type: "text" }),
    defineField({ name: "image", title: "Image", type: "imageWithMeta" }),
  ],
});

export const homepageExperience = defineType({
  name: "homepageExperience",
  title: "Homepage — Experience gallery",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "images", title: "Gallery images", type: "array", of: [defineArrayMember({ type: "imageWithMeta" })] }),
  ],
});

export const homepageReflection = defineType({
  name: "homepageReflection",
  title: "Homepage — No More Tears™ Reflection",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "body", title: "Body paragraphs", type: "array", of: [defineArrayMember({ type: "text" })] }),
    defineField({ name: "closingLine", title: "Closing line", type: "text" }),
  ],
});

export const homepageLegacyInnovation = defineType({
  name: "homepageLegacyInnovation",
  title: "Homepage — Legacy Innovation",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "legacyInnovationItem",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const homepageItinerary = defineType({
  name: "homepageItinerary",
  title: "Homepage — Itinerary preview",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "itineraryHighlight",
          fields: [
            defineField({ name: "day", title: "Day label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({ name: "cta", title: "Call to action", type: "linkObject" }),
  ],
});

export const homepageInvestment = defineType({
  name: "homepageInvestment",
  title: "Homepage — Investment tiers",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "tiers",
      title: "Tiers",
      type: "array",
      validation: (rule) => rule.length(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "investmentTier",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "inclusions", title: "Inclusions", type: "array", of: [defineArrayMember({ type: "string" })] }),
            defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});

export const homepageCta = defineType({
  name: "homepageCta",
  title: "Homepage — Final CTA",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "buttons", title: "Buttons", type: "array", of: [defineArrayMember({ type: "buttonObject" })] }),
  ],
});

export const homepageSchemas = [
  homepageHero,
  homepageWhy,
  homepagePillars,
  homepageFounder,
  homepageExperience,
  homepageReflection,
  homepageLegacyInnovation,
  homepageItinerary,
  homepageInvestment,
  homepageCta,
];

export const homepageSingletonNames = homepageSchemas.map((schema) => schema.name);
