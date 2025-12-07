<!-- src/lib/components/features/FeatureCard.svelte -->
<script lang="ts">
	export let title: string;
	export let text: string;
	export let icon: string | undefined = undefined;
</script>

<article class="feature-card">
	{#if icon}
		<div class="feature-card__icon">
			<!-- Aquí puedes cambiar por un <Icon name={icon} /> si usas un sistema de iconos -->
			<span>{icon}</span>
		</div>
	{/if}

	<h3 class="feature-card__title">{title}</h3>
	<p class="feature-card__text">{text}</p>
</article>

<style>
	.feature-card {
		background: #ffffff;
		padding: 2rem 1.5rem;
		border-radius: 0.75rem;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.feature-card__icon {
		width: 3rem;
		height: 3rem;
		border-radius: 999px;
		border: 1px solid #ddd;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
	}

	.feature-card__title {
		font-size: 1.05rem;
		font-weight: 600;
	}

	.feature-card__text {
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--color-text);
	}
</style>
