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
        defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
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
      name: "vision",
      title: "Vision",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text" }),
      ],
    }),
    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
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

export const founderPage = defineType({
  name: "founderPage",
  title: "Founder page",
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
        defineField({ name: "image", title: "Portrait", type: "imageWithMeta" }),
      ],
    }),
    defineField({ name: "name", title: "Founder name", type: "string" }),
    defineField({ name: "role", title: "Founder role", type: "string" }),
    defineField({ name: "body", title: "Body paragraphs", type: "array", of: [defineArrayMember({ type: "text" })] }),
    defineField({ name: "pullQuote", title: "Pull quote", type: "text" }),
    defineField({ name: "cta", title: "Call to action", type: "linkObject" }),
  ],
});

export const approachPage = defineType({
  name: "approachPage",
  title: "Approach page",
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
        defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
      ],
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      validation: (rule) => rule.length(3),
      of: [
        defineArrayMember({
          type: "object",
          name: "approachPillar",
          fields: [
            defineField({
              name: "key",
              title: "Key",
              type: "string",
              options: { list: ["people", "place", "purpose"] },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "approachValue",
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
          name: "approachMilestone",
          fields: [
            defineField({ name: "year", title: "Year label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

export const journeyAcademyPage = defineType({
  name: "journeyAcademyPage",
  title: "Journey Academy page",
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
        defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
      ],
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "programs",
      title: "Named programs (Africa Reimagined™, etc.)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "academyProgram",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "phases",
      title: "Curriculum phases",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "academyPhase",
          fields: [
            defineField({ name: "phase", title: "Phase number", type: "number", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "tier", title: "Tier label", type: "string" }),
            defineField({
              name: "modules",
              title: "Modules",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "academyModule",
                  fields: [
                    defineField({ name: "number", title: "Module number", type: "number", validation: (rule) => rule.required() }),
                    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
                    defineField({
                      name: "topics",
                      title: "Topics",
                      type: "array",
                      of: [
                        defineArrayMember({
                          type: "object",
                          name: "academyTopic",
                          fields: [
                            defineField({ name: "id", title: "Topic ID", type: "string", validation: (rule) => rule.required() }),
                            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "resources",
      title: "Resources",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "academyResource",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "href", title: "Link (optional)", type: "string" }),
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

export const experiencesPage = defineType({
  name: "experiencesPage",
  title: "Experiences page",
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
        defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
      ],
    }),
    defineField({
      name: "carousel",
      title: "Carousel",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "slides", title: "Slides", type: "array", of: [defineArrayMember({ type: "imageWithMeta" })] }),
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
      name: "futureJourneys",
      title: "Future journeys",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
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

export const communityPage = defineType({
  name: "communityPage",
  title: "Community page",
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
        defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
      ],
    }),
    defineField({
      name: "stories",
      title: "Stories",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({
          name: "testimonials",
          title: "Testimonials",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "communityTestimonial",
              fields: [
                defineField({ name: "quote", title: "Quote", type: "text", validation: (rule) => rule.required() }),
                defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "role", title: "Role", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "emptyStateMessage", title: "Empty state message", type: "text" }),
      ],
    }),
    defineField({
      name: "connections",
      title: "Connections",
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

export const reservePage = defineType({
  name: "reservePage",
  title: "Reserve page",
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
        defineField({ name: "image", title: "Hero image", type: "imageWithMeta" }),
      ],
    }),
    defineField({
      name: "journeyOptions",
      title: "Journey options",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "process",
      title: "Reservation process",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "reservationStep",
              fields: [
                defineField({ name: "step", title: "Step number", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Description", type: "text" }),
              ],
            }),
          ],
        }),
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

export const pageSchemas = [aboutPage, founderPage, approachPage, journeyAcademyPage, experiencesPage, communityPage, reservePage];
export const pageSingletonNames = pageSchemas.map((schema) => schema.name);
