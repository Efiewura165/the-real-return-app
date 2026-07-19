import { defineField, defineType } from "sanity";

export const imageWithMeta = defineType({
  name: "imageWithMeta",
  title: "Image",
  type: "object",
  fields: [
    defineField({ name: "asset", title: "Image", type: "image", options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({ name: "meta", title: "Meta label", type: "string" }),
  ],
  preview: {
    select: { media: "asset", title: "alt" },
  },
});

export const linkObject = defineType({
  name: "linkObject",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL or path", type: "string", validation: (rule) => rule.required() }),
  ],
});

export const buttonObject = defineType({
  name: "buttonObject",
  title: "Button",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "URL or path", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "variant",
      title: "Style",
      type: "string",
      options: { list: ["default", "outline", "secondary", "ghost"] },
    }),
  ],
});

export const sharedObjectSchemas = [imageWithMeta, linkObject, buttonObject];
