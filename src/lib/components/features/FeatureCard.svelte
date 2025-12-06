<script lang="ts">
	export let title: string;
	export let text: string;

	/**
	 * Opcional: texto accesible para describir el icono
	 * (si no lo pones, el icono se tratará como decorativo).
	 */
	export let iconLabel: string | null = null;
</script>

<article class="feature-card">
	<div class="feature-card__icon-wrapper" aria-hidden={iconLabel ? 'false' : 'true'}>
		<!-- Icono por slot: puede ser un SVG, emoji, etc. -->
		<slot name="icon" />
	</div>

	<h3 class="feature-card__title">
		{title}
	</h3>

	<p class="feature-card__text">
		{text}
	</p>
</article>

<style>
	.feature-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem 1.5rem;
		background: var(--card-bg, #f2f2f2);
		border-radius: var(--card-radius, 0.5rem);
		box-shadow: var(--card-shadow, none);
		gap: 0.75rem;
	}

	.feature-card__icon-wrapper {
		font-size: 2.5rem;
		line-height: 1;
	}

	.feature-card__title {
		font-family: var(--font-heading, inherit);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 1rem;
	}

	.feature-card__text {
		font-size: 0.9rem;
		line-height: 1.5;
		max-width: 26rem;
	}
</style>
