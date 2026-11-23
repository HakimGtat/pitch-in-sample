/**
 * Shorten text to at most maxLength characters, ending with a suffix when it was cut.
 * truncate("The quick brown fox", 12) -> "The quick b…"
 */
export function truncate(input, maxLength, suffix = "…") {
  const text = String(input);
  if (text.length <= maxLength) return text;
  return text.slice(0, Math.max(0, maxLength - suffix.length)) + suffix;
}
