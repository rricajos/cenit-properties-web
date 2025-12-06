<script lang="ts">
	import PageSection from '$lib/components/layout/PageSection.svelte';
	import SplitLayout from '$lib/components/layout/SplitLayout.svelte';
	import Container from '$lib/components/layout/Container.svelte';

	const featureCards = [
		{
			icon: '🚀',
			title: 'Proyectos',
			text: 'Reformas integrales y proyectos de revalorización de inmuebles.'
		},
		{
			icon: '🏅',
			title: 'Premios',
			text: 'Experiencia y reconocimiento en diseño y mejora de espacios.'
		},
		{
			icon: '👥',
			title: 'Nuestro equipo',
			text: 'Arquitectos, interioristas y técnicos especializados.'
		}
	];

	const numberedBlocks = [
		{
			number: '01',
			title: 'Interiores impresionantes',
			text: 'Creamos espacios cálidos, sobrios y funcionales pensados para vivirlos a diario.'
		},
		{
			number: '02',
			title: 'Fresco y creativo',
			text: 'Diseños actuales que respetan la esencia del inmueble y del barrio.'
		}
	];
</script>

<!-- HERO -->
<PageSection id="inicio" background="light" padding="lg" useContainer={false}>
	<Container>
		<SplitLayout gap="4rem">
			<div slot="left" class="hero-media">
				<img src="/images/hero-main.jpg" alt="Interior reformado" />
			</div>

			<div slot="right" class="hero-text">
				<h1>Casa de estilo tailandés Wabi Sabi</h1>
				<p>
					Revalorizamos tu vivienda mediante reformas cuidadas, materiales nobles y un diseño
					atemporal que conecta con tu forma de vivir.
				</p>

				<div class="hero-strip">
					<img src="/images/hero-1.jpg" alt="Detalle interior 1" />
					<img src="/images/hero-2.jpg" alt="Detalle interior 2" />
					<img src="/images/hero-3.jpg" alt="Detalle interior 3" />
				</div>
			</div>
		</SplitLayout>
	</Container>
</PageSection>

