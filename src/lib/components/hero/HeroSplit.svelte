<script lang="ts">
	import { onMount } from 'svelte';
	import HeroMedia from './HeroMedia.svelte';
	import HeroContent from './HeroContent.svelte';

	export let title: string;
	export let description: string;
	export let eyebrow: string | null = null;
	export let tags: string[] = [];

	export let mainImage: string;
	export let mainImageAlt: string = '';

	export let imageSide: 'left' | 'right' = 'left';
	export let showCta = true;

	const MOBILE_BREAKPOINT = 768;
	const MIN_MEDIA_HEIGHT = 180; // altura mínima de seguridad

	let rootEl: HTMLElement;

	function recalcHeroMediaHeight() {
		if (!rootEl) return;

		const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
		const heroMedia = rootEl.querySelector('.hero-media') as HTMLElement | null;
		const heroContent = rootEl.querySelector('.hero-content') as HTMLElement | null;

		if (!heroMedia || !heroContent) return;

		// Escritorio: dejamos que el CSS haga su trabajo
		if (!isMobile) {
			heroMedia.style.height = '';
			return;
		}

		const viewportH = window.innerHeight;

		// Altura de la sticky + márgenes
		let stickyOuterHeight = 0;
		const sticky = document.querySelector('.sticky-cta') as HTMLElement | null;

		if (sticky) {
			const rect = sticky.getBoundingClientRect();
			const styles = getComputedStyle(sticky);
			const marginTop = parseFloat(styles.marginTop || '0');
			const marginBottom = parseFloat(styles.marginBottom || '0');
			stickyOuterHeight = rect.height + marginTop + marginBottom;
		}

		// Solo contamos la MITAD de la barra sticky para integrar mejor el conjunto
		const stickyFactor = 0.5;
		const effectiveStickyHeight = stickyOuterHeight * stickyFactor;

		const marginBetweenHeroAndSticky = 16; // px de aire visual

		// Altura que queremos que ocupe el hero visible en el primer viewport
		const targetVisibleHeroHeight = viewportH - effectiveStickyHeight - marginBetweenHeroAndSticky;

		const contentHeight = heroContent.offsetHeight;

		// Altura final de la imagen (nunca menos de MIN_MEDIA_HEIGHT)
		const mediaHeight = Math.max(MIN_MEDIA_HEIGHT, targetVisibleHeroHeight - contentHeight);

		heroMedia.style.height = `${mediaHeight}px`;
	}

	onMount(() => {
		recalcHeroMediaHeight();

		const onResize = () => {
			recalcHeroMediaHeight();
		};

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<section class="hero-split" bind:this={rootEl}>
	<div class={`hero-split__inner hero-split__inner--${imageSide}`}>
		{#if imageSide === 'left'}
			<HeroMedia src={mainImage} alt={mainImageAlt} />

			<div class="hero-split__content">
				<HeroContent {title} {description} {eyebrow} {tags} {showCta}>
					<slot />
				</HeroContent>
			</div>
		{:else}
			<div class="hero-split__content">
				<HeroContent {title} {description} {eyebrow} {tags} {showCta}>
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
		box-shadow: var(--card-shadow);
	}

	.hero-split__inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		align-items: stretch;
		border-radius: inherit;
		overflow: hidden;
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

		/* altura base (fallback sin JS); la sobrescribimos por inline-style */
		.hero-split :global(.hero-media) {
			height: clamp(180px, 35vh, 230px);
		}

		.hero-split__content {
			margin-top: -2rem;
		}
	}

	@media (max-width: 767px) {
		.hero-split__inner {
			overflow: visible;
		}
	}
</style>
