// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined
		}),
		paths: {
			base: '' // ¡nada de /cenit-properties-web!
		},
		prerender: {
			// Opción B: no romper el build por imágenes que faltan
			handleHttpError: ({ status, path, referrer, message }) => {
				if (status === 404 && path.startsWith('/images/')) {
					console.warn(
						`⚠️ Missing image during prerender: ${path}` +
							(referrer ? ` (linked from ${referrer})` : '')
					);
					return; // ignoramos este error
				}

				// para cualquier otro error, que falle el build normalmente
				throw new Error(message);
			}
		}
	}
};

export default config;
