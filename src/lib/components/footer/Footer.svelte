<!-- src/lib/components/footer/Footer.svelte -->
<script lang="ts">
	import FooterColumns from './FooterColumns.svelte';
	import FooterColumn from './FooterColumn.svelte';
	import Logo from '$lib/components/header/Logo.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="site-footer__inner">
		<div class="site-footer__brand">
			<Logo />
			<p class="site-footer__tagline">
				Especialistas en revalorizar inmuebles a través de diseño, reforma y asesoría integral.
			</p>
		</div>

		<FooterColumns>
			<FooterColumn title="Servicios">
				<ul class="site-footer__list">
					<li><a href="#servicios">Compra-venta de inmuebles</a></li>
					<li><a href="#servicios">Home staging profesional</a></li>
					<li><a href="#servicios">Diseño y reforma integral</a></li>
					<li><a href="#servicios">Asesoría fiscal inmobiliaria</a></li>
				</ul>
			</FooterColumn>

			<FooterColumn title="Empresa">
				<ul class="site-footer__list">
					<li><a href="#proyectos">Proyectos</a></li>
					<li><a href="#equipo">Nuestro equipo</a></li>
					<li><a href="#faq">Preguntas frecuentes</a></li>
					<li><a href="#contacto">Contacto</a></li>
				</ul>
			</FooterColumn>

			<FooterColumn title="Contacto">
				<ul class="site-footer__list">
					<li>info@cenitproperties.com</li>
					<li>+34 600 000 000</li>
					<li>Gràcia, Barcelona</li>
				</ul>
			</FooterColumn>
		</FooterColumns>

		<div class="site-footer__bottom">
			<p>© {currentYear} CÉNIT PROPERTIES. Todos los derechos reservados.</p>
			<p class="site-footer__legal">
				<a href="#">Aviso legal</a>
				<span>·</span>
				<a href="#">Política de privacidad</a>
			</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		/* SIN margen, así no aparece el fondo blanco del body */
		margin-top: 0;
		background: #121318; /* banda oscura fija, la que tenías al principio */
		color: #f9f8fe;
	}

	.site-footer__inner {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding: 2.5rem var(--page-padding-x) 2rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	/* Marca + tagline */
	.site-footer__brand {
		max-width: 26rem;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	/* Forzamos color del logo y anulamos el azul de enlace */
	.site-footer__brand :global(.logo) {
		color: inherit;
		text-decoration: none;
	}

	.site-footer__brand :global(.logo__text) {
		color: #f9f8fe;
	}

	/* tagline */
	.site-footer__tagline {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.6;
		opacity: 0.9;
		color: #f9f8fe;
	}

	/* listas de enlaces */
	.site-footer__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.9rem;
		color: #f9f8fe;
	}

	.site-footer__list a {
		color: inherit;
		text-decoration: none;
		opacity: 0.9;
	}

	.site-footer__list a:hover {
		opacity: 1;
		text-decoration: underline;
	}

	/* foco accesible en enlaces del footer */
	.site-footer a:focus-visible {
		outline: 2px solid #f9f8fe;
		outline-offset: 2px;
	}

	/* franja inferior */
	.site-footer__bottom {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: space-between;
		align-items: center;
		padding-top: 1.25rem;
		border-top: 1px solid rgba(249, 248, 254, 0.12);
		font-size: 0.8rem;
		opacity: 0.85;
	}

	.site-footer__bottom p {
		margin: 0;
	}

	.site-footer__legal {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.site-footer__legal a {
		color: inherit;
		text-decoration: none;
	}

	.site-footer__legal a:hover {
		text-decoration: underline;
	}

	@media (max-width: 640px) {
		.site-footer__inner {
			padding-top: 2.25rem;
		}

		.site-footer__bottom {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
