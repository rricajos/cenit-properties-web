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
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.75rem;
	}
</style>
