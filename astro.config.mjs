import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // https://docs.astro.build/en/guides/fonts/
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible",
      cssVariable: "--font-atkinson",
      weights: [400, 700],
    },
  ],
});
