import { test } from "node:test";
import assert from "node:assert/strict";
import { truncate } from "../src/truncate.js";

test("truncate leaves short text alone", () => {
  assert.equal(truncate("short", 10), "short");
});

test("truncate cuts long text and adds the suffix within the limit", () => {
  assert.equal(truncate("The quick brown fox", 12), "The quick b…");
});

test("truncate accepts a custom suffix", () => {
  assert.equal(truncate("The quick brown fox", 12, "..."), "The quick...");
});

test("truncate cuts at a word boundary when wholeWords is true", () => {
  assert.equal(truncate("The quick brown fox", 12, "...", true), "The quick...");
});

test("truncate keeps a word that ends exactly at the cut when wholeWords is true", () => {
  assert.equal(truncate("The quick brown fox", 12, "…", true), "The quick…");
  assert.equal(truncate("The quick brown fox", 14, "...", true), "The quick...");
});

test("truncate behaves as before when wholeWords is false or omitted", () => {
  assert.equal(truncate("The quick brown fox", 12, "...", false), "The quick...");
  assert.equal(truncate("The quick brown fox", 13, "..."), "The quick ...");
});

test("truncate cuts hard when wholeWords is true and the cut is inside one long word", () => {
  assert.equal(truncate("Supercalifragilistic", 10, "...", true), "Superca...");
  assert.equal(truncate("Supercalifragilistic words", 10, "…", true), "Supercali…");
});
