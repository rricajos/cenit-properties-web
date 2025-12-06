// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined
		}),
		paths: {
			base: '' // dominio raíz, sin /cenit-properties-web
		},
		prerender: {
			// seguir ignorando solo los 404 de imágenes
			handleHttpError: ({ status, path, referrer, message }) => {
				if (status === 404 && path.startsWith('/images/')) {
					console.warn(
						`⚠️ Missing image during prerender: ${path}` +
							(referrer ? ` (linked from ${referrer})` : '')
					);
					return; // ignoramos este error concreto
				}

				throw new Error(message); // el resto sigue fallando
			},

			// NUEVO: ignorar solo el id "proyectos" faltante en la home
			handleMissingId: ({ path, id, referrers, message }) => {
				if (path === '/' && id === 'proyectos') {
					console.warn(
						`⚠️ Missing id="#${id}" on ${path}` +
							(referrers?.length ? ` (linked from ${referrers.join(', ')})` : '')
					);
					return; // no rompemos el build
				}

				// para otros ids faltantes, seguir fallando
				throw new Error(message);
			}
		}
	}
};

export default config;
