<script>
	import MosaicItem from './MosaicItem.svelte';

	/**
	 * items: array de objetos con las props de MosaicItem.
	 * Ejemplo:
	 * [
	 *   { type: 'image', imageSrc: '...', imageAlt: '...' },
	 *   { type: 'text', title: 'Ideas de diseño', body: '...', theme: 'light' },
	 *   { type: 'text', title: 'Planes de casa', body: '...', theme: 'dark' },
	 *   { type: 'image', imageSrc: '...', imageAlt: '...' }
	 * ]
	 */
	export let items = [];

	// id opcional para anclas de navegación
	export let id;
</script>

<section class="mosaic-section" {id}>
	<div class="mosaic-section__grid">
		{#each items as item, index}
			<MosaicItem {...item} className={`mosaic-section__item mosaic-section__item--${index + 1}`} />
		{/each}
	</div>
</section>

<style>
	.mosaic-section {
		width: 100%;
	}

	.mosaic-section__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: minmax(220px, auto);
	}

	/* Mobile: 1 columna apilada */
	@media (max-width: 768px) {
		.mosaic-section__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
