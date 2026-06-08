import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://sujitt.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
