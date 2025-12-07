<script lang="ts">
	export type GalleryImage = {
		src: string;
		alt: string;
	};

	export let title: string;
	export let text: string;
	export let images: GalleryImage[] = [];
</script>

<section class="gallery-section">
	<div class="gallery-section__content">
		<h2 class="gallery-section__title">{title}</h2>
		<p class="gallery-section__text">{text}</p>
	</div>

	<div class="gallery-section__grid">
		{#each images as image, index}
			<figure class={`gallery-section__item gallery-section__item--${index + 1}`}>
				<img src={image.src} alt={image.alt} loading="lazy" />
			</figure>
		{/each}
	</div>
</section>

<style>
	/* ——— Layout general ————————————————— */

	.gallery-section {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.35fr);
		align-items: center;
		gap: 2.75rem;
	}

	/* En móvil: una columna, imágenes arriba y texto debajo */
	@media (max-width: 768px) {
		.gallery-section {
			grid-template-columns: 1fr;
			gap: 1.75rem;
		}

		.gallery-section__grid {
			order: -1;
		}
	}

	/* ——— Texto ————————————————— */

	.gallery-section__title {
		font-size: clamp(1.8rem, 3vw, 2.1rem);
		line-height: 1.1;
		margin: 0 0 0.75rem;
		text-align: left;
	}

	.gallery-section__text {
		margin: 0;
		color: var(--color-text-muted, #555);
		font-size: 0.96rem;
		line-height: 1.7;
		max-width: 38rem;
	}

	@media (max-width: 768px) {
		.gallery-section__content {
			text-align: center;
		}

		.gallery-section__title {
			text-align: center;
			font-size: clamp(1.6rem, 5vw, 1.9rem);
		}

		.gallery-section__text {
			margin-inline: auto;
		}
	}

	/* ——— Galería ————————————————— */

	.gallery-section__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: 170px;
		gap: 0.9rem;
	}

	@media (min-width: 1024px) {
		.gallery-section__grid {
			grid-auto-rows: 190px;
		}
	}

	/* En móvil, más compacta y con composición distinta */
	@media (max-width: 768px) {
		.gallery-section__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-auto-rows: 125px;
			gap: 0.6rem;
			max-width: 520px;
			margin-inline: auto;
		}
	}

	.gallery-section__item {
		position: relative;
		overflow: hidden;
		border-radius: 1.25rem;
		box-shadow: 0 12px 25px rgba(15, 23, 42, 0.12);
		background: #d9d9d9;
	}

	.gallery-section__item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transform: scale(1.03);
		transition: transform 200ms ease-out;
	}

	.gallery-section__item:hover img {
		transform: scale(1.07);
	}

	/* Composición de las 3 imágenes en escritorio:
	   - 1: alta a la izquierda
	   - 2 y 3: apiladas a la derecha
	*/
	.gallery-section__item--1 {
		grid-row: 1 / span 2;
		grid-column: 1 / 2;
	}

	.gallery-section__item--2 {
		grid-row: 1 / 2;
		grid-column: 2 / 3;
	}

	.gallery-section__item--3 {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
	}

	/* En móvil:
	   - 1: ocupa todo el ancho
	   - 2 y 3: 50% / 50% debajo
	*/
	@media (max-width: 768px) {
		.gallery-section__item--1 {
			grid-column: 1 / -1;
			grid-row: auto;
		}

		.gallery-section__item--2,
		.gallery-section__item--3 {
			grid-row: auto;
			grid-column: auto;
		}
	}
</style>
