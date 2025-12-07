<script lang="ts">
	import ContactIntro from './ContactIntro.svelte';
	import ContactForm from './ContactForm.svelte';
	import MapEmbed from './MapEmbed.svelte';

	export let id = 'contacto';
</script>

<section {id} class="contact-section">
	<div class="contact-section__inner">
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
	/* Fondo de banda a todo ancho */
	.contact-section {
		background: var(--accent-soft, #ece9ff);
		padding-block: 4rem;
		color: var(--color-text);
	}

	/* Contenido centrado y limitado */
	.contact-section__inner {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding-inline: var(--page-padding-x);
		display: grid;
		gap: 2.5rem;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		align-items: stretch;
	}

	.contact-section__left {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		background: var(--color-surface, var(--color-card));
		border-radius: var(--radius-md, 1rem);
		padding: 1.8rem 1.6rem;
		box-shadow: var(--shadow-soft, 0 10px 30px #0000000f);
	}

	.contact-section__right {
		min-height: 320px;
		border-radius: var(--radius-md, 1rem);
		overflow: hidden;
		box-shadow: var(--shadow-soft, 0 10px 30px #0000000f);
		background: var(--color-surface, #000);
	}

	@media (max-width: 800px) {
		.contact-section {
			padding-block: 3rem;
		}

		.contact-section__inner {
			grid-template-columns: 1fr;
		}

		.contact-section__left {
			order: 1;
			padding: 1.6rem 1.3rem;
		}

		.contact-section__right {
			order: 2;
		}
	}
</style>
