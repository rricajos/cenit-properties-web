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
		object-fit: cover; /* rellena el figure sin deformar; solo recorta */
	}
</style>
