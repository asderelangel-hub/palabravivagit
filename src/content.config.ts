import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Colecciones editables por el CMS (TinaCMS). Cada entrada vive en una subcarpeta
 * por idioma: content/<colección>/{es,en,pt}/<slug>.md
 * El idioma se deriva de la carpeta; el slug es igual entre traducciones (para el toggle).
 */

const escuelas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/escuelas" }),
  schema: z.object({
    title: z.string(),                 // sigla o nombre corto (EDE, DBS, Bethel…)
    full: z.string().optional(),       // nombre completo
    desc: z.string(),
    tag: z.string().default("Presencial"),
    date: z.string().optional(),       // "Inicia 21 sep 2026"
    group: z.enum(["internas", "verano", "extensivas"]).default("internas"),
    order: z.coerce.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    cover: z.string().optional(),
    category: z.string().default("Blog"),
    draft: z.boolean().default(false),
  }),
});

const devocionales = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/devocionales" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    reference: z.string().optional(),  // versículo (ej. "Salmo 1:1-3")
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { escuelas, blog, devocionales };
