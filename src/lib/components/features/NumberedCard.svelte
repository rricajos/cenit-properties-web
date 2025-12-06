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
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 2rem 1.75rem;
		background: var(--card-bg, #f2f2f2);
		border-radius: var(--card-radius, 0.5rem);
	}

	.numbered-card__number {
		font-size: 1.6rem;
		font-weight: 700;
		letter-spacing: 0.08em;
	}

	.numbered-card__title {
		font-family: var(--font-heading, inherit);
		font-weight: 700;
		font-size: 1.2rem;
		margin-bottom: 0.25rem;
	}

	.numbered-card__text {
		font-size: 0.95rem;
		line-height: 1.6;
	}
</style>
