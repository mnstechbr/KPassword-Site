import { defineConfig } from 'astro/config';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const inferredBase = process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}` : '/';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://example.com',
  base: process.env.PUBLIC_SITE_BASE_PATH || inferredBase,
  // Aceita /download e /download/ para evitar 404 no dev, no GitHub Pages e em links digitados manualmente.
  trailingSlash: 'ignore'
});
