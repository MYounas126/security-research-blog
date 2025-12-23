import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://secsharh.dev',
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: ['bash', 'python', 'http', 'json', 'javascript', 'typescript', 'c', 'sql', 'html', 'xml', 'graphql'],
    },
  },
});
