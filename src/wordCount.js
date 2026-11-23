/**
 * Count the words in a text. Words are separated by any whitespace.
 * wordCount("  one two\nthree ") -> 3
 */
export function wordCount(input) {
  const text = String(input).trim();
  return text === "" ? 0 : text.split(/\s+/).length;
}
