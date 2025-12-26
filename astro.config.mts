import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://gallery.kurisari.dev',
	base: '/',
	vite: {
		plugins: [tailwindcss()],
	},
});
