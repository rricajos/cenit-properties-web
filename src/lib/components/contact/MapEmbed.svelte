<!-- src/lib/components/contact/MapEmbed.svelte -->
<script lang="ts">
	export let src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.695...'; // aquí pegas tu URL real
	export let title = 'Ubicación de la empresa';
</script>

<div class="contact-map">
	<iframe
		{title}
		{src}
		style="border:0;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</div>

<style>
	.contact-map {
		width: 100%;
		height: 100%;
	}

	.contact-map iframe {
		width: 100%;
		height: 100%;
		min-height: 260px;
	}
</style>
