<script lang="ts">
	import FooterColumns from './FooterColumns.svelte';
	import FooterColumn from './FooterColumn.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
	import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="site-footer__inner">
		<div class="site-footer__brand">
			<div style="max-width: 26rem;">
				<Logo />
				<p class="site-footer__tagline">
					Especialistas en revalorizar inmuebles a través de diseño, reforma y asesoría integral.
				</p>
			</div>

			<div class="site-footer__social">
				<a href="#" aria-label="Instagram">
					<Instagram class="site-footer__social-icon" />
				</a>
				<a href="#" aria-label="LinkedIn">
					<Linkedin class="site-footer__social-icon" />
				</a>
				<a href="#" aria-label="Facebook">
					<Facebook class="site-footer__social-icon" />
				</a>
				<a href="#" aria-label="YouTube">
					<Youtube class="site-footer__social-icon" />
				</a>
			</div>
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
					<!-- <li><a href="#equipo">Nuestro equipo</a></li> -->
					<li><a href="#faq">Preguntas frecuentes</a></li>
					<li><a href="#contacto">Contacto</a></li>
				</ul>
			</FooterColumn>

			<FooterColumn title="Contacto">
				<ul class="site-footer__list site-footer__list--contact">
					<li class="site-footer__contact-row">
						<span class="site-footer__icon-wrap">
							<Mail class="site-footer__icon" />
						</span>
						<a href="mailto:info@cenitproperties.com">info@cenitproperties.com</a>
					</li>
					<li class="site-footer__contact-row">
						<span class="site-footer__icon-wrap">
							<Phone class="site-footer__icon" />
						</span>
						<a href="tel:+34600000000">+34 600 000 000</a>
					</li>
					<li class="site-footer__contact-row">
						<span class="site-footer__icon-wrap">
							<MapPin class="site-footer__icon" />
						</span>
						<span>Gràcia, Barcelona</span>
					</li>
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
		margin-top: 0;
		background: #121318;
		color: #f9f8fe; /* color base de todo el texto */
	}

	.site-footer__inner {
		max-width: var(--layout-max-width);
		margin: 0 auto;
		padding: 2.5rem var(--page-padding-x) 2rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	/* Marca + tagline + redes */
	.site-footer__brand {
		display: flex;
		flex-direction: row;
		flex-flow: row wrap;
		justify-content: space-between;

		align-items: flex-start;
		gap: 0.8rem;
	}

	.site-footer__brand :global(a.logo) {
		color: inherit;
		text-decoration: none;
	}

	.site-footer__brand :global(.logo__text) {
		color: #f9f8fe;
	}

	.site-footer__tagline {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.6;
		color: #f9f8fe;
		opacity: 0.9;
	}

	/* Redes sociales */
	.site-footer__social {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-top: 0.1rem;
	}

	.site-footer__social a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.1rem;
		height: 2.1rem;
		border-radius: 999px;
		background: rgba(249, 248, 254, 0.04);
	}

	.site-footer__social a:link,
	.site-footer__social a:visited {
		color: #f9f8fe;
	}

	.site-footer__social a:hover {
		background: rgba(249, 248, 254, 0.12);
	}

	.site-footer__social-icon {
		width: 1.2rem;
		height: 1.2rem;
	}

	/* Listas de enlaces */
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

	.site-footer__list a:link,
	.site-footer__list a:visited {
		color: #f9f8fe; /* mata el morado de :visited */
	}

	.site-footer__list a {
		text-decoration: none;
		opacity: 0.9;
	}

	.site-footer__list a:hover {
		opacity: 1;
		text-decoration: underline;
	}

	/* Fila de contacto con icono + texto */
	.site-footer__list--contact {
		gap: 0.5rem;
	}

	.site-footer__contact-row {
		display: flex;
		align-items: center;
		gap: 0.55rem;
	}

	.site-footer__icon-wrap {
		width: 1.25rem;
		height: 1.25rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.site-footer__icon {
		width: 1rem;
		height: 1rem;
	}

	/* Foco accesible en todos los enlaces del footer */
	.site-footer a:focus-visible {
		outline: 2px solid #f9f8fe;
		outline-offset: 2px;
	}

	/* Franja inferior */
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
		color: #f9f8fe;
	}

	.site-footer__legal {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.site-footer__legal a:link,
	.site-footer__legal a:visited {
		color: #f9f8fe;
	}

	.site-footer__legal a {
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
