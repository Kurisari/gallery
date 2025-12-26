import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://gallery.kurisari.dev',
	base: '/',
	image: {
		// Use Squoosh (WASM) to avoid native Sharp install in serverless builds
		service: {
			entrypoint: 'astro/assets/services/squoosh',
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
