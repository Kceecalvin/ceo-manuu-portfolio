# Customer enquiry email

`src/lib/customer-email.ts` renders a customer-facing acknowledgement with HTML, plain text, subject and preview text. This is separate from the existing internal notification email in `src/lib/contact.ts`. It does not send mail and is not connected to the contact route yet.

## Preview and export

Using Node 22 or later:

```sh
node --experimental-strip-types scripts/preview-customer-email.mjs
```

Open `email-templates/customer-enquiry-preview.html` for the fictional Alex / Monarch example. `customer-enquiry.html` and `customer-enquiry.txt` are reusable exports with customer and business placeholders. For automated integration, use the renderer instead of replacing raw HTML placeholders, so personalised values are escaped correctly. The layout uses table-based markup, inline styling, a mobile media query, system fonts and an Outlook fixed-width fallback. Browser verification is not a substitute for inbox rendering tests in Gmail, Outlook and Apple Mail.

The CTA uses the portfolio's existing `NEXT_PUBLIC_SITE_URL` or Vercel fallback. Once ceomanuu.com is configured and verified, set that URL and regenerate the exports.

## When enabling delivery

- Send only after an actual enquiry has been accepted; opening a mail draft is not receipt of an enquiry.
- Use a verified sender on the chosen domain and a monitored reply-to mailbox. A domain registration alone does not create that mailbox.
- Pass the customer name, confirmed business name and configured HTTPS portfolio URL. An optional reference must be a real stored identifier; the renderer does not invent one.
- Keep email retries and duplicate submissions idempotent, and protect any automatic external recipient route against abuse before enabling it. Do not report enquiry delivery as failed solely because the customer acknowledgement fails.
- The email states no response-time guarantee, booking confirmation or purchase confirmation. No visitor's submitted message, payment data or health information is echoed back.

No outbound email is sent by the preview script or tests.
