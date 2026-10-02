import { test } from "node:test";
import assert from "node:assert/strict";
import { validateBrief, briefHtml, briefText } from "../src/lib/contact.ts";
const valid = {
  name: "Test Person",
  email: "test@example.com",
  subject: "Business partnership",
  venture: "Automotive",
  message: "I would like to discuss a project for next month.",
};
test("accepts a valid brief and trims user input", () => {
  const result = validateBrief({ ...valid, name: "  Test Person  " });
  assert.equal(result.brief.name, "Test Person");
  assert.equal(result.error, undefined);
});
test("rejects invalid payloads, malformed addresses and header injection", () => {
  for (const input of [
    null,
    [],
    "hello",
    { ...valid, email: "not-an-email" },
    { ...valid, email: "space here@example.com" },
    { ...valid, name: "Test\r\nBCC: hidden@example.com" },
    { ...valid, email: "test@example.com\nCc: evil@example.com" },
    { ...valid, subject: "not-a-valid-choice" },
    { ...valid, website: "spam" },
    { ...valid, message: "Too short" },
    { ...valid, message: "x".repeat(5001) },
  ])
    assert.ok(validateBrief(input).error, JSON.stringify(input).slice(0, 80));
});
test("escapes user-controlled content in HTML emails and preserves paragraph breaks", () => {
  const html = briefHtml({
    ...valid,
    name: "<img src=x onerror=alert(1)>",
    message: 'First line\n<script>bad()</script> & "quote"',
  });
  assert.ok(!html.includes("<script>"));
  assert.ok(!html.includes("<img src=x"));
  assert.ok(html.includes("&lt;script&gt;"));
  assert.ok(html.includes("First line<br>"));
  assert.ok(html.includes("&amp; &quot;quote&quot;"));
});
test("plain text brief uses readable lines and preserves the full request", () => {
  const text = briefText(valid);
  assert.ok(text.includes("Name: Test Person\nEmail: test@example.com"));
  assert.ok(text.endsWith(valid.message));
});
