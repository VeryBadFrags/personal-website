// 1. Import utilities from `astro:content`
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { z, defineCollection } from "astro:content";

const faIconNameType: z.ZodType<IconName> = z.any();
const faIconPrefixType: z.ZodType<IconPrefix> = z.any();

// 2. Define your collection(s)
const gamesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    sortOrder: z.number(),
    icon: faIconNameType,
    body: z.array(z.string()),
    tech: z.array(
      z.object({ icon: faIconNameType.optional(), name: z.string() }),
    ),
    links: z.array(
      z.object({
        url: z.string().url(),
        icon: faIconNameType,
        text: z.string(),
      }),
    ),
    badge: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const linksCollection = defineCollection({
  type: "data",
  schema: z.object({
    text: z.string(),
    sortOrder: z.number(),
    url: z.string().url(),
    iconPrefix: faIconPrefixType,
    icon: faIconNameType,
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  games: gamesCollection,
  links: linksCollection,
};
