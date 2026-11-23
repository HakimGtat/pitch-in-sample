/**
 * Turn any text into a lowercase, dash-separated slug.
 * slugify("Hello, World!") -> "hello-world"
 */
export function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
