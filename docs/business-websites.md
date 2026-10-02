# Business website collection

Ten enquiry-led microsites are served from `/businesses/[slug]`. They share the portfolio deployment, but each has its own navigation, footer, brand palette, original vector artwork, services and page metadata. SeroTix continues to link to its existing external website.

| Business | Path |
| --- | --- |
| Seroxide Entertainment | `/businesses/seroxide` |
| Monarch Performance Studio | `/businesses/monarch-performance` |
| Pulsewave Garage | `/businesses/pulsewave-garage` |
| Pulsewave Medical & Dental Centre | `/businesses/pulsewave-medical` |
| Liquor Hub | `/businesses/liquor-hub` |
| Manuu Spaces · Property | `/businesses/manuu-property` |
| Manuu Spaces · Trade | `/businesses/manuu-trade` |
| Royale Cuts | `/businesses/royale-cuts` |
| Manuu Spaces · Logistics | `/businesses/manuu-logistics` |
| Manuu Spaces · Digital | `/businesses/manuu-digital` |

## Content and previews

`src/lib/businesses.ts` contains the brand content and venture mapping. Names and areas come from the existing portfolio. Unnamed dining, accommodation and spa concepts are included under the corresponding lifestyle and wellness brands; no new business identities are invented. Pages are marked as brand concepts until operational details are confirmed. They do not advertise invented locations, prices, booking slots, inventory, testimonials or credentials.

`BusinessWebsites` presents captured homepage screenshots in `/ventures` and the corresponding venture detail pages. The home-page `BusinessExplorer` also uses those screenshots and links directly to the sites. Screenshot assets in `public/images/businesses/` use 1440 × 1000 desktop captures, with reduced motion enabled, JPEG quality 85. Refresh them after changing a site's hero. They are static previews, not embedded live websites.

## Enquiries

The brand and selected service are passed to `/contact` using allowlisted identifiers. The existing form preselects the business area, uses the Business enquiry subject, and includes the brand/service in an editable message. Delivery uses the existing contact configuration; without configured email credentials, it opens a mail draft and does not report a successful send. No booking, purchase or appointment is created by an enquiry.

## Publishing

These paths use the existing portfolio domain and Vercel deployment. Separate business domains, operational locations, service availability, pricing and real booking/payment integrations have not been configured. Publishing the repository's production branch deploys the collection together; no domain registration is required for the existing Vercel address.

## Verification

Run the existing lint, build and test scripts with Node 22+. Business tests check route uniqueness, coverage of all nine venture areas and enquiry context. Browser checks should cover the home page, directory and all ten websites at 320, 390, 768 and 1440 pixels, service disclosures, group filters, invalid routes, contact handoff and back navigation. Do not submit real contact messages during preview checks.
