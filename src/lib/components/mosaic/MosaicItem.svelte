<script lang="ts">
	export let variant: 'image' | 'light' | 'dark' = 'image';

	export let src: string | null = null;
	export let alt: string = '';

	export let title: string = '';
	export let text: string = '';

	// Clase extra opcional
	export let className: string = '';

	// Orden en mobile (la calcula MosaicSection)
	export let mobileOrder: number | undefined = undefined;
</script>

<div
	class={`mosaic-item mosaic-item--${variant} ${className}`}
	style={`--mobile-order: ${mobileOrder ?? 0}`}
>
	{#if variant === 'image'}
		{#if src}
			<img class="mosaic-item__image" {src} {alt} />
		{/if}

		<!-- Slot opcional por si quieres overlay o similar -->
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

	/* orden en móvil */
	@media (max-width: 768px) {
		.mosaic-item {
			order: var(--mobile-order, 0);
		}
	}

	/* Variante imagen: que se sienta como “tarjeta premium” */
	.mosaic-item--image {
		background: var(--color-card);
		border-radius: var(--radius-lg, 1.25rem);
		box-shadow: 0 10px 26px rgba(15, 23, 42, 0.12);
		transition:
			box-shadow 220ms ease-out,
			transform 220ms ease-out,
			background 180ms ease-out;
	}

	/* Texto claro/oscuro, sin cambios fuertes */
	.mosaic-item--light {
		background: var(--color-card);
		color: var(--color-text);
		border-radius: var(--radius-lg, 1.25rem);
	}

	.mosaic-item--dark {
		background: var(--color-card);
		color: var(--color-text);
		border-radius: var(--radius-lg, 1.25rem);
	}

	/* Imagen base */
	.mosaic-item__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;

		/* base ligeramente ampliada para evitar bordes al hacer tilt */
		transform: scale(1.02);
		transform-origin: center center;
		transition:
			transform 260ms cubic-bezier(0.19, 1, 0.22, 1),
			filter 260ms ease-out;
	}

	/* Contenido texto */
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
		white-space: pre-line;
	}

	/* --------- Efecto hover sólo en dispositivos con ratón --------- */
	@media (hover: hover) and (pointer: fine) {
		.mosaic-item--image:hover,
		.mosaic-item--image:focus-within {
			box-shadow: 0 22px 48px rgba(15, 23, 42, 0.32);
			transform: translateY(-3px);
		}

		.mosaic-item--image:hover .mosaic-item__image,
		.mosaic-item--image:focus-within .mosaic-item__image {
			/* zoom + tilt 3D suave */
			transform: scale(1.08) rotate3d(0.18, 0.85, 0, -4deg) translateY(-2px);
			filter: brightness(1.03) saturate(1.04);
		}
	}
</style>
