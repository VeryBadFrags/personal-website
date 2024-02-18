// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const gamesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    body: z.array(z.string()),
    tech: z.array(z.object({ icon: z.string().optional(), name: z.string() })),
    links: z.array(
      z.object({ url: z.string().url(), icon: z.string(), text: z.string() }),
    ),
    badge: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  games: gamesCollection,
};
