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
		height: 100%; /* 👈 clave: ocupa todo el alto de la celda del grid */
		overflow: hidden;
	}

	.hero-media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover; /* 👈 recorta sin deformar */
	}
</style>
