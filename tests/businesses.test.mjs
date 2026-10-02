import test from 'node:test';
import assert from 'node:assert/strict';
import { businesses, businessesFor, businessHref, businessInquiryHref } from '../src/lib/businesses.ts';
import { ventures } from '../src/lib/portfolio.ts';

test('every portfolio area has a website and every business route is unique', () => {
  assert.equal(new Set(businesses.map(businessHref)).size, businesses.length);
  for (const venture of ventures) assert.ok(businessesFor(venture.slug).length > 0, venture.slug);
  for (const business of businesses) {
    assert.ok(ventures.some(v => v.slug === business.venture));
    assert.match(business.slug, /^[a-z0-9-]+$/);
  }
});

test('enquiry links preserve the brand and allow only its own service names', () => {
  for (const business of businesses) {
    const service = business.services[0].name;
    const link = new URL(businessInquiryHref(business, service), 'https://portfolio.test');
    assert.equal(link.pathname, '/contact');
    assert.equal(link.searchParams.get('business'), business.slug);
    assert.equal(link.searchParams.get('venture'), business.venture);
    assert.equal(link.searchParams.get('service'), service);
    assert.equal(new URL(businessInquiryHref(business, 'unrecognised service'), link).searchParams.has('service'), false);
  }
});
