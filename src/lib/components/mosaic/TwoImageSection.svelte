<script>
	export let id;
	export let title = '';
	export let body = '';

	/**
	 * images: array de { src, alt }
	 * normalmente 2 elementos.
	 */
	export let images = [];
</script>

<section class="two-image-section" {id}>
	<header class="two-image-section__header">
		{#if title}
			<h2>{title}</h2>
		{/if}
		{#if body}
			<p>{body}</p>
		{/if}
	</header>

	<div class="two-image-section__grid">
		{#each images as image}
			<figure class="two-image-section__figure">
				<img src={image.src} alt={image.alt} loading="lazy" />
			</figure>
		{/each}
	</div>
</section>

<style>
	.two-image-section {
		padding-block: 4rem;
	}

	.two-image-section__header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.two-image-section__header h2 {
		font-size: 2rem;
		margin-bottom: 0.75rem;
		font-weight: 700;
	}

	.two-image-section__header p {
		max-width: 40rem;
		margin: 0 auto;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.two-image-section__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.two-image-section__figure {
		margin: 0;
	}

	.two-image-section__figure img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.two-image-section__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
