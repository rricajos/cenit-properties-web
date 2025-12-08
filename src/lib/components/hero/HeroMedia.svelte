<!-- src/lib/components/hero/HeroMedia.svelte -->
<script lang="ts">
	export let src: string;
	export let alt = '';
</script>

<figure class="hero-media">
	<img {src} {alt} loading="lazy" />
</figure>

<style>
	.hero-media {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.hero-media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* En móvil, altura natural de la imagen para evitar “columnas” gigantes */
	@media (max-width: 900px) {
		.hero-media {
			height: auto;
		}

		.hero-media img {
			height: auto;
			object-fit: cover;
		}
	}
</style>
