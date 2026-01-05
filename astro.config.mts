import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.vividgallery.gallery',
  base: '/',
  build: {
    format: 'directory',
  },
	vite: {
		plugins: [tailwindcss()],
	},
});
