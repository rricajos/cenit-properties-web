<script lang="ts">
	import NumberedCard from './NumberedCard.svelte';

	export interface NumberedFeatureItem {
		id?: string | number;
		number: number | string;
		title: string;
		text: string;
	}

	export let items: NumberedFeatureItem[] | null = null;
</script>

<section class="numbered-feature-grid">
	{#if items && items.length}
		{#each items as item (item.id ?? item.number)}
			<NumberedCard number={item.number} title={item.title} text={item.text} />
		{/each}
	{:else}
		<slot />
	{/if}
</section>

<style>
	.numbered-feature-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.numbered-feature-grid {
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
			gap: 1.25rem;
		}
	}

	@media (min-width: 1024px) {
		.numbered-feature-grid {
			gap: 1.6rem;
		}
	}
</style>
