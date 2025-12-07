<script lang="ts">
	export let number: number | string;
	export let title: string;
	export let text: string;
</script>

<article class="numbered-card">
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
		column-gap: 0.9rem;
		row-gap: 0.25rem;
		align-items: flex-start;

		padding: 1.1rem 1rem;
		border-radius: var(--radius-lg, 0.9rem);
		background: var(--card-bg, var(--color-card, #ffffff));
		border: 1px solid var(--border-subtle, rgba(15, 23, 42, 0.06));
		box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);

		transition:
			transform 160ms ease,
			box-shadow 160ms ease,
			border-color 160ms ease,
			background-color 160ms ease;
	}

	.numbered-card__number {
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		min-width: 3ch;
		text-transform: uppercase;
		color: var(--accent-strong, #4f46e5);
	}

	.numbered-card__content {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.numbered-card__title {
		font-family: var(--font-heading, inherit);
		font-weight: 700;
		letter-spacing: -0.01em;
		font-size: clamp(1.05rem, 1.4vw, 1.35rem);
		line-height: 1.25;
		margin-bottom: 0.05rem;
	}
	.numbered-card__text {
		font-size: 0.86rem;
		line-height: 1.45;
		color: var(--color-text-muted, var(--color-text));
	}

	.numbered-card:hover,
	.numbered-card:focus-within {
		transform: translateY(-2px);
		box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
		border-color: rgba(79, 70, 229, 0.15);
	}

	@media (min-width: 768px) {
		.numbered-card {
			padding: 1.6rem 1.4rem;
		}

		.numbered-card__number {
			font-size: 1.4rem;
		}

		.numbered-card__text {
			font-size: 0.9rem;
			line-height: 1.6;
		}
	}
</style>
