<script lang="ts">
	/**
	 * variant:
	 *  - "image" → bloque que muestra solo una imagen
	 *  - "light" → bloque de texto con fondo claro
	 *  - "dark"  → bloque de texto con fondo oscuro
	 */
	export let variant: 'image' | 'light' | 'dark' = 'image';

	// Para la variante "image"
	export let src: string | null = null;
	export let alt: string = '';

	// Para variantes de texto
	export let title: string = '';
	export let text: string = '';
</script>

<div class={`mosaic-item mosaic-item--${variant}`}>
	{#if variant === 'image'}
		{#if src}
			<img class="mosaic-item__image" {src} {alt} />
		{/if}

		<!-- Slot opcional por si quieres poner overlay, etc. -->
		<slot />
	{:else}
		<div class="mosaic-item__content">
			{#if title}
				<h3 class="mosaic-item__title">{title}</h3>
			{/if}

			{#if text}
				<p>{text}</p>
			{/if}

			<!-- Slot para contenido extra (botones, links, etc.) -->
			<slot />
		</div>
	{/if}
</div>

<style>
	.mosaic-item {
		position: relative;
		min-height: 180px;
		overflow: hidden;
	}

	.mosaic-item--image {
		background: #ccc;
	}

	.mosaic-item--light {
		background: #f4f1ec;
		color: #191613;
	}

	.mosaic-item--dark {
		background: #1f1a16;
		color: #f5f5f5;
	}

	.mosaic-item__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.mosaic-item__content {
		padding: 2rem 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.mosaic-item__title {
		font-size: 1.1rem;
		font-weight: 600;
	}

	.mosaic-item__content p {
		font-size: 0.9rem;
		line-height: 1.6;
	}
</style>
