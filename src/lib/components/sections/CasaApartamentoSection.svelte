<script lang="ts">
	export let id: string | undefined = undefined;

	export let title: string = 'Casa y apartamento';
	export let text: string;

	// rutas de imagen o datos más completos si quieres
	export let leftImageSrc: string;
	export let leftImageAlt: string = '';

	export let rightImageSrc: string;
	export let rightImageAlt: string = '';
</script>

<section {id} class="section section--casa-apartamento">
	<div class="section__header">
		<h2 class="section__title">{title}</h2>
		<p class="section__text">{text}</p>
	</div>

	<div class="section__images">
		<figure class="section__image">
			<img src={leftImageSrc} alt={leftImageAlt} loading="lazy" />
		</figure>

		<figure class="section__image">
			<img src={rightImageSrc} alt={rightImageAlt} loading="lazy" />
		</figure>
	</div>
</section>

<style>
	.section {
		padding-block: 4rem;
		background-color: var(--color-page-bg, #d9d9d9); /* opcional, según tu theme */
	}

	.section__header {
		max-width: 56rem;
		margin: 0 auto 2.5rem auto;
		text-align: center;
		padding-inline: 1.5rem;
	}

	.section__title {
		font-size: clamp(2rem, 3vw, 2.5rem);
		margin-bottom: 1rem;
	}

	.section__text {
		line-height: 1.6;
	}

	.section__images {
		max-width: 72rem;
		margin: 0 auto;
		padding-inline: 1.5rem;

		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
	}

	.section__image img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.section__images {
			grid-template-columns: 1fr;
		}
	}
</style>
