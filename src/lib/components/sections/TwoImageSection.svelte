<!-- src/lib/components/sections/TwoImageSection.svelte -->
<script lang="ts">
	export let title: string;
	export let text: string;
	export let leftImage: string;
	export let rightImage: string;
	export let leftAlt: string = '';
	export let rightAlt: string = '';
</script>

<section class="two-image-section">
	<div class="two-image-section__text">
		<h2>{title}</h2>
		<p>{text}</p>
	</div>

	<div class="two-image-section__grid">
		<figure class="two-image-section__figure">
			<img src={leftImage} alt={leftAlt} />
		</figure>

		<figure class="two-image-section__figure">
			<img src={rightImage} alt={rightAlt} />
		</figure>
	</div>
</section>

<style>
	.two-image-section {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.two-image-section__text {
		text-align: center;
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.two-image-section__text h2 {
		font-size: 1.75rem;
		font-weight: 600;
	}

	.two-image-section__text p {
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.two-image-section__grid {
		display: grid;
		gap: 1.5rem;
	}

	@media (min-width: 900px) {
		.two-image-section__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.two-image-section__figure {
		overflow: hidden;
		border-radius: 0.75rem;
	}

	.two-image-section__figure img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
