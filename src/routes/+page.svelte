<!-- src/routes/+page.svelte -->
<script lang="ts">
	// Ajusta estas rutas a cómo tengas organizado tu /lib/components
	import HeroSplit from '$lib/components/hero/HeroSplit.svelte';
	import FeatureCardGrid from '$lib/components/features/FeatureCardGrid.svelte';
	import MosaicSection from '$lib/components/mosaic/MosaicSection.svelte';
	import CenteredHeadingSection from '$lib/components/sections/CenteredHeadingSection.svelte';
	import GalleryWithTextSection from '$lib/components/mosaic/GalleryWithTextSection.svelte';
	import TwoImageSection from '$lib/components/sections/TwoImageSection.svelte';
	import NumberedFeatureGrid from '$lib/components/features/NumberedFeatureGrid.svelte';
	import ContactSection from '$lib/components/contact/ContactSection.svelte';

	// Tipos de datos para las secciones que reciben arrays
	type FeatureItem = {
		icon?: string;
		title: string;
		text: string;
	};

	type NumberedItem = {
		number: string;
		title: string;
		text: string;
	};

	// Datos del hero principal
	const hero = {
		title: 'Casa de estilo tailandés Wabi Sabi',
		description:
			'La casa está rodeada por un jardín y hay muchos vecinos diferentes en la zona. La casa promedio está creada para una sola familia.',
		// Rutas de imágenes de ejemplo; pon aquí las de tu carpeta static/
		mainImage: '/images/hero/main.jpg',
		collageImages: [
			'/images/hero/collage-1.jpg',
			'/images/hero/collage-2.jpg',
			'/images/hero/collage-3.jpg'
		]
	};

	// Tarjetas PROYECTOS / PREMIOS / NUESTRO EQUIPO
	const featureItems: FeatureItem[] = [
		{
			icon: 'rocket',
			title: 'Proyectos',
			text: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
		},
		{
			icon: 'medal',
			title: 'Premios',
			text: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
		},
		{
			icon: 'team',
			title: 'Nuestro equipo',
			text: 'Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
		}
	];

	// Tarjetas numeradas 01 / 02
	const numberedItems: NumberedItem[] = [
		{
			number: '01',
			title: 'Interiores impresionantes',
			text: 'Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.'
		},
		{
			number: '02',
			title: 'Fresco y creativo',
			text: 'Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.'
		}
	];

	// Bloque "Casa y apartamento"
	const casaApartamento = {
		title: 'Casa y apartamento',
		text: 'La casa promedio está creada para una sola familia. Si cree que comprar una casa en Pattaya es quizás más su estilo, hable con nosotros para conocer más sobre cada una de las opciones y formas de propiedad disponibles. El último tipo es el casa balsa construida cerca de la costa o de un río.',
		leftImage: '/images/sections/casa-apartamento-1.jpg',
		rightImage: '/images/sections/casa-apartamento-2.jpg'
	};
</script>

<main>
	<!-- 1. HERO principal: imagen grande + texto + collage de 3 imágenes -->
	<section id="inicio" class="section section--hero">
		<HeroSplit
			title={hero.title}
			description={hero.description}
			mainImage={hero.mainImage}
			collageImages={hero.collageImages}
		/>
	</section>

	<!-- 2. PROYECTOS / PREMIOS / NUESTRO EQUIPO -->
	<section id="valores" class="section section--features">
		<FeatureCardGrid items={featureItems} />
	</section>

	<!-- 3. Mosaico 2x2: Ideas de diseño / Planes de casa -->
	<section id="ideas-y-planes" class="section section--mosaic">
		<!-- Dentro de MosaicSection ya maquetas las 4 celdas según la maqueta -->
		<MosaicSection />
	</section>

	<!-- 4. Título centrado: "Nuevas ideas a la vida" -->
	<section id="claim" class="section section--centered-heading">
		<CenteredHeadingSection
			title="Nuevas ideas a la vida"
			text="Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet."
		/>
	</section>

	<!-- 5. Mosaico grande: "Más de 50 ideas de diseño de interiores" -->
	<section id="interiores" class="section section--gallery">
		<GalleryWithTextSection title="Más de 50 ideas de diseño de interiores" />
	</section>

	<!-- 6. "Casa y apartamento" + 2 imágenes -->
	<section id="tipologias" class="section section--house-apartment">
		<TwoImageSection
			title={casaApartamento.title}
			text={casaApartamento.text}
			leftImage={casaApartamento.leftImage}
			rightImage={casaApartamento.rightImage}
		/>
	</section>

	<!-- 7. Bloque numerado 01 / 02 -->
	<section id="ventajas" class="section section--numbered">
		<NumberedFeatureGrid items={numberedItems} />
	</section>

	<!-- 8. Contacto + mapa -->
	<section id="contacto" class="section section--contact">
		<ContactSection />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	.section {
		padding-inline: 1.5rem;
	}

	.section--hero {
		padding-top: 2rem;
	}

	@media (min-width: 1024px) {
		.section {
			padding-inline: 3rem;
		}
	}
</style>
