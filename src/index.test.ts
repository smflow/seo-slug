import { genSlug } from ".";

test("Should return a string", () => {
  expect(typeof genSlug("SEO url")).toBe("string");
})

test("Should generate a slug", () => {
  expect(genSlug("Generate slug").includes("generate-slug")).toBe(true);
})

test("Should generate a slug with limit", () => {
  expect(genSlug("Generate slug", 8).includes("generate")).toBe(true);
})

test("Should not include random works at the end", () => {
  expect(genSlug("Generate slug", undefined, false) === "generate-slug").toBe(true);
})
