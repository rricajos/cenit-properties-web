<!-- src/lib/components/contact/ContactIntro.svelte -->
<script lang="ts">
	export let title = 'Contáctenos';
	export let text =
		'Siempre es bienvenido a contactarnos. Nuestro servicio de atención al cliente está disponible de lunes a viernes de 9:00 a.m. a 8:00 p.m. y sábados y domingos de 10:00 a.m. a 6:00 p.m. (GMT +3). ¡Esperamos con interés escuchar de usted!';
	export let email = 'contactos@esbnyc.com';
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
		font-size: 1.5rem;
		font-weight: 700;
	}

	.contact-intro__text {
		line-height: 1.6;
	}

	.contact-intro__email {
		font-weight: 600;
		text-decoration: underline;
	}
</style>
