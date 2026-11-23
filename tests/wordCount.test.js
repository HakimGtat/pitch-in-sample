import { test } from "node:test";
import assert from "node:assert/strict";
import { wordCount } from "../src/wordCount.js";

test("wordCount counts words separated by any whitespace", () => {
  assert.equal(wordCount("  one two\nthree "), 3);
});

test("wordCount returns 0 for empty or blank text", () => {
  assert.equal(wordCount(""), 0);
  assert.equal(wordCount("   \n "), 0);
});
