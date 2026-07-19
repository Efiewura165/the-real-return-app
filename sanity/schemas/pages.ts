import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text" }),
        defineField({ name: "image", title: "Image", type: "imageWithMeta" }),
      ],
    }),
    defineField({
      name: "founderNote",
      title: "Founder note",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text" }),
        defineField({ name: "cta", title: "Call to action", type: "linkObject" }),
      ],
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "aboutValue",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "milestones",
      title: "Milestones",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "aboutMilestone",
          fields: [
            defineField({ name: "year", title: "Year label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "object",
      fields: [
        defineField({ name: "quote", title: "Quote", type: "text" }),
        defineField({ name: "attribution", title: "Attribution", type: "string" }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "aboutStat",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const journeyPage = defineType({
  name: "journeyPage",
  title: "Journey page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "stages",
      title: "Itinerary stops",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "journeyStage",
          fields: [
            defineField({ name: "label", title: "Day label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "details", title: "Details", type: "array", of: [defineArrayMember({ type: "string" })] }),
          ],
        }),
      ],
    }),
    defineField({
      name: "closing",
      title: "Closing",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "cta", title: "Call to action", type: "linkObject" }),
      ],
    }),
  ],
});

export const connectPage = defineType({
  name: "connectPage",
  title: "Connect page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "info",
      title: "Contact info",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "connectInfoItem",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", title: "Link (optional)", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "form",
      title: "Form copy",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
  ],
});

export const pageSchemas = [aboutPage, journeyPage, connectPage];
export const pageSingletonNames = pageSchemas.map((schema) => schema.name);
