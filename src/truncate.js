/**
 * Shorten text to at most maxLength characters, ending with a suffix when it was cut.
 * With wholeWords set to true, cut at a word boundary instead of inside a word.
 * truncate("The quick brown fox", 12) -> "The quick b…"
 * truncate("The quick brown fox", 12, "...", true) -> "The quick..."
 */
export function truncate(input, maxLength, suffix = "…", wholeWords = false) {
  const text = String(input);
  if (text.length <= maxLength) return text;
  const end = Math.max(0, maxLength - suffix.length);
  let cut = text.slice(0, end);
  if (wholeWords && text[end] !== " ") {
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > 0) cut = cut.slice(0, lastSpace);
  }
  if (wholeWords && cut.trimEnd() !== "") cut = cut.trimEnd();
  return cut + suffix;
}
