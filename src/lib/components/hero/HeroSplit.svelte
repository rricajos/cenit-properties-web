<!-- src/lib/components/hero/HeroSplit.svelte -->
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
		background: var(--color-card);
		border-radius: 1rem;
		overflow: hidden;
		box-shadow: var(--card-shadow);
	}

	.hero-split__inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		align-items: stretch;
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

	@media (max-width: 900px) {
		.hero-split__inner {
			grid-template-columns: 1fr;
			min-height: auto;
			gap: 1.4rem;
		}

		.hero-split__inner--right,
		.hero-split__inner--left {
			direction: ltr;
		}

		.hero-split :global(.hero-media) {
			height: clamp(180px, 35vh, 230px);
		}

		.hero-split__content {
			margin-top: -2rem;
		}
	}

	/* 👇 importante: en móvil no clipping, para que el sticky se vea bien */
	@media (max-width: 767px) {
		.hero-split {
			overflow: visible;
		}
	}
</style>
