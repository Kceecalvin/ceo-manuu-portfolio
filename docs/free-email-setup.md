# Free email activation for ceomanuu.com

Owner requested a free email setup on 3 October 2026. Proposed provider: Zoho Mail's Forever Free custom-domain plan, subject to availability in the owner's signup data centre. Official pricing currently lists one domain, up to five users, 5 GB per user, and no IMAP/POP/ActiveSync. Use webmail or the Zoho app for human replies. Do not select a paid subscription or treat a trial as the requested free plan.

Official signup: https://mail.zoho.com/signup?plan=free&type=org
Pricing: https://www.zoho.com/mail/zohomail-pricing.html

## Pending account step

The owner must sign up or sign in using an existing working recovery address and complete provider verification. No Zoho account is connected to the tools and no mailbox has been provisioned. Do not use the not-yet-operational ceomanuu.com mailbox as the only recovery address. Never request passwords or one-time verification codes in chat.

Use the owned domain `ceomanuu.com` and organisation name `Manuu Spaces`. Start with `support@ceomanuu.com`, then `hello@ceomanuu.com`; additional addresses can be added after the plan and user limits are confirmed.

## DNS work after signup

Keep authoritative DNS at Truehost. Add the exact TXT ownership-verification value issued by Zoho; it is account-specific. After ownership verification, create the mailboxes, then copy the exact regional MX destinations and priorities, SPF value, and DKIM selector/key from Zoho's admin console. Preserve the website A and www CNAME records. Maintain one SPF policy, merging authorised senders if necessary rather than creating duplicate SPF records.

Sources:
- https://www.zoho.com/mail/help/adminconsole/domain-verification.html
- https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html
- https://truehost.com/support/how-to-manage-dns-zones-in-your-client-area/

At the last DNS check, ceomanuu.com had an A record of 216.198.79.1 and no MX or TXT answers. Recheck before making changes.

## Website activation

After the support mailbox is verified and working, configure `SUPPORT_MAILBOX=support@ceomanuu.com`. The support form then prepares a draft to that inbox, with no paid sending API needed. Customers review and send in their mail app; staff reply from Zoho. The current `/support` changes are still local and must be published when ready.

Automated sending and customer acknowledgements are a separate integration. The free mailbox does not by itself configure the website's sending API. Leave `SUPPORT_FROM_EMAIL`, sending credentials and direct-send verification unset until that setup is explicitly completed. Do not claim automatic replies or send unsolicited test messages.

Nothing has been purchased and no DNS/mailbox activation has been performed by this preparation.
