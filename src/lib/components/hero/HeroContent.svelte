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

	<!-- Estos botones serán sticky en móvil -->
	<div class="hero-actions">
		<slot />
	</div>
</div>

<style>
	.hero-content {
		background: var(--color-card);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		box-shadow: var(--card-shadow);
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
		gap: 0.4rem;
		padding: 0;
		margin: 0.75rem 0 0;
		list-style: none;
	}

	.hero-tags li {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		padding: 0.3rem 0.8rem;
		border-radius: 999px;
		background: var(--accent-soft, #f4f0ff);
		color: var(--accent-strong, #4b2aad);
	}

	.hero-description {
		margin: 0;
		line-height: 1.7;
		font-size: 0.95rem;
		color: var(--color-text);
	}

	/* Desktop: botones normales abajo del texto */
	.hero-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.hero-actions :global(.btn) {
		flex: 1;
		text-align: center;
		min-width: 0;
	}

	/* 📱 MÓVIL: convierte los botones en píldora sticky */
	@media (max-width: 767px) {
		.hero-content {
			position: relative;
			/* deja hueco para que la píldora no pise el texto */
			padding-bottom: 3.2rem;
		}

		.hero-actions {
			position: sticky;
			top: calc(var(--header-offset, 0px) + 8px);
			z-index: 30;

			margin-top: 1rem;
			margin-inline: -0.5rem; /* que respire un poco más ancho que la tarjeta */
			padding: 0.5rem 0.7rem;
			border-radius: 999px;

			background: rgba(249, 248, 254, 0.95);
			backdrop-filter: blur(16px);
			box-shadow: 0 18px 40px rgba(15, 23, 42, 0.22);
		}
	}
</style>
