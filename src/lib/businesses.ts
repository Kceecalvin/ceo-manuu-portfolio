export type Business = {
  slug: string;
  venture: string;
  name: string;
  wordmark: string;
  category: string;
  headline: string;
  accent: string;
  intro: string;
  story: string;
  art: "stage" | "car" | "care" | "bottle" | "building" | "trade" | "grooming" | "logistics" | "digital";
  theme: string;
  action: string;
  services: { name: string; text: string }[];
};

// Brand names and business areas come from the existing founder portfolio.
// These are enquiry-led brand concepts, not claims of operational availability.
export const businesses: Business[] = [
  {
    slug: "seroxide", venture: "seroxide", name: "Seroxide Entertainment", wordmark: "seroxide✳", category: "Music / Events / Culture",
    headline: "Feel everything.", accent: "Make a moment.", theme: "stage", art: "stage", action: "Bring an idea",
    intro: "For the artists, the after-hours people and the ideas too good to stay small. Welcome to the creative side of Manuu Spaces.",
    story: "A stage. A story. A room full of people who get it. Seroxide brings events, music, talent and media into one creative vision—with SeroTix connecting audiences to experiences.",
    services: [
      { name: "Live experiences", text: "Explore an event concept, a cultural gathering or a brand activation. Start with the audience and the feeling you want to create." },
      { name: "Talent & music", text: "Introduce your work, a collaboration or an artist-led idea. Make space for the people behind the sound." },
      { name: "Media & production", text: "Shape a visual story, a campaign or a creative production brief, from the first idea to the intended audience." },
    ],
  },
  {
    slug: "monarch-performance", venture: "automotive", name: "Monarch Performance Studio", wordmark: "MONARCH", category: "Performance / Automotive",
    headline: "Precision has", accent: "a pulse.", theme: "monarch", art: "car", action: "Discuss your build",
    intro: "A performance studio concept for people who feel every detail. Thoughtful upgrades. Purposeful design. Your vision for the drive.",
    story: "Good automotive work begins with understanding the car and the person behind the wheel. Monarch’s vision puts considered performance and attention to detail at the heart of every conversation.",
    services: [
      { name: "Performance direction", text: "Tell us about your vehicle, how you use it and the changes you have in mind. Discuss a direction before choosing upgrades." },
      { name: "Vehicle diagnostics", text: "Share your vehicle details and the issue you want to investigate. Scope and availability are confirmed after an enquiry." },
      { name: "Build planning", text: "Bring a reference, a wish list or a longer-term project. Explore a considered approach to your automotive vision." },
    ],
  },
  {
    slug: "pulsewave-garage", venture: "automotive", name: "Pulsewave Garage", wordmark: "pulsewave / garage", category: "Diagnostics / Maintenance",
    headline: "Keep your day", accent: "moving.", theme: "garage", art: "car", action: "Ask about vehicle care",
    intro: "Everyday vehicle care, with attention where it matters. A garage concept built around clear conversations and a better ownership experience.",
    story: "From an unfamiliar sound to a planned maintenance visit, the first step should feel simple. Pulsewave Garage’s focus is practical vehicle care and a clear understanding of what comes next.",
    services: [
      { name: "Maintenance enquiries", text: "Share your make, model and maintenance needs to start a conversation about your vehicle." },
      { name: "Diagnostics enquiries", text: "Describe what you have noticed, when it happens and any recent work. Those details help shape the next conversation." },
      { name: "Repair planning", text: "Discuss the scope of a repair or a longer-term care plan. Timing and availability are confirmed directly." },
    ],
  },
  {
    slug: "pulsewave-medical", venture: "healthcare", name: "Pulsewave Medical & Dental Centre", wordmark: "pulsewave +", category: "Medical / Dental / Wellbeing",
    headline: "A little more", accent: "human.", theme: "care", art: "care", action: "Make a general enquiry",
    intro: "A vision for medical and dental care that puts people at the centre. Thoughtful spaces. Clear communication. Care with consideration.",
    story: "Healthcare should be approachable. The Pulsewave vision brings medical care, dental care and patient experience together around accessibility, trust and the needs of families.",
    services: [
      { name: "Medical care vision", text: "Learn about the medical-care focus and discuss general service or partnership enquiries. This page does not offer medical advice or appointments." },
      { name: "Dental care vision", text: "Explore the dental-care concept and register general interest. Specific services and operating details will be confirmed directly." },
      { name: "Healthcare partnerships", text: "Start a conversation about facilities, equipment or the patient experience. Please keep your enquiry free of private health information." },
    ],
  },
  {
    slug: "liquor-hub", venture: "lifestyle", name: "Liquor Hub", wordmark: "liquor hub.", category: "Hospitality / Gathering",
    headline: "Good company.", accent: "Great occasion.", theme: "lounge", art: "bottle", action: "Discuss an occasion",
    intro: "A hospitality concept for the art of getting together. An inviting atmosphere, a considered selection and something worth celebrating.",
    story: "The best part of an occasion is the people around you. Liquor Hub sits within a broader vision for dining, hospitality and spaces people want to return to.",
    services: [
      { name: "Occasion enquiries", text: "Share the kind of gathering you have in mind, your preferred timing and the atmosphere you want to create." },
      { name: "Hospitality collaborations", text: "Discuss a brand collaboration or a hospitality idea with the Manuu Spaces team." },
      { name: "Dining & stay concepts", text: "Explore the wider lifestyle vision, including dining and accommodation. Locations and availability are confirmed directly." },
    ],
  },
  {
    slug: "manuu-property", venture: "real-estate", name: "Manuu Spaces · Property", wordmark: "manuu spaces / property", category: "Property / Places / Possibility",
    headline: "Room for", accent: "what’s next.", theme: "property", art: "building", action: "Discuss a property idea",
    intro: "Places to live. Space to work. A property vision shaped around the everyday—and the possibilities ahead.",
    story: "Useful spaces have a lasting role in people’s lives. Manuu Spaces explores property development, rental investments and urban concepts with an eye on everyday use and long-term planning.",
    services: [
      { name: "Development ideas", text: "Introduce a site, a proposed use or a development collaboration. Start with the context and what the space could become." },
      { name: "Rental enquiries", text: "Share the location and type of space you are looking for. This is an enquiry page; no available listings are advertised here." },
      { name: "Urban concepts", text: "Discuss a place-making idea, a mixed-use concept or a partnership for the longer term." },
    ],
  },
  {
    slug: "manuu-trade", venture: "imports", name: "Manuu Spaces · Trade", wordmark: "MANUU / TRADE", category: "Sourcing / Supply / Connections",
    headline: "Think beyond", accent: "the border.", theme: "trade", art: "trade", action: "Start a sourcing brief",
    intro: "Practical sourcing conversations for businesses with places to go. Connecting what you need with a clearer supply brief.",
    story: "Different industries share a common need: the right equipment, parts and supplies. The trade vision connects sourcing to the practical demands of the wider Manuu Spaces portfolio.",
    services: [
      { name: "Auto parts & machinery", text: "Start with specifications, compatibility, quantities and your intended timeline. Build a useful sourcing brief." },
      { name: "Medical equipment", text: "Discuss a business equipment requirement, including specifications and documentation needs. Supply is subject to direct confirmation." },
      { name: "Electronics & business supply", text: "Outline the products and quantities your business needs. Pricing and delivery terms are confirmed after review." },
    ],
  },
  {
    slug: "royale-cuts", venture: "wellness", name: "Royale Cuts", wordmark: "ROYALE CUTS", category: "Grooming / Style / Ritual",
    headline: "Your look.", accent: "Your signature.", theme: "royale", art: "grooming", action: "Enquire about grooming",
    intro: "More than the finishing touch. A grooming concept that makes room for personal style, good conversation and a moment for yourself.",
    story: "Personal care is personal. Royale Cuts belongs to a wider beauty and wellness vision, bringing attention to the environment, the details and the way an experience makes you feel.",
    services: [
      { name: "Grooming", text: "Share the look you have in mind and enquire about the grooming concept. Service availability is confirmed directly." },
      { name: "Personal style", text: "Bring your inspiration and discuss your preferences. Start a conversation about a more personal care experience." },
      { name: "Beauty & spa concepts", text: "Explore the wider wellness vision or discuss a partnership in beauty, spa experiences and personal care." },
    ],
  },
  {
    slug: "manuu-logistics", venture: "logistics", name: "Manuu Spaces · Logistics", wordmark: "manuu → logistics", category: "Fleet / Delivery / Distribution",
    headline: "Every move", accent: "has a purpose.", theme: "logistics", art: "logistics", action: "Discuss your delivery needs",
    intro: "The connections behind everyday business. A logistics vision for coordinated fleets, thoughtful delivery systems and goods that keep moving.",
    story: "Behind every handover is an operation that needs to work together. This part of Manuu Spaces focuses on fleet management, delivery systems and distribution support for businesses.",
    services: [
      { name: "Delivery planning", text: "Tell us your collection and destination areas, goods type and timing. Availability and coverage are confirmed directly." },
      { name: "Fleet requirements", text: "Discuss your business transport needs, usage patterns and coordination challenges." },
      { name: "Distribution support", text: "Outline recurring routes or business supply needs to shape a distribution conversation. No live tracking is offered on this preview." },
    ],
  },
  {
    slug: "manuu-digital", venture: "digital", name: "Manuu Spaces · Digital", wordmark: "manuu.digital", category: "Web / Commerce / Systems",
    headline: "Make the idea", accent: "click.", theme: "digital", art: "digital", action: "Start a project brief",
    intro: "Useful software. Considered experiences. A digital vision that connects businesses with the people they build for.",
    story: "Good technology earns its place in someone’s day. From event discovery through SeroTix to commerce and business automation, the focus is on making everyday interactions simpler.",
    services: [
      { name: "Web experiences", text: "Introduce a website or application idea. Start with your audience, what they need and what you want the product to do." },
      { name: "Commerce", text: "Discuss your catalogue, customer journey and sales process. Shape an experience around how your business works." },
      { name: "Business automation", text: "Describe a repetitive workflow or disconnected process. Explore where a practical tool could make a difference." },
    ],
  },
];

export const businessHref = (business: Business) => `/businesses/${business.slug}`;
export const businessesFor = (venture: string) => businesses.filter((b) => b.venture === venture);
export function businessInquiryHref(business: Business, service?: string) {
  const query = new URLSearchParams({ venture: business.venture, business: business.slug });
  if (service && business.services.some((item) => item.name === service)) query.set("service", service);
  return `/contact?${query.toString()}`;
}
