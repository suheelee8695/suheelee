import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://suheelee.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
