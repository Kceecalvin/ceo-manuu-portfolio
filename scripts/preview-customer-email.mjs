import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { renderCustomerEnquiryEmail } from '../src/lib/customer-email.ts';
import { siteUrl } from '../src/lib/portfolio.ts';

const output = new URL('../email-templates/', import.meta.url);
await mkdir(output, { recursive: true });
const sample = renderCustomerEnquiryEmail({
  customerName: 'Alex',
  businessName: 'Monarch Performance Studio',
  portfolioUrl: siteUrl,
});
const reusable = renderCustomerEnquiryEmail({
  customerName: '{{customer_name}}',
  businessName: '{{business_name}}',
  portfolioUrl: siteUrl,
});
const cleanHtml = (html) => html.replace(/[\t ]+$/gm, '');
await writeFile(new URL('customer-enquiry-preview.html', output), cleanHtml(sample.html));
await writeFile(new URL('customer-enquiry.html', output), cleanHtml(reusable.html));
await writeFile(new URL('customer-enquiry.txt', output), `Subject: ${reusable.subject}\n\n${reusable.text}`);
console.log(`Preview written to ${fileURLToPath(new URL('customer-enquiry-preview.html', output))}`);
