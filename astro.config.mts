import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vividgallery.gallery',
  base: '/',
  trailingSlash: 'always', // Forces a consistent URL style
  build: {
    format: 'directory',   // Creates /about/index.html
  },
	vite: {
		plugins: [tailwindcss()],
	},
});
