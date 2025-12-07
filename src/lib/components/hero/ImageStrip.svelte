<script lang="ts">
	export type StripImage = { src: string; alt?: string };

	export let stripImages: StripImage[] = [];
</script>

{#if stripImages.length}
	<div class="image-strip">
		{#each stripImages as image (image.src)}
			<figure class="image-strip__item">
				<img src={image.src} alt={image.alt ?? ''} loading="lazy" />
			</figure>
		{/each}
	</div>
{/if}

<style>
	.image-strip {
		margin-top: 1.5rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
	}

	.image-strip__item {
		width: 100%;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		border-radius: 10px;
	}

	.image-strip__item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
