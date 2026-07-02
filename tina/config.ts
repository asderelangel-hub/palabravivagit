import { defineConfig } from "tinacms";

const branch = process.env.TINA_BRANCH || process.env.GITHUB_REF_NAME || "main";

const langs = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

const slugify = (values: any) =>
  (values?.title || "entrada")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const tagByLang: Record<string, string[]> = {
  es: ["Presencial", "Online", "Verano", "Seminario", "Taller"],
  en: ["On-site", "Online", "Summer", "Seminar", "Workshop"],
  pt: ["Presencial", "Online", "Verão", "Seminário", "Oficina"],
};
const groupOptions = [
  { value: "internas", label: "Escuelas internas" },
  { value: "verano", label: "Programas de verano" },
  { value: "extensivas", label: "Escuelas extensivas y seminarios" },
];

// Genera una colección por idioma para un tipo de contenido
function perLang(base: string, label: string, fields: (lang: string) => any[]) {
  return langs.map((l) => ({
    name: `${base}_${l.code}`,
    label: `${label} · ${l.label}`,
    path: `src/content/${base}/${l.code}`,
    format: "md" as const,
    ui: { filename: { slugify } },
    fields: fields(l.code),
  }));
}

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: (process.env.PUBLIC_BASE_PATH || "").replace(/^\/+|\/+$/g, ""),
  },
  media: {
    tina: { mediaRoot: "images", publicFolder: "public" },
  },
  schema: {
    collections: [
      // ===== ESCUELAS Y SEMINARIOS =====
      ...perLang("escuelas", "Escuelas", (lang) => [
        { type: "string", name: "title", label: "Sigla / nombre corto", isTitle: true, required: true },
        { type: "string", name: "full", label: "Nombre completo" },
        { type: "string", name: "desc", label: "Descripción", required: true, ui: { component: "textarea" } },
        { type: "string", name: "tag", label: "Modalidad", options: tagByLang[lang] },
        { type: "string", name: "date", label: "Fecha de inicio (texto libre)" },
        { type: "string", name: "group", label: "Grupo", options: groupOptions },
        { type: "number", name: "order", label: "Orden dentro del grupo" },
        { type: "boolean", name: "draft", label: "Borrador (no publicar)" },
      ]),
      // ===== BLOG =====
      ...perLang("blog", "Blog", () => [
        { type: "string", name: "title", label: "Título", isTitle: true, required: true },
        { type: "string", name: "description", label: "Resumen / bajada (SEO)", required: true, ui: { component: "textarea" } },
        { type: "datetime", name: "pubDate", label: "Fecha", required: true, ui: { dateFormat: "YYYY-MM-DD" } },
        { type: "image", name: "cover", label: "Imagen de portada" },
        { type: "string", name: "category", label: "Categoría", options: ["Blog", "Noticias", "Historias", "Enseñanza", "Misión"] },
        { type: "boolean", name: "draft", label: "Borrador (no publicar)" },
        { type: "rich-text", name: "body", label: "Contenido", isBody: true },
      ]),
      // ===== DEVOCIONALES =====
      ...perLang("devocionales", "Devocionales", () => [
        { type: "string", name: "title", label: "Título", isTitle: true, required: true },
        { type: "string", name: "description", label: "Resumen / bajada", required: true, ui: { component: "textarea" } },
        { type: "datetime", name: "pubDate", label: "Fecha", required: true, ui: { dateFormat: "YYYY-MM-DD" } },
        { type: "string", name: "reference", label: "Versículo (ej. Salmo 1:1-3)" },
        { type: "image", name: "cover", label: "Imagen de portada" },
        { type: "boolean", name: "draft", label: "Borrador (no publicar)" },
        { type: "rich-text", name: "body", label: "Contenido", isBody: true },
      ]),
    ],
  },
});