<!-- 3 CARDS: PROYECTOS / PREMIOS / EQUIPO -->
<PageSection id="servicios" background="default" padding="lg">
	<div class="feature-grid">
		{#each featureCards as card}
			<article class="feature-card">
				<div class="feature-card__icon">{card.icon}</div>
				<h3>{card.title}</h3>
				<p>{card.text}</p>
			</article>
		{/each}
	</div>
</PageSection>

<!-- Mosaico: Ideas de diseño / Planes de casa -->
<PageSection background="light" padding="lg" useContainer={false}>
	<Container>
		<div class="mosaic-2x2">
			<div class="mosaic-2x2__item mosaic-2x2__item--image">
				<img src="/images/mosaic-1.jpg" alt="Butaca de diseño" />
			</div>

			<div class="mosaic-2x2__item mosaic-2x2__item--text">
				<h2>Ideas de diseño</h2>
				<p>
					Te ayudamos a definir un concepto de interiorismo coherente para cada estancia, respetando
					la luz y la arquitectura original.
				</p>
			</div>

			<div class="mosaic-2x2__item mosaic-2x2__item--text mosaic-2x2__item--dark">
				<h2>Planes de casa</h2>
				<p>
					Elaboramos propuestas de distribución, reformas parciales o integrales y fases de obra
					adaptadas a tu presupuesto.
				</p>
			</div>

			<div class="mosaic-2x2__item mosaic-2x2__item--image">
				<img src="/images/mosaic-2.jpg" alt="Dormitorio minimalista" />
			</div>
		</div>
	</Container>
</PageSection>

<!-- Claim centrado -->
<PageSection background="default" padding="md">
	<div class="centered-section">
		<h2>Nuevas ideas a la vida</h2>
		<p>
			Reformamos y rediseñamos tu vivienda para mejorar su valor, su confort y su capacidad de
			atraer compradores o inquilinos.
		</p>
	</div>
</PageSection>

<!-- Más de 50 ideas de diseño de interiores -->
<PageSection background="light" padding="lg" useContainer={false}>
	<Container>
		<div class="centered-section centered-section--top">
			<h2>Más de 50 ideas de diseño de interiores</h2>
		</div>

		<div class="ideas-grid">
			<div class="ideas-grid__main">
				<img src="/images/ideas-main.jpg" alt="Patio reformado" />
			</div>

			<article class="ideas-grid__card">
				<p>
					Diseñamos proyectos a medida, tanto para particulares como para inversores que buscan
					optimizar la rentabilidad de sus inmuebles.
				</p>
			</article>

			<div class="ideas-grid__image">
				<img src="/images/ideas-side.jpg" alt="Detalle decorativo" />
			</div>

			<article class="ideas-grid__card">
				<p>
					Te acompañamos desde la idea hasta la entrega de llaves, coordinando todos los gremios y
					simplificando el proceso de reforma.
				</p>
			</article>
		</div>
	</Container>
</PageSection>

<!-- Casa y apartamento -->
<PageSection background="default" padding="lg" useContainer={false}>
	<Container>
		<div class="centered-section centered-section--top">
			<h2>Casa y apartamento</h2>
			<p>
				Trabajamos tanto en viviendas principales como en segundas residencias y pisos para
				alquiler, adaptando el diseño al uso real del espacio.
			</p>
		</div>

		<div class="two-image-grid">
			<img src="/images/casa-1.jpg" alt="Salón comedor reformado" />
			<img src="/images/casa-2.jpg" alt="Butaca de diseño en salón" />
		</div>
	</Container>
</PageSection>

<!-- Tarjetas numeradas -->
<PageSection background="accent" padding="lg">
	<div class="numbered-grid">
		{#each numberedBlocks as block}
			<article class="numbered-card">
				<div class="numbered-card__number">{block.number}</div>
				<h3>{block.title}</h3>
				<p>{block.text}</p>
			</article>
		{/each}
	</div>
</PageSection>

<!-- Contacto + mapa -->
<PageSection id="contacto" background="dark" padding="lg" useContainer={false}>
	<Container>
		<div class="contact-grid">
			<div class="contact-grid__left">
				<h2>Contáctenos</h2>
				<p>
					Cuéntenos qué tipo de reforma o proyecto tiene en mente y le prepararemos una propuesta
					inicial sin compromiso.
				</p>
				<p class="contact-email">
					<a href="mailto:info@cenitproperties.com">info@cenitproperties.com</a>
				</p>

				<form class="contact-form" method="post">
					<label>
						Nombre
						<input name="name" type="text" required />
					</label>

					<label>
						Email
						<input name="email" type="email" required />
					</label>

					<label>
						Mensaje
						<textarea name="message" rows="4" required></textarea>
					</label>

					<button type="submit">Enviar</button>
				</form>
			</div>

			<div class="contact-grid__right">
				<iframe
					class="map-embed"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0373495156!2d-74.30933469305011!3d40.69753995813461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUyLjIiTiA3NMKwMTcnMDIuNyJX!5e0!3m2!1ses!2ses!4v0000000000000"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Ubicación de la oficina"
				/>
			</div>
		</div>
	</Container>
</PageSection>

<!-- Franja oscura tipo footer superior -->
<PageSection background="dark" padding="md">
	<div class="footer-top">
		<div>
			<h4>Titular</h4>
			<p>Acompañamos todo el proceso de reforma: diseño, obra y entrega final.</p>
		</div>
		<div>
			<h4>Titular</h4>
			<p>Asesoría para inversión y revalorización de inmuebles.</p>
		</div>
		<div>
			<h4>Titular</h4>
			<p>Colaboramos con agentes inmobiliarios y estudios de arquitectura.</p>
		</div>
	</div>
</PageSection>

<style>
	/* HERO */
	.hero-media img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-text h1 {
		font-size: clamp(2.4rem, 4vw, 3.4rem);
		margin-bottom: 1rem;
	}

	.hero-text p {
		max-width: 40rem;
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.hero-strip {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.hero-strip img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	/* FEATURE CARDS */
	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: #e9e9e9;
		text-align: center;
		padding: 2.5rem 2rem;
	}

	.feature-card__icon {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		margin-bottom: 0.5rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	/* MOSAICO 2x2 */
	.mosaic-2x2 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-auto-rows: minmax(200px, auto);
	}

	.mosaic-2x2__item {
		padding: 2.5rem;
	}

	.mosaic-2x2__item--image {
		padding: 0;
	}

	.mosaic-2x2__item--image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.mosaic-2x2__item--dark {
		background: #262626;
		color: #f5f5f5;
	}

	/* CENTERED SECTIONS */
	.centered-section {
		text-align: center;
		max-width: 48rem;
		margin-inline: auto;
	}

	.centered-section--top {
		margin-bottom: 3rem;
	}

	.centered-section h2 {
		margin-bottom: 1rem;
		font-size: clamp(2rem, 3vw, 2.6rem);
	}

	.centered-section p {
		line-height: 1.6;
	}

	/* IDEAS GRID */
	.ideas-grid {
		display: grid;
		grid-template-columns: 2fr 1.5fr;
		grid-auto-rows: minmax(180px, auto);
		gap: 1.5rem;
		align-items: stretch;
	}

	.ideas-grid__main img,
	.ideas-grid__image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.ideas-grid__card {
		background: #e9e9e9;
		padding: 1.5rem 1.75rem;
		display: flex;
		align-items: center;
		line-height: 1.6;
	}

	/* TWO IMAGES */
	.two-image-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
	}

	.two-image-grid img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* NUMBERED CARDS */
	.numbered-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
	}

	.numbered-card {
		background: #f2f2f2;
		padding: 2.5rem 2rem;
	}

	.numbered-card__number {
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}

	.numbered-card h3 {
		margin-bottom: 0.5rem;
	}

	/* CONTACTO */
	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		gap: 2.5rem;
	}

	.contact-grid__left h2 {
		margin-bottom: 0.75rem;
	}

	.contact-email {
		margin-bottom: 1.5rem;
	}

	.contact-email a {
		color: #fff;
		text-decoration: underline;
	}

	.contact-form {
		display: grid;
		gap: 1rem;
	}

	.contact-form label {
		display: grid;
		gap: 0.3rem;
		font-size: 0.9rem;
	}

	.contact-form input,
	.contact-form textarea {
		background: #111;
		border: 1px solid #444;
		padding: 0.6rem 0.75rem;
		color: #fff;
		font: inherit;
	}

	.contact-form button {
		margin-top: 0.5rem;
		padding: 0.7rem 1.4rem;
		border: 1px solid #fff;
		background: transparent;
		color: #fff;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		cursor: pointer;
	}

	.map-embed {
		width: 100%;
		min-height: 320px;
		border: 0;
	}

	/* FOOTER TOP */
	.footer-top {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 2rem;
	}

	.footer-top h4 {
		margin-bottom: 0.4rem;
	}

	.footer-top p {
		font-size: 0.9rem;
		line-height: 1.5;
	}

	/* RESPONSIVE */
	@media (max-width: 900px) {
		.feature-grid,
		.numbered-grid,
		.ideas-grid,
		.two-image-grid,
		.contact-grid,
		.footer-top {
			grid-template-columns: 1fr;
		}

		.mosaic-2x2 {
			grid-template-columns: 1fr;
		}
	}
</style>
