import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5 uses deprecated Sass APIs and needs @import for variable overrides
          quietDeps: true,
          silenceDeprecations: ["import"],
        },
      },
    },
  },
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
