<script lang="ts">
	import NumberedCard from './NumberedCard.svelte';

	export type NumberedItem = {
		number: string;
		title: string;
		text: string;
	};

	export let items: NumberedItem[] = [];
</script>

<section class="numbered-grid">
	{#each items as item (item.number)}
		<NumberedCard number={item.number} title={item.title} text={item.text} />
	{/each}
</section>

<style>
	.numbered-grid {
		display: grid;
		gap: 2rem 2.5rem; /* filas | columnas */
	}

	/* 2 columnas en tablet */
	@media (min-width: 640px) {
		.numbered-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	/* 3 columnas en desktop */
	@media (min-width: 1024px) {
		.numbered-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
