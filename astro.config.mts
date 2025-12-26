import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://gallery.kurisari.dev',
	base: '/',
	image: {
		// Use passthrough to avoid native dependencies in serverless builds
		service: {
			entrypoint: 'astro/assets/services/passthrough',
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
