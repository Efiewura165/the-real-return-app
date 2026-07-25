import type { AcademyPageContent } from "@/types/academy";

export const academyPageContent: AcademyPageContent = {
  hero: {
    eyebrow: "Journey Academy",
    title: "Where Learning Meets Experience",
    description:
      "Membership unfolds in six phases — from first orientation to 1:1 concierge guidance — each one taught in video modules by Tarsha Lewis.",
    image: {
      src: "/images/stock/academy-heritage-lesson.jpg",
      alt: "An educator writing on a whiteboard during a heritage studies lesson",
    },
  },
  intro: {
    eyebrow: "How membership works",
    title: "Every module opens into its lessons.",
    description:
      "Select any module below for a snapshot of what's inside — the full set of lessons that make it up. Modules are grouped into six phases, each unlocking as your membership and your relationship with Ghana deepens.",
  },
  programs: [
    {
      name: "Africa Reimagined™",
      description: "A rotating showcase of contemporary African innovation, art, and enterprise — built to sit alongside the historical curriculum so return feels forward-looking, not only backward-looking.",
    },
    {
      name: "The Future Africa Experience™",
      description: "The throughline that connects every module: Ghana and the wider continent are studied not just as heritage, but as where you might live, invest, and build next.",
    },
  ],
  phases: [
    {
      phase: 1,
      title: "Foundation & Orientation",
      tier: "Starter Tier",
      modules: [
        {
          number: 1,
          title: "Cultural Acclimatization",
          topics: [
            { id: "1.1", title: "Understanding Ghanaian Social Hierarchy & Respect Norms" },
            { id: "1.2", title: "Greetings, Body Language & Communication Etiquette" },
            { id: "1.3", title: "Time Culture (\"Ghana Time\") & Adjusting Expectations" },
            { id: "1.4", title: "Family Structure & Community-First Values" },
            { id: "1.5", title: "Religion & Spirituality in Daily Life" },
          ],
        },
        {
          number: 2,
          title: "Linguistic Basics",
          topics: [
            { id: "2.1", title: "English (Ghanaian) — Local Expressions & Pidgin Basics" },
            { id: "2.2", title: "Twi Survival Phrases" },
            { id: "2.3", title: "Ga & Ewe Survival Phrases (regional variation)" },
            { id: "2.4", title: "Non-Verbal Communication & Gestures" },
            { id: "2.5", title: "Common Idioms & Proverbs (Akan proverbs especially)" },
          ],
        },
        {
          number: 3,
          title: "Itinerary Programming",
          topics: [
            { id: "3.1", title: "First-Time Visit Planning (2 weeks vs. 1 month vs. 3+ months)" },
            { id: "3.2", title: "Regional Route Planning (Accra–Cape Coast–Kumasi corridor)" },
            { id: "3.3", title: "Transportation Options (trotro, Uber/Bolt, intercity buses)" },
            { id: "3.4", title: "Accommodation Types & Booking Norms" },
            { id: "3.5", title: "Budgeting for a Diaspora Trip" },
          ],
        },
        {
          number: 4,
          title: "Documentation",
          topics: [
            { id: "4.1", title: "Visa Types & Application Process" },
            { id: "4.2", title: "Right of Abode — Eligibility & Application" },
            { id: "4.3", title: "Ghana Card & Local ID Systems" },
            { id: "4.4", title: "Customs, Import Rules & What Not to Bring" },
            { id: "4.5", title: "Health Requirements (vaccinations, insurance)" },
          ],
        },
        {
          number: 5,
          title: "Foods to Try",
          topics: [
            { id: "5.1", title: "Staple Dishes Overview (Waakye, Jollof, Banku, Fufu, Kenkey)" },
            { id: "5.2", title: "Street Food & Where/How to Eat Safely" },
            { id: "5.3", title: "Regional Food Differences" },
            { id: "5.4", title: "Dining Etiquette (communal eating, hand-washing rituals)" },
            { id: "5.5", title: "Drinks & Local Beverages (Sobolo, palm wine, etc.)" },
          ],
        },
      ],
    },
    {
      phase: 2,
      title: "Cultural Deep-Dive",
      tier: "Immersion Tier",
      modules: [
        {
          number: 6,
          title: "Chieftaincy & Traditional Governance",
          topics: [
            { id: "6.1", title: "The Role of Chiefs & Traditional Councils" },
            { id: "6.2", title: "Stool & Skin Systems Explained" },
            { id: "6.3", title: "Court Etiquette (how to greet a chief, dress code)" },
            { id: "6.4", title: "Traditional vs. Modern Governance Overlap" },
          ],
        },
        {
          number: 7,
          title: "Festivals Calendar & Etiquette",
          topics: [
            { id: "7.1", title: "Homowo (Ga) — Origins & Participation Etiquette" },
            { id: "7.2", title: "Akwasidae (Ashanti) — Structure & Access" },
            { id: "7.3", title: "Aboakyir (Winneba) — Deer Hunt Festival" },
            { id: "7.4", title: "Building a Personal Festival Calendar by Travel Date" },
          ],
        },
        {
          number: 8,
          title: "Textiles & Symbolism",
          topics: [
            { id: "8.1", title: "Kente Weaving — History, Regions, Meaning of Patterns" },
            { id: "8.2", title: "Adinkra Symbols — Meaning & Appropriate Use" },
            { id: "8.3", title: "How to Buy Authentic Textiles (avoiding tourist markups/fakes)" },
            { id: "8.4", title: "Dress Codes for Ceremonies vs. Everyday Wear" },
          ],
        },
        {
          number: 9,
          title: "Music & Dance Traditions",
          topics: [
            { id: "9.1", title: "Highlife — History & Key Artists" },
            { id: "9.2", title: "Traditional Drumming (Fontomfrom, Kpanlogo)" },
            { id: "9.3", title: "Modern Azonto/Afrobeats Crossover" },
            { id: "9.4", title: "Where to Experience Live Music/Dance" },
          ],
        },
        {
          number: 10,
          title: "Naming Ceremonies & Rites of Passage",
          topics: [
            { id: "10.1", title: "Outdooring Ceremony (Naming) Explained" },
            { id: "10.2", title: "Puberty Rites (Dipo & others)" },
            { id: "10.3", title: "How Diasporans Can Participate/Request One" },
          ],
        },
        {
          number: 11,
          title: "Regional Deep-Dives",
          topics: [
            { id: "11.1", title: "Accra — Urban Life, Diaspora Hubs" },
            { id: "11.2", title: "Kumasi — Ashanti Heartland" },
            { id: "11.3", title: "Cape Coast/Elmina — Heritage & Slave Trade History Sites" },
            { id: "11.4", title: "Northern Ghana — Tamale, Culture & Landscape Differences" },
          ],
        },
      ],
    },
    {
      phase: 3,
      title: "Identity & Belonging",
      tier: "Immersion Tier",
      modules: [
        {
          number: 12,
          title: "Ancestry & DNA-to-Diaspora Tracing",
          topics: [
            { id: "12.1", title: "How DNA Testing Maps to Ghanaian Ethnic Groups" },
            { id: "12.2", title: "Genealogy Research Resources" },
            { id: "12.3", title: "Connecting with Possible Ancestral Communities" },
          ],
        },
        {
          number: 13,
          title: "Citizenship & Right of Abode Pathways",
          topics: [
            { id: "13.1", title: "Legal Framework Overview" },
            { id: "13.2", title: "Document Checklist & Timelines" },
            { id: "13.3", title: "Case Studies — Successful Applications" },
            { id: "13.4", title: "Dual Citizenship Considerations" },
          ],
        },
        {
          number: 14,
          title: "Community & Diaspora Network-Building",
          topics: [
            { id: "14.1", title: "Diaspora Associations Directory" },
            { id: "14.2", title: "Mentorship & Local Contact Matching" },
            { id: "14.3", title: "Events & Meetups Calendar" },
          ],
        },
      ],
    },
    {
      phase: 4,
      title: "Practical Relocation",
      tier: "Relocation+ Tier",
      modules: [
        {
          number: 15,
          title: "Real Estate & Land Acquisition Literacy",
          topics: [
            { id: "15.1", title: "Leasehold vs. Freehold Explained" },
            { id: "15.2", title: "Stool Land & Family Land Issues" },
            { id: "15.3", title: "Due Diligence Checklist (title search, surveys)" },
            { id: "15.4", title: "Working with Lawyers & Agents Safely" },
          ],
        },
        {
          number: 16,
          title: "Healthcare Navigation",
          topics: [
            { id: "16.1", title: "National Health Insurance Scheme (NHIS) Overview" },
            { id: "16.2", title: "Private Insurance & International Coverage" },
            { id: "16.3", title: "Hospital & Clinic Directory by Region" },
            { id: "16.4", title: "Telemedicine Options" },
          ],
        },
        {
          number: 17,
          title: "School & Education System Orientation",
          topics: [
            { id: "17.1", title: "Ghanaian Curriculum vs. International Curricula" },
            { id: "17.2", title: "International Schools Directory" },
            { id: "17.3", title: "University & Higher Ed Pathways" },
          ],
        },
        {
          number: 18,
          title: "Local Etiquette for Business vs. Social Contexts",
          topics: [
            { id: "18.1", title: "Business Meeting Norms & Hierarchy" },
            { id: "18.2", title: "Negotiation Style Differences" },
            { id: "18.3", title: "Social vs. Professional Boundaries" },
          ],
        },
      ],
    },
    {
      phase: 5,
      title: "Economic Exposure & Opportunity",
      tier: "Relocation+ Tier",
      modules: [
        {
          number: 19,
          title: "Indigenous Technology of Ghana",
          topics: [
            { id: "19.1", title: "Traditional Craftsmanship (metalwork, pottery, weaving looms)" },
            { id: "19.2", title: "Indigenous Agricultural Techniques" },
            { id: "19.3", title: "Modern Innovation Building on Traditional Knowledge" },
          ],
        },
        {
          number: 20,
          title: "Economic Exposure (Broad Overview)",
          topics: [
            { id: "20.1", title: "Ghana's Economic Sectors Overview" },
            { id: "20.2", title: "Currency, Banking & Remittances" },
            { id: "20.3", title: "Cost of Living & Financial Planning" },
          ],
        },
        {
          number: 21,
          title: "Ghana's Tech/Startup Ecosystem",
          topics: [
            { id: "21.1", title: "Key Hubs & Incubators (MEST, Impact Hub, etc.)" },
            { id: "21.2", title: "Funding Bodies & Diaspora Investment Vehicles" },
            { id: "21.3", title: "Notable Ghanaian Startups & Founders" },
          ],
        },
        {
          number: 22,
          title: "Agribusiness & Agro-Processing Opportunities",
          topics: [
            { id: "22.1", title: "High-Value Crop Overview (cocoa, cashew, shea)" },
            { id: "22.2", title: "Agro-Processing Investment Models" },
            { id: "22.3", title: "Land & Labor Considerations" },
          ],
        },
        {
          number: 23,
          title: "Creative Industries",
          topics: [
            { id: "23.1", title: "Film & Nollywood/Ghanaian Film Crossover" },
            { id: "23.2", title: "Fashion Export Market" },
            { id: "23.3", title: "Music Industry & International Distribution" },
          ],
        },
        {
          number: 24,
          title: "Business Registration & Investment Incentives",
          topics: [
            { id: "24.1", title: "Registrar General's Dept — Step-by-Step" },
            { id: "24.2", title: "GIPC (Ghana Investment Promotion Centre) Incentives" },
            { id: "24.3", title: "Diaspora Bonds & Investment Vehicles" },
          ],
        },
      ],
    },
    {
      phase: 6,
      title: "Concierge / High-Touch",
      tier: "Top Tier — 1:1",
      modules: [
        {
          number: 25,
          title: "Remote Work + Local Networking Hybrid Track",
          topics: [
            { id: "25.1", title: "Co-working Spaces & Digital Infrastructure" },
            { id: "25.2", title: "Balancing Remote Income with Local Presence" },
          ],
        },
        {
          number: 26,
          title: "1:1 Relocation & Investment Planning",
          topics: [
            { id: "26.1", title: "Personalized Relocation Roadmap Session" },
            { id: "26.2", title: "Investment Portfolio Review with Local Advisor" },
          ],
        },
        {
          number: 27,
          title: "Mentorship Matching",
          topics: [
            { id: "27.1", title: "Matching with Established Diaspora Returnees" },
            { id: "27.2", title: "Ongoing Check-in Structure" },
          ],
        },
      ],
    },
  ],
  resources: [
    {
      title: "Ghana Legacy Journey itinerary",
      description: "See how Academy modules line up with the in-country experience, stage by stage.",
      href: "/experiences",
    },
    {
      title: "Steward office hours",
      description: "Bring questions about any module directly to a steward before or during your journey.",
    },
    {
      title: "Community discussion",
      description: "Connect with other members working through the same phase of the curriculum.",
      href: "/community",
    },
  ],
  closing: {
    eyebrow: "Ready to begin",
    title: "Start with Foundation & Orientation.",
    description: "Membership opens with Phase 1 — the grounding every pilgrim needs before the deeper phases unlock.",
    cta: { label: "Explore Academy Membership", href: "/reserve" },
  },
};
