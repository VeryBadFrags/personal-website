import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z, type ZodType } from "astro/zod";

const faIconNameType: ZodType<IconName> = z.any();
const faIconPrefixType: ZodType<IconPrefix> = z.any();

const gamesCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/games" }),
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
        url: z.url(),
        icon: faIconNameType,
        text: z.string(),
      }),
    ),
    badge: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

const linksCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/links" }),
  schema: z.object({
    text: z.string(),
    sortOrder: z.number(),
    url: z.url(),
    iconPrefix: faIconPrefixType,
    icon: faIconNameType,
  }),
});

export const collections = {
  games: gamesCollection,
  links: linksCollection,
};
