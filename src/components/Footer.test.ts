import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Footer from "./Footer.astro";

test("Footer renders", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Footer);

  expect(result).toContain("<footer");
  expect(result).toContain("Astro");
});
