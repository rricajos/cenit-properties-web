<script lang="ts">
	import FeatureCard from './FeatureCard.svelte';

	export interface FeatureCardItem {
		id?: string | number;
		title: string;
		text: string;
		/** Emoji o caracter para el icono. Puedes ignorarlo si usas slots. */
		icon?: string;
	}

	/**
	 * Si pasas `items`, se pintan automáticamente.
	 * Si NO pasas `items`, se usa el <slot> para que metas tú los <FeatureCard>.
	 */
	export let items: FeatureCardItem[] | null = null;
</script>

<section class="feature-card-grid">
	{#if items && items.length}
		{#each items as item (item.id ?? item.title)}
			<FeatureCard title={item.title} text={item.text}>
				{#if item.icon}
					<span slot="icon">{item.icon}</span>
				{/if}
			</FeatureCard>
		{/each}
	{:else}
		<slot />
	{/if}
</section>

<style>
	.feature-card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
	}
</style>
