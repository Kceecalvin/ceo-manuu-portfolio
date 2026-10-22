# CEO Manuu — Manuu Spaces portfolio

A personal founder portfolio connecting Manuu Spaces, Seroxide Entertainment and SeroTix. The design uses warm ivory, navy, blue, red and gold, with a dimensional brand composition and restrained Framer Motion interactions.

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev -- --port 3030
```

Open http://localhost:3030.

```sh
npm run lint
npm test
npm run build
npm start -- --port 3030
```

## Content and pages

- `src/lib/portfolio.ts` contains the founder details and all nine business areas from the original portfolio.
- `/ventures` filters business areas; `/ventures/[slug]` supplies individual detail pages.
- `/ventures#websites` showcases ten branded websites with real homepage captures; `/businesses/[slug]` serves each business experience from the same deployment.
- `/seroxide` includes actual SeroTix screenshots and a keyboard-accessible product walkthrough.
- `/contact?venture=automotive` preselects the relevant business area.
- `/about` uses the founder's name from the original portfolio. The artwork is branding, not a stock person presented as the founder.
- The former `/three` experiment redirects home.

Business descriptions express the original portfolio's focus and vision. Operating status, launch dates, staffing, customer results, pricing, credentials and testimonials must be confirmed before being added. No such proof has been invented. Yadis is excluded at the owner's request.

## Contact delivery

The public address from the original portfolio is `info@manuuspaces.com`, configured in `src/lib/portfolio.ts`. Confirm ownership and mailbox availability before publishing.

Without the three server-side email settings below, the form prepares a `mailto:` draft. It clearly asks the visitor to review and send through their email app; it does not claim a message was delivered.

To enable direct delivery, create `.env.local` (never commit credentials):

```dotenv
RESEND_API_KEY=your_resend_key
CONTACT_FROM_EMAIL="Manuu Spaces <hello@your-verified-domain>"
CONTACT_TO_EMAIL=your_confirmed_inbox
NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain
```

Use a sender verified with Resend. The contact API validates input, enforces a 16 KB request limit, rejects cross-origin browser requests, uses a honeypot, escapes HTML email content, and returns success only after Resend accepts the message. Provider acceptance is not a guarantee of final inbox delivery. For a public launch, configure provider quotas or hosting-level rate limits according to expected traffic; there is no persistent application rate limiter.

The destination is configured explicitly, replacing the old hardcoded developer inbox. Submitted visitor information is not logged by the application. No marketing subscription or automatic reply is created.

## Visuals and accessibility

Product screenshots in `public/images` were captured from SeroTix on 21 September 2026. They are previews, not embedded live apps. The squad image honestly shows its starting state. Product calls to action open the actual SeroTix site.

Fonts are local subsets of Lato and Liberation Serif; licenses accompany them in `src/app/fonts`. No Google Fonts request is needed at build time. Motion respects the system's reduced-motion preference, content renders without waiting for animation, navigation has keyboard focus states, and product tabs support arrow/Home/End keys.

SEO metadata, a generated sharing image, sitemap and robots route are included. The default site URL is `https://ceomanuu.com`; keep `NEXT_PUBLIC_SITE_URL` set to that canonical address in production. The `www` DNS record and hosting redirect still need configuration.

## Deployment

The repository is connected to the existing `ceo-manuu-portfolio` Vercel project. Publish the reviewed release to `main` to trigger its production build. The portfolio and all ten `/businesses/[slug]` pages use the same deployment; separate domains are optional. This does not alter or deploy the SeroTix application.

Run lint, tests and a production build before publishing. After deployment, verify the public homepage, venture showcase, business pages and contact handoff. New business pages are labelled as brand concepts and accept enquiries; they do not advertise confirmed booking slots, inventory or operating locations. See `docs/business-websites.md` for route and content details.

## Interactive exploration

The homepage business explorer lets visitors inspect each of the nine areas. “Build with Manuu” provides three inquiry paths configured in `src/lib/collaborations.ts`; `/contact?intent=digital`, `/contact?intent=creative`, and `/contact?intent=business` carry those choices into the form. The SeroTix gallery supports enlarged previews, keyboard dismissal, and next/previous screens. All interactions respect reduced-motion preferences.

## Owner handover — 22 October 2026

See `docs/handover-2026-10-22.md` for the current readiness register and operating
instructions. Release `7fdb505` publishes the support centre and customer
email templates through the existing Vercel production project. Support remains
disabled until a working mailbox is configured; customer acknowledgements are
templates only. No customer message is sent by the preview or test scripts.

The handover copy updates Next.js and its matching ESLint configuration to
16.3.8, refreshes affected image/source-map dependencies, corrects the contact
origin check when the Node server normalises the request hostname, and uses
the confirmed apex domain in generated site links. These changes are deployed;
the live support route and apex sitemap were checked after publication.
