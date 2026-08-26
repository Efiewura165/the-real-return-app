import type { PackagesPageContent } from "@/types/packages";

/**
 * Standalone content for the /packages page: the three evergreen tiers
 * (imported from content/shared/investment.ts, same source used on the
 * homepage, Experiences, and Reserve) plus a December-season set of tiers
 * with a full itinerary, built for travelers arriving during Ghana's
 * December return season.
 */
export const packagesPageContent: PackagesPageContent = {
  hero: {
    eyebrow: "Our Package Trips",
    title: "A journey for every season of return.",
    description:
      "Every package is a considered experience, not a brochure tour — accommodation, a dedicated steward, and guided reflection are built into each one, at every tier.",
    image: {
      src: "/images/stock/kakum-canopy-walk.jpg",
      alt: "The forest canopy walkway at Kakum National Park, Ghana",
    },
  },
  evergreen: {
    eyebrow: "Year-Round",
    title: "Journeys built for where you are, right now.",
    description: "Every tier is a considered experience, not a package — accommodation is included at every level, not sold as an add-on.",
  },
  seasonal: {
    eyebrow: "December Season",
    title: "The Real Return: December Edition.",
    description:
      "Ghana's December return season — AfroFuture, citywide celebrations, and the Year of Return spirit — held inside the same framework of ritual and reflection as every Real Return journey.",
    tiers: [
      {
        name: "Legacy Journey — December Edition",
        description: "The guided introduction to the Ghana Legacy Journey framework, built for the December return season.",
        season: "December 26 – January 2",
        price: "$3,795",
        priceNote: "per person, double occupancy · single occupancy +$650",
        accommodation: "4-star hotel in Accra, double occupancy, for the full 7-night itinerary.",
        highlights: [
          {
            day: "Day 1",
            title: "Arrival & Welcome Dinner",
            location: "Accra",
            description: "Airport pickup, hotel check-in, and a welcome dinner that opens the journey — the first step of a season measured in meaning, not just events.",
          },
          {
            day: "Day 2",
            title: "Accra Orientation & Craft Workshop",
            location: "Accra",
            description: "Kwame Nkrumah Memorial, a hands-on batik or cooking workshop, and a Foundations of Heritage session ahead of AfroFuture's opening night.",
          },
          {
            day: "Day 4",
            title: "Cape Coast Castle",
            location: "Cape Coast",
            description: "A guided walk through the castle's dungeons and the Door of No Return, held with a steward trained to make space for grief, anger, and pride alike.",
          },
          {
            day: "Day 5",
            title: "Assin Manso Naming Ceremony",
            location: "Assin Manso",
            description: "A traditional naming ceremony at the Slave River site — a ritual return, not a photo stop.",
          },
          {
            day: "Day 6",
            title: "Kakum Canopy Walk",
            location: "Kakum National Park",
            description: "A walk above the rainforest canopy that once bordered the routes families were taken from, followed by an evening beach club.",
          },
          {
            day: "Day 7",
            title: "New Year's Eve & Closing Circle",
            location: "Accra",
            description: "A citywide New Year's Eve celebration, followed by a closing circle that names what each traveler is carrying home.",
          },
        ],
        inclusions: [
          "Hotel accommodation for the full 7-night itinerary",
          "Daily breakfast and 3 dinners",
          "Airport transfers and in-country transportation",
          "A dedicated steward throughout the journey",
          "All site entry fees and the traditional naming ceremony",
          "AfroFuture Festival VIP access",
        ],
        exclusions: [
          "International flights",
          "Visa fees",
          "Yellow Fever vaccination certificate",
          "Travel insurance",
          "Gratuities and personal expenses",
        ],
        paymentNote:
          "$500 deposit holds your place, refundable up to 60 days before departure. Balance is arranged directly with your steward, due 45 days before departure.",
        ctaLabel: "Inquire About This Journey",
      },
      {
        name: "Signature Return — December Edition",
        description: "A deeper December path, with room added for craft, community, and reflection between the season's anchor moments.",
        season: "December 26 – January 4 (9 nights)",
        price: "$4,650",
        priceNote: "per person, private room included",
        accommodation: "4-star hotel in Accra plus one night at a coastal resort, private room, for small-group or private family dates.",
        highlights: [
          {
            day: "Day 1",
            title: "Arrival & Welcome Dinner",
            location: "Accra",
            description: "Airport pickup, hotel check-in, and a welcome dinner grounded in intention.",
          },
          {
            day: "Day 4",
            title: "Cape Coast Castle & Coastal Resort",
            location: "Cape Coast",
            description: "Extended time at Cape Coast Castle, followed by a night at a coastal resort — unhurried, not rushed to the next stop.",
          },
          {
            day: "Day 5",
            title: "Assin Manso Naming Ceremony",
            location: "Assin Manso",
            description: "A traditional naming ceremony, held with more time for reflection than the Legacy Journey tier allows.",
          },
          {
            day: "Day 7",
            title: "Kumasi Weaving Houses",
            location: "Kumasi",
            description: "Time with master weavers in the workshops where kente is still made by hand — a length of cloth chosen, not assigned.",
          },
          {
            day: "Day 8",
            title: "Community Give-Back Visit",
            location: "Accra",
            description: "A visit built into the itinerary, not offered as an add-on — time with a local school or community initiative your steward has a standing relationship with.",
          },
          {
            day: "Day 9",
            title: "New Year's Eve & Farewell Dinner",
            location: "Accra",
            description: "A citywide New Year's Eve celebration, followed by a farewell dinner and closing circle before departure.",
          },
        ],
        inclusions: [
          "Everything in Legacy Journey — December Edition",
          "One night at a coastal resort between Cape Coast and Kumasi",
          "Small-group or private family departure dates",
          "One-on-one legacy mapping session with your steward",
          "A community give-back visit built into the itinerary",
        ],
        exclusions: [
          "International flights",
          "Visa fees",
          "Yellow Fever vaccination certificate",
          "Travel insurance",
          "Gratuities and personal expenses",
        ],
        paymentNote:
          "$500 deposit holds your place, refundable up to 60 days before departure. Balance is arranged directly with your steward, due 45 days before departure.",
        ctaLabel: "Inquire About This Journey",
      },
      {
        name: "Crown Legacy Experience — December Edition",
        description: "The full, private Real Return™ experience, built entirely around your family's own history and the December season.",
        season: "Custom dates, December 20 – January 10",
        price: "From $7,500",
        priceNote: "per person, custom quote",
        accommodation: "Private villa or 5-star suite, fully private for your family or group.",
        highlights: [
          {
            day: "Day 1",
            title: "Private Arrival",
            location: "Accra",
            description: "A fully private arrival and welcome, set on your own timeline rather than a fixed cohort schedule.",
          },
          {
            day: "Custom",
            title: "Cape Coast, Assin Manso & Kakum",
            location: "Central Region",
            description: "The same ritual anchors as every Real Return journey — castle, naming ceremony, canopy walk — sequenced around your family's own story.",
          },
          {
            day: "Custom",
            title: "Private AfroFuture Access",
            location: "Accra",
            description: "Private access to the season's festival calendar, without joining a fixed group schedule.",
          },
          {
            day: "Final Day",
            title: "Closing Circle & Departure",
            location: "Accra",
            description: "A closing circle built around your family, followed by a private departure.",
          },
        ],
        inclusions: [
          "Everything in Signature Return — December Edition",
          "A fully private, custom-built itinerary and dates",
          "Priority access to Academy coursework for your full family",
          "Private AfroFuture Festival access",
          "Ongoing legacy-building support after you return home",
        ],
        exclusions: ["International flights", "Visa fees", "Yellow Fever vaccination certificate", "Travel insurance"],
        paymentNote: "Deposit and payment schedule built with your steward as part of your custom quote.",
        ctaLabel: "Request Availability",
      },
    ],
  },
  closing: {
    eyebrow: "Before You Book",
    title: "A steward is ready to help you choose the right season and tier.",
    description: "Whether you're traveling for the December season or another time of year, every journey starts with a conversation, not a checkout page.",
    cta: { label: "Reserve Your Journey", href: "/reserve" },
  },
};
