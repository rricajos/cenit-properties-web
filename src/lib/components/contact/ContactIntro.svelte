<!-- src/lib/components/contact/ContactIntro.svelte -->
<script lang="ts">
	export let title = 'Hablemos de tu proyecto inmobiliario';
	export let text =
		'Cuéntanos en qué punto estás con tu vivienda o inversión y te responderemos con una propuesta clara de próximos pasos. Atendemos de lunes a viernes y solemos contestar en menos de 24 horas.';
	export let email = 'info@cenitproperties.com';
</script>

<section class="contact-intro">
	<h2 class="contact-intro__title">{title}</h2>
	<p class="contact-intro__text">{text}</p>

	<a class="contact-intro__email" href={`mailto:${email}`}>
		{email}
	</a>
</section>

<style>
	.contact-intro {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.contact-intro__title {
		font-size: 1.65rem;
		font-weight: 700;
		margin: 0;
		color: var(--color-text);
	}

	.contact-intro__text {
		line-height: 1.6;
		margin: 0;
		color: var(--color-text-muted);
	}

	.contact-intro__email {
		font-weight: 600;
		text-decoration: underline;
		color: var(--color-accent, var(--color-primary));
	}

	.contact-intro__email:hover {
		opacity: 0.9;
	}
</style>
