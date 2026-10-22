import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateSupportRequest, supportText, validMailbox } from '../src/lib/support.ts';
const request = {name:'Alex Customer',email:'alex@example.com',business:'Monarch Performance Studio',topic:'Business service',message:'I have a question about my existing enquiry.',requestId:'f89f8318-7abd-4d46-927b-807b96ac82aa',token:'example-token'};
const brands = ['Monarch Performance Studio'];
test('support requests accept known topics and businesses and preserve reply details', () => {
 const result=validateSupportRequest({...request,name:'  Alex Customer  '},brands);
 assert.equal(result.error,undefined);
 assert.equal(result.request.name,'Alex Customer');
 assert.ok(supportText(result.request,'MS-EXAMPLE').includes('Reference: MS-EXAMPLE\nName: Alex Customer'));
 assert.ok(supportText(result.request).includes('Email: alex@example.com'));
});
test('support rejects spoofed businesses, topics, headers, invalid IDs and oversize input', () => {
 for(const input of [null,[],{...request,business:'Spoofed company'},{...request,topic:'Changed topic'},
 {...request,email:'alex@example.com\nBcc:another@example.com'},{...request,name:'Alex\r\nBcc:other'},
 {...request,requestId:'not-an-id'},{...request,message:'short'},{...request,message:'a'.repeat(5001)},
 {...request,token:'x'.repeat(2049)},{...request,website:'honeypot'}]) assert.ok(validateSupportRequest(input,brands).error);
});
test('general support works without a business-specific selection and plain-text drafts omit a fake reference', () => {
 const result=validateSupportRequest({...request,business:'Manuu Spaces / General',token:''},brands);
 assert.equal(result.error,undefined);
 assert.ok(!supportText(result.request).includes('Reference:'));
});
test('mailbox addresses cannot contain header separators or display-name markup', () => {
 assert.ok(validMailbox('support@ceomanuu.com'));
 for(const value of ['', 'support', 'Team <support@ceomanuu.com>', 'support@ceomanuu.com\nBcc:other@example.com']) assert.equal(validMailbox(value),false);
});
