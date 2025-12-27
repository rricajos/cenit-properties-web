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

	.faq-section__inner {
		border-radius: var(--radius-lg, 1.5rem);
		padding: 2.2rem 2rem;
		background: var(--color-surface-elevated);
		box-shadow: var(--shadow-elevated);
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: 2.5rem;
		border: 1px solid var(--color-border-subtle);
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
		font-weight: 600;
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
		gap: 0.7rem;
	}

	.faq-item {
		border-radius: var(--radius-md, 1rem);
		border: 1px solid var(--color-border-subtle);
		background: var(--color-surface);
		overflow: hidden;
	}

	/* para hover/focus consistente en light + dark */
	.faq-item__button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.2rem;
		padding: 0.85rem 1rem;
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		text-align: left;
		color: var(--color-text);
	}

	.faq-item__button:hover {
		background: var(--accent-soft);
	}

	.faq-item__button:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 2px;
	}

	.faq-item__question {
		flex: 1;
		font-weight: 600;
		font-size: 0.96rem;
	}

	.faq-item__icon {
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 999px;
		border: 1px solid var(--color-border-subtle);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition:
			background 140ms ease-out,
			transform 140ms ease-out,
			color 140ms ease-out,
			border-color 140ms ease-out;
		color: var(--color-text-muted);
	}

	.faq-item__chevron {
		width: 1.05rem;
		height: 1.05rem;
		transition: transform 160ms ease-out;
	}

	.faq-item__icon[data-open='true'] {
		background: var(--accent-soft);
		color: var(--accent-strong);
		border-color: var(--color-border-subtle);
	}

	.faq-item__icon[data-open='true'] .faq-item__chevron {
		transform: rotate(180deg);
	}

	.faq-item__panel {
		padding: 0 1rem 0.85rem;
	}

	.faq-item__answer {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.6;
		color: var(--color-text-muted);
	}
</style>
