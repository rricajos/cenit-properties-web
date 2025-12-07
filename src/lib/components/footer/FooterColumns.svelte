<!-- src/lib/components/footer/FooterColumns.svelte -->
<script lang="ts">
	import FooterColumn from './FooterColumn.svelte';

	export type FooterColumnData = {
		id?: string;
		title: string;
		body?: string;
	};

	export let columns: FooterColumnData[] = [];
</script>

<section class="footer-columns">
	{#if columns.length}
		{#each columns as column (column.id ?? column.title)}
			<FooterColumn title={column.title} body={column.body} />
		{/each}
	{:else}
		<slot />
	{/if}
</section>

<style>
	.footer-columns {
		display: grid;
		gap: 2rem;
	}

	@media (min-width: 640px) {
		.footer-columns {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 900px) {
		.footer-columns {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 3rem;
		}
	}
</style>
