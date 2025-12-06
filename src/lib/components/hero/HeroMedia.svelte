<script lang="ts">
	export let src: string;
	export let alt: string = '';
	// Por si quieres variar en el futuro
	export let aspect: 'landscape' | 'portrait' | 'square' = 'landscape';
</script>

<figure class={`hero-media hero-media--${aspect}`}>
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

	/* Por si quisieras tratar aspectos diferentes en el futuro */
	.hero-media--landscape {
		aspect-ratio: 4 / 3;
	}

	.hero-media--portrait {
		aspect-ratio: 3 / 4;
	}

	.hero-media--square {
		aspect-ratio: 1 / 1;
	}
</style>
