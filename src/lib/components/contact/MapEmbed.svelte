<!-- src/lib/components/contact/MapEmbed.svelte -->
<script lang="ts">
	export let src =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23947.19223428759!2d2.151322620612276!3d41.38713991316901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a32a820a6c4d%3A0xa79612bbd59e5629!2sCentro%20Cenit%20Gracia!5e0!3m2!1ses!2ses!4v1765143752280!5m2!1ses!2ses'; // tu URL real
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
		display: block;
		border: 0;
	}
</style>
