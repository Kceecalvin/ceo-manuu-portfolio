import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderCustomerEnquiryEmail } from '../src/lib/customer-email.ts';
const sample = { customerName: 'Alex', businessName: 'Monarch Performance Studio', portfolioUrl: 'https://ceo-manuu-portfolio.vercel.app' };

test('customer email escapes personalised HTML and does not echo submitted private messages', () => {
  const mail = renderCustomerEnquiryEmail({ ...sample, customerName: '<img src=x onerror=alert(1)>', businessName: 'A & B <script>x</script>', reference: '"<unsafe>' });
  assert.ok(!mail.html.includes('<script>'));
  assert.ok(!mail.html.includes('<img src=x'));
  assert.ok(mail.html.includes('&lt;img'));
  assert.ok(mail.html.includes('A &amp; B &lt;script&gt;'));
  assert.ok(mail.html.includes('&quot;&lt;unsafe&gt;'));
  assert.ok(!mail.subject.includes('unsafe'));
});
test('HTML and plain text preserve the business and use the configured public portfolio link', () => {
  const mail = renderCustomerEnquiryEmail({ ...sample, portfolioUrl: 'https://ceomanuu.com/some/path' });
  assert.ok(mail.html.includes('https://ceomanuu.com/ventures#websites'));
  assert.ok(mail.text.includes('https://ceomanuu.com/ventures#websites'));
  assert.ok(mail.text.includes(sample.businessName));
  assert.ok(!mail.html.includes('YOUR REFERENCE'));
  assert.ok(!mail.text.includes('Your reference:'));
});
test('unsafe CTA destinations are rejected', () => {
  for (const portfolioUrl of ['javascript:alert(1)', 'http://example.com', 'https://user:secret@example.com', 'data:text/html,hello']) {
    assert.throws(() => renderCustomerEnquiryEmail({ ...sample, portfolioUrl }));
  }
});
test('blank optional values have readable fallbacks and actual references are preserved', () => {
  const mail = renderCustomerEnquiryEmail({ customerName: ' ', businessName: ' ', reference: ' ENQ-123 ', portfolioUrl: sample.portfolioUrl });
  assert.ok(mail.text.includes('Thanks for reaching out, there.'));
  assert.ok(mail.text.includes('enquiry about Manuu Spaces'));
  assert.ok(mail.text.includes('Your reference: ENQ-123'));
});
