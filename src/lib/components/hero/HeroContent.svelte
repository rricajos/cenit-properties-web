<script lang="ts">
	export let title: string;
	export let description: string;
	export let eyebrow: string | null = null;
	export let tag: keyof HTMLElementTagNameMap = 'h1';
	export let tags: string[] = [];
</script>

<div class="hero-content">
	{#if eyebrow}
		<p class="hero-eyebrow">{eyebrow}</p>
	{/if}

	<svelte:element this={tag} class="hero-title">
		{title}
	</svelte:element>

	{#if tags.length}
		<ul class="hero-tags">
			{#each tags as t}
				<li>{t}</li>
			{/each}
		</ul>
	{/if}

	<p class="hero-description">
		{description}
	</p>

	<!-- Slot para botones -->
	<div class="hero-actions">
		<slot />
	</div>
</div>

<style>
	.hero-content {
		background: #ffffff;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.hero-eyebrow {
		font-size: 0.85rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin: 0;
		opacity: 0.6;
	}

	.hero-title {
		font-weight: 700;
		font-size: clamp(2.1rem, 3vw, 2.7rem);
		line-height: 1.1;
		margin: 0;
	}

	.hero-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem; /* pequeña separación entre tags */
		padding: 0;
		margin: 0.75rem 0 0; /* un poco de aire respecto al título */
		list-style: none;
	}

	.hero-tags li {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		padding: 0.3rem 0.8rem;
		border-radius: 999px; /* efecto “tag” sencillo */
		background: var(--accent-soft, #f4f0ff); /* color de fondo accent */
		color: var(--accent-strong, #4b2aad); /* texto accent */
	}

	.hero-description {
		margin: 0;
		line-height: 1.7;
		font-size: 0.95rem;
		color: #333;
	}

	.hero-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}
</style>
