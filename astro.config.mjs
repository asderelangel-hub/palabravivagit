// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Por cliente: cambiar el `site` default al dominio real del cliente.
// `base` y `site` se pueden sobrescribir por env para el build de demo en
// subruta (PUBLIC_BASE_PATH / PUBLIC_SITE_URL) — ver scripts/deploy-demo.
// En local y en el build a la raíz quedan en "/" y el dominio del cliente.
let base = process.env.PUBLIC_BASE_PATH || '/';
// Defensa anti Git Bash/MSYS: /deploy/... puede llegar como C:/…/deploy/...
if (/:|program files/i.test(base)) {
  const idx = base.toLowerCase().indexOf('deploy');
  base = idx >= 0 ? '/' + base.slice(idx).replace(/\\/g, '/') : '/';
}
const site = process.env.PUBLIC_SITE_URL || 'https://jucumpalabraviva.cl';

// Prefija con `base` las rutas absolutas (/images/..., /blog/...) dentro del
// Markdown (fotos/links que el cliente mete en el cuerpo) para que no se rompan en subruta.
function rehypeBasePaths() {
  const prefix = base.replace(/\/$/, '');
  if (!prefix) return () => () => {};
  const walk = (node) => {
    if (node.type === 'element' && node.properties) {
      const p = node.properties;
      if (node.tagName === 'img' && typeof p.src === 'string' && p.src.startsWith('/') && !p.src.startsWith('//')) p.src = prefix + p.src;
      if (node.tagName === 'a' && typeof p.href === 'string' && p.href.startsWith('/') && !p.href.startsWith('//')) p.href = prefix + p.href;
    }
    (node.children || []).forEach(walk);
  };
  return () => (tree) => { walk(tree); };
}

export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pt'],
    routing: { prefixDefaultLocale: false },
  },
  trailingSlash: 'ignore',
  markdown: {
    rehypePlugins: [rehypeBasePaths()],
  },
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
