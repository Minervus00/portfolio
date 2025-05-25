// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://Minervus00.github.io/portfolio',
  base: '/portfolio', // Update this to match your GitHub repository name
  output: 'static'
});