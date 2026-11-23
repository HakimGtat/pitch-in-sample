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
