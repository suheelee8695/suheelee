import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://suheelee.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
