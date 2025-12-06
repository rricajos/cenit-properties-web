<!-- src/lib/components/hero/HeroSplit.svelte -->
<script lang="ts">
	import HeroMedia from './HeroMedia.svelte';
	import HeroContent from './HeroContent.svelte';

	export let title: string;
	export let description: string;
	export let mainImage: string;
	export let mainImageAlt: string = '';

	export let collageImages: string[] = [];

	// Permite invertir la disposición si algún día lo necesitas
	export let imageSide: 'left' | 'right' = 'left';
</script>

<section class="hero-split">
	<div class={`hero-split__grid hero-split__grid--${imageSide}`}>
		{#if imageSide === 'left'}
			<!-- Imagen a la izquierda, texto a la derecha -->
			<HeroMedia src={mainImage} alt={mainImageAlt} />
			<HeroContent {title} {description} />
		{:else}
			<!-- Texto a la izquierda, imagen a la derecha -->
			<HeroContent {title} {description} />
			<HeroMedia src={mainImage} alt={mainImageAlt} />
		{/if}
	</div>

	{#if collageImages && collageImages.length}
		<div class="hero-split__collage">
			{#each collageImages as src, index}
				<img
					{src}
					alt={`Imagen secundaria ${index + 1} de ${title}`}
					class="hero-split__collage-image"
				/>
			{/each}
		</div>
	{/if}
</section>

<style>
	.hero-split {
		background: #e0dfdd; /* gris suave similar a la maqueta */
		padding: 2rem 1.5rem 3rem;
	}

	.hero-split__grid {
		display: grid;
		gap: 2rem;
		align-items: stretch;
	}

	@media (min-width: 900px) {
		.hero-split__grid {
			grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
		}
	}

	.hero-split__collage {
		margin-top: 1.5rem;
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		gap: 0.75rem;
	}

	.hero-split__collage-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
