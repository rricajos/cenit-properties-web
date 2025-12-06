<!-- src/lib/components/contact/ContactSection.svelte -->
<script lang="ts">
	import ContactIntro from './ContactIntro.svelte';
	import ContactForm from './ContactForm.svelte';
	import MapEmbed from './MapEmbed.svelte';

	export let id = 'contacto';

	// Podrás pasar props desde la página si quieres personalizar textos o mapa
</script>

<section {id} class="contact-section">
	<div class="contact-section__content">
		<div class="contact-section__left">
			<ContactIntro />
			<ContactForm />
		</div>

		<div class="contact-section__right">
			<MapEmbed />
		</div>
	</div>
</section>

<style>
	.contact-section {
		background-color: #111; /* fondo muy oscuro */
		color: #f5f5f5;
		padding: 4rem 1.5rem;
	}

	.contact-section__content {
		max-width: 1100px;
		margin: 0 auto;
		display: grid;
		gap: 2.5rem;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
	}

	.contact-section__left {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.contact-section__right {
		min-height: 320px;
	}

	@media (max-width: 800px) {
		.contact-section__content {
			grid-template-columns: 1fr;
		}
	}
</style>
