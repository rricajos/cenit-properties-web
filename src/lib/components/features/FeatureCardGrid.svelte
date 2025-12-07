<script lang="ts">
	import FeatureCard from './FeatureCard.svelte';

	export type FeatureItem = {
		title: string;
		text: string;
		icon?: string;
		href?: string;
	};

	export let items: FeatureItem[] = [];
</script>

<section class="feature-card-grid">
	{#each items as item (item.title)}
		<FeatureCard title={item.title} text={item.text} icon={item.icon} href={item.href ?? null} />
	{/each}
</section>

<style>
	.feature-card-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.85rem; /* menos gap en móvil */
	}

	@media (min-width: 640px) {
		.feature-card-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.feature-card-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 1.4rem;
		}
	}
</style>
