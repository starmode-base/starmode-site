import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectCategories = [
  "Libraries",
  "Templates",
  "Research",
  "Apps",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
  schema: z.object({
    displayName: z.string(),
    category: z.enum(projectCategories),
    order: z.number(),
    status: z.enum(["alpha", "beta", "rc"]).optional(),
    owner: z.string(),
    github: z.string().url(),
    npm: z.string().url().optional(),
    site: z.string().url().optional(),
  }),
});

export const collections = { projects };
