/**
 * Turn any text into a lowercase, dash-separated slug.
 * slugify("Crème Brûlée") -> "creme-brulee"
 */
export function slugify(input) {
  return String(input)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
