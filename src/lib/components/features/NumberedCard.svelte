<script lang="ts">
	import { onMount } from 'svelte';

	export let number: number | string;
	export let title: string;
	export let text: string;

	let cardEl: HTMLElement;
	let isVisible = false;

	onMount(() => {
		// SSR / navegadores raros
		if (typeof IntersectionObserver === 'undefined' || !cardEl) {
			isVisible = true;
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isVisible = true;
					observer.disconnect(); // solo una vez
				}
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -10% 0px'
			}
		);

		observer.observe(cardEl);

		return () => observer.disconnect();
	});
</script>

<article class="numbered-card" class:is-visible={isVisible} bind:this={cardEl}>
	<div class="numbered-card__number">
		{number}
	</div>

	<div class="numbered-card__content">
		<h3 class="numbered-card__title">{title}</h3>
		<p class="numbered-card__text">{text}</p>
	</div>
</article>

<style>
	.numbered-card {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 1rem;
		row-gap: 0.25rem;
		align-items: flex-start;

		/* layout base */
		padding-block: 0.85rem;
		padding-inline: 0.25rem;
		background: transparent;
		border-radius: 0.9rem;
		border: 1px solid transparent;
		border-bottom-color: var(--color-border-subtle, rgba(15, 23, 42, 0.08));
		box-shadow: none;

		/* estado inicial: escondido + zoom-out */
		opacity: 0;
		transform: translateY(14px) scale(0.96);
		transition:
			opacity 320ms ease-out,
			transform 320ms ease-out,
			background-color 200ms ease,
			color 200ms ease,
			border-color 200ms ease,
			box-shadow 220ms ease;
	}

	/* cuando entra en viewport */
	.numbered-card.is-visible {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	.numbered-card:last-child {
		border-bottom-color: transparent;
	}

	.numbered-card__number {
		min-width: 2.5ch;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--accent-strong, #4b2aad);
		margin-top: 0.1rem;
	}

	.numbered-card__content {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.numbered-card__title {
		margin: 0;
		font-weight: 700;
		letter-spacing: -0.01em;
		font-size: clamp(0.98rem, 1.4vw, 1.15rem);
		line-height: 1.3;
	}

	.numbered-card__text {
		margin: 0;
		font-size: 0.86rem;
		line-height: 1.5;
		color: var(--color-text-muted, var(--color-text));
		max-width: 22rem;
	}

	/* DESKTOP: efecto VIP en hover */
	@media (min-width: 1024px) {
		.numbered-card {
			padding: 1rem 1.3rem;
			border-bottom-color: transparent;
		}

		.numbered-card.is-visible:hover,
		.numbered-card.is-visible:focus-within {
			background: rgba(255, 255, 255, 0.82);
			border-color: rgba(79, 70, 229, 0.24);
			box-shadow: 0 22px 50px rgba(15, 23, 42, 0.18);
			transform: translateY(-4px) scale(1.015);
		}
	}
</style>
