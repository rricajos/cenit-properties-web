<script lang="ts">
	import HeroMedia from './HeroMedia.svelte';
	import HeroContent from './HeroContent.svelte';

	export let title: string;
	export let description: string;
	export let eyebrow: string | null = null;
	export let tags: string[] = [];

	export let mainImage: string;
	export let mainImageAlt: string = '';

	// por si algún día quieres invertir la posición en desktop
	export let imageSide: 'left' | 'right' = 'left';
</script>

<section class="hero-split">
	<div class={`hero-split__inner hero-split__inner--${imageSide}`}>
		{#if imageSide === 'left'}
			<HeroMedia src={mainImage} alt={mainImageAlt} />

			<div class="hero-split__content">
				<HeroContent {title} {description} {eyebrow} {tags}>
					<slot />
				</HeroContent>
			</div>
		{:else}
			<div class="hero-split__content">
				<HeroContent {title} {description} {eyebrow} {tags}>
					<slot />
				</HeroContent>
			</div>

			<HeroMedia src={mainImage} alt={mainImageAlt} />
		{/if}
	</div>
</section>

<style>
	.hero-split {
		background: #fff;
		border-radius: 1rem;
		overflow: hidden;
	}

	.hero-split__inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		align-items: stretch; /* 👈 ESTIRAR LAS DOS COLUMNAS */
		min-height: 420px; /* opcional: altura mínima del hero */
	}

	.hero-split__inner--right {
		direction: rtl;
	}

	.hero-split__inner--right > * {
		direction: ltr;
	}

	.hero-split__content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* RESPONSIVE */
	@media (max-width: 900px) {
		.hero-split {
		}

		.hero-split__inner {
			grid-template-columns: minmax(0, 1fr);
		}

		/* en móvil dejamos siempre imagen arriba y texto debajo */
		.hero-split__inner--right,
		.hero-split__inner--left {
			direction: ltr;
		}
	}

	@media (max-width: 600px) {
		.hero-split__inner {
			gap: 1.5rem;
		}
	}
</style>
