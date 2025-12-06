<!-- src/lib/components/features/FeatureCardGrid.svelte -->
<script lang="ts">
	import FeatureCard from './FeatureCard.svelte';

	export type FeatureItem = {
		title: string;
		text: string;
		icon?: string;
	};

	export let items: FeatureItem[] = [];
</script>

<section class="feature-card-grid">
	{#each items as item (item.title)}
		<FeatureCard title={item.title} text={item.text} icon={item.icon} />
	{/each}
</section>

<style>
	.feature-card-grid {
		display: grid;
		gap: 1.5rem;
		margin-inline: auto;
	}

	@media (min-width: 768px) {
		.feature-card-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
