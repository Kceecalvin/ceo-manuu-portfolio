# Branded email and support

## Mailboxes to create with the mail host

The website is hosted on Vercel. Real employee mailboxes require an email hosting account. Confirm whether the owner's Truehost service includes cPanel/email hosting before purchasing anything.

| Proposed address | Purpose |
| --- | --- |
| `hello@ceomanuu.com` | General enquiries and introductions |
| `support@ceomanuu.com` | Customer help and support replies |
| `partners@ceomanuu.com` | Partnership enquiries; can begin as an alias of hello |

These addresses are proposals, not provisioned accounts. Create hello and support in the mail host, then copy the provider's exact MX, SPF, DKIM and DMARC records to the authoritative DNS zone. Preserve website A/CNAME records. Do not replace root MX records with Resend's inbound MX: the chosen mailbox provider should receive ordinary customer mail. Configure a sending subdomain with the sending provider's records if needed, following that provider's instructions.

Sources:
- https://truehost.com/support/knowledge-base/how-to-create-email-accounts-on-cpanel/
- https://truehost.com/support/how-to-manage-dns-zones-in-your-client-area/
- https://resend.com/docs/dashboard/domains/introduction

## Website support centre

`/support` includes business routing, FAQs, a customer request form and links to the existing contact page and SeroTix. It is an email-based support intake, not a ticket database, customer login or staff dashboard. Staff read and reply through the real support mailbox. Submitted details are not logged or stored in the application.

The server chooses one of three modes:

1. No valid `SUPPORT_MAILBOX`: a setup notice appears; sending is disabled and `/api/support` returns 503. Existing contact options remain available. No unprovisioned address is advertised as working.
2. Valid `SUPPORT_MAILBOX` only: the form prepares an email draft to that mailbox. The customer must press Send in their mail app. No automatic confirmation/reference is claimed.
3. All sender and verification settings present: the form sends a request to the fixed support mailbox, with the customer's email in Reply-To. The page displays a reference only after the mail provider accepts the message. Provider acceptance is not a guarantee of inbox delivery.

Set these environment variables in the deployment dashboard after provisioning and verifying the mailbox:

```dotenv
SUPPORT_MAILBOX=support@ceomanuu.com
SUPPORT_FROM_EMAIL="CEO Manuu Support <support@your-verified-sending-domain>"
RESEND_API_KEY=<server-side sending key>
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<public website verification key>
TURNSTILE_SECRET_KEY=<server-side verification key>
```

Use only the first setting to begin with the email-draft flow. Do not activate it until the mailbox has been tested. Configure Turnstile to allow the actual production hostname; both token action (`support`) and hostname are checked on the server. The form refuses cross-origin requests, caps request-body size, validates businesses/topics, escapes email content and uses a honeypot. Turnstile verification must succeed before sending. Configure provider sending quotas and deployment-level rate limits for the expected traffic as part of activating direct sending.

Retries of an unchanged submission keep the same request ID. The provider idempotency key is a hash of the ID and normalised support content, excluding the one-time verification token. Resend deduplicates within its documented 24-hour window. This is not a durable ticket store or indefinite deduplication guarantee.

Sources:
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

## Customer responses

The previous `renderCustomerEnquiryEmail` template remains available for customer acknowledgements. Automatic replies are not enabled: they need a verified sender, monitored reply mailbox, retry handling and recipient-abuse protection. The existing contact delivery is unchanged. No customer messages are sent during tests.

## Later help-desk features

A full shared help desk can add staff authentication, assignments, open/waiting/resolved states, a durable conversation store and inbound email threading. It will need a selected backend and staff accounts. The current page does not simulate these features or claim to provide them.
