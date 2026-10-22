// Names and focus areas are sourced from the founder's original portfolio.
// Add operating status and achievements only after founder confirmation.
export const founder = {
  name: "Odhiambo Manael Okoth",
  publicName: "CEO Manuu",
  email: "info@manuuspaces.com",
  location: "Nairobi, Kenya",
};
export const groups = [
  "All ventures",
  "Culture & lifestyle",
  "Essential services",
  "Digital & trade",
] as const;
export type Group = (typeof groups)[number];
export type Venture = {
  slug: string;
  name: string;
  group: Group;
  descriptor: string;
  summary: string;
  vision: string;
  brands: string[];
  focus: string[];
  color: string;
  mark: string;
};
export const ventures: Venture[] = [
  {
    slug: "seroxide",
    name: "Seroxide Entertainment",
    group: "Culture & lifestyle",
    descriptor: "Culture, connected.",
    summary:
      "Events, music, talent and media. A home for creative ideas and the people who bring them to life.",
    vision:
      "Seroxide brings the creative side of Manuu Spaces together: live experiences, artists, storytelling and the platforms that connect them to an audience.",
    brands: ["Seroxide", "SeroTix"],
    focus: [
      "Events & experiences",
      "Talent & music",
      "Media & production",
      "Creative development",
    ],
    color: "red",
    mark: "S",
  },
  {
    slug: "automotive",
    name: "Automotive",
    group: "Essential services",
    descriptor: "Driven by detail.",
    summary:
      "Monarch Performance Studio and Pulsewave Garage: a focus on vehicle care, diagnostics and performance.",
    vision:
      "An automotive vision built around attention to detail, from everyday vehicle maintenance to specialist performance work and upgrades.",
    brands: ["Monarch Performance Studio", "Pulsewave Garage"],
    focus: [
      "Vehicle diagnostics",
      "Repair & maintenance",
      "Performance upgrades",
      "Automotive experiences",
    ],
    color: "navy",
    mark: "M",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    group: "Essential services",
    descriptor: "Care comes first.",
    summary:
      "Pulsewave Medical & Dental Centre. A vision for accessible, thoughtful medical and dental care.",
    vision:
      "The healthcare focus of Manuu Spaces puts quality, trust and accessibility at the centre of the experience for patients and their families.",
    brands: ["Pulsewave Medical & Dental Centre"],
    focus: [
      "Medical care",
      "Dental care",
      "Patient experience",
      "Healthcare accessibility",
    ],
    color: "blue",
    mark: "+",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle & hospitality",
    group: "Culture & lifestyle",
    descriptor: "Make room for good living.",
    summary:
      "Liquor Hub, dining and hospitality concepts centred on places people want to come back to.",
    vision:
      "From a night out to a place to stay, this part of the portfolio explores how welcoming spaces and thoughtful service create memorable experiences.",
    brands: ["Liquor Hub", "Dining & accommodation concepts"],
    focus: ["Hospitality", "Dining experiences", "Accommodation", "Nightlife"],
    color: "gold",
    mark: "lh",
  },
  {
    slug: "real-estate",
    name: "Real estate",
    group: "Essential services",
    descriptor: "Spaces with a future.",
    summary:
      "Property development, rental investments and a longer-term vision for better places to live and work.",
    vision:
      "The property vision spans useful spaces today and ambitious urban concepts for the future, with an emphasis on long-term value and everyday use.",
    brands: ["Manuu Spaces · Property"],
    focus: [
      "Property development",
      "Rental investments",
      "Urban concepts",
      "Long-term planning",
    ],
    color: "stone",
    mark: "ms",
  },
  {
    slug: "imports",
    name: "Imports & global trade",
    group: "Digital & trade",
    descriptor: "Better connections. Wider reach.",
    summary:
      "A supply-chain focus spanning auto parts, medical equipment, electronics and machinery.",
    vision:
      "Connecting sourcing and supply to the practical needs of businesses, including the different sectors within Manuu Spaces.",
    brands: ["Manuu Spaces · Trade"],
    focus: [
      "Auto parts",
      "Medical equipment",
      "Electronics",
      "Machinery & sourcing",
    ],
    color: "blue",
    mark: "↗",
  },
  {
    slug: "wellness",
    name: "Beauty & wellness",
    group: "Culture & lifestyle",
    descriptor: "The everyday, elevated.",
    summary:
      "Royale Cuts, beauty and spa concepts with a focus on personal care and the customer experience.",
    vision:
      "A space in the portfolio for grooming, beauty and wellness: everyday services made more personal through thoughtful environments and attention to the customer.",
    brands: ["Royale Cuts", "Beauty & spa concepts"],
    focus: ["Grooming", "Beauty services", "Spa experiences", "Personal care"],
    color: "gold",
    mark: "rc",
  },
  {
    slug: "logistics",
    name: "Transport & logistics",
    group: "Essential services",
    descriptor: "Keep things moving.",
    summary:
      "Fleet management, delivery systems and the operations that connect businesses to their customers.",
    vision:
      "An operational foundation for moving goods and supporting the wider portfolio, from delivery systems to coordinated fleet management.",
    brands: ["Manuu Spaces · Logistics"],
    focus: [
      "Fleet management",
      "Delivery systems",
      "Business operations",
      "Distribution support",
    ],
    color: "navy",
    mark: "→",
  },
  {
    slug: "digital",
    name: "Digital products & systems",
    group: "Digital & trade",
    descriptor: "Ideas you can interact with.",
    summary:
      "Web apps, commerce and practical tools. Technology that helps businesses run and people connect.",
    vision:
      "The digital side of the portfolio explores useful software: connecting people to experiences, making commerce easier and simplifying everyday operations.",
    brands: ["SeroTix", "Business tools & automation"],
    focus: [
      "Web applications",
      "E-commerce",
      "Business automation",
      "Digital experiences",
    ],
    color: "blue",
    mark: "</>",
  },
];
export function ventureHref(v: Venture) {
  return v.slug === "seroxide" ? "/seroxide" : `/ventures/${v.slug}`;
}
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ceomanuu.com";
