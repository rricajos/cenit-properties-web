<script context="module" lang="ts">
	export type FaqItem = {
		question: string;
		answer: string;
	};
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';

	export let eyebrow: string = 'FAQ · Frequently Asked Questions';
	export let title: string = 'Preguntas frecuentes';
	export let intro: string = '';
	export let items: FaqItem[] = [];

	// Ninguna abierta por defecto (más compacto)
	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="faq-section">
	<div class="faq-section__inner">
		<header class="faq-section__header">
			{#if eyebrow}
				<p class="faq-section__eyebrow">{eyebrow}</p>
			{/if}
			<h2 class="faq-section__title">{title}</h2>
			{#if intro}
				<p class="faq-section__intro">{intro}</p>
			{/if}
		</header>

		<div class="faq-section__list">
			{#each items as item, index}
				<article class="faq-item">
					<button
						type="button"
						class="faq-item__button"
						on:click={() => toggle(index)}
						aria-expanded={openIndex === index}
						aria-controls={`faq-panel-${index}`}
					>
						<span class="faq-item__question">{item.question}</span>

						<span class="faq-item__icon" aria-hidden="true" data-open={openIndex === index}>
							<svg viewBox="0 0 24 24" class="faq-item__chevron">
								<path
									d="M6 9l6 6 6-6"
									fill="none"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</button>

					{#if openIndex === index}
						<div id={`faq-panel-${index}`} class="faq-item__panel" in:slide|local out:slide|local>
							<p class="faq-item__answer">{item.answer}</p>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq-section {
		margin-inline: auto;
	}

	/* 1) Contenedor general más “premium” en light, y con profundidad en dark */
	.faq-section__inner {
		border-radius: var(--radius-lg);
		padding: 2.2rem 2rem;

		/* En vez de gris plano, una superficie clara con un tinte mínimo */
		background: linear-gradient(
			180deg,
			color-mix(in oklab, var(--color-card) 95%, var(--color-accent) 5%),
			var(--color-card)
		);

		border: 1px solid color-mix(in oklab, var(--color-border-subtle) 80%, transparent);
		box-shadow: var(--shadow-elevated);

		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 2.5rem;
	}

	@media (max-width: 768px) {
		.faq-section__inner {
			grid-template-columns: 1fr;
			padding: 1.9rem 1.4rem;
			gap: 1.75rem;
		}
	}

	/* ——— Cabecera ——— */

	.faq-section__header {
		align-self: flex-start;
	}

	.faq-section__eyebrow {
		margin: 0 0 0.4rem;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-accent);
		font-weight: 700;
	}

	.faq-section__title {
		margin: 0 0 0.7rem;
		font-size: clamp(1.7rem, 2.5vw, 2rem);
		line-height: 1.1;
		color: var(--color-text);
	}

	.faq-section__intro {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--color-text-muted);
		max-width: 28rem;
	}

	@media (max-width: 768px) {
		.faq-section__header {
			text-align: center;
		}
		.faq-section__intro {
			margin-inline: auto;
		}
	}

	/* ——— Lista FAQs ——— */

	.faq-section__list {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	/* 2) Tarjetas menos “blanco nuclear” y con borde más fino */
	.faq-item {
		border-radius: var(--radius-md);
		border: 1px solid color-mix(in oklab, var(--color-border-subtle) 85%, transparent);
		background: color-mix(in oklab, var(--color-surface) 96%, var(--color-accent) 4%);
		overflow: hidden;
		box-shadow: var(--shadow-soft);
	}

	/* 3) Botón con hover visible en light y dark */
	.faq-item__button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.2rem;
		padding: 0.95rem 1rem;

		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		text-align: left;
		color: var(--color-text);
	}

	.faq-item__button:hover {
		background: var(--color-surface);
	}

	.faq-item__button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 3px;
	}

	.faq-item__question {
		flex: 1;
		font-weight: 650;
		font-size: 0.98rem;
	}

	.faq-item__icon {
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 999px;

		border: 1px solid color-mix(in oklab, var(--color-border-subtle) 85%, transparent);
		display: inline-flex;
		align-items: center;
		justify-content: center;

		transition:
			background 140ms ease-out,
			transform 140ms ease-out,
			color 140ms ease-out,
			border-color 140ms ease-out;

		color: var(--color-text-muted);
		background: transparent;
	}

	.faq-item__chevron {
		width: 1.05rem;
		height: 1.05rem;
		transition: transform 160ms ease-out;
	}

	/* Estado abierto con tinte (en light se nota, en dark también) */
	.faq-item__icon[data-open='true'] {
		background: color-mix(in oklab, var(--color-surface) 82%, var(--color-accent) 18%);
		color: var(--accent-strong);
		border-color: color-mix(in oklab, var(--color-accent) 40%, var(--color-border-subtle) 60%);
	}

	.faq-item__icon[data-open='true'] .faq-item__chevron {
		transform: rotate(180deg);
	}

	/* Panel con separación más elegante */
	.faq-item__panel {
		padding: 0.75rem 1rem 1rem 1rem;
		border-top: 1px solid color-mix(in oklab, var(--color-border-subtle) 75%, transparent);
		background: color-mix(in oklab, var(--color-surface) 98%, var(--color-accent) 2%);
	}

	.faq-item__answer {
		margin: 0;
		font-size: 0.92rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}
</style>
