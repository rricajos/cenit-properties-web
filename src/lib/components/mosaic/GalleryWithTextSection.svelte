<script lang="ts">
	import MosaicItem from './MosaicItem.svelte';

	export let id;
	export let title = '';
	export let subtitle = '';

	/**
	 * items: pensamos en 3 items:
	 * [0] imagen grande izquierda  (type: 'image')
	 * [1] bloque texto arriba derecha (type: 'text')
	 * [2] imagen o texto abajo derecha (type: 'image' | 'text')
	 */
	export let items = [];
</script>

<section class="gallery-section" {id}>
	<header class="gallery-section__header">
		{#if title}
			<h2>{title}</h2>
		{/if}
		{#if subtitle}
			<p>{subtitle}</p>
		{/if}
	</header>

	<div class="gallery-section__grid">
		{#each items as item, index}
			<MosaicItem
				{...item}
				className={`gallery-section__item gallery-section__item--${index + 1}`}
			/>
		{/each}
	</div>
</section>

<style>
	.gallery-section {
		padding-block: 4rem;
	}

	.gallery-section__header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.gallery-section__header h2 {
		font-size: 2rem;
		margin-bottom: 0.75rem;
		font-weight: 700;
	}

	.gallery-section__header p {
		max-width: 40rem;
		margin: 0 auto;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.gallery-section__grid {
		display: grid;
		grid-template-columns: 2fr 1.5fr;
		grid-auto-rows: minmax(220px, auto);
		gap: 0;
	}

	/* Primer item ocupa las dos filas a la izquierda */
	.gallery-section__item--1 {
		grid-row: 1 / span 2;
		grid-column: 1 / 2;
	}

	.gallery-section__item--2 {
		grid-row: 1 / 2;
		grid-column: 2 / 3;
	}

	.gallery-section__item--3 {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}

	/* Mobile: layout apilado */
	@media (max-width: 768px) {
		.gallery-section__grid {
			grid-template-columns: 1fr;
		}

		.gallery-section__item--1,
		.gallery-section__item--2,
		.gallery-section__item--3 {
			grid-row: auto;
			grid-column: auto;
		}
	}
</style>
