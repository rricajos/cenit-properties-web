<script lang="ts">
	import MosaicItem from './MosaicItem.svelte';
	import type { ComponentProps } from 'svelte';

	type MosaicItemBase = ComponentProps<typeof MosaicItem>;

	type MosaicItemConfig = Omit<MosaicItemBase, 'mobileOrder'> & {
		flipOnMobile?: boolean;
	};

	export let items: MosaicItemConfig[] = [];
	export let id: string | undefined;

	const getMobileOrder = (item: MosaicItemConfig, index: number) => {
		if (!item.flipOnMobile) return index;
		return index % 2 === 0 ? index + 1 : index - 1;
	};
</script>

<section class="mosaic-section" {id}>
	<div class="mosaic-section__grid">
		{#each items as item, index}
			<MosaicItem
				{...item}
				mobileOrder={getMobileOrder(item, index)}
				className={`gallery-section__item gallery-section__item--${index + 1}`}
			/>
		{/each}
	</div>
</section>

<style>
	.mosaic-section {
		width: 100%;
		border-radius: 1rem;
		overflow: hidden;
	}

	.mosaic-section__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: minmax(220px, auto);
	}

	@media (max-width: 768px) {
		.mosaic-section__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
