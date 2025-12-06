<script lang="ts">
	export let title: string;
	export let description: string;
	export let eyebrow: string | null = null; // pequeño texto encima (opcional)
	export let tag: keyof HTMLElementTagNameMap = 'h1';
</script>

<div class="hero-content">
	{#if eyebrow}
		<p class="hero-eyebrow">{eyebrow}</p>
	{/if}

	<svelte:element this={tag} class="hero-title">
		{title}
	</svelte:element>

	<p class="hero-description">
		{description}
	</p>

	<!-- Slot para botones, enlaces, etc. -->
	<slot />
</div>

<style>
	.hero-content {
		background: #ffffff;
		padding: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.hero-eyebrow {
		font-size: 0.85rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
		opacity: 0.7;
	}

	.hero-title {
		font-weight: 700;
		font-size: clamp(2.2rem, 3vw, 3rem);
		line-height: 1.1;
		margin: 0 0 1.25rem;
	}

	.hero-description {
		margin: 0;
		line-height: 1.6;
		font-size: 0.95rem;
	}
</style>
